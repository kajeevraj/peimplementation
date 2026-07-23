# CONTENT.md

Vetted source material for the data sharing website.

**This file is the only source of facts for the site.** Do not add claims from
outside this file and the files in `source/`. Do not invent examples, numbers,
or quotes.

## Status labels

Every fact below carries a label. Respect it in the output.

| Label | Meaning | How to use it |
|---|---|---|
| VERIFIED | Confirmed in a source document or public source | Use freely |
| PROPOSED | Designed but not built or not live | Must be described as proposed, never as an achievement |
| PRELIMINARY | Early finding from a study still underway | Must appear with its caveat attached |
| UNVERIFIED | Needs checking before publication | Do not put on the site |
| HOLD | Needs internal approval before publication | Do not put on the site |

## Absolute rules

- No person's name, email address, phone number, or signature anywhere in the
  site or the code.
- No jurisdiction is named as a customer beyond those listed as safe below.
- Spell out every acronym on first use.
- No marketing voice. Write like a peer agency, not a vendor.

---

# Section 1: What data sharing is

## Plain definition

Data sharing means the organizations involved in one person's HIV care can
securely work from the same client record, instead of each keeping its own
separate copy.

## Who is involved

- **The client.** The person receiving care. The only one who can authorize
  their information to be shared.
- **The health department.** The state, county, or city agency that receives
  the federal grant. It holds the central client record and decides who gets
  access to what. Often called the recipient.
- **Funded providers.** Clinics and community agencies the program pays to
  deliver services. Also called subrecipients.
- **Unfunded providers.** Providers treating the same clients who receive no
  program funding.
- **Vendors.** Companies working for the health department, such as pharmacy
  benefit managers, insurance benefit managers, and software vendors.
- **Peer agencies.** Other government programs such as Medicaid, Ryan White
  Part A programs, and HIV surveillance.

## Background the reader needs

VERIFIED. The Ryan White HIV/AIDS Program is the federal program that pays for
medical care and support services for low-income people living with HIV who
have no other way to pay. It is administered by the Health Resources and
Services Administration (HRSA). Money flows to state and local health
departments, which contract with clinics and community agencies to deliver
services.

VERIFIED. Ryan White is required to be the payer of last resort. It can only
pay after Medicaid, Medicare, private insurance, or any other coverage has been
used. This makes checking for other coverage a legal requirement, not an
optional efficiency. HRSA Policy Clarification Notice 21-02 sets out the
eligibility and payer of last resort rules.

## Why it matters, in one line each

- Clients stop proving the same facts over and over to different agencies.
- Programs can confirm eligibility faster and with fewer errors.
- Care teams at different organizations can see the same picture.
- Programs can find people who have fallen out of care.
- Federal reporting is built from one dataset instead of many.

---

# Section 2: How it works

## The basic shape

VERIFIED. The client signs a consent form, sometimes called a release of
information, permitting their record to move beyond the organization that
collected it. That consent flows to the health department, which holds the
central record. The health department then shares data outward with its
partners, and each type of partner requires a different kind of agreement.
See Section 3 for the agreements.

## REQUIRED: the interactive diagram

This diagram is the centerpiece of the site. Build it as inline SVG. **Every
element listed below must be a button.** Selecting one opens a detail panel
below the diagram. Nothing is expanded by default. The diagram must make sense
on its own before anything is clicked.

Two visual languages, kept clearly distinct:

- **Parties** are solid rounded boxes. These are the people and organizations.
- **Agreements** are pill shapes sitting on the connecting lines between them.
  These are the legal instruments.

A reader should see at a glance that the boxes are who, and the pills are what
makes it lawful.

### Layout

                    Client
                      |
              [Client consent form]
                      |
              Health department
                      |
      +---------------+---------------+---------------+
      |               |               |               |
 [Subrecipient    [Use            [Contract,      [Data sharing
  agreement]       agreement]      including BAA]  agreement]
      |               |               |               |
   Funded         Unfunded        Vendors         Other
  providers       providers                       agencies

