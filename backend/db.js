// db.js
// Single SQLite file, no external database to run or manage.
// Two tables: `blocks` (live content) and `block_history` (one prior
// version per save, so an edit can be undone without a server restore).

const Database = require("better-sqlite3");
const path = require("path");

const DB_PATH = process.env.DB_PATH || path.join(__dirname, "playbook.db");
const db = new Database(DB_PATH);

db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE IF NOT EXISTS blocks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    page TEXT NOT NULL,
    section TEXT NOT NULL,
    block_type TEXT NOT NULL,
    title TEXT,
    content TEXT NOT NULL DEFAULT '',
    position INTEGER NOT NULL,
    -- A stable, human-readable id (e.g. "cs-north-carolina") for blocks
    -- that other content links to directly, currently only case studies.
    -- tabs.js's cross-tab case-study-link buttons do
    -- document.getElementById(entryId) to jump to one; without this on the
    -- rendered element, every such link on the page breaks silently the
    -- moment its target comes from the CMS instead of static HTML.
    entry_id TEXT,
    -- 'draft' or 'approved'. Every block starts as draft, including
    -- everything migrate.js imports, since nothing has been reviewed in
    -- this system yet. The frontend shows a "Draft, needs review" tag next
    -- to a draft block's title and nothing next to an approved one.
    status TEXT NOT NULL DEFAULT 'draft',
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE INDEX IF NOT EXISTS idx_blocks_page_section
    ON blocks(page, section, position);

  CREATE TABLE IF NOT EXISTS block_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    block_id INTEGER NOT NULL,
    title TEXT,
    content TEXT,
    saved_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE INDEX IF NOT EXISTS idx_history_block
    ON block_history(block_id, saved_at);
`);

// Add columns to a database created before this field existed, rather than
// requiring anyone upgrading an existing playbook.db to wipe it.
const blockColumns = db.prepare("PRAGMA table_info(blocks)").all().map((c) => c.name);
if (!blockColumns.includes("entry_id")) {
  db.exec("ALTER TABLE blocks ADD COLUMN entry_id TEXT");
}
if (!blockColumns.includes("status")) {
  db.exec("ALTER TABLE blocks ADD COLUMN status TEXT NOT NULL DEFAULT 'draft'");
}

module.exports = db;
