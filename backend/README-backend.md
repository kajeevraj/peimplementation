# Playbook CMS backend

Replaces the old DRAFT/APPROVED file-tagging workflow with direct editing
on the live site, behind a real password gate. This is a genuine server:
it needs somewhere to actually run, not just static file hosting.

## What this is, plainly

- A small Express API (`server.js`) backed by one SQLite file
  (`playbook.db`, created automatically). No external database to set up.
- One admin account. No usernames, just a password, hashed with bcrypt
  and never stored in plain text.
- Content lives in a `blocks` table: every party panel, agreement panel,
  benefit, barrier, and case study is a row with a page, a section, a
  title, HTML content, and a status (`draft` or `approved`).
- **A logged-out visitor only ever sees approved blocks.** Draft blocks
  and comments (see below) only render in edit mode, after logging in.
  This is enforced in the API itself (`routes/blocks.js` filters by
  session), not just hidden client-side. Set `SHOW_DRAFTS_PUBLICLY=true`
  in the environment to temporarily show drafts to everyone too (e.g.
  while testing, before there's any real draft/approved distinction to
  protect) — comments stay editor-only either way. Unset it (or set it
  to `false`) once that distinction matters again.
- **Comments** are a separate block type for editorial asides ("this
  figure still needs a source," "these two sections overlap") that are
  never public, regardless of status. Add one anywhere with "+ Add
  comment." No approve/draft toggle on them, since approval doesn't
  apply to a note about the content, only to the content itself.
- Every save keeps the block's previous version in `block_history`
  first, so a bad edit is recoverable. There's no approval gate on
  saving itself, just an undo button.

## Setup

```bash
cd backend
npm install
cp .env.example .env
node hash-password.js "your chosen password"
# paste the output ADMIN_PASSWORD_HASH line into .env
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
# paste that as JWT_SECRET in .env
npm start
```

The server listens on port 3000 by default (`PORT` in `.env` to change
it). Visit `http://localhost:3000`.

## Content lives in git, not just the database

This is the part worth understanding before you start editing: **every
page with a file in `content/` (e.g. `content/data-sharing.html`) reseeds
its blocks from that file automatically, every time the server boots, but
only if the database has zero rows for that page.** See `seed.js`.

Why this matters depends entirely on where you're hosting:

- **No persistent disk** (e.g. Render's free tier): the database is
  empty every single time the process restarts, whether that's an idle
  spin-down, a crash, or a redeploy. So on a host like this, the
  `content/*.html` file *is* your real, durable storage. Anything you
  only click through in the live editor will vanish the next time it
  restarts; anything you put in the file and push will always come back.
- **A persistent disk attached**: the database survives restarts, so
  `seedIfEmpty` only ever runs once, the first time. After that, live
  edits made through the browser stick on their own, and the file is
  just how the page originally got populated.

Either way, editing the file and pushing is always safe: a page that
already has rows is left completely alone, so this never overwrites live
edits sitting in a database that happens to have persisted.

### Editing content in the file directly

Open `content/<page>.html` in an editor. It's the same HTML shape as the
live page's tab panels: `<!-- ==== SECTION ==== -->` comments divide
sections, `<h4>`/`<h5>` headings divide blocks within a section, and
`<div class="case-study-entry" id="...">` blocks are case studies.

Two things beyond the prose itself:

- **Publish something immediately** by adding `data-status="approved"`
  to its heading (or, for a case study, to its `case-study-entry` div):
  ```html
  <h4 data-status="approved">Scope</h4>
  ```
  Leave it off (or use any other value) and the block imports as draft,
  same as before, visible only in edit mode.
- **Add an editor-only comment** anywhere in a section with:
  ```html
  <div class="editor-comment">This figure still needs a source.</div>
  ```
  It always lands at the end of that section's blocks once imported
  (matching where "+ Add comment" already puts new ones); where you put
  it in the file doesn't have to be exact, just which section it's in.

Commit and push. On a redeploy with no persistent disk, the next boot
picks it up automatically. To force a reseed on a host where the
database *has* persisted (so `seedIfEmpty` would otherwise skip it), run
the migration by hand instead (below) — it always overwrites.

### Running the import by hand

```bash
node migrate.js --page data-sharing --file content/data-sharing.html
```

Same parser as the automatic boot-time seed, but always overwrites that
page's blocks rather than only when it's empty. Useful for forcing a
reseed, or importing against a different file entirely (e.g. a one-time
migration from the very first version of a page). After running it,
check the result before trusting it:

```bash
curl http://localhost:3000/api/blocks?page=data-sharing
```

(Add `-b cookies.txt` after logging in if you need to see draft blocks
and comments too; logged out, this only returns approved content.)

## Deployment

This needs a host that runs a persistent Node process: Render, Railway,
Fly.io, a small VPS, or similar. **GitHub Pages and Vercel's default
static/serverless model will not work**: they can't run a continuously
listening process, and even if they could, the filesystem doesn't
persist between requests. Whatever you pick:

- Root directory: `backend`. Build command: `npm install`. Start
  command: `npm start`.
- Set `ADMIN_PASSWORD_HASH` and `JWT_SECRET` as environment variables on
  the host, not in a committed `.env` file.
- Set `NODE_ENV=production` so session cookies require HTTPS.
- If the frontend stays elsewhere instead of being served by this same
  process, set `SITE_ORIGIN` to that site's URL and remove the
  `express.static` line in `server.js`.
- If you do add a persistent disk, set `DB_PATH` to somewhere on it
  (e.g. `/var/data/playbook.db`) so the database survives redeploys.
  Without one, that's fine too, per the section above — content just
  comes from `content/*.html` on every boot instead.

## Connecting a page

Each page needs two things: a script tag declaring which page it is, and
a `data-block-section` slot for each place content should render.

Add near the top of `<head>` or right before `blocks.js` loads:

```html
<script>window.PLAYBOOK_PAGE = "data-sharing";</script>
<link rel="stylesheet" href="blocks.css">
```

And right before `</body>`:

```html
<script src="blocks.js"></script>
```

Then replace hardcoded content with a slot. For example, the "How it
works" tab panel goes from this:

```html
<div role="tabpanel" id="panel-how-it-works" ...>
  <h3>How it works</h3>
  <h4>What data sharing is <span class="status-tag draft">Draft</span></h4>
  <p>Data sharing means...</p>
  ...
</div>
```

to this:

```html
<div role="tabpanel" id="panel-how-it-works" ...>
  <h3>How it works</h3>
  <div data-block-section="how-it-works"></div>
</div>
```

`blocks.js` fills that empty div with every block whose section is
`"how-it-works"`, in order, and (in edit mode) adds the edit/delete/move
controls, an Approve/Mark as draft toggle (not shown on comments), and
"+ Add block" / "+ Add comment" buttons at the end. The section name is
whatever string you use in both the content file and the slot attribute;
they just need to match.

## Editing day to day (in the browser)

1. Go to the page. Click "Edit this page" in the bottom-right corner.
2. Enter the password.
3. Every block now shows Edit / Delete / up / down controls, plus
   Approve (or "Mark as draft") on anything that isn't a comment.
4. Edit opens a plain textarea with the block's raw HTML. There's no
   rich text editor here, on purpose, to keep this small and avoid
   pulling in a heavier dependency. If you want formatting, write the
   HTML directly (`<p>`, `<strong>`, `<em>`, `<ul><li>`, and so on).
5. Click "Exit edit mode" when done. Content is live the moment you
   save; there's no separate publish step beyond marking it Approved.

Remember: on a host with no persistent disk, none of this survives a
restart unless you also reflect it in `content/<page>.html` and push.

## What this does not do

- It does not enforce any of the site's content rules (no em dashes, no
  prohibited figures, source discipline, and so on) at save time. That's
  on you, at the point of typing, or on a future validation pass if you
  want one added.
- It does not do rich text editing, drag-and-drop reordering, or
  multi-user accounts. One admin, one password, plain HTML in a
  textarea. Simple on purpose; all addable later if you actually need
  them.
