# 00: GLOBAL RULES

These bind every topic and override anything in a topic file. Read this before
building any page. See README.md for the approval-tag system.

**Publishing rule note:** DRAFT, NEEDS REVIEW content now publishes on the
live site, marked with the site's existing `.status-tag.draft` /
`.preview-banner` / `.flag-note` styling. Every rule in this file, the
never-publish list, the NIH study disclosure rule, and source discipline,
applies to DRAFT content exactly as it applies to APPROVED content. A draft
marker is not an exemption from these rules; it only means the prose hasn't
been reviewed yet. If a drafted sentence would violate a rule below, it
should not have been drafted in the first place.

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
  documented practice, never implying a commercial relationship. This
  excludes Groupware's own internal proposal, SOW, and sales materials as a
  case-study source, even when they describe a real jurisdiction's practice:
  using them would itself be the commercial relationship this rule prohibits.
- **No em dashes**, anywhere on the site or in anything written for this
  project. Use a period, comma, colon, or "and"/"but" instead.
- **No "not X, Y" contrastive phrasing** (e.g. "a standard contract, not a
  negotiated relationship"). State the point directly instead of setting up
  a negation to knock down.

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
