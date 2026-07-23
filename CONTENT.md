# CONTENT.md

Single source of truth for the data sharing site. This file replaces all
previous content files. If another content file exists in this project, delete
it.

Organized in the order the site is built: rules first, then one part per site
section, then author notes.

---

# PART 1: RULES

## Status labels

Every fact carries a label. Respect it.

| Label | Meaning | How to use |
|---|---|---|
| VERIFIED | Confirmed in a public source or a source file | Use freely |
| PROPOSED | Designed but not built or not live | Must be described as proposed |
| PRELIMINARY | Early finding from a study still underway | Must carry its caveat |
| DO NOT PUBLISH | Fails accuracy, currency, or permission | Never appears on the site |

## Absolute rules

1. **No person's name, email address, phone number, or signature** anywhere in
   the site or the code. Unconditional.
2. **Use only what is in this file.** Invent nothing: no examples, numbers,
   quotes, or jurisdictions beyond what appears here.
3. **Spell out every acronym on first use.**
4. **No marketing voice.** Write like a peer public health agency, not a
   vendor. Short sentences. No exclamation marks.
5. **Naming jurisdictions is permitted.** States, counties, and cities may be
   named in case studies. Naming describes documented or published practice
   only, and must never imply a commercial relationship with any vendor.

## Figures that must never appear

**DO NOT PUBLISH.** These are unmet targets from a study still underway, not
results. They must not appear in any form, including as projections, goals, or
expected outcomes.

- Linkage to care improvement 10 percent
- Viral suppression improvement 8 percent
- Retention in care improvement 6 percent
- Loss of service improvement 10 percent
- Average eligibility determination 5 days or less

Also do not publish: any client-count figure for the state where sources
conflict between roughly 25,000 and 48,134. Unresolved.

Also do not publish: an application processing time claim of roughly 90 minutes
falling to 7 to 10 minutes. Source may date from 2012 and is unconfirmed.

## Disclosure rule for the collaborative eligibility study

There is a two year NIH-funded project on collaborative eligibility, with test
sites in North Carolina, Massachusetts, and South Carolina, and control sites
in Illinois and Washington. It is a Small Business Innovation Research award,
which means **the software vendor is the grantee**. It is not an independent
evaluation.

Two findings may be used. Both are PRELIMINARY and both require disclosure:

- At the North Carolina site, eligibility determination times dropped from more
  than four weeks to two days for applications not requiring follow-up.
- At the same site, recertification rates are reported as better than the
  previous year. No figure given.

Any sentence using either must state that the study was conducted by the
software's developer, and must carry the caveat that it is too early to measure
impact on health outcomes.

If that attribution makes the claim feel weak, that is the correct signal. The
independent evidence in Section 5 is stronger.

## Currency

Structural, legal, and outcome facts may be older; show the year in the text.
Attitude and technology-preference research older than about five years is
excluded.

---

# PART 2: SITE CONTENT

## SECTION 1 — What data sharing is

### Plain definition

Data sharing means the organizations involved in one person's HIV care can
securely work from the same client record, instead of each keeping its own
separate copy.

### Who is involved

- **The client.** The person receiving care. The only one who can authorize
  their information to be shared.
- **The health department.** The state, county, or city agency that receives
  the federal grant, holds the central client record, and decides who gets
  access to what. Often called the recipient.
- **Funded providers.** Clinics and community agencies the program pays to
  deliver services. Also called subrecipients.
- **Unfunded providers.** Providers treating the same clients who receive no
  program funding.
- **Vendors.** Companies working for the health department: pharmacy benefit
  managers, insurance benefit managers, software vendors.
- **Peer agencies.** Other government programs: Medicaid, Ryan White Part A
  programs, HIV surveillance.

### Background the reader needs

VERIFIED. The Ryan White HIV/AIDS Program is the federal program that pays for
medical care and support services for low-income people living with HIV who
have no other way to pay. It is administered by the Health Resources and
Services Administration (HRSA). Money flows to state and local health
departments, which contract with clinics and community agencies.

VERIFIED. Ryan White must be the payer of last resort. It can only pay after
Medicaid, Medicare, private insurance, or any other coverage. Checking for
other coverage is a legal requirement, not an efficiency.

### The federal policy statement to put near the top

VERIFIED. HRSA Policy Clarification Notice 21-02 states that recipients and
subrecipients **are encouraged to develop data-sharing strategies with other
recipients and relevant entities to reduce administrative burden across
programs**.

The same notice states its purpose is to reduce administrative and client
burden while enhancing continuity of care so clients reach viral suppression.
It eliminated the six-month recertification requirement, replacing it with
recipient-set timeframes. It affirmed that immigration status is irrelevant to
eligibility. It notes HRSA does not require documentation in person or
notarized.

**Data sharing is federal policy, not a vendor idea. Establish that early.**

Source: https://ryanwhite.hrsa.gov/sites/default/files/ryanwhite/grants/pcn-21-02-determining-eligibility-polr.pdf

### The problem statement

VERIFIED, adapted from federal framing. HRSA expects every recipient and
subrecipient to establish, implement, and monitor policies for determining
client eligibility based on HIV status, income, and residency, including
documentation requirements. Those processes often delay care, create barriers
for clients, cause retention problems, and create inefficiencies for staff and
providers. PCN 21-02 exists to provide guidance while minimizing that burden.

### THE CLIENT JOURNEY — place this early

VERIFIED, safe to adapt. Built on a fictional persona; no real client
information involved. **Use your own wording and a different name. Present as
an illustration, not a real person.**

Place early. The audience does not arrive believing it has a problem. The
journey makes the gap visible without asserting the reader has one. See the
framing note in Part 3.