Six party buttons and five agreement buttons: eleven clickable elements.
On a narrow screen the four branches stack vertically rather than shrinking
to the point of illegibility.

### Detail panel content: parties

Each party panel uses the same three headings.

**Client**
- Who they are: The person receiving care. The only one who can authorize their
  information to be shared.
- What happens here: At intake they sign a consent form permitting their record
  to move beyond the organization that collected it.
- Worth knowing: Data is collected during care, but nothing moves without this
  signature.

**Health department**
- Who they are: The state, county, or city agency that receives the federal
  Ryan White grant and holds the central client record. Often called the
  recipient.
- What happens here: Every sharing relationship runs through the health
  department. It decides who gets access, to what, and under which agreement.
- Worth knowing: It is also accountable for federal reporting, so gaps in its
  record become gaps in the annual report.

**Funded providers**
- Who they are: Clinics and community agencies the program pays to deliver
  services. Also called subrecipients.
- What happens here: Access is granted through the funding agreement they
  already sign.
- Worth knowing: Usually the easiest relationship to establish, because the
  contract and the working relationship already exist. Most programs start here.

**Unfunded providers**
- Who they are: Providers treating the same clients who receive no program
  funding.
- What happens here: Access requires a standalone agreement, since there is no
  funding contract to attach data terms to.
- Worth knowing: Easy to overlook, but clients do not only see funded providers.
  Skipping these leaves gaps in the record.

**Vendors**
- Who they are: Companies the health department hires, such as pharmacy benefit
  managers, insurance benefit managers, and software vendors.
- What happens here: Access flows from the service contract, which carries the
  required business associate provisions inside it.
- Worth knowing: A vendor handles data on the health department's behalf, which
  is a different legal position from a peer agency that works for no one.

**Other agencies**
- Who they are: Peer government programs such as Medicaid, Ryan White Part A
  programs, and HIV surveillance.
- What happens here: Access requires an agreement negotiated between equals.
- Worth knowing: Neither agency works for the other, which is exactly what makes
  this the hardest relationship to establish.

### Detail panel content: agreements

Each agreement panel uses these headings, drawing its content from Section 3 of
this file, which has the full text for all five:

- What it is
- Who signs it
- What it needs to cover
- Template (only where Section 3 lists one; omit the heading entirely rather
  than writing "none available")

### Rules for this diagram

- Order the four branches left to right from easiest to hardest to establish:
  funded providers, unfunded providers, vendors, other agencies. That
  progression is part of the explanation.
- The business associate provisions sit inside the vendor contract. Label that
  pill "Contract, including BAA" and make the containment clear in the panel
  text. Never show the business associate agreement as a separate document.
- Keyboard accessible: every element reachable by tab, activated by enter or
  space, with a visible focus state.
- The selected element stays visibly marked while its panel is open.
- Detail text goes in the panel below, never inside the SVG.

## Worked example: the Florida Part A pathway

VERIFIED. Source: Ryan White Part A D2C Data Sharing Pathways deck in
`source/`. This is a complete, documented, two-directional loop between six
local Ryan White Part A data systems and the Florida Department of Health.
Use this as the main worked example on the site.

The loop, in order:

1. **The Part A program extracts its full active client list.** The format of
   this file is defined in the data sharing agreement between the parties.
2. **The file is transferred securely.** Transfer uses an electronic lab
   reporting portal, which is the preferred route, or a secure file transfer
   service. Credentials are required for verified user access at every step.
3. **The state health department matches the list.** The state's HIV section
   matches it against eHARS, the state HIV surveillance system, to find lab
   results. It also cross-checks against CAREWare, the AIDS Drug Assistance
   Program, electronic health records, and Medicaid.
4. **Updated lists come back.** The Part A program receives its list back with
   care status attached. The content of this return file is also defined in the
   data sharing agreement.
5. **Clients not in care are referred.** Clients presumed not to be in care
   within that Part A county after the match are compiled into an out-of-care
   list, then uploaded and assigned into the state's linkage module.
