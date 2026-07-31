// migrate.js
// Manual one-time (or re-run-on-demand) import: reads a page's content
// file and turns it into rows in the blocks table, always overwriting
// whatever is already there for that page. See seed.js for the actual
// parsing rules (headings, data-status="approved", editor-comment divs)
// and for seedIfEmpty, the auto-seed-on-boot version server.js uses.
//
// Usage:
//   node migrate.js --page data-sharing --file content/data-sharing.html

require("dotenv").config();
const { seedPageFromFile } = require("./seed");

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

const { count, sections } = seedPageFromFile(page, filePath);
console.log(`Imported ${count} blocks for page "${page}" from ${filePath}.`);
console.log("Sections found:", sections.join(", "));