**Without shared data:**

1. Applies for medication assistance at Agency A. Requires an eligibility
   application with proof of diagnosis, income, and residency.
2. Applies for care services at the same agency. Requires a **second**
   eligibility application, with proof of diagnosis, income, and residency.
3. Loses his job. Requires updated proof of income **in two systems**.
4. Applies for housing services at Agency C. Requires a **third** eligibility
   application, with proof of diagnosis, income, and residency.
5. Recertifies to continue receiving care. Requires recertification **with
   three systems**.

**With shared data:**

1. Applies for medication assistance at Agency A. Completes **one** unified
   eligibility application with proof of diagnosis, income, and residency.
2. Applies for care services at Agency B. Agency B looks up eligibility already
   verified by Agency A, expediting care.
3. Loses his job. Requires updated proof of income **in one system**.
4. Applies for housing services at Agency C. Agency C looks up eligibility
   verified through Agency A, expediting the application.
5. Recertifies. Requires recertification **in one system**.

Three applications and three recertifications become one of each.

### Benefit by audience

**For the state health department**
- It is the grant recipient and accountable for federal reporting. Sharing
  means the annual report is built from one dataset rather than assembled from
  many.
- Payer of last resort compliance is a legal requirement, and confirming other
  coverage at scale is only practical through automated exchange.
- Matching against surveillance data is what makes it possible to know who has
  fallen out of care.
- A written agreement protects the program through staff turnover, because
  responsibilities become job-specific rather than person-specific.

**For the Ryan White Part A program**
- Determinations get faster when income, coverage, and diagnosis can be
  verified electronically instead of on paper.
- Clients moving between agencies do not start over.
- The program learns which of its clients are not in care, from a match it
  could not perform alone, and gets linkage outcomes back for its own clients
  only.
- Scoped returns mean participating does not mean surrendering client data to
  everyone else in the network.

**For case managers**
- Less time searching for information, more time engaging with clients.

**For clients**
- Less paperwork, fewer delays, more consistent and continuous care.
- Not re-proving the same facts to every agency. Reducing administrative burden
  on clients is a stated federal objective, not a vendor claim.
- Faster access to medication and services.
- Care teams at different organizations see the same picture.
- If they fall out of care, someone may notice and reach out.
- Meaningful control: consent is specific, time-limited, and revocable, and
  access freezes rather than continuing when a release ends.
- The information already moves between organizations by fax, mail, and phone.
  Sharing electronically replaces that with a documented, permission-scoped,
  auditable flow.

**The honest caveat.** VERIFIED. HRSA's expert panel noted that when technology
is adopted, clients as well as staff need training, and some clients may not
have internet access or may prefer not to use it. Include this. A client
section assuming everyone wants a portal would be wrong, and HRSA says so.

---

## SECTION 2 — How it works

### THE INTERACTIVE DIAGRAM

Centerpiece of the site. Inline SVG. **Every element is a button.** Selecting
one opens a detail panel below. Nothing expanded by default. The diagram must
make sense before anything is clicked.

**Two visual languages:**
- **Parties** are solid rounded boxes. People and organizations.
- **Agreements** are pill shapes on the connecting lines. Legal instruments.

**Layout:**

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

**Rules:**
- Order the four branches left to right from easiest to hardest to establish:
  funded providers, unfunded providers, vendors, other agencies. The
  progression is part of the explanation.
- Business associate provisions sit **inside** the vendor contract. Label the
  pill "Contract, including BAA". Never show it as a separate document.
- On a narrow screen the four branches stack vertically rather than shrinking
  to illegibility.
- Keyboard accessible: tab to reach, enter or space to activate, visible focus
  state, correct aria-expanded.
- The selected element stays visibly marked while its panel is open.
- Detail text lives in the panel below, never inside the SVG.

### CASE STUDY MARKING AND LEGEND

Elements that have case studies get an **orange outline**. Elements without
keep their normal treatment.

Add a legend below the diagram covering all three:
- Solid rounded boxes = parties
- Pill shapes on the lines = agreements
- Orange outline = has case studies from real jurisdictions

**DESIGN CHECK REQUIRED.** The agreement pills already use an amber treatment.
An orange outline on an amber pill may not read as distinct. Verify legibility
on every element type, at small sizes, in every colour mode the site supports.
If it does not read clearly, say so and propose an alternative marker rather
than shipping something ambiguous.

### DETAIL PANEL: parties

Three headings each: Who they are / What happens here / Worth knowing.

**Client**
- The person receiving care. The only one who can authorize their information
  to be shared.
- At intake they sign a consent form permitting their record to move beyond the
  organization that collected it.
- Data is collected during care, but nothing moves without this signature.

**Health department**
- The state, county, or city agency that receives the federal grant and holds
  the central client record.
- Every sharing relationship runs through it. It decides who gets access, to
  what, and under which agreement.
- It is also accountable for federal reporting, so gaps in its record become
  gaps in the annual report.

**Funded providers**
- Clinics and community agencies the program pays to deliver services.
- Access is granted through the funding agreement they already sign.
- Usually the easiest relationship to establish, because the contract and the
  working relationship already exist. Most programs start here.

**Unfunded providers**
- Providers treating the same clients who receive no program funding.
- Access requires a standalone agreement, since there is no funding contract to
  attach terms to.
- Easy to overlook, but clients do not only see funded providers. Skipping them
  leaves gaps in the record.

**Vendors**
- Companies the health department hires: pharmacy benefit managers, insurance
  benefit managers, software vendors.
- Access flows from the service contract, which carries the required business
  associate provisions inside it.