6. **Linkage outcomes return to the program.** A customized export of linkage
   outcomes goes back to the local Part A system, containing only that
   program's own clients.

Two things to draw out for the reader:

- The data sharing agreement defines the **format** of the files exchanged, not
  just permission to exchange them. That is a practical detail most
  explanations leave out.
- The final export is **scoped to each program's own clients**. Sharing does
  not mean everyone sees everything.

## Getting access is a defined process

VERIFIED, de-identified. Source: Florida Department of Health linkage module
onboarding materials. Do not name any staff member or include any email
address. Describe the recipient only as the state linkage team.

Access to the state linkage module requires three steps, with proof submitted
at each one:

1. Complete the state's security and confidentiality training module and submit
   the receipt.
2. Complete and submit a system access request form.
3. Attend the live virtual onboarding training, or watch the recording, and
   submit proof.

Access is granted once all three are complete. The point for the reader:
access is earned per person through training and a formal request, not handed
out at the organization level.

## Access is controlled per client, and it can end

VERIFIED. Sources: CDPH Scope of Services in `source/`, and Massachusetts
implementation documentation.

Keep this brief on the site and place it behind progressive disclosure. The
point is that sharing is not permanent or all-or-nothing.

- A provider at one agency can release specified types of records about one
  client to another agency, and can set an end date on that release.
- When a release ends, the receiving agency's access reverts to a historical
  read-only version of the chart as of the end date. Access freezes rather
  than disappearing, which means an agency can still account for its own past
  work.
- When an agency closes its relationship with a client, the release is
  typically set to terminate about thirty days later rather than immediately,
  so the agency can finish its documentation.
- If a client returns, the agency submits a request that routes to the health
  department for a decision.

## Data segregation is built in

VERIFIED. This principle appears independently in three different
implementations, which is why it is worth stating plainly on the site.

- In one county arrangement, services documented under programs outside Ryan
  White and housing funding cannot be seen by either of those two grantees.
  Source: Broward Contracts and Descriptions in `source/`.
- In one city implementation, duplicate client records are merged only within a
  single agency. Records are deliberately not merged across separate agencies
  in the network. Source: CDPH documentation.
- In the Florida pathway above, each program's export contains only its own
  clients.

## A proposed model for shared eligibility

PROPOSED. Source: FL Statewide NOE deck in `source/`. This has not been built.
The deck is labeled a proposed implementation and its final step is to review
and sign a statement of work. **Describe this as a proposed design. Do not
present it as something in operation.**

Under the proposed model, participating grantees would accept a standard
statewide notice of eligibility from one another. A client presenting a valid
notice would not need to re-prove residency, income, or HIV diagnosis. Their
eligibility at the new agency would be aligned to the expiration date on the
notice rather than restarting a full term. Either grantee could perform a full
reassessment within 45 days of expiration.

Seven grantees are named as participants in the proposal. Do not list them by
name on the site. Say "several participating grantees across one state."

---

# Section 3: What agreements are needed

Five agreement types. For each, give the reader: what it is, who signs it, what
it covers.

## 1. Client consent form

Also called a release of information.

- **What it is.** The client's written authorization for their information to
  be shared beyond the organization collecting it. Everything downstream
  depends on it.
- **Who signs.** The client, usually at intake with a case manager.
- **What it needs to cover.** Which categories of organization may receive the
  data, what may be shared and for what purpose, how long it lasts, and how to
  revoke it. A form naming only one program is the most common reason sharing
  stalls later.
- **Template available.** No public template. See the barriers section: this is
  where programs most often get stuck.

## 2. Subrecipient agreement

- **What it is.** The contract through which the health department passes
  federal funds to a clinic or agency, with data handling written in as a
  condition of the funding.
- **Who signs.** The health department and each funded provider.
- **What it covers.** Who may access records, required security practices, and
  what happens to data if funding ends.
- **Why it is the easiest.** The funding relationship already exists, so data
  terms can be added at renewal rather than negotiated from scratch. Programs
  should start here.
