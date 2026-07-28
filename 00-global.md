# 00 — GLOBAL RULES

These bind every topic and override anything in a topic file. Read this before
building any page. See README.md for the approval-tag system.

---

## Never publish, in any form

- **No person's name, email address, phone number, or signature**, anywhere in
  the site or the code. Unconditional.
- **These figures**, which are unmet study targets and not results: linkage to
  care 10 percent, viral suppression 8 percent, retention in care 6 percent,
  loss of service 10 percent, average eligibility determination 5 days or less.
- **The conflicting client-count figures** (roughly 25,000 versus 48,134) until
  Kabir resolves them.
- **The application processing time claim** (about 90 minutes down to 7 to 10
  minutes) until its date and source are confirmed.

## Disclosure rule: the collaborative eligibility study

There is a two-year NIH-funded collaborative eligibility study. It is a Small
Business Innovation Research award, so **the software's developer is the
grantee**. It is not independent.

Only two findings may ever be used, and only once Kabir tags them APPROVED:
- Determination time dropping from more than four weeks to two days at the
  North Carolina site.
- Recertification rates reported better than the previous year at that site.

Any sentence using either **must** state the study was conducted by the
software's developer, and **must** carry the caveat that it is too early to
measure health outcomes. If that weakens the claim, that is correct; the
independent evidence is stronger.

## Voice and framing

- **No marketing voice.** Write like a peer public health agency, not a vendor.
  Short sentences. No exclamation marks.
- **Neutral, best-practices positioning.** The audience does not arrive
  believing it has a problem. Lead with what good practice looks like, not a
  pitch.
- **Spell out every acronym on first use.**
- **Name jurisdictions only in APPROVED case studies**, describing published or
  documented practice, never implying a commercial relationship.

## Source discipline

- `source/` is grounding for Kabir, not a content source for the build.
- Build only from APPROVED and APPROVED, VERBATIM items in the topic files.
- Never invent, infer, or import a fact. If something is missing, render a
  NEEDS KABIR INPUT empty state; do not fill the gap yourself.

## Site-wide structure

A playbook with three topic pages, shared navigation, and two global sections
that are HOLD until Kabir writes them:
- Resources (shared across topics)
- About / how to use this playbook

Each topic page has the same shape and its own case studies section.

## Accessibility and build basics (apply to every page)

- Plain HTML, CSS, JavaScript. No framework, no build step, no external
  requests.
- Interactive elements keyboard accessible: reachable by tab, activated by
  enter or space, visible focus, correct aria state.
- Responsive; legible on a phone.
- Diagrams as inline SVG that scale and stay legible at small sizes.
- Progressive disclosure: each section opens with a plain summary; detail
  expands on demand. Default collapsed. The summary alone must carry the point.
