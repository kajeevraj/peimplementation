// server.js
require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/auth");
const blocksRoutes = require("./routes/blocks");

const app = express();
const PORT = process.env.PORT || 3000;

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