- A vendor handles data on the health department's behalf, a different legal
  position from a peer agency that works for no one.

**Other agencies**
- Peer government programs: Medicaid, Ryan White Part A, HIV surveillance.
- Access requires an agreement negotiated between equals.
- Neither agency works for the other, which is what makes this the hardest
  relationship to establish.

### DETAIL PANEL: agreements

Four headings each: What it is / Who signs it / What it needs to cover /
Template (omit the heading entirely where none exists). Content in Section 3.

### CASE STUDIES INSIDE THE PANELS

Below the standard content, elements with case studies gain a "Case studies"
section: one button per jurisdiction, labelled with the place name. Selecting
one expands an explanation beneath the buttons without replacing the card
content. Keyboard accessible on the same terms as everything else.

Agreement case studies are listed under each agreement in Section 3. Party case
studies:

- **Client** — use the client journey from Section 1.
- **Health department** — Louisiana. Surveillance, prevention, and services sit
  under a single director, so data has been shared and electronically linked
  between them for years without requiring agreements between them. The lesson:
  check your organizational chart before asking what agreement you need.
- **Other agencies** — the District of Columbia, Maryland, and Virginia
  exchange. Full detail under the data sharing agreement in Section 3.
- **Funded providers, unfunded providers, vendors** — no separate case studies.
  Theirs live on the corresponding agreement pills.

### The worked example: Florida

VERIFIED. A documented two-directional loop between six local Ryan White Part A
data systems and the Florida Department of Health.

1. **The Part A program extracts its full active client list.** The file format
   is defined in the data sharing agreement.
2. **The file transfers securely,** through an electronic lab reporting portal
   or a secure file transfer service. Credentials required at every step.
3. **The state matches the list** against its HIV surveillance system for lab
   results, and cross-checks against CAREWare, the AIDS Drug Assistance
   Program, electronic health records, and Medicaid.
4. **Updated lists come back** with care status attached. The return file
   content is also defined in the agreement.
5. **Clients not in care are referred.** Those presumed not in care within that
   county are compiled into an out-of-care list and assigned into the state's
   linkage module.
6. **Linkage outcomes return** to the local Part A system, containing only that
   program's own clients.

Two things to draw out: the agreement defines the **format** of the files, not
just permission to exchange them. And the final export is **scoped to each
program's own clients**.

### Getting access is a defined process

VERIFIED, de-identified. Access to a state linkage module required three steps
with proof at each: complete the state's security and confidentiality training
module; complete and submit a system access request form; attend or watch the
onboarding training. Access follows.

Describe the recipient only as the state linkage team. **Do not name any staff
member or include any email address.**

The point: access is earned per person through training and formal request, not
granted at organization level.

### Access is controlled per client and it can end

VERIFIED. Keep brief, behind progressive disclosure.

- A provider at one agency can release specified record types about one client
  to another agency, with an end date.
- When a release ends, the receiving agency's access reverts to a read-only
  historical version of the chart as of that date. Access freezes rather than
  disappearing, so an agency can still account for its own past work.
- When an agency closes its relationship with a client, the release typically
  terminates about thirty days later, allowing documentation to be completed.
- If a client returns, the agency submits a request that routes to the health
  department for a decision.

### Data segregation is built in

VERIFIED. This appears independently in four separate implementations, which is
why it can be stated as a general principle rather than an example.

- In one county arrangement, services documented under programs outside Ryan
  White and housing funding cannot be seen by either of those grantees.
- In one city implementation, duplicate records merge only within a single
  agency, never across agencies in the network.
- In the Florida pathway, each program's export contains only its own clients.
- In a North Carolina design, eligibility data is shared across Part A and Part
  B users while Part A care data remains accessible only to Part A users.

**Share what coordination requires. Segregate the rest.**

### A proposed model for shared eligibility

PROPOSED. **Not built. Describe as a proposed design, never as something in
operation.**

Under a proposed model in one state, participating grantees would accept a
standard statewide notice of eligibility from one another. A client presenting
a valid notice would not re-prove residency, income, or HIV diagnosis. Their
eligibility at the new agency would align to the expiration date on the notice
rather than restarting a full term. Either grantee could reassess fully within
45 days of expiration.

Say "several participating grantees across one state." Do not list them.

---

## SECTION 3 — What agreements are needed

### THE AGREEMENT STACK — lead with this

VERIFIED. The most useful structural finding. Agreements do not work
independently.

To enable one sharing relationship between a state and a Part A program, four
things had to line up:

1. **A data sharing agreement between the state and the Part A program.**
2. **A second data sharing agreement** specifically permitting lab test results
   to be shared. Labs are treated separately.
3. **A client consent form that actually covers the data in question** —
   including sharing eligibility data with the state, and where applicable lab
   results, medication dispenses, and premium payments.
4. **Subrecipient agreements confirmed consistent** with the agreements above.

**Three lessons:**

- One relationship can require more than one data sharing agreement. Different
  data types may need their own instrument; lab results are the common example.
- **The consent form must be checked against the agreement.** A signed consent
  that does not name the data categories the agreement contemplates will stop
  the exchange even though both organizations have agreed to it.
- **Existing subrecipient agreements must be reviewed, not assumed.** Programs
  already holding them will think that step is done. It is not.

Present as a practical four-step checklist.

### 1. Client consent form

Also called a release of information.

- **What it is.** The client's written authorization for their information to
  be shared beyond the organization collecting it. Everything downstream
  depends on it.
- **Who signs.** The client, usually at intake with a case manager.
- **What it needs to cover.** Which categories of organization may receive the
  data, what may be shared and for what purpose, how long it lasts, and how to
  revoke it. A form naming only one program is the most common reason sharing
  stalls later.
