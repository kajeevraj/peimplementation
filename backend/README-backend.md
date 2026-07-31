# Playbook CMS backend

Replaces the DRAFT/APPROVED file-tagging workflow with direct editing on
the live site, behind a real password gate. This is a genuine server: it
needs somewhere to actually run, not just static file hosting.

## What this is, plainly

- A small Express API (`server.js`) backed by one SQLite file
  (`playbook.db`, created automatically). No external database to set up.
- One admin account. No usernames, just a password, hashed with bcrypt
  and never stored in plain text.
- Content lives in a `blocks` table: every party panel, agreement panel,
  benefit, barrier, and case study is a row with a page, a section, a
  title, and its HTML content. The site fetches and renders these on
  load. Edit mode lets you edit, add, delete, and reorder them.
- Every save keeps the block's previous version in `block_history`
  first, so a bad edit is recoverable. This isn't the old review gate
  back, there's no approval step, it's just an undo button.

## I did not verify this actually runs

I don't have network access in this environment to install npm packages,
so I could not run `npm install` and start the server to confirm it
boots end to end. I checked every file with `node --check` (catches
syntax errors) and hand-traced the route logic, including finding and
fixing a real bug where `/reorder` would have been shadowed by the
`/:id` route, and a case-study parsing bug in the migration script that
only caught the first entry per section. Both are fixed and the fixes
were tested in isolation. But please run this locally before trusting it
with real content, and tell me what breaks if anything does.

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
it). Visit `http://localhost:3000` once you've added the site's static
files to `backend/public/` (see "Connecting a page" below).

## Deployment

This needs a host that runs a persistent Node process: Render, Railway,
Fly.io, a small VPS, or similar. **GitHub Pages will not work**: it only
serves static files and cannot run a server. Whatever you pick:

- Set `ADMIN_PASSWORD_HASH` and `JWT_SECRET` as environment variables on
  the host, not in a committed `.env` file.
- Set `NODE_ENV=production` so session cookies require HTTPS.
- If the frontend stays on GitHub Pages instead of being served by this
  same process, set `SITE_ORIGIN` to that site's URL and remove the
  `express.static` line in `server.js`.
- The SQLite file needs to live on persistent storage. Some hosts (like
  Railway or Fly with a volume) support this directly; a platform with
  an ephemeral filesystem will lose the database on every redeploy, so
  check that before picking a host.

## Connecting a page

Each page needs two things: a script tag declaring which page it is,
and a `data-block-section` slot for each place content should render.

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
controls and an "Add block" button at the end. The section name is
whatever string you use in both the migration and the slot attribute;
they just need to match.

## Migrating existing content

Run once per page, against your actual current HTML file:

```bash
node migrate.js --page data-sharing --file ../data-sharing.html
```

This parses the file's own `<!-- ==== SECTION ==== -->` comments and its
`<h4>`/`<h5>` headings to build blocks automatically, so nothing needs
retyping. It's safe to re-run: it clears that page's existing blocks
first rather than duplicating them. Case studies get their own parser,
since they're structured as `<div class="case-study-entry" id="...">`
rather than headings.

After migrating, check the result before trusting it:

```bash
curl http://localhost:3000/api/blocks?page=data-sharing
```

Skim it for anything that looks wrong (a heading's status-tag badge text
stuck onto its title, a block that swallowed more or less than expected)
and fix it by hand in edit mode rather than re-running the migration
against a half-fixed file.

## Editing day to day

1. Go to the page. Click "Edit this page" in the bottom-right corner.
2. Enter the password.
3. Every block now shows Edit / Delete / up / down controls, and each
   section has an "Add block" button at the end.
4. Edit opens a plain textarea with the block's raw HTML. There's no
   rich text editor here, on purpose, to keep this small and avoid
   pulling in a heavier dependency. If you want formatting, write the
   HTML directly (`<p>`, `<strong>`, `<em>`, `<ul><li>`, and so on).
5. Click "Exit edit mode" when done. Content is live the moment you
   save; there's no separate publish step.

## What this does not do

- It does not enforce any of the site's content rules (no em dashes, no
  prohibited figures, source discipline, and so on). Those lived in the
  DRAFT/APPROVED workflow's review step, which this replaces. Nothing
  server-side checks a save against them now; that's on you at the point
  of typing, or on a future validation pass if you want one added.
- It does not do rich text editing, drag-and-drop reordering, or
  multi-user accounts. One admin, one password, plain HTML in a
  textarea. Simple on purpose; all addable later if you actually need
  them.
