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

## 2.0 Intro — DRAFT, NEEDS REVIEW

Data sharing means the organizations involved in one person's HIV care can
work from the same client record, instead of each agency keeping its own
separate copy. For a client, that can mean one application, or one
recertification, instead of several.

The Ryan White HIV/AIDS Program (RWHAP) must be the payer of last resort:
RWHAP funds can only cover what other coverage doesn't. Confirming what other
coverage a client has is a legal requirement, and at the scale most
jurisdictions operate at, that confirmation depends on data sharing between
agencies and programs. [source: PCN 21-02]

The Health Resources and Services Administration's HIV/AIDS Bureau (HRSA HAB)
encourages RWHAP recipients and subrecipients to develop data-sharing
strategies to reduce administrative burden, in Policy Clarification Notice
(PCN) 21-02, *Determining Client Eligibility & Payor of Last Resort in the
RWHAP*. [source: PCN 21-02] HRSA's Part A Program Manual makes the same
point: data-sharing agreements with other recipients, subrecipients, and
federal programs reduce burden in eligibility and eligibility-confirmation
work. [source: RWHAP Part A Program Manual]

---

## 2.1 Scope — DRAFT, NEEDS REVIEW

Before drafting any agreement, a jurisdiction has to work out its scope:

- Which programs and agencies are included — RWHAP recipients and
  subrecipients, other public health programs, and outside partners like
  vendors.
- Which data systems will be used for eligibility determinations and other
  source data.
- What agreements need to be created or updated to support that scope.

Those agreements take different forms depending on who's involved and what's
being shared — client consent, subrecipient agreements, use agreements,
vendor contracts, and data sharing agreements between agencies. The diagram
below lays out how those pieces connect.

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

Draft wording below for all six parties. Not approved. Do not build panel text
until Kabir approves it.

*(Note: drafted as two headings per party — "What happens here" and "Worth
knowing" — not the three originally specified. "Who they are" is not drafted
below; flag to Kabir rather than inventing it.)*

**Client**

*What happens here*
The client signs a consent form setting what can be shared, with whom, and
for how long. No consent, no sharing. [source: PCN 21-02]

*Worth knowing*
Consent can be time-limited. When it ends, the agency keeps what it already
has but stops receiving updates.

**Health department**

*What happens here*
Usually the hub. Receives data from providers, vendors, and other agencies.
Often responsible for confirming a client's other coverage to meet the
payer-of-last-resort requirement. [source: PCN 21-02]

*Worth knowing*
Programs under one director can share internally without a separate
agreement. Sharing outside the department, like with Medicaid, still needs
one.

**Funded providers**

*What happens here*
Document services in the shared system under a subrecipient agreement that
sets what data they collect, how it's used, and how it's reported back.
[source: RWHAP Part A Program Manual]

*Worth knowing*
The funding relationship gives data-sharing terms leverage: they can be
written directly into the funding agreement.

**Unfunded providers**

*What happens here*
No funding relationship, so sharing has to be negotiated on its own terms,
usually through a use agreement.

*Worth knowing*
No funding lever. The case for sharing rests on client benefit alone.

**Vendors**

*What happens here*
Runs through a contract with business associate provisions under HIPAA,
since the vendor handles protected health information on the program's
behalf. [source: HHS Sample Business Associate Agreement Provisions]

*Worth knowing*
The business associate provisions live inside the vendor contract, not a
separate document. [source: 02-data-sharing.md, 2.2, APPROVED diagram rule]

**Other agencies**

*What happens here*
Runs through its own data sharing agreement, scoped to what each side needs
and is entitled to receive back. Most often Medicaid (coverage verification)
or another jurisdiction's health department (surveillance matching).

*Worth knowing*
Hardest category to standardize. Each partner has its own legal authority
and comfort level, so agreements get negotiated one partner at a time.

### Agreement panels — DRAFT, NEEDS REVIEW

Draft wording below for all five. Not approved. Two templates are real public
links and become APPROVED links once their panels are approved.

**Client consent form**