- **Template.** None public. See Section 4: this is where programs most often
  get stuck.

**Case studies:**

- **Miami-Dade County, Florida.** Uses a single combined consent form so
  partners across Part A, the Minority AIDS Initiative, Ending the HIV
  Epidemic, Part B, and the AIDS Drug Assistance Program can share access to
  the same client data. One signature covers the network.
- **North Carolina.** In planning a state-to-Part A exchange, the consent had
  to be checked to confirm it covered sharing eligibility data with the state,
  plus lab results, medication dispenses, and premium payments where
  applicable. Illustrates that consent scope determines what an agreement can
  actually move.

**Design detail worth including.** VERIFIED. NASTAD suggests jurisdictions
consider adding language permitting the health department to tell a testing
provider whether a person who tested positive there was subsequently linked to
care. Whether this is allowed depends on state and local regulation. A precise
example of how consent language written at the start determines what is
possible later.

### 2. Subrecipient agreement

- **What it is.** The contract through which the health department passes
  federal funds to a clinic or agency, with data handling written in as a
  condition of the funding.
- **Who signs.** The health department and each funded provider.
- **What it covers.** Who may access records, required security practices, and
  what happens to data if funding ends.
- **Why it is easiest.** The funding relationship already exists, so data terms
  can be added at renewal rather than negotiated from scratch.
- **Template.** None public.

**Case studies:**

- **North Carolina.** Existing subrecipient agreements had to be reviewed and
  confirmed consistent with new data sharing agreements. They were not simply
  left in place.
- **Broward County, Florida.** All funded agencies across the Part A network
  document in the shared system, coordinating care for more than 7,000 clients
  annually, with compliance monitored against 18 client-level outcomes and 26
  measures across 10 funded service categories.

### 3. Use agreement

- **What it is.** A standalone agreement with a provider receiving no program
  funding, since there is no contract to attach data terms to.
- **Who signs.** The health department and the outside provider.
- **What it covers.** Which clients and which fields are in scope, tied to the
  client consent already on file.
- **Why it matters.** Clients do not only see funded providers.
- **Template.** None public.

**Case studies: none.** Leave this element without an orange outline. Do not
manufacture an example. The absence is honest and informative: it shows readers
where documented practice exists and where it does not.

### 4. Vendor contract, including business associate provisions

- **What it is.** A single service contract. Because the vendor handles
  protected health information on the health department's behalf, the Health
  Insurance Portability and Accountability Act (HIPAA) requires business
  associate provisions. These sit **inside** the contract as a section or
  exhibit, not as a separate document.
- **Who signs.** The health department and the vendor. One signature covers
  both.
- **What it covers.** Permitted uses, required safeguards, breach notification,
  flow-down to subcontractors, and return or destruction of data at the end.
- **Template.** VERIFIED. The U.S. Department of Health and Human Services
  publishes sample business associate contract provisions.
  https://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html

**Case studies:**

- **Illinois.** Two-way automated exchange with its pharmacy benefit manager:
  enrollment, terminations, and benefit changes go out; dispense authorization
  requests and full medication dispense history come back.
- **Washington.** Pharmacy benefit manager integration links eligibility
  directly to point-of-sale medication pickup.
- **Multiple states.** Automated Medicaid eligibility verification transactions
  run during intake and recertification, plus periodic checks against a
  third-party service that identifies other coverage a client did not disclose.
  This is how payer of last resort compliance is achieved at scale.

### 5. Data sharing agreement

- **What it is.** A negotiated agreement between two government programs,
  neither of which works for the other, such as a Ryan White program and
  Medicaid.
- **Who signs.** The health department and the partner agency, each with its
  own legal counsel.
- **What it covers.** Permitted uses, security, and often the technical format
  of the files exchanged.
- **Why it is hardest.** No funding leverage, and each agency has its own
  confidentiality rules. Expect legal review on both sides.
- **Template.** VERIFIED. NASTAD publishes free data sharing agreement
  templates and a user guide built for three specific partners: state Medicaid
  programs, state HIV surveillance programs, and Ryan White Part A funded
  metropolitan areas. Produced under a cooperative agreement with HRSA. Last
  updated 2017.
  https://nastad.org/resources/data-sharing-agreement-dsa-templates-and-user-guide

**Case studies — lead with the first:**

- **District of Columbia, Maryland, and Virginia.** The flagship, because it is
  independent, published, and reported by the jurisdictions themselves rather
  than by a vendor. Many people with HIV in the Washington metropolitan area
  live, work, and receive care across three jurisdictions. In 2017 the three
  health departments created a cross-jurisdictional surveillance data exchange,
  developing agreements, standardizing their statistical code and variables,
  and building a secure file transfer site for quarterly exchange.

  Reported results: **396 fewer people with HIV estimated to be living in the
  District each year** across a five-year period, correcting double-counting
  rather than reflecting a change in the epidemic. And duplicate review volume
  **down 74 percent with Maryland and 81 percent with Virginia**.

  Staff from all three continue to meet regularly. The exchange helped clean up
  prevalence data, work with providers on reporting, and remove people from
  not-in-care lists who had simply moved, so staff effort could focus on people
  actually in their jurisdiction.

  Source: NASTAD, citing Hamp et al., JMIR Public Health and Surveillance,
  2018, and Ocampo et al., same journal, 2016.

