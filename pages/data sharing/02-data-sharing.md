# TOPIC 2 — DATA SHARING

**Status: ACTIVE.**

The active topic. Even here, most items are DRAFT, NEEDS REVIEW until Kabir
approves them one by one. Build only APPROVED and APPROVED, VERBATIM items; show
the rest as labelled empty states. See 00-global.md for the rules.

Scope of this topic, per Bob: the actual data sharing considerations. Agreement
types, who to include, what programs, agencies, and data systems are in scope,
and how to address barriers. The client journey is NOT here; it moved to Joint
Eligibility.

Data sharing includes: client consents, vendor contracts, subrecipient
contracts, data sharing with other agencies, and use agreements.

---

## 2.0 Intro — NEEDS KABIR INPUT

Short introduction: what data sharing is, why it matters, how it sits under
Joint Eligibility. Kabir to write. Raw material (DRAFT, not approved):

- Data sharing means the organizations involved in one person's HIV care can
  securely work from the same client record, instead of each keeping a separate
  copy.
- Ryan White must be the payer of last resort. Confirming other coverage is a
  legal requirement, and at scale that requires data sharing.
- PCN 21-02 encourages recipients to develop data-sharing strategies to reduce
  administrative burden. Data sharing is federal policy, not a vendor idea.

---

## 2.1 Scope — NEEDS KABIR INPUT

New subsection Bob requested. Data sharing starts by evaluating scope before
drafting agreements:
- Which programs and agencies are included.
- Which data systems will be used for eligibility determinations and other
  source data.
- What agreements must be created or updated to support that scope and usage.

Bob wants both the agreement-type diagram (2.2) and specific named examples:
types of vendors, types of data systems. Kabir to decide how much sits here
versus in the diagram panels, and to approve the specifics.

---

## 2.2 The agreements — interactive diagram

### Diagram structure — APPROVED

Inline SVG. Every element is a button. Selecting one opens a detail panel below.
Nothing expanded by default. The diagram must make sense before anything is
clicked.

Two visual languages:
- Parties: solid rounded boxes (people and organizations).
- Agreements: pill shapes on the connecting lines (legal instruments).

Layout:

```
                    Client
                      |
              [Client consent form]
                      |
              Health department
                      |
      +---------------+---------------+---------------+
      |               |               |               |
[Subrecipient]  [Use agreement]  [Contract,      [Data sharing
 agreement]                       including BAA]   agreement]
      |               |               |               |
   Funded         Unfunded        Vendors         Other
  providers       providers                      agencies
```

Eleven clickable elements: six parties, five agreements.

Rules:
- Order branches left to right, easiest to hardest: funded providers, unfunded
  providers, vendors, other agencies.
- Business associate provisions sit inside the vendor contract. Label the pill
  "Contract, including BAA." Never a separate document.
- Narrow screens stack the branches vertically.
- Keyboard accessible; selected element stays marked; detail text in the panel,
  never in the SVG.

### Case-study marking and legend — APPROVED

Elements with an APPROVED case study get an orange outline. Elements without
keep their normal treatment. The use agreement has no case study and gets no
outline; that honest absence stays.

Legend:
- Solid boxes = parties
- Pills on lines = agreements
- Orange outline = has case studies from real jurisdictions

DESIGN CHECK: agreement pills already use an amber treatment. An orange outline
on an amber pill may not read as distinct. Verify legibility on every element
type, at small sizes, in each colour mode. If unclear, propose an alternative
marker rather than shipping something ambiguous.

### Party panels — DRAFT, NEEDS REVIEW

Three headings each: Who they are / What happens here / Worth knowing. Draft
wording exists for all six parties (Client, Health department, Funded providers,
Unfunded providers, Vendors, Other agencies). Not approved. Do not build panel
text until Kabir approves it. Fast review; drafts are close.

### Agreement panels — DRAFT, NEEDS REVIEW

Four headings each: What it is / Who signs it / What it needs to cover /
Template. Draft wording exists for all five. Not approved. Two templates are
real public links and become APPROVED links once their panels are approved:
- Data sharing agreement: NASTAD templates and user guide.
- Vendor contract: HHS sample business associate provisions.

### Named specifics Bob wants — NEEDS KABIR INPUT

Show agreements with concrete examples: vendor types (pharmacy benefit
managers, insurance benefit managers, software vendors) and data-system types
(Medicaid verification, surveillance and lab feeds, electronic health records).
Kabir to approve which specifics appear and where.

---

## 2.3 Case studies — Data Sharing

