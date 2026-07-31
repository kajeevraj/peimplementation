// migrate.js
// One-time import: reads an existing topic page's HTML and turns its
// content into rows in the blocks table, so nothing has to be re-typed
// by hand. Safe to re-run: it clears out any existing blocks for the
// given page first, rather than appending duplicates.
//
// Usage:
//   node migrate.js --page data-sharing --file ../data-sharing.html
//
// This works against whatever is actually in that file right now: it
// splits on the "<!-- ==== NAME ==== -->" section comments already used
// throughout the site, then splits each section further on its <h3>/<h4>/
// <h5> headings. Each heading and the HTML that follows it, up to the
// next heading, becomes one block. Content with no heading of its own
// (an intro paragraph before the first heading in a section) becomes an
// "intro" block.

require("dotenv").config();
const fs = require("fs");
const path = require("path");
const db = require("./db");

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i !== -1 ? process.argv[i + 1] : fallback;
}

const page = arg("page");
const filePath = arg("file");

if (!page || !filePath) {
  console.error("Usage: node migrate.js --page <page-slug> --file <path-to-html>");
  process.exit(1);
}

const html = fs.readFileSync(path.resolve(filePath), "utf8");

// Pull out <main>...</main> so nav/header/footer never becomes a block.
const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
if (!mainMatch) {
  console.error("No <main> element found in the file. Nothing to import.");
  process.exit(1);
}
const mainHTML = mainMatch[1];