*What it is* — The document authorizing what client data can be shared, with
whom, and for how long.
*Who signs it* — The client, or their authorized representative.
*What it needs to cover* — Which records are covered, which parties can
receive them, and whether the authorization has an end date.
*Template* — Yet to source. (Kabir providing.)

**Subrecipient agreement**

*What it is* — The agreement between a RWHAP recipient and a funded provider,
setting the terms under which the provider documents and reports client data.
[source: RWHAP Part A Program Manual]
*Who signs it* — The RWHAP recipient (grantee) and the funded subrecipient
agency.
*What it needs to cover* — What data the subrecipient collects, how it's
used, and how it's reported back to the recipient.
*Template* — Yet to source. (Kabir providing.)

**Use agreement**

*What it is* — The agreement covering data sharing with an unfunded provider,
where no funding relationship exists to set the terms.
*Who signs it* — The health department (or recipient) and the unfunded
provider.
*What it needs to cover* — Scope of data shared, permitted uses, and
duration.
*Template* — Yet to source. (Kabir providing.)

**Contract, including BAA**

*What it is* — The contract governing a vendor relationship, with business
associate provisions built in under HIPAA. [source: HHS Sample Business
Associate Agreement Provisions]
*Who signs it* — The covered entity (health department or recipient) and the
vendor.
*What it needs to cover* — Permitted uses of protected health information,
required safeguards, breach reporting, and subcontractor terms. [source: HHS
Sample Business Associate Agreement Provisions]
*Template* — HHS sample business associate provisions — link pending panel
approval.

**Data sharing agreement**

*What it is* — The agreement covering data exchange between agencies — most
often a health department and Medicaid, or a health department and another
jurisdiction.
*Who signs it* — The two (or more) agencies exchanging data.
*What it needs to cover* — What's exchanged, the matching or verification
purpose, and what each side is entitled to receive back. [source: NASTAD DSA
Templates and User Guide]
*Template* — NASTAD DSA templates and user guide — link pending panel
approval.

### Named specifics Bob wants — NEEDS KABIR INPUT

*(Candidates only — nothing here is approved language. Pick, edit, or cut
freely. Kabir to decide which specifics appear and where: diagram panels vs.
this section vs. cut entirely.)*

**Vendor types (for the "Contract, including BAA" element)**
- Pharmacy benefit managers (PBMs). State ADAP programs commonly contract
  with a PBM to manage medication assistance — processing claims, tracking
  enrollment, and handling copay assistance. [sources: Florida Department of
  Health ADAP page; New York State ADAP Pharmacy Manual; Virginia ADAP
  program materials]
- Insurance benefit managers / premium and cost-sharing assistance vendors.
  Vendors that process premium payments and cost-sharing assistance on a
  program's behalf, separate from medication dispensing.
- Software vendors. Vendors providing the case-management or eligibility
  system itself, where the contract has to cover data handling, hosting, and
  security in addition to the software license.

*Note: vendor names were not pulled from the uploaded CDPH/ADAP
scope-of-services documents — those describe one specific vendor relationship
and aren't a public, citable source. A named example (e.g., a specific PBM)
needs a source Kabir points to, not those files.*

**Data-system types (for the "Data sharing agreement" element and 2.1 Scope)**
- Medicaid eligibility verification. Electronic 270/271 transactions — a
  standardized federal format for querying whether a client has Medicaid
  coverage — are the common mechanism programs use to confirm coverage before
  billing RWHAP as payer of last resort. [source: CMS, "About HETS 270/271"]
- Surveillance and lab feeds. State HIV surveillance systems (built on CDC's
  Enhanced HIV/AIDS Reporting System, eHARS) and associated lab reporting are
  a recurring data source named in NASTAD's work connecting public health and
  care-delivery data. [source: NASTAD, Health Systems Integration]
- Electronic health records. Claims, encounter, and EHR data from care
  delivery systems are increasingly used alongside surveillance data to track
  outcomes and target re-engagement. [source: NASTAD, Health Systems
  Integration]

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
North Carolina built an integrated data hub combining HIV surveillance,
ADAP/Ryan White, and Medicaid data. The health department matches the data
internally and returns to each partner only the information that partner is
entitled to receive. Independent ten-state legal research identified North
Carolina as the only state to have built this kind of hub; most other states
share only aggregate data with Medicaid, and none allow external access to
the surveillance database itself.
[source: NASTAD, HIV Data Privacy and Confidentiality]