Bob suggested Washington and North Carolina, and possibly a new Illinois one.
Each is tagged individually. Only APPROVED case studies get an orange outline
and appear on the site. All are DRAFT, NEEDS REVIEW until Kabir signs off,
because they name real jurisdictions and must be exact.

Attach each to its diagram element as noted.

**Washington** — DRAFT, NEEDS REVIEW — (Vendor contract)
Bob flagged as a likely keeper. Pharmacy benefit manager integration links
eligibility to point-of-sale medication pickup. Kabir to confirm and approve.

**North Carolina** — DRAFT, NEEDS REVIEW — (Data sharing agreement; Client
consent form; Subrecipient agreement)
Bob flagged as a likely keeper. Approve each piece separately:
- DSA: integrated hub of surveillance, ADAP and Ryan White, and Medicaid data;
  matches internally, returns to each partner only what it is entitled to.
- Consent: had to be checked to cover sharing eligibility data with the state,
  plus labs, dispenses, premium payments.
- Subrecipient: existing agreements reviewed and confirmed consistent with the
  new DSAs.

**Illinois** — NEEDS KABIR INPUT — (Vendor contract)
Bob suggested a new Illinois case study. Kabir does not have the material yet.
Leave as a named empty placeholder on the vendor contract element. No orange
outline until content is approved.

**District of Columbia, Maryland, and Virginia** — DRAFT, NEEDS REVIEW — (Data
sharing agreement; Other agencies party)
Strongest independent, published example. Cross-jurisdictional surveillance
exchange created 2017; corrected double-counting lowered the District's annual
prevalence estimate, and duplicate-review volume fell sharply with both
neighbours. Kabir to confirm exact figures before use.

**Miami-Dade County, Florida** — DRAFT, NEEDS REVIEW — (Client consent form)
Single combined consent form covering multiple programs; one signature covers
the network. Kabir to approve.

**Broward County, Florida** — DRAFT, NEEDS REVIEW — (Subrecipient agreement)
Funded agencies across the Part A network document in the shared system. Kabir
to approve scope and any figures.

**Louisiana** — DRAFT, NEEDS REVIEW — (Data sharing agreement; Health
department party)
Surveillance, prevention, services under one director, so internal sharing
needs no agreement; Medicaid sends a monthly file for matching. Kabir to
approve.

**Florida statewide pathway** — DRAFT, NEEDS REVIEW — (Data sharing agreement)
Two-way loop between six Part A programs and the state, with out-of-care
referral and scoped returns. Kabir to approve.

**Wisconsin** — DRAFT, NEEDS REVIEW — (Data sharing agreement)
Relies on broad legal authority to share without naming partner agencies. Kabir
to approve.

---

## 2.4 Barriers and how to address them — DRAFT, NEEDS REVIEW

Bob's steer: the HRSA expert panel is a good foundation for the importance and
challenge of data sharing; reference and expand it. Treat it as the spine here.

Candidate barriers, each to approve or cut:
- Joint eligibility is not joint certification (key reassurance).
- Establishing and maintaining data sharing agreements is genuinely hard (HRSA
  expert panel).
- Identifying the right gatekeepers takes time (HRSA expert panel).
- Legal counsel cannot agree on a single release of information.
- Privacy segregation has a real cost (no unduplicated count).
- Most states share only limited data with Medicaid.
- The law, and your own agency policies, can be the obstacle.
- Trust, not legality, is often the real blocker.
- Hard partners: clinical trials, Veterans Affairs, community organizations.

Full drafted detail for each can be surfaced for Kabir's review on request.
None approved yet.

---

## 2.5 What it makes possible — DRAFT, NEEDS REVIEW

Candidate benefits, to approve or cut:
- Meeting the payer of last resort requirement (lead with this).
- What HRSA's expert panel reported recipients experienced.
- Cross-jurisdiction accuracy (DC/MD/VA).
- Coordinated care across many agencies (Broward).
- Finding people who have fallen out of care.
- Better research and outcome measurement.

Never include the prohibited figures in 00-global.md.

---

## 2.6 Example agreement documents — NEEDS KABIR INPUT

Each agreement panel has a document slot.
- Client consent form — Kabir providing.
- Subrecipient agreement — Kabir providing.
- Use agreement — Kabir providing.
- Vendor contract (business associate provisions) — HHS public sample allowed
  once approved.
- Data sharing agreement — NASTAD public templates allowed once approved.

Render each empty slot as a visible empty state naming the document. Do not
substitute a generic template for the three Kabir is providing.