- **Louisiana.** Surveillance, prevention, and services sit under a single
  director, so data has been shared and electronically linked between them for
  years, and agreements are not required for matching between them. Separately,
  Medicaid sends a monthly file to match against surveillance data to calculate
  viral suppression among Medicaid enrollees, and the surveillance unit runs
  quarterly matches against birth and death registry data. Lesson: the first
  question is how your health department is organized, not what agreement you
  need. Source: Louisiana Integrated HIV Prevention and Care Plan, CY2022–2026.

- **North Carolina.** Built an integrated data hub combining HIV surveillance,
  ADAP and Ryan White, and Medicaid data. The health department matches
  internally, then limits what is shared back to each reporting entity,
  including returning data to a managed care organization for its own enrollees
  only. Source: NASTAD, HIV Data Privacy and Confidentiality, 2018.

- **Florida.** A documented two-way loop between six Part A programs and the
  state. Full description in Section 2.

- **Wisconsin.** Relies on broader legal authority to share data to protect the
  individual's health, prevent transmission, or diagnose and care for the
  patient, without reference to specific partner agencies. Shows that states
  take different legal routes to the same place. Source: NASTAD, 2018.

### A sixth arrangement, briefly

VERIFIED. Where two grantees serve overlapping populations, one may permit the
other to operate on its database under a separate contract, with strict rules
about what each can see. Mention as a variation; do not build a full block
around it.

### Who has agreements with whom

VERIFIED. Survey data collected 2017, published by NASTAD 2019. Show the year.

NASTAD's National HIV Prevention Inventory recorded which partners health
departments had data sharing agreements with for Data to Care activities. Base
of 44 jurisdictions.

| Partner | Jurisdictions | Percent |
|---|---|---|
| Internal health department programs | 32 | 73% |
| Local health departments | 21 | 48% |
| Community based organizations | 14 | 32% |
| Health care providers | 13 | 30% |
| Hospitals | 8 | 18% |
| Health care plans, public or private | 5 | 11% |
| Department of Veterans Affairs | 3 | 7% |
| Tribal governments or organizations | 3 | 7% |
| Health information exchanges | 1 | 2% |

Source: https://nastad.org/data2care/data.html

Reproduce this. It answers the question a program leader actually has, which is
not whether sharing is possible but whether anyone is doing it and with whom.
The ordering also corroborates the easy-to-hard sequence in the diagram.

### Surveillance-facing versus Medicaid-facing agreements

Present as considerations, not legal advice.

**Surveillance-facing**
- Surveillance data is collected under public health authority, not client
  consent. Different legal footing from Ryan White program data, which is why
  no state in NASTAD's review permitted outside access to the surveillance
  database itself.
- The established pattern is that the health department matches internally and
  returns limited results, rather than granting access.
- Lab reporting completeness is the practical constraint. Gaps produce false
  entries on not-in-care lists.

**Medicaid-facing**
- Medicaid is a HIPAA-covered entity; surveillance programs generally are not.
  Different rules govern the exchange.
- HIPAA permits a state health plan to share enrollment and eligibility
  information with other government programs providing public benefits where a
  statute or regulation requires or expressly authorizes it, or authorizes a
  combined data system. It also permits disclosure to another agency
  administering a public benefits program serving similar populations, and for
  case management and care coordination.
- The practical output is often narrower than programs expect. Many states
  exchange only aggregate data with Medicaid.
- Direction of flow differs. In Louisiana, Medicaid sends the file and the
  health department does the matching.

**Both**
- The minimum necessary standard applies. HIPAA requires reasonable efforts to
  limit protected health information to the minimum necessary for the purpose.
  Health departments commonly adopt this standard even where HIPAA does not
  apply to them.
- A memorandum of understanding is used where parties want to work together
  without creating legal obligations carrying liability for non-compliance.

Source: https://www.publichealthlawcenter.org/resources/introduction-legal-agreements-facilitate-public-health-data-sharing

### PLACEHOLDER: example agreement documents

Each agreement panel has a slot for an example document.