**Illinois** — NEEDS KABIR INPUT — (Vendor contract)
Bob suggested a new Illinois case study. Kabir does not have the material yet.
Leave as a named empty placeholder on the vendor contract element. No orange
outline until content is approved.

**District of Columbia, Maryland, and Virginia** — DRAFT, NEEDS REVIEW — (Data
sharing agreement; Other agencies party)
The three jurisdictions' health departments signed HIV surveillance data
sharing agreements in 2014 and began regular electronic data exchange in
2017, using a privacy-preserving matching tool external to the health
departments. Electronic exchange of surveillance and lab data cut the manual
duplicate-review caseload by roughly three-quarters between DC and Maryland
and four-fifths between DC and Virginia, and helped DC identify people who
had migrated out of the District — inflating its count of people living with
HIV — rather than simply going untracked.
[sources: JMIR Public Health & Surveillance, 2018; NASTAD, Cross-
Jurisdictional Data Sharing]
**Figures (74.3%, 81.7%) still need sign-off before use on the site.**

**Miami-Dade County, Florida** — DRAFT, NEEDS REVIEW — (Client consent form)
Single combined consent form covering multiple programs; one signature covers
the network. Kabir to approve.

**Broward County, Florida** — DRAFT, NEEDS REVIEW — (Subrecipient agreement)
Funded agencies across the Part A network document in the shared system. Kabir
to approve scope and any figures.

**Louisiana** — DRAFT, NEEDS REVIEW — (Data sharing agreement; Health
department party)
Louisiana's HIV surveillance, prevention, and Ryan White services sit under
one office, so sharing between those functions doesn't cross an
organizational boundary and needs no separate agreement. Medicaid sends the
state health department a monthly file, matched against HIV surveillance data
to calculate viral suppression among Medicaid enrollees.
[source: Louisiana Department of Health, Integrated HIV Prevention and Care
Plan, 2022–2026]

**Florida statewide pathway** — DRAFT, NEEDS REVIEW — (Data sharing agreement)
Two-way loop between six Part A programs and the state, with out-of-care
referral and scoped returns. Kabir to approve.

**Wisconsin** — DRAFT, NEEDS REVIEW — (Data sharing agreement)
Wisconsin's health department relies on broad legal authority to share HIV
data to protect an individual's health, prevent transmission, or support
diagnosis and care, without naming specific partner state agencies in the
statute the way some other states do.
[source: NASTAD, HIV Data Privacy and Confidentiality]

---

## 2.4 Barriers and how to address them — DRAFT, NEEDS REVIEW

Spine: HRSA HAB Technical Expert Panel (TEP), *Streamlining Eligibility for
the Ryan White HIV/AIDS Program* (August 2023).

*(Note: "Joint eligibility is not joint certification" has been removed from
this list. It belongs on the Joint Eligibility page instead; Kabir will add it
there. Do not add it anywhere in this topic.)*

**Establishing and maintaining data sharing agreements is hard**
TEP participants identified access to and effective use of data, particularly
through establishing and maintaining data-sharing agreements, as an ongoing
challenge. [source: HRSA TEP Executive Summary]

**Finding the right gatekeeper takes time**
TEP participants noted that identifying who can grant access to needed data,
and then negotiating the agreement itself, is time-consuming.
[source: HRSA TEP Executive Summary]

**Most states share only limited data with Medicaid**
Independent research found that most states share only aggregate data with
Medicaid, and none allow Medicaid direct access to the HIV surveillance
database. [source: NASTAD, HIV Data Privacy and Confidentiality]

**Privacy concerns shape what gets shared and how**
TEP participants flagged privacy as a factor that has to be weighed carefully
in every data-sharing decision, alongside the practical work of identifying
gatekeepers and negotiating agreements. [source: HRSA TEP Executive Summary]

