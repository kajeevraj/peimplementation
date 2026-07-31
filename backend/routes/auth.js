// routes/auth.js
const express = require("express");
const { checkPassword, issueSessionCookie, clearSessionCookie, isAuthed } = require("../auth");

const router = express.Router();

router.post("/login", (req, res) => {
  const { password } = req.body || {};
  if (!password || !checkPassword(password)) {
    return res.status(401).json({ error: "Incorrect password." });
  }
  issueSessionCookie(res);
  res.json({ ok: true });
});

router.post("/logout", (req, res) => {
  clearSessionCookie(res);
  res.json({ ok: true });
});

router.get("/session", (req, res) => {
  res.json({ authed: isAuthed(req) });
});

module.exports = router;
