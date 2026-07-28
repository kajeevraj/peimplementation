# Data Sharing Playbook — build system

This playbook is written by Kabir. Claude Code builds what is approved. It does
not supply content.

## File structure

```
content/
  00-global.md            Rules that bind every topic. Read first, always.
  01-joint-eligibility.md Topic 1. Status: HOLD (scaffold only).
  02-data-sharing.md      Topic 2. Status: ACTIVE.
  03-electronic-sources.md Topic 3. Status: HOLD (scaffold only).
source/                   Grounding material for Kabir. NOT a content source.
```

## Reading order for every build

1. `content/00-global.md` — the guardrails. These override everything.
2. The topic file(s) you are building.
3. `source/` only if Kabir points you to it. Never mine it for content.

## The approval rule, absolute

**Nothing appears on the site unless it is tagged APPROVED or APPROVED, VERBATIM.**

Every content item in every topic file carries a status tag:

| Tag | Meaning | What you do |
|---|---|---|
| APPROVED, VERBATIM | Kabir wrote or signed off on this exact wording | Use the words as written. No rewriting, polishing, or expanding. |
| APPROVED | Substance approved; wording may be tidied | Build it. Light copy-edit only. Add no facts. |
| DRAFT, NEEDS REVIEW | Claude-drafted, not approved | Do not publish. Render the labelled empty state. |
| NEEDS KABIR INPUT | A gap only Kabir can fill | Do not publish. Show an empty state naming what is needed. |
| HOLD | Not being built yet | Build the empty container only. |
| CUT | Removed | Ignore. |

Unmarked defaults to DRAFT, NEEDS REVIEW. When in doubt, leave it out and tell
Kabir.

## What each build should do, then stop

1. State each topic's status (ACTIVE or HOLD).
2. Build only APPROVED and APPROVED, VERBATIM items.
3. Render every other item as its labelled empty state, so Kabir sees the shape.
4. List what is waiting on Kabir, grouped by topic file.

Do not build ahead of approval. A correct empty scaffold is the goal of a pass,
not a filled page.

## Current state

- `02-data-sharing.md` is ACTIVE. Most items are still DRAFT, because Kabir has
  not gone through them yet. Build the structure, fill only approved pieces,
  show the rest as empty states.
- `01` and `03` are HOLD. Build their page shells and their own empty case
  study sections. No content.

## How Kabir approves

Kabir edits the topic files directly: changes tags to APPROVED, rewrites drafts
into his own words and tags them APPROVED, VERBATIM, and fills NEEDS KABIR INPUT
gaps. Claude Code never changes a tag.