**Reconciling consent models across programs is slow**
Programs vary in how they collect client consent to share data, and getting
legal review to align differing consent language across partner programs
takes time. A blanket consent model, where clients agree once to sharing
under any future data-sharing agreement, is easier to manage than a
point-to-point model that requires reconsent every time a new agreement is
signed, but switching models, or reconciling two programs that use different
models, requires legal review up front.
[source: RAND, Sharing and Integrating HIV Client Data Across Provider
Organizations]

**Trust has to be built, not assumed**
Data sharing depends on more than legal authority to share. Health
departments that have used surveillance data to support HIV care describe
laying groundwork by engaging stakeholders to build trust in how sensitive
information will be used, alongside establishing the legal and governance
structure. [source: Sweeney et al., "Shifting the Paradigm," The Milbank
Quarterly, 2013]

**The law, and an agency's own policies, can be the obstacle**
Laws governing disclosure of health information were often written at
different times for different diseases, and don't necessarily reflect how a
health department needs to operate today. In New York City, separate
historical laws on HIV and STDs meant that sharing surveillance data between
two programs inside the same health department counted as an impermissible
disclosure. [source: "Legal and Policy Barriers to Sharing Data Between
Public Health Programs in New York City," PMC]

**Candidates still to source** — cut, or provide sourcing:
- The specific cost of privacy segregation (no unduplicated count).
- Named "hard partner" categories: clinical trials, Veterans Affairs,
  community-based organizations specifically.

---

## 2.5 What it makes possible — DRAFT, NEEDS REVIEW

Note: none of the prohibited figures in 00-global.md appear here. Two figures
(DC/MD/VA percentages, carried over from the case studies section above)
still need sign-off before publishing.

**Meeting the payer-of-last-resort requirement**
The Ryan White HIV/AIDS Program can only cover what other coverage doesn't.
Confirming a client's other coverage is a legal requirement, and reliable
data sharing is what makes that confirmation possible at scale.
[source: PCN 21-02]

**Fewer, faster eligibility confirmations**
HRSA's Technical Expert Panel found that where recipients used the
flexibility in PCN 21-02 together with better data access, the results
included decreased staff time processing applications, decreased burden on
clients, and quicker turnarounds. [source: HRSA TEP Executive Summary]

**Cross-jurisdiction accuracy**
Electronic data exchange between DC, Maryland, and Virginia cut the manual
duplicate-review caseload by roughly three-quarters with Maryland and
four-fifths with Virginia, and helped DC identify people who had moved out of
the District rather than simply appearing to have disappeared from care.
[source: JMIR Public Health & Surveillance, 2018]

**Coordinated care across many agencies**
Where a health department's surveillance, prevention, and Ryan White
functions sit under one office, internal sharing doesn't require a separate
agreement, freeing staff to focus on sharing with true outside partners —
Medicaid, other jurisdictions — where an agreement is actually needed.
[source: Louisiana Department of Health, Integrated HIV Prevention and Care
Plan, 2022–2026]

**Finding people who have fallen out of care**
TEP participants pointed to Medicaid and motor vehicle records as sources
some jurisdictions have used successfully to verify income and residency for
clients who might otherwise be treated as lost to follow-up.
[source: HRSA TEP Executive Summary]

**Better research and outcome measurement**
North Carolina's integrated hub lets the health department match HIV
surveillance, ADAP/Ryan White, and Medicaid data internally, giving it a more
complete picture than any single data source would on its own, while
returning to each partner only what that partner is entitled to see.
[source: NASTAD, HIV Data Privacy and Confidentiality]

---

## 2.6 Example agreement documents — NEEDS KABIR INPUT

Each agreement panel has a document slot. Template detail for each now lives
in the matching 2.2 agreement panel above; summarized here:
- Client consent form — Yet to source. Kabir providing.
- Subrecipient agreement — Yet to source. Kabir providing.
- Use agreement — Yet to source. Kabir providing.
- Vendor contract (business associate provisions) — HHS public sample allowed
  once approved.
- Data sharing agreement — NASTAD public templates allowed once approved.

Render each empty slot as a visible empty state naming the document. Do not
substitute a generic template for the three Kabir is providing.
