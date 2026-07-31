// server.js
require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/auth");
const blocksRoutes = require("./routes/blocks");
const { seedIfEmpty } = require("./seed");

const app = express();
const PORT = process.env.PORT || 3000;

// On a host with no persistent disk, the database is empty on every boot,
// so this is what actually keeps content around: git, not the live
// database, is the source of truth. Edit content/<page>.html, commit,
// push; the next boot rebuilds that page from it. A page that already
// has rows (a persistent disk, or a database that just hasn't restarted)
// is left alone, live edits included.
const CONTENT_PAGES = [
  ["data-sharing", path.join(__dirname, "content", "data-sharing.html")],
];

CONTENT_PAGES.forEach(([page, filePath]) => {
  try {
    const result = seedIfEmpty(page, filePath);
    if (result.seeded) {
      console.log(`Seeded "${page}" from ${filePath}: ${result.count} blocks.`);
    } else {
      console.log(`"${page}" already has ${result.count} blocks; left as-is.`);
    }
  } catch (err) {
    console.error(`Could not seed "${page}" from ${filePath}:`, err.message);
  }
});

app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.SITE_ORIGIN || true,
    credentials: true,
  })
);

// Auth: login/logout/session check.
app.use("/api/auth", authRoutes);

// Blocks: GET is public (the site needs it to render); every write route
// requires auth via requireAuth attached directly on that route inside
// routes/blocks.js.
app.use("/api/blocks", blocksRoutes);

// Serve the static site itself (the .html/.css/.js files) so one process
// can run the whole thing. If you'd rather host the frontend separately
// (e.g. GitHub Pages) and just point it at this API, delete this line and
// set SITE_ORIGIN above to that frontend's URL for CORS.
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Playbook CMS backend running on port ${PORT}`);
});