- **Template available.** No public template.

## 3. Use agreement

- **What it is.** A standalone agreement with a provider that receives no
  program funding, since there is no contract to attach data terms to.
- **Who signs.** The health department and the outside provider.
- **What it covers.** Which clients and which fields are in scope, tied to the
  client consent already on file.
- **Why it matters.** Clients do not only see funded providers. Leaving these
  providers out creates gaps in the record.
- **Template available.** No public template.

## 4. Vendor contract containing business associate provisions

- **What it is.** A single service contract with a vendor. Because the vendor
  handles protected health information on the health department's behalf, the
  Health Insurance Portability and Accountability Act (HIPAA) requires business
  associate provisions. These sit **inside** the contract as a section or
  exhibit, not as a separate document.
- **Who signs.** The health department and the vendor. One signature covers
  both the service terms and the business associate provisions.
- **What it covers.** Permitted uses, required safeguards, breach notification
  duties, flow-down to subcontractors, and return or destruction of data when
  the contract ends.
- **Template available.** VERIFIED. The U.S. Department of Health and Human
  Services publishes sample business associate contract provisions at
  https://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html

## 5. Data sharing agreement

- **What it is.** A negotiated agreement between two government programs,
  neither of which works for the other, such as a Ryan White program and
  Medicaid.
- **Who signs.** The health department and the partner agency, each with its
  own legal counsel.
- **What it covers.** Permitted uses, security, and often the technical format
  of the files exchanged.
- **Why it is the hardest.** There is no funding leverage, and each agency has
  its own confidentiality rules. Expect legal review on both sides.
- **Template available.** VERIFIED. NASTAD, the National Alliance of State and
  Territorial AIDS Directors, publishes free data sharing agreement templates
  and a user guide, built for three specific partners: state Medicaid programs,
  state HIV surveillance programs, and Ryan White Part A funded metropolitan
  areas. Produced under a cooperative agreement with HRSA. Last updated 2017.
  https://nastad.org/resources/data-sharing-agreement-dsa-templates-and-user-guide

## A sixth arrangement worth mentioning briefly

VERIFIED. Source: Broward Contracts and Descriptions in `source/`. Where two
grantees serve overlapping populations, one may permit the other to operate on
its database under a separate contract, with strict rules about what each can
see. Mention as a variation; do not build a full block around it.

---

# Section 4: What gets in the way

This section must be honest. It is the section that earns the reader's trust.
No obstacle here should be presented as already solved by any product.

## Legal counsel cannot agree on a single release of information

VERIFIED, unresolved. In one state implementation, the effort to establish a
single universal release of information covering multiple programs is recorded
as blocked, with the program unable to get legal agreement on one form. Two
related questions in the same project are also open: whether self-attestation
is acceptable for housing program clients, and how existing consents would be
carried over into a new system.

Do not name the state. Describe it as "one state implementation."

This is the single most common blocker. Say so plainly.

## Privacy segregation has a real cost

VERIFIED, documented in a signed agreement. In one city implementation, client
records are deliberately not merged across agencies in the network in order to
preserve separation between agencies. The signed statement of work records the
consequence: the program cannot produce an unduplicated count of clients served
across the whole network, because multiple agencies may be reporting the same
person.

This is a genuine trade-off, accepted in writing. Present it as evidence that
segregation is real, and that it costs something.

## Most states share only limited data with Medicaid

VERIFIED, public source. NASTAD's 2018 review of ten states' legal and
regulatory environments found that many states share only aggregate data with
Medicaid rather than client-level data, and that no state in the study allowed
outside access to the HIV surveillance database directly. Instead, matching is
done internally and limited results are returned.

Source: NASTAD, *HIV Data Privacy and Confidentiality: Legal and Ethical
Considerations for Health Department Data Sharing*, 2018.

## The law itself can be the obstacle, and so can your own policies

VERIFIED, public source. A New York City case study found that the same state
and local laws that authorize collecting public health data can also prevent a
health department from sharing and using that data across its own disease
programs. Changes in state law opened more room to share, but agency policies
still had to be rewritten, because the old policies limited integration even
after the law allowed it.

