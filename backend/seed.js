// seed.js
// The parsing/import engine shared by migrate.js (a manual one-time CLI
// run) and server.js (an automatic run at boot, only when a page has no
// blocks yet). On a host without a persistent disk, every restart means
// an empty database, so this auto-seed is what makes content actually
// durable there: git, not the live database, is the real source of
// truth. Edit the file in content/<page>.html, commit, push; the next
// boot rebuilds that page's blocks from it.
//
// Splits on the site's "<!-- ==== NAME ==== -->" section comments, then
// splits each section further on its <h3>/<h4>/<h5> headings. Two things
// are hand-editable directly in the source file, beyond the prose itself:
//
//   - A heading can carry data-status="approved" to publish immediately,
//     e.g. <h4 data-status="approved">Scope</h4>. Omit it (or use any
//     other value) and the block imports as draft, same as before.
//   - <div class="editor-comment">...</div> anywhere in a section imports
//     as an edit-mode-only comment block, appended at the end of that
//     section (matching where "+ Add comment" already puts new ones).
//     Position within the source file doesn't matter; only which section
//     it's inside of does.

const fs = require("fs");
const path = require("path");
const db = require("./db");

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function splitIntoSections(mainHTML) {
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
  return sections;
}

// Within a section, strip the outer <div role="tabpanel" ...> wrapper
// (its content is what we want, not the wrapper tag itself). The
// section's own h3 title is skipped entirely: it's the tab's display
// name, not editable page content.
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

// The interactive agreements diagram (legend, both desktop/mobile SVGs,
// and the detail panel) is never block content, in either direction: it
// must not be scooped into a block on the way in, and a block's content
// must never be relied on to reproduce it on the way out. It's a
// separate system (diagram.js/diagram.css), its own data, structurally
// APPROVED, not prose anyone edits in a textarea.
function stripDiagramMarkup(html) {
  return html.replace(
    /<div class="diagram-legend">[\s\S]*?<div class="diagram-panel"[^>]*>\s*<\/div>/,
    ""
  );
}

// "How it works" splits into two data-block-section slots with the
// diagram sitting as static HTML between them, not nested inside either.
// Split the raw HTML at the diagram's own position before either half
// goes through the normal per-section parsing. Returns null if the
// section has no diagram, so the caller falls back to the single-section
// path unchanged.
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

// Pulls every <div class="editor-comment">...</div> out of a section,
// wherever it sits, and removes it from the HTML the heading splitter
// sees. Position inside the file is not preserved; comments always land
// at the end of their section, same as "+ Add comment" already behaves.
function extractComments(sectionHTML) {
  const commentRegex = /<div class="editor-comment">([\s\S]*?)<\/div>\s*/g;
  const comments = [];
  const withoutComments = sectionHTML.replace(commentRegex, (full, inner) => {
    const text = inner.trim();
    if (text) comments.push({ title: null, content: text, block_type: "comment" });
    return "";
  });
  return { html: withoutComments, comments };
}

