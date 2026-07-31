# Joint eligibility playbook

A three-topic playbook (Joint Eligibility, Data Sharing, Use of Electronic
Sources of Data) for Ryan White HIV/AIDS Program leaders. Data Sharing is
the active topic; the other two are scaffolds.

## How this site works now

Content lives in a small CMS, not hand-tagged files. `backend/` is an
Express + SQLite app: it serves the static pages and an API that stores
each page's text as editable blocks. See `backend/README-backend.md` for
setup, deployment, and details.

There are two ways to change content, and which one to use depends on
your host:

- **Edit live, in the browser**: log in ("Edit this page," bottom right
  corner), edit/approve/comment directly. Instant, no git. **Only durable
  if your host has a persistent disk.**
- **Edit `backend/content/<page>.html` and push**: on a host with no
  persistent disk (e.g. a free tier), the database resets on every
  restart, so this file is what actually survives — the server rebuilds
  its blocks from it on every boot. Mark a heading `data-status="approved"`
  to publish it immediately; add `<div class="editor-comment">` for an
  editor-only note. See `backend/README-backend.md` for the exact format.

Every block has a status (`draft` or `approved`); only approved blocks
show to a logged-out visitor. Drafts and comments only appear in edit
mode. There's no separate file-tagging approval workflow anymore; that
used to live in `pages/*.md` and `00-global.md`, which are gone now that
the CMS replaced them.

## File structure

```
backend/                          CMS backend (Express + SQLite) — this is
                                  the whole app; Render's Root Directory
                                  points here, so nothing outside it ships
  server.js, db.js, auth.js       Core app
  routes/                         API routes
  seed.js                        Parses a content file into blocks;
                                  used by both migrate.js and server.js
  migrate.js                     Manual, always-overwrite import/reseed
  content/                       Hand-editable source per page (see above)
  public/                        Static pages, styling, and tab/diagram
                                  behavior actually served by the app
                                  (index.html, data-sharing.html,
                                  joint-eligibility.html,
                                  electronic-sources.html, style.css,
                                  tabs.js, diagram.js, diagram.css)
source/                          Grounding material, gitignored, not shipped
```