The practical lesson for the reader: check your own agency policies, not just
the statute.

Source: *Legal and Policy Barriers to Sharing Data Between Public Health
Programs in New York City: A Case Study*, American Journal of Public Health.

## Trust, not legality, is often the real blocker

VERIFIED, public source. A study of six HIV-focused health information
exchanges found that acceptance depended on legal review for each institution,
trust in the system's security, trust in the staff and agencies involved, and
whether a precedent for electronic data sharing already existed. Staff spent
considerable time overcoming resistance and mistrust even where the sharing was
lawful and secure.

## Multi-partner efforts hit practical problems

VERIFIED, public source. A published account of a multi-organization HIV data
sharing effort in Washington, DC named its obstacles directly: inconsistent
data formats, missing records when clients move between jurisdictions, care
received outside the jurisdiction, incomplete lab reporting, cost, and privacy
and ethical concerns.

## What the starting point often looks like

VERIFIED, de-identified composite. **Do not name the state. Do not name any
person. Do not quote the source document.** Describe it as what one state
described during a review of its current process.

Before any data sharing is in place, a program may be faxing enrollment forms
to a central pharmacy, moving applications by hand delivery, fax, email, and
mail, unable to see the status of a submitted application when a client calls
to ask, and dealing with persistent duplicate client records across the
pharmacy and case management systems.

## HOLD: vendor limitations

HOLD. There is documented material showing a vendor declining a customer's
request for direct database access on performance, security, and support
grounds, declining to build a simplified rapid-access application process on
the basis that other jurisdictions do not use it, requiring a paid change order
for a processing grace period, and limiting historical data migration to what
audits require.

**Do not put this on the site.** It concerns a live commercial relationship and
requires internal approval. If approved later, use it generically as the kinds
of limits a program should ask any vendor about, not as a named case study.

---

# Section 5: What it makes possible

Tie every claim to the evidence listed here. Do not add claims.

## Meeting the payer of last resort requirement

VERIFIED. Source: ADAP Features in Provide Enterprise in `source/`, plus
implementation documentation.

Because Ryan White must be the payer of last resort, programs have to confirm
that no other coverage applies before paying. Data sharing is how that is done
at scale. Documented methods include automated eligibility verification
transactions against state Medicaid systems, run both in real time during an
eligibility interview and as overnight batches, and periodic checks against a
third-party service that returns any other health plan coverage found for
enrolled clients, including coverage the client did not disclose.

This is the strongest benefit to lead with, because it is a compliance
requirement rather than a convenience.

## Faster eligibility determination

PRELIMINARY. **This finding must always appear with its caveat.**

A research project comparing test and control sites reported that in one state,
eligibility determination times dropped from more than four weeks to two days
for applications that did not require additional follow-up.

The required caveat, from the same source: it is too early to measure the
impact on health outcomes. Recertification rates in that state are reported as
better than the previous year.

Do not name the state. Do not present this as a finished result. Present it as
an early finding from a study still underway.

## UNVERIFIED: application processing time

UNVERIFIED. There is a figure in internal material claiming application
processing time fell from roughly an hour and a half to seven to ten minutes.
The source may date from 2012, which would make it a claim about a much older
version of the software.

**Do not put this on the site** until the date and source are confirmed.

## Coordinated care across many agencies

VERIFIED. Source: Broward NQC Award submission in `source/`. This document was
written for public award consideration, so it is safe to cite.

One county Ryan White Part A program uses a shared system across its provider
network to coordinate care in real time for more than 7,000 clients annually.
Program staff monitor compliance against 18 client-level outcomes and 26
associated measures across 10 funded service categories, extract data monthly
and quarterly, and review it through standing quality improvement networks made
up of the funded provider agencies.

One concrete example from the same source: a review of screening rates led the
medical quality improvement network to compare provider electronic health
record data against the shared system to identify discrepancies, then design an
improvement project around what they found.