// Split into sections on the site's existing
// "<!-- ============ NAME ============ -->" comment convention. Falls
// back to a single "content" section if no comments are found.
const sectionRegex = /<!--\s*={2,}\s*([A-Z0-9 ,.'&/-]+?)\s*={2,}\s*-->/g;
const sections = [];
let lastIndex = 0;
let lastName = "content";
let match;
while ((match = sectionRegex.exec(mainHTML)) !== null) {
  if (match.index > lastIndex) {
    sections.push({ name: lastName, html: mainHTML.slice(lastIndex, match.index) });
  }
  lastName = slugify(match[1]);
  lastIndex = sectionRegex.lastIndex;
}
sections.push({ name: lastName, html: mainHTML.slice(lastIndex) });

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Within a section, strip the outer <div role="tabpanel" ...> wrapper
// (its content is what we want, not the wrapper tag itself), then split
// on h4/h5 subsection headings. The section's own h3 title is skipped
// entirely: it's the tab's display name, not editable page content.
// Everything before the first h4/h5 becomes an "intro" block.
function stripTabpanelWrapper(sectionHTML) {
  const openMatch = sectionHTML.match(/<div[^>]*role=["']tabpanel["'][^>]*>/i);
  if (!openMatch) return sectionHTML;
  const start = openMatch.index + openMatch[0].length;
  const lastCloseDiv = sectionHTML.lastIndexOf("</div>");
  if (lastCloseDiv === -1 || lastCloseDiv < start) return sectionHTML.slice(start);
  return sectionHTML.slice(start, lastCloseDiv);
}

function stripH3(html) {
  return html.replace(/<h3[^>]*>[\s\S]*?<\/h3>/i, "");
}

// The interactive agreements diagram (legend, both desktop/mobile SVGs, and
// the detail panel) is never block content, in either direction: it must
// not be scooped into a block on the way in, and a block's content must
// never be relied on to reproduce it on the way out. It's a separate
// system (diagram.js/diagram.css), its own data, structurally APPROVED,
// not prose anyone edits in a textarea. Strip the whole chunk, starting at
// the legend (which immediately precedes the SVGs in the current markup,
// and would otherwise be left behind as an orphaned, duplicate copy once
// the page also renders the legend as static HTML beside the diagram)
// through the closing tag of the detail panel, before a section is split
// into blocks at all.
function stripDiagramMarkup(html) {
  return html.replace(
    /<div class="diagram-legend">[\s\S]*?<div class="diagram-panel"[^>]*>\s*<\/div>/,
    ""
  );
}

// The page splits "How it works" into two data-block-section slots with
// the diagram (legend, both SVGs, panel) sitting as static HTML between
// them, not nested inside either. So this section's blocks need to land
// in two different DB sections, not stripped and merged into one: split
// the raw HTML at the diagram's own position, before either half goes
// through stripTabpanelWrapper/stripH3/splitIntoBlocks on its own. Returns
// null if the section has no diagram, so the caller falls back to the
// single-section path unchanged.
function splitAroundDiagram(html) {
  const diagramRegex = /<div class="diagram-legend">[\s\S]*?<div class="diagram-panel"[^>]*>\s*<\/div>/;
  const match = html.match(diagramRegex);
  if (!match) return null;
  return {
    before: html.slice(0, match.index),
    after: html.slice(match.index + match[0].length),
  };
}

// Strips a heading's status-tag badge (e.g. "Draft, needs review") out of
// its title text entirely, rather than leaving the badge's own words
// stuck onto the end of the title once other tags are stripped.
function cleanTitle(rawHTML) {
  return rawHTML
    .replace(/<span[^>]*class=["'][^"']*status-tag[^"']*["'][^>]*>[\s\S]*?<\/span>/gi, "")
    .replace(/<[^>]+>/g, "")
    .trim();
}

function splitIntoBlocks(sectionHTML) {
  const inner = stripH3(stripTabpanelWrapper(sectionHTML));
  const headingRegex = /<h[45][^>]*>([\s\S]*?)<\/h[45]>/gi;
  const blocks = [];
  let m;
  const headingPositions = [];
  while ((m = headingRegex.exec(inner)) !== null) {
    headingPositions.push({ start: m.index, end: headingRegex.lastIndex, raw: m[1] });
  }

  if (headingPositions.length === 0) {
    const text = inner.trim();
    if (text) blocks.push({ title: null, content: text, block_type: "text" });
    return blocks;
  }

  if (headingPositions[0].start > 0) {
    const intro = inner.slice(0, headingPositions[0].start).trim();
    if (intro) blocks.push({ title: null, content: intro, block_type: "text" });
  }

  for (let i = 0; i < headingPositions.length; i++) {
    const h = headingPositions[i];
    const contentEnd =
      i + 1 < headingPositions.length ? headingPositions[i + 1].start : inner.length;
    const title = cleanTitle(h.raw);
    const content = inner.slice(h.end, contentEnd).trim();
    blocks.push({ title, content, block_type: "text" });
  }
  return blocks;
}

// Case studies have their own repeating structure, one <div
// class="case-study-entry" id="..."> per entry, rather than headings.
// Handled separately so each entry becomes exactly one block, keyed by
// its id (useful later, since the id is what tabs.js's case-study-link
// buttons already point to).
function splitCaseStudies(sectionHTML) {
  // Each entry has no nested <div> inside it (just h4/p/ul), so a plain
  // non-greedy match to the nearest closing </div> is correct and much
  // simpler than trying to look ahead for what follows it.
  const entryRegex = /<div class="case-study-entry" id="([^"]+)"[^>]*>([\s\S]*?)<\/div>/g;
  const blocks = [];
  let m;
  while ((m = entryRegex.exec(sectionHTML)) !== null) {
    const id = m[1];
    const inner = m[2].trim();
    const titleMatch = inner.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i);
    const title = titleMatch ? cleanTitle(titleMatch[1]) : id;
    // Strip the <h4> itself out of content: blocks.js renders block.title as
    // its own heading, so leaving the original <h4> (badge span and all) in
    // content would print the name and status tag a second time.
    const content = titleMatch
      ? inner.slice(titleMatch.index + titleMatch[0].length).trim()
      : inner;
    blocks.push({ title, content, block_type: "case-study", entryId: id });
  }
  return blocks;
}

const insertBlock = db.prepare(
  `INSERT INTO blocks (page, section, block_type, title, content, position, entry_id, status, updated_at)
   VALUES (?, ?, ?, ?, ?, ?, ?, 'draft', datetime('now'))`
);
const deleteExisting = db.prepare("DELETE FROM blocks WHERE page = ?");

function insertBlocks(sectionName, blocks) {
  let n = 0;
  blocks.forEach((block, position) => {
    // Every migrated block starts as draft, explicitly, regardless of the
    // column's own default: nothing imported here has been reviewed in
    // this system, whatever status tag it may have carried on the old
    // static page.
    insertBlock.run(
      page,
      sectionName,
      block.block_type,
      block.title,
      block.content,
      position,
      block.entryId || null
    );
    n++;
  });
  return n;
}

const runImport = db.transaction(() => {
  deleteExisting.run(page);
  let totalBlocks = 0;
  sections.forEach((section) => {
    const split = section.name === "how-it-works" ? splitAroundDiagram(section.html) : null;
    if (split) {
      // Two DB sections, one per data-block-section slot either side of the
      // diagram. "how-it-works" keeps its name for the first slot; the
      // second slot after the diagram gets its own name to match the
      // second data-block-section attribute in the HTML.
      totalBlocks += insertBlocks("how-it-works", splitIntoBlocks(split.before));
      totalBlocks += insertBlocks("how-it-works-after-diagram", splitIntoBlocks(split.after));
      return;
    }
    const sectionHTML = stripDiagramMarkup(section.html);
    const blocks =
      section.name === "case-studies"
        ? splitCaseStudies(stripTabpanelWrapper(stripH3(sectionHTML)))
        : splitIntoBlocks(sectionHTML);
    totalBlocks += insertBlocks(section.name, blocks);
  });
  return totalBlocks;
});

const count = runImport();
console.log(`Imported ${count} blocks for page "${page}" from ${filePath}.`);
console.log("Sections found:", sections.map((s) => s.name).join(", "));
