# Joint eligibility playbook

A three-topic playbook (Joint Eligibility, Data Sharing, Use of Electronic
Sources of Data) for Ryan White HIV/AIDS Program leaders. Data Sharing is
the active topic; the other two are scaffolds.

## How this site works

Plain static HTML, CSS, and JS. No server, no database, no login. Every
page's content is written directly into its HTML file, including its
status tags (`<span class="status-tag draft">Draft, needs review</span>`,
etc.) and editorial asides (as HTML comments, so they're visible to
anyone editing the file but never rendered to a site visitor).

To change content: edit the relevant `.html` file directly, save,
commit, and push. There's no separate build step and nothing to run
locally except a static file server for previewing (see below).

Every heading carries its own status (draft or approved) written
directly into its markup; there's no distinction between what a
logged-in editor sees and what a visitor sees, since there's no login.
Everything on the page is visible to everyone.

## File structure

```
index.html, data-sharing.html,
joint-eligibility.html,
electronic-sources.html          Topic pages
style.css, tabs.js                Shared site styling and tab behavior
diagram.js, diagram.css           The Data Sharing agreements diagram
source/                          Grounding material, gitignored, not shipped
```