Filled: NASTAD data sharing agreement templates; HHS sample business associate
contract provisions; and the published Louisiana interagency data use agreement
(https://www.medicaid.gov/state-resource-center/innovation-accelerator-program/iap-downloads/program-areas/la-dua-example.pdf).

Empty, being sourced separately: a client consent form, a subrecipient
agreement with data clauses, and a use agreement.

**Render empty slots as a visible empty state naming the document. Do not
remove the slot, do not substitute a generic template, do not write "none
available" as though none exists. They are coming.**

---

## SECTION 4 — What gets in the way

Must be honest. This section earns the reader's trust. No obstacle here should
be presented as solved by any product.

### JOINT ELIGIBILITY IS NOT JOINT CERTIFICATION

**The most important distinction in this file. Put it prominently.**

The objection that stops most programs: in a state's own human services
programs, certification for one program does not carry over to another.
Eligibility for food assistance does not set the certification period for
medical assistance. Why should Ryan White differ?

The resolution: joint eligibility does not mean joint certification. What is
shared is the **timeframe for collecting eligibility data from the client**,
not the certification or enrollment decision. Two programs can agree on when to
ask the client for documents while each retains its own approval authority.

Almost every other objection dissolves once this is clear.

### Other objections a program will raise

VERIFIED, generalized. **Do not attribute these to any jurisdiction.** Any
state considering this will raise some version of them.

**Retroactive risk across programs.** If a client is certified for care
services, then applies months later for drug assistance and is denied on the
same income or residency documentation, does that denial reach backward and
invalidate the original certification, meaning the program cannot bill for care
already delivered?

The answer: eligibility decisions are date stamped, and every service is
checked against the eligibility record in effect on the service date. A denial
for a reason that does not affect care eligibility does not disturb care
eligibility. **A program leader will ask this. Answer it.**

**Who decides eligibility for a state-run program.** A state-managed drug
assistance program should not have its eligibility determined by a non-state
subrecipient agency. Resolution: subrecipients help collect the data but never
make the certification or enrollment decision. Collection is delegated;
determination is not.

**Audit exposure.** A state-managed program faces higher scrutiny, including
340B eligibility and state audits. Joining programs means an audit of one
exposes the eligibility records of the other, and reviewers unfamiliar with the
program may not understand why a client with other coverage was certified at
all. The counterargument is that consistent, date-stamped, auditable records
are a stronger audit position than reconstructing decisions from paper. But the
fear is legitimate and should be named.

**Why applications stall.** Income documentation is the common cause of
applications being held: pay stubs showing a marital status inconsistent with
the application, income not matching what was reported to the insurance
marketplace, household income not reported or not calculated correctly, and pay
stubs that do not match the application. Specific and unglamorous; shows the
site understands daily eligibility work.

### The uncomfortable one

VERIFIED, generalized. **Never attribute to any jurisdiction.**

In programs without shared data, the practical mechanism for obtaining required
documentation is certification lapsing. The effective enforcement is the client
being turned away at the pharmacy. Electronic verification removes the need to
use medication access as leverage.

State as a general feature of paper-based programs. A stronger argument for
data sharing than any efficiency claim, and more honest.

### What HRSA's own expert panel found

VERIFIED. HRSA's HIV/AIDS Bureau convened a Technical Expert Panel on
Streamlining Eligibility in August 2023 and published a summary. Twelve
representatives from six state health departments on day one, plus NASTAD; more
than twenty participants across Parts A through D on day two.

Its finding on data: access to and effective use of data, **especially through
establishing and maintaining data-sharing agreements, remain challenging for
multiple reasons**. Recipients could benefit from help identifying other data
sources containing key information for confirmation, such as residency and
income verification.

On practice: some jurisdictions have successfully obtained data from other
state agencies, such as **Medicaid to verify income and the state's motor
vehicle department to verify residency**. Careful attention must be paid to
privacy concerns, and both **identifying the right gatekeepers who can provide
access, and establishing agreements, can be time consuming**.

Barriers the panel named:
- Documenting insurance status and income, whether obtained from clients or
  other sources.
- Maintaining contact with, and updating residency for, clients who move
  frequently, especially across a state or metropolitan area boundary.
- Concerns about having to reimburse the program for medication and care costs
  for clients who lose eligibility.

Source: https://ryanwhite.hrsa.gov/sites/default/files/ryanwhite/resources/HRSA-Streamling-Eligibility-TEP-Exec-Summary-Revised.pdf

**Federally sourced barriers carry more weight than the same points made by a
vendor. Use this throughout.**

### Legal counsel cannot agree on a single release of information

VERIFIED, unresolved. In one state implementation, establishing a single
universal release of information covering multiple programs is recorded as
blocked, with the program unable to get legal agreement on one form. Two
related questions remain open: whether self-attestation is acceptable for
housing program clients, and how existing consents carry over into a new
system.

**Do not name the state.** This is the single most common blocker. Say so
plainly.

### Privacy segregation has a real cost

VERIFIED, documented in a signed agreement. In one city implementation, client
records are deliberately not merged across agencies in order to preserve
separation. The signed statement of work records the consequence: the program
cannot produce an unduplicated count of clients served across the network,
because multiple agencies may report the same person.

A genuine trade-off, accepted in writing. Evidence that segregation is real and
that it costs something.

### Most states share only limited data with Medicaid

VERIFIED, public source. NASTAD's 2018 review of ten states found many share
only aggregate data with Medicaid rather than client-level data, and no state
in the study allowed outside access to the HIV surveillance database directly.
Matching is done internally and limited results returned.

### The law itself can be the obstacle, and so can your own policies

VERIFIED, public source. A New York City case study found the same state and
local laws that authorize collecting public health data can prevent a health
department from sharing and using it across its own disease programs. Changes
in state law opened more room, but agency policies still had to be rewritten,
because old policies limited integration even after the law allowed it.

Practical lesson: check your own agency policies, not just the statute.

Source: Legal and Policy Barriers to Sharing Data Between Public Health
Programs in New York City: A Case Study, American Journal of Public Health.

### Trust, not legality, is often the real blocker

VERIFIED, public source. A study of six HIV-focused health information
exchanges found acceptance depended on legal review for each institution, trust
in the system's security, trust in the staff and agencies involved, and whether
a precedent for electronic data sharing already existed. Staff spent
considerable time overcoming resistance and mistrust even where the sharing was
lawful and secure.

### Multi-partner efforts hit practical problems

VERIFIED, public source. A published account of a multi-organization effort in
Washington, DC named its obstacles: inconsistent data formats, missing records
when clients move between jurisdictions, care received outside the
jurisdiction, incomplete lab reporting, cost, and privacy and ethical concerns.

### Partners that are consistently hard

VERIFIED. Health departments report difficulty obtaining lab data for people
enrolled in clinical trial research, and for people receiving care at
Department of Veterans Affairs facilities, where relationships with leadership
or the privacy officer at individual medical centers are generally needed.

Community based organizations present a different problem: they do not carry
the same public health authority as a health department. Some health
departments work with them on linkage only where the person was previously a
client of that organization, or gives consent to be linked to that specific
provider.

Source: https://nastad.org/data2care/data.html

### What the starting point often looks like

VERIFIED, de-identified composite. **Do not name the state. Do not name any
person. Do not quote the source.**

Before any data sharing, a program may be faxing enrollment forms to a central
pharmacy, moving applications by hand delivery, fax, email, and mail, unable to
see the status of a submitted application when a client calls to ask, and
dealing with persistent duplicate client records.

Where systems do not share, **manual requests, phone calls, and workarounds are
needed to access information**. The consequences: slower access to services,
duplicate work and higher costs, missed opportunities for outreach and
re-engagement, service gaps affecting client outcomes, and weaker data for
planning and surveillance.

### Write the agreement even when you do not need one

VERIFIED. Although many programs share data internally without an agreement,
NASTAD's guidance is that a formal agreement or policy is best practice, for
consistency and for continuity when staff turn over. A formal document
describing data flow prevents having to rebuild buy-in with new leadership.

NASTAD's phrasing is worth adopting: responsibilities for data flow should be
**job-specific, not person-specific**.

Not a technology argument. It says the agreement protects the program from its
own staffing changes.

### What determines difficulty

VERIFIED. Effective data sharing requires collaboration between the health
department's prevention, care, and surveillance programs, and how hard that is
depends on organization.

- Same division under the same director: likely fewer barriers.
- Organizationally siloed, or little history of working together: additional
  approval and documentation.
- Local programs at city or county level may struggle to access state-held data
  without a formal agreement.

**The most practical thing to tell a program leader: before asking what
agreement you need, look at your own organizational chart.**

---

## SECTION 5 — What it makes possible

Tie every claim to evidence listed here. Add nothing.

### Structure

Present as a before-and-after across five dimensions:

| | Without sharing | With sharing |
|---|---|---|
| Client record | Incomplete picture across systems | One complete record with eligibility, labs, services, and care history |
| Eligibility | Duplicate verifications and paperwork | Existing determinations reused for quicker access |
| Care coordination | Manual coordination across systems and jurisdictions | Real-time visibility and coordination |
| Program transitions | Care disrupted when clients move between jurisdictions | Continuous care across jurisdictions |
| Program data | Limited data for planning | Complete, consistent data across programs |

Ground the claims in the federal findings below rather than asserting them.

### What HRSA's expert panel reported

VERIFIED. Recipients who changed their eligibility confirmation timeframe
reported: decreased staff time processing applications, decreased burden on
clients, quicker turnarounds and approvals, and increased enrollment with fewer
clients disenrolled. Longer timeframes mean fewer applications to process,
letting staff focus on adherence and engagement in care.

**Federally reported benefits, described by the recipients who experienced
them. Lead with these.**

### Meeting the payer of last resort requirement

VERIFIED. Because Ryan White must be the payer of last resort, programs must
confirm no other coverage applies before paying. Data sharing is how that is
done at scale: automated eligibility verification transactions against state
Medicaid systems, run in real time during an eligibility interview and as
overnight batches, plus periodic checks against a third-party service returning
other coverage found for enrolled clients, including coverage the client did
not disclose.

**Strongest benefit to lead with, because it is a compliance requirement rather
than a convenience.**

### Cross-jurisdiction accuracy

VERIFIED. See the District of Columbia, Maryland, and Virginia case study in
Section 3. An estimate 396 people lower per year, and duplicate review volume
down 74 and 81 percent.

### Faster eligibility determination

PRELIMINARY. **Must always appear with its caveat and the disclosure in Part
1.**

In a federally funded research project conducted by the software's developer,
at the North Carolina site, eligibility determination times dropped from more
than four weeks to two days for applications not requiring follow-up.
Recertification rates at that site are reported as better than the previous
year.

The required caveat, from the same source: it is too early to measure impact on
health outcomes.

### Coordinated care across many agencies

VERIFIED, from a document written for public award consideration. One county
Ryan White Part A program uses a shared system across its provider network to
coordinate care in real time for more than 7,000 clients annually. Staff
monitor compliance against 18 client-level outcomes and 26 associated measures
across 10 funded service categories, extract data monthly and quarterly, and
review it through standing quality improvement networks made up of the funded
provider agencies.

One concrete example: a review of screening rates led the medical quality
improvement network to compare provider electronic health record data against
the shared system to identify discrepancies, then design an improvement project
around what they found.

### Finding people who have fallen out of care

VERIFIED. See the Florida pathway in Section 2.

VERIFIED, public source, for the rationale: a federally funded data linkage
initiative states that improved data linkage and synchronization allows more
accurate and timely review of client care status, which has been documented to
produce increased linkage to care, engagement and re-engagement, and ultimately
increased viral suppression among people with HIV.

### Better research and outcome measurement

VERIFIED, public source. One state health department built a database combining
routine HIV surveillance data with Ryan White service records, and through data
sharing agreements also brought in lab results from neighbouring jurisdictions
and prescription and lab data from the state Medicaid office. Published
research using it examined outcomes among more than 13,000 people with HIV and
found that clients receiving more types of Ryan White funded services had
better retention in care and viral suppression.

Source: Diepstra et al., Clinical Infectious Diseases, 2017.

### Scale, stated honestly

VERIFIED, but these are activity measures, not outcomes. If used, label them as
scale rather than results: 544 agencies, 425,518 clients, more than 170 million
clinical records, across 14 states.

---

## SECTION 6 — Resources

Group these; give each a date last checked, set to the build date.

**Federal policy and guidance**
- HRSA HIV/AIDS Bureau, Technical Expert Panel Executive Summary: Streamlining
  Eligibility for the Ryan White HIV/AIDS Program, August 2023.
  https://ryanwhite.hrsa.gov/sites/default/files/ryanwhite/resources/HRSA-Streamling-Eligibility-TEP-Exec-Summary-Revised.pdf
- HRSA Policy Clarification Notice 21-02, Determining Client Eligibility and
  Payor of Last Resort.
  https://ryanwhite.hrsa.gov/sites/default/files/ryanwhite/grants/pcn-21-02-determining-eligibility-polr.pdf
- HRSA expert panel summaries index.
  https://ryanwhite.hrsa.gov/resources/expert-panel-summaries

**Federal projects**
- Linking Eligibility Across the Ryan White HIV/AIDS Program Parts, JSI
  Research & Training Institute, 2024 to 2026.
  https://targethiv.org/spns/linking-eligibility
- HRSA funding notice HRSA-24-057.
  https://www.hrsa.gov/grants/find-funding/HRSA-24-057
- HIV/STI Data Integration for Improved Ryan White Program Outcomes, Georgetown
  University, 2019 to 2023. https://targethiv.org/ta-org/hivsti-data-integration

**Agreement templates**
- NASTAD, Data Sharing Agreement Templates and User Guide, 2017.
  https://nastad.org/resources/data-sharing-agreement-dsa-templates-and-user-guide
- HHS, Sample Business Associate Contract Provisions.
  https://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html
- Medicaid Innovation Accelerator Program, State Data Use Agreement Example
  (Louisiana).
  https://www.medicaid.gov/state-resource-center/innovation-accelerator-program/iap-downloads/program-areas/la-dua-example.pdf

**Data to Care and legal practice**
- NASTAD, Data to Care: Data Sharing, Prioritization, and Management, 2019.
  https://nastad.org/data2care/data.html
- NASTAD, HIV Data Privacy and Confidentiality: Legal and Ethical
  Considerations for Health Department Data Sharing, 2018.
  https://nastad.org/sites/default/files/2022-01/PDF_HIV_Data_Privacy_Confidentiality_2018.pdf
- Public Health Law Center, An Introduction to Legal Agreements that Facilitate
  Public Health Data Sharing.
  https://www.publichealthlawcenter.org/resources/introduction-legal-agreements-facilitate-public-health-data-sharing
- CDC, Data Security and Confidentiality Guidelines for HIV, Viral Hepatitis,
  STD, and TB Programs, 2011.
- NASTAD, Considerations for Data Sharing Between Health Departments and Health
  Plans.
  https://nastad.org/sites/default/files/2023-01/PDF-Data-Sharing-Technical-Resource.pdf

**Eligibility practice**
- NASTAD, Ryan White HIV/AIDS Program Eligibility Toolkit.
  https://nastad.org/eligibility-toolkit
- NASTAD, Strategies to Streamline Eligibility.
  https://nastad.org/eligibility-toolkit/strategies-streamline-eligibility

**State plans**
- Louisiana Integrated HIV Prevention and Care Plan, CY2022 to 2026.
  https://ldh.la.gov/assets/oph/HIVSTD/LouisianaIntegratedHIVPreventionandCarePlanCY2022-2026.pdf

**Research**
- Hamp et al., Cross-Jurisdictional Data Exchange Impact on the Estimation of
  the HIV Population Living in the District of Columbia, JMIR Public Health and
  Surveillance, 2018.
- Ocampo et al., Improving HIV Surveillance Data for Public Health Action in
  Washington, DC, JMIR Public Health and Surveillance, 2016.
- Diepstra et al., Clinical Infectious Diseases, 2017.
- Legal and Policy Barriers to Sharing Data Between Public Health Programs in
  New York City: A Case Study, American Journal of Public Health.

**Note for readers about TargetHIV.** The Ryan White technical assistance
library is in transition. Content was frozen in mid 2025 and now redirects to
an interim hub, with a replacement expected in 2026. Verify links before
relying on them. https://targethiv.org

---

# PART 3: NOTES FOR THE AUTHOR

Not for the site.

## Framing: what the audience currently believes

Program leaders largely believe they are managing fine on manual processes or
limited free-tool automation, and unless they have been penalized by the
federal funder, they perceive no gaps. Programs often do not know what the best
practices are.

**The audience does not arrive believing it has a problem.** A site organized
as problem, then solution, loses readers at the first step because they reject
the premise.

What follows:
- **Lead with the client journey.** It makes the gap visible without asserting
  the reader has one.
- **Build as a best-practices resource**, not an argument for a purchase. That
  matches what program leaders say they are missing, and it is why neutral,
  NASTAD-style positioning is right commercially as well as ethically.
- **Audit and compliance framing carries weight where efficiency framing does
  not.** The payer of last resort requirement is the strongest opening.

## Conference alignment

A draft abstract exists for a 2026 NASTAD session titled *Roadmap to
Implementing Joint and Streamlined Eligibility*. Its four learning objectives
closely match this site's structure, and it promises a roadmap for implementing
data sharing agreements to support eligibility, which is the agreement stack in
Section 3.

**Position the site as the written companion to that session** rather than a
separate artifact: same structure, permanent, linkable, holding detail a
session cannot.

The abstract handles the study figures correctly, using future tense and
omitting the target percentages. It does state the session will describe impact
on clinical outcomes, which the study says is too early to measure. **The site
must not inherit that promise.** Operational impact is defensible; clinical
outcome impact is not, yet.

## Open items

1. Example agreements: a combined client consent form, a subrecipient agreement
   with data clauses, a use agreement. Being sourced separately.
2. Customer outcome data. Three separate searches of internal material found
   none. Would have to come from a customer's quality management reporting.
3. Client voice. No testimony, survey, or satisfaction data exists in public
   research or internal material.
4. Resolve the conflicting client-count figures before publishing either.
5. Confirm the date and source of the application processing time claim before
   any use.
6. Check whether the JSI eligibility project has published outputs; its period
   ended 31 July 2026.