function splitIntoBlocks(sectionHTML) {
  const inner = stripH3(stripTabpanelWrapper(sectionHTML));
  const headingRegex = /<h[45]([^>]*)>([\s\S]*?)<\/h[45]>/gi;
  const blocks = [];
  let m;
  const headingPositions = [];
  while ((m = headingRegex.exec(inner)) !== null) {
    headingPositions.push({
      start: m.index,
      end: headingRegex.lastIndex,
      attrs: m[1],
      raw: m[2],
    });
  }

  if (headingPositions.length === 0) {
    const text = inner.trim();
    if (text) blocks.push({ title: null, content: text, block_type: "text", status: "draft" });
    return blocks;
  }

  if (headingPositions[0].start > 0) {
    const intro = inner.slice(0, headingPositions[0].start).trim();
    if (intro) blocks.push({ title: null, content: intro, block_type: "text", status: "draft" });
  }

  for (let i = 0; i < headingPositions.length; i++) {
    const h = headingPositions[i];
    const contentEnd =
      i + 1 < headingPositions.length ? headingPositions[i + 1].start : inner.length;
    const title = cleanTitle(h.raw);
    const content = inner.slice(h.end, contentEnd).trim();
    const status = /data-status=["']approved["']/i.test(h.attrs) ? "approved" : "draft";
    blocks.push({ title, content, block_type: "text", status });
  }
  return blocks;
}

// Case studies have their own repeating structure, one <div
// class="case-study-entry" id="..."> per entry, rather than headings.
function splitCaseStudies(sectionHTML) {
  const entryRegex = /<div class="case-study-entry"([^>]*)id="([^"]+)"[^>]*>([\s\S]*?)<\/div>/g;
  const blocks = [];
  let m;
  while ((m = entryRegex.exec(sectionHTML)) !== null) {
    const attrs = m[1];
    const id = m[2];
    const inner = m[3].trim();
    const titleMatch = inner.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i);
    const title = titleMatch ? cleanTitle(titleMatch[1]) : id;
    // Strip the <h4> itself out of content: blocks.js renders block.title
    // as its own heading, so leaving the original <h4> in content would
    // print the name (and any badge) a second time.
    const content = titleMatch
      ? inner.slice(titleMatch.index + titleMatch[0].length).trim()
      : inner;
    const status = /data-status=["']approved["']/i.test(attrs) ? "approved" : "draft";
    blocks.push({ title, content, block_type: "case-study", entryId: id, status });
  }
  return blocks;
}

const insertBlock = db.prepare(
  `INSERT INTO blocks (page, section, block_type, title, content, position, entry_id, status, updated_at)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))`
);
const deleteExisting = db.prepare("DELETE FROM blocks WHERE page = ?");
const countForPage = db.prepare("SELECT COUNT(*) AS n FROM blocks WHERE page = ?");

function insertBlocks(page, sectionName, blocks) {
  let n = 0;
  blocks.forEach((block, position) => {
    insertBlock.run(
      page,
      sectionName,
      block.block_type,
      block.title,
      block.content,
      position,
      block.entryId || null,
      block.status || "draft"
    );
    n++;
  });
  return n;
}

// Parses filePath and (re)writes page's blocks from it, clearing any
// existing ones for that page first. Used both by migrate.js (explicit,
// always overwrites) and seedIfEmpty below (only called when there's
// nothing there yet).
function seedPageFromFile(page, filePath) {
  const html = fs.readFileSync(path.resolve(filePath), "utf8");
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (!mainMatch) {
    throw new Error("No <main> element found in the file. Nothing to import.");
  }
  const sections = splitIntoSections(mainMatch[1]);

  const runImport = db.transaction(() => {
    deleteExisting.run(page);
    let totalBlocks = 0;
    sections.forEach((section) => {
      const split = section.name === "how-it-works" ? splitAroundDiagram(section.html) : null;
      if (split) {
        const before = extractComments(split.before);
        const after = extractComments(split.after);
        totalBlocks += insertBlocks(page, "how-it-works", [
          ...splitIntoBlocks(before.html),
          ...before.comments,
        ]);
        totalBlocks += insertBlocks(page, "how-it-works-after-diagram", [
          ...splitIntoBlocks(after.html),
          ...after.comments,
        ]);
        return;
      }
      const sectionHTML = stripDiagramMarkup(section.html);
      const { html: withoutComments, comments } = extractComments(sectionHTML);
      const blocks =
        section.name === "case-studies"
          ? splitCaseStudies(stripTabpanelWrapper(stripH3(withoutComments)))
          : splitIntoBlocks(withoutComments);
      totalBlocks += insertBlocks(page, section.name, [...blocks, ...comments]);
    });
    return totalBlocks;
  });

  return { count: runImport(), sections: sections.map((s) => s.name) };
}

// Called at boot for each page with a known content file. Leaves an
// already-populated page alone entirely, so a host with a persistent
// disk (or a database that just hasn't restarted) keeps whatever's
// actually there, live edits included. Only seeds a page with zero rows,
// which on a host with no persistent disk is every single boot.
function seedIfEmpty(page, filePath) {
  const { n } = countForPage.get(page);
  if (n > 0) return { seeded: false, count: n };
  const result = seedPageFromFile(page, filePath);
  return { seeded: true, ...result };
}

module.exports = { seedPageFromFile, seedIfEmpty };
