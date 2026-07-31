// auth.js
// One admin account, no username. The password hash and JWT secret both
// come from environment variables, never from a file checked into the
// repo. See README-backend.md for how to generate the hash.

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;
const SESSION_HOURS = 12;
const COOKIE_NAME = "playbook_session";

if (!JWT_SECRET || !ADMIN_PASSWORD_HASH) {
  console.error(
    "Missing JWT_SECRET or ADMIN_PASSWORD_HASH in the environment. " +
    "See README-backend.md to generate them. Refusing to start with no auth configured."
  );
  process.exit(1);
}

function checkPassword(password) {
  return bcrypt.compareSync(password, ADMIN_PASSWORD_HASH);
}

function issueSessionCookie(res) {
  const token = jwt.sign({ role: "admin" }, JWT_SECRET, {
    expiresIn: `${SESSION_HOURS}h`,
  });
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_HOURS * 60 * 60 * 1000,
  });
}

function clearSessionCookie(res) {
  res.clearCookie(COOKIE_NAME);
}

// Middleware: blocks the request unless a valid session cookie is present.
// Read-only routes (GET) never use this; only write routes do.
function requireAuth(req, res, next) {
  const token = req.cookies && req.cookies[COOKIE_NAME];
  if (!token) return res.status(401).json({ error: "Not logged in." });
  try {
    jwt.verify(token, JWT_SECRET);
    next();
  } catch (err) {
    return res.status(401).json({ error: "Session expired. Log in again." });
  }
}

function isAuthed(req) {
  const token = req.cookies && req.cookies[COOKIE_NAME];
  if (!token) return false;
  try {
    jwt.verify(token, JWT_SECRET);
    return true;
  } catch (err) {
    return false;
  }
}

module.exports = {
  checkPassword,
  issueSessionCookie,
  clearSessionCookie,
  requireAuth,
  isAuthed,
  COOKIE_NAME,
};
