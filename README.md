# Data Sharing Playbook: build system

This playbook is written by Kabir. Claude Code builds what is approved or
drafted. It does not supply content.

## File structure

Page footers cite content sources under `pages/`, for example
`pages/data sharing/02-data-sharing.md`. The content files themselves:

```
00-global.md            Rules that bind every topic. Read first, always.
01-joint-eligibility.md Topic 1. Status: HOLD (scaffold only).
02-data-sharing.md      Topic 2. Status: ACTIVE.
03-electronic-sources.md Topic 3. Status: HOLD (scaffold only).
source/                 Grounding material for Kabir. NOT a content source.
```

## Reading order for every build

1. `00-global.md`: the guardrails. These override everything.
2. The topic file(s) you are building.
3. `source/` only if Kabir points you to it. Never mine it for content.

## The publishing rule

DRAFT, NEEDS REVIEW content publishes on the live site, always visibly marked
as a draft. It is never indistinguishable from reviewed content.

Every content item in every topic file carries a status tag:

| Tag | Meaning | What you do |
|---|---|---|
| APPROVED, VERBATIM | Kabir wrote or signed off on this exact wording | Use the words as written, no draft marker. No rewriting, polishing, or expanding. |
| APPROVED | Substance approved; wording may be tidied | Build it, no draft marker. Light copy-edit only. Add no facts. |
| DRAFT, NEEDS REVIEW | Claude-drafted, not approved | Publish it, marked with `.status-tag.draft` (and a `.preview-banner` at the top of the page). Any inline caveat, gap, or unsourced figure stays visible using `.flag-note`, not dropped or resolved. |
| NEEDS KABIR INPUT | A gap only Kabir can fill | Do not publish. Mark with `.status-tag.input`. |
| HOLD | Not being built yet | Build the empty container only. |
| CUT | Removed | Ignore. |

Unmarked defaults to DRAFT, NEEDS REVIEW, and publishes the same way. When in
doubt about whether something is fit to draft at all, leave it out and tell
Kabir.

This does not relax 00-global.md. The never-publish list, the NIH study
disclosure rule, and source discipline all apply to DRAFT content exactly as
they apply to APPROVED content.

## What each build should do, then stop

1. State each topic's status (ACTIVE or HOLD).
2. Build APPROVED and APPROVED, VERBATIM items with no draft marker.
3. Build DRAFT, NEEDS REVIEW items with the visible draft marker.
4. Render NEEDS KABIR INPUT, HOLD, and CUT items as their labelled empty
   states, exactly as before. These still don't publish.
5. List what is waiting on Kabir, grouped by topic file.

## Current state

- `02-data-sharing.md` is ACTIVE. Most items are still DRAFT, because Kabir has
  not gone through them yet. Drafted sections publish on data-sharing.html
  with the draft marker; NEEDS KABIR INPUT and HOLD items still render as
  empty states.
- `01` and `03` are HOLD. Build their page shells and their own empty case
  study sections. No content.

## How Kabir approves

Kabir edits the topic files directly: changes tags to APPROVED, rewrites drafts
into his own words and tags them APPROVED, VERBATIM, and fills NEEDS KABIR INPUT
gaps. Claude Code never changes a tag. Approving a tag removes the draft
marker from that content the next time the site is built; it does not change
what the content says unless Kabir also edits the text.
