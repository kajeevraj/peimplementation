# Joint eligibility playbook

A three-topic playbook (Joint Eligibility, Data Sharing, Use of Electronic
Sources of Data) for Ryan White HIV/AIDS Program leaders. Data Sharing is
the active topic; the other two are scaffolds.

## How this site works now

Content lives in a small CMS, not in files. `backend/` is an Express +
SQLite app: it serves the static pages and an API that stores each page's
text as editable blocks. See `backend/README-backend.md` for setup,
deployment, and day-to-day editing.

- **Editing content**: log in on the live site ("Edit this page," bottom
  right corner) and edit directly in the browser. No git, no build step.
- **Editing structure or styling**: the usual way, editing the HTML/CSS/JS
  files in this repo and pushing.

Every block has a status (`draft` or `approved`) and only approved blocks
show to a logged-out visitor; drafts and editor-only comments only appear
in edit mode. There's no separate file-based approval workflow anymore;
that used to live in `pages/*.md` and `00-global.md`, which are gone now
that the CMS replaced them.

## File structure

```
index.html, data-sharing.html,
joint-eligibility.html,
electronic-sources.html          Topic pages (root copies; kept in sync
                                  with backend/public/ manually for now)
style.css, tabs.js                Shared site styling and tab behavior
diagram.js, diagram.css           The Data Sharing agreements diagram
backend/                          CMS backend (Express + SQLite)
  server.js, db.js, auth.js       Core app
  routes/                         API routes
  migrate.js                      One-time importer, old HTML -> blocks
  public/                         Static files actually served by the app
source/                           Grounding material, gitignored, not shipped
```
