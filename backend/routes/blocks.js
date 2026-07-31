// routes/blocks.js
// GET is public and unauthenticated (the site's visitors need this content
// to render the page), but what it returns depends on whether the caller
// has a valid session: a logged-out request only ever sees approved,
// non-comment blocks ("the site normally"); a logged-in editor sees
// everything, drafts and comments included, so there's something to work
// on. Every write route (POST/PUT/DELETE) has requireAuth attached
// directly, so the auth rule for each route lives right next to the route
// itself instead of being decided elsewhere.

const express = require("express");
const db = require("../db");
const { requireAuth, isAuthed } = require("../auth");

const router = express.Router();

// GET /api/blocks?page=data-sharing            -> all blocks for a page
// GET /api/blocks?page=data-sharing&section=barriers -> one section
router.get("/", (req, res) => {
  const { page, section } = req.query;
  if (!page) return res.status(400).json({ error: "page is required." });

  let rows;
  if (section) {
    rows = db
      .prepare(
        "SELECT * FROM blocks WHERE page = ? AND section = ? ORDER BY position ASC"
      )
      .all(page, section);
  } else {
    rows = db
      .prepare("SELECT * FROM blocks WHERE page = ? ORDER BY section, position ASC")
      .all(page);
  }

  if (!isAuthed(req)) {
    // Comments are an editing tool, not content: they never appear off this
    // list, approved or not.
    rows = rows.filter((b) => b.status === "approved" && b.block_type !== "comment");
  }

  res.json(rows);
});

// GET /api/blocks/:id/history  -> prior saved versions of one block
router.get("/:id/history", requireAuth, (req, res) => {
  const rows = db
    .prepare(
      "SELECT id, title, content, saved_at FROM block_history WHERE block_id = ? ORDER BY saved_at DESC"
    )
    .all(req.params.id);
  res.json(rows);
});

// POST /api/blocks  -> create a new block, appended to the end of its section
router.post("/", requireAuth, (req, res) => {
  const { page, section, block_type, title, content, status } = req.body || {};
  if (!page || !section || !block_type) {
    return res
      .status(400)
      .json({ error: "page, section, and block_type are required." });
  }
  const { maxPos } = db
    .prepare(
      "SELECT COALESCE(MAX(position), -1) AS maxPos FROM blocks WHERE page = ? AND section = ?"
    )
    .get(page, section);

  const info = db
    .prepare(
      `INSERT INTO blocks (page, section, block_type, title, content, position, status, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'))`
    )
    .run(
      page,
      section,
      block_type,
      title || "",
      content || "",
      maxPos + 1,
      status === "approved" ? "approved" : "draft"
    );

  const created = db.prepare("SELECT * FROM blocks WHERE id = ?").get(info.lastInsertRowid);
  res.status(201).json(created);
});

// PUT /api/blocks/reorder  -> body: { ids: [3, 1, 2] } in the new order,
// for a single page+section at a time. Registered before /:id below:
// Express matches routes in order, and "/reorder" would otherwise be
// captured as an :id value by the route beneath it.
router.put("/reorder", requireAuth, (req, res) => {
  const { ids } = req.body || {};
  if (!Array.isArray(ids) || ids.length === 0) {
    return res.status(400).json({ error: "ids must be a non-empty array." });
  }
  const update = db.prepare("UPDATE blocks SET position = ? WHERE id = ?");
  const runAll = db.transaction((idList) => {
    idList.forEach((id, index) => update.run(index, id));
  });
  runAll(ids);
  res.json({ ok: true });
});

// PUT /api/blocks/:id  -> edit a block's title/content/status. Any subset
// of the three can be sent (e.g. just { status: "approved" } for the
// draft/approved toggle); anything omitted keeps its current value. Only
// title/content go to history, matching what history has always tracked;
// status changes are not versioned.
router.put("/:id", requireAuth, (req, res) => {
  const { title, content, status } = req.body || {};
  if (status !== undefined && status !== "draft" && status !== "approved") {
    return res.status(400).json({ error: "status must be 'draft' or 'approved'." });
  }
  const existing = db.prepare("SELECT * FROM blocks WHERE id = ?").get(req.params.id);
  if (!existing) return res.status(404).json({ error: "Block not found." });

  db.prepare(
    "INSERT INTO block_history (block_id, title, content, saved_at) VALUES (?, ?, ?, datetime('now'))"
  ).run(existing.id, existing.title, existing.content);

  db.prepare(
    "UPDATE blocks SET title = ?, content = ?, status = ?, updated_at = datetime('now') WHERE id = ?"
  ).run(title ?? existing.title, content ?? existing.content, status ?? existing.status, existing.id);

  const updated = db.prepare("SELECT * FROM blocks WHERE id = ?").get(existing.id);
  res.json(updated);
});

// POST /api/blocks/:id/restore  -> restore a specific history entry
router.post("/:id/restore", requireAuth, (req, res) => {
  const { history_id } = req.body || {};
  const entry = db
    .prepare("SELECT * FROM block_history WHERE id = ? AND block_id = ?")
    .get(history_id, req.params.id);
  if (!entry) return res.status(404).json({ error: "History entry not found." });

  const existing = db.prepare("SELECT * FROM blocks WHERE id = ?").get(req.params.id);
  db.prepare(
    "INSERT INTO block_history (block_id, title, content, saved_at) VALUES (?, ?, ?, datetime('now'))"
  ).run(existing.id, existing.title, existing.content);

  db.prepare(
    "UPDATE blocks SET title = ?, content = ?, updated_at = datetime('now') WHERE id = ?"
  ).run(entry.title, entry.content, existing.id);

  res.json(db.prepare("SELECT * FROM blocks WHERE id = ?").get(existing.id));
});

// DELETE /api/blocks/:id
router.delete("/:id", requireAuth, (req, res) => {
  const existing = db.prepare("SELECT * FROM blocks WHERE id = ?").get(req.params.id);
  if (!existing) return res.status(404).json({ error: "Block not found." });

  // Keep a final snapshot in history before removing, so a deleted block
  // can still be recovered by re-creating it from its last known content.
  db.prepare(
    "INSERT INTO block_history (block_id, title, content, saved_at) VALUES (?, ?, ?, datetime('now'))"
  ).run(existing.id, existing.title, existing.content);

  db.prepare("DELETE FROM blocks WHERE id = ?").run(existing.id);
  res.json({ ok: true });
});

module.exports = router;