## Finding people who have fallen out of care

VERIFIED. Source: the Florida pathway in Section 2. The out-of-care list is
produced by matching a program's active client list against state surveillance
data, and the linkage outcomes come back to the originating program.

VERIFIED, public source, for the underlying rationale: a federally funded data
linkage initiative states that improved data linkage and synchronization allows
more accurate and timely review of client care status, which has been
documented to produce increased linkage to care, engagement and re-engagement,
and ultimately increased viral suppression among people with HIV.

## Better research and outcome measurement

VERIFIED, public source. One state health department built a database combining
routine HIV surveillance data with Ryan White service records, and through data
sharing agreements also brought in lab results from neighboring jurisdictions
and prescription and lab data from the state Medicaid office. Published
research using that database examined outcomes among more than 13,000 people
with HIV and found that clients receiving more types of Ryan White funded
services had better retention in care and viral suppression.

Source: Diepstra et al., *Clinical Infectious Diseases*, 2017.

## Scale, stated honestly

VERIFIED, but these are activity measures, not outcomes. If used, label them as
scale rather than results. Across all deployments: 544 agencies, 425,518
clients, and more than 170 million clinical records, in 14 states.

---

# Section 6: Resources

Group these and give each a date last checked. Set the date to the day the site
is built.

## Agreement templates

- NASTAD, Data Sharing Agreement Templates and User Guide. Templates for
  Medicaid, HIV surveillance, and Ryan White Part A partners. Last updated
  2017.
  https://nastad.org/resources/data-sharing-agreement-dsa-templates-and-user-guide
- U.S. Department of Health and Human Services, Sample Business Associate
  Contract Provisions.
  https://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html

## Legal and privacy

- NASTAD, HIV Data Privacy and Confidentiality: Legal and Ethical
  Considerations for Health Department Data Sharing, 2018.
- Centers for Disease Control and Prevention, Data Security and Confidentiality
  Guidelines for HIV, Viral Hepatitis, Sexually Transmitted Disease, and
  Tuberculosis Programs: Standards to Facilitate Sharing and Use of
  Surveillance Data for Public Health Action, 2011.
- HRSA Policy Clarification Notice 21-02, on determining client eligibility and
  payer of last resort.
  https://ryanwhite.hrsa.gov/sites/default/files/ryanwhite/grants/pcn-21-02-determining-eligibility-polr.pdf

## Eligibility practice

- NASTAD, Ryan White HIV/AIDS Program Eligibility Toolkit.
  https://nastad.org/eligibility-toolkit
- NASTAD, Strategies to Streamline Eligibility.
  https://nastad.org/eligibility-toolkit/strategies-streamline-eligibility

## Data practice and technical assistance

- NASTAD, HIV Data Best Practices Webinar Series.
  https://nastad.org/resources/hiv-data-best-practices-webinar-series
- TargetHIV, the Ryan White technical assistance library. Note for the reader:
  this resource is in transition. Its content was frozen in mid 2025 and it now
  redirects to an interim HIV Resource Hub, with a full replacement site
  expected in 2026. Verify any link before relying on it.
  https://targethiv.org

## Research

- Diepstra et al., Clinical Infectious Diseases, 2017, on outcomes from a
  combined surveillance, Ryan White, and Medicaid database.
- Legal and Policy Barriers to Sharing Data Between Public Health Programs in
  New York City: A Case Study, American Journal of Public Health.

---

# Open items

Not for the site. Notes for the author.

1. Confirm what the collaborative eligibility research project is, who runs and
   funds it, whether findings are published, and whether the preliminary
   determination-time figure can be cited publicly.
2. Confirm the date and source of the application processing time figure before
   any use.
3. Get approval or a decline on the vendor limitations material in Section 4.
4. Request example agreements: a combined client consent form, a subrecipient
   agreement containing data clauses, and a use agreement. None were found in
   the material reviewed.
5. Confirm which jurisdictions may be named publicly. Until then the site names
   none except through the publicly published award submission, which may be
   described without naming individuals.
