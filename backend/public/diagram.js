/* Data Sharing: interactive agreements diagram.
   Structure and legend are APPROVED in the source file (02-data-sharing.md,
   2.2). Panel text for each node is drafted content, carried over verbatim
   from the plain-list version this replaces; nothing here is new content.
   Case-study attachment is informational only: an APPROVED case study earns
   the solid orange outline the source file specifies. A DRAFT case study
   earns a lighter, dashed marker so a reader can still find it, without
   overstating what's actually been reviewed. No case study, no marker: the
   honest absence stays, per the source file's rule for the use agreement. */

var DIAGRAM_DATA = {
  "client": {
    type: "party",
    name: "Client",
    panelHTML:
      '<p><em>Who they are:</em> the person receiving RWHAP-funded HIV care and support services.</p>' +
      '<p><em>What happens here:</em> The client signs a consent form (or release of information) setting what can be shared, with whom, and for how long. No consent, no sharing. <span class="source-note">[source: PCN 21-02]</span></p>' +
      '<p><em>Worth knowing:</em> Consent can be time-limited. When it ends, the agency keeps what it already has but stops receiving updates. See the Benefits by party tab for what broader consent gets the client.</p>',
    caseStudies: []
  },
  "health-department": {
    type: "party",
    name: "Health department",
    panelHTML:
      '<p><em>What happens here:</em> Usually the hub. Receives data from providers, vendors, and other agencies. Often responsible for confirming a client\u2019s other coverage to meet the payer-of-last-resort requirement. <span class="source-note">[source: PCN 21-02]</span></p>' +
      '<p><em>Worth knowing:</em> Programs under one director can share internally without a separate agreement. Sharing outside the department, like with Medicaid, still needs one. See the Benefits by party tab for what the health department gains from data sharing.</p>',
    caseStudies: [
      { id: "cs-louisiana", place: "Louisiana", status: "DRAFT, NEEDS REVIEW" }
    ]
  },
  "funded-providers": {
    type: "party",
    name: "Funded providers",
    panelHTML:
      '<p><em>What happens here:</em> Document services in the shared system under a subrecipient agreement that sets what data they collect, how it\u2019s used, and how it\u2019s reported back. <span class="source-note">[source: RWHAP Part A Program Manual]</span></p>' +
      '<p><em>Worth knowing:</em> The funding relationship gives data-sharing terms leverage: they can be written directly into the funding agreement.</p>',
    caseStudies: []
  },
  "unfunded-providers": {
    type: "party",
    name: "Unfunded providers",
    panelHTML:
      '<p><em>What happens here:</em> No funding relationship, so sharing has to be negotiated on its own terms, usually through a use agreement.</p>' +
      '<p><em>Worth knowing:</em> No funding lever. The case for sharing rests on client benefit alone.</p>',
    caseStudies: []
  },
  "vendors": {
    type: "party",
    name: "Vendors",
    panelHTML:
      '<p><em>What happens here:</em> Runs through a contract with business associate provisions under HIPAA, since the vendor handles protected health information on the program\u2019s behalf. <span class="source-note">[source: HHS Sample Business Associate Agreement Provisions]</span></p>' +
      '<p><em>Worth knowing:</em> The business associate provisions live inside the vendor contract itself. There is no Benefits entry for vendors, by design: a vendor relationship is a standard contract signed as a condition of doing business, separate from the mutually negotiated relationships the other parties have.</p>',
    caseStudies: []
  },
  "other-agencies": {
    type: "party",
    name: "Other agencies",
    panelHTML:
      '<p><em>What happens here:</em> Runs through its own data sharing agreement, scoped to what each side needs and is entitled to receive back. Most often Medicaid (coverage verification) or another jurisdiction\u2019s health department (surveillance matching).</p>' +
      '<p><em>Worth knowing:</em> Hardest category to standardize. Each partner has its own legal authority and comfort level, so agreements get negotiated one partner at a time. See the Benefits by party tab, where this partner\u2019s benefit is flagged as still needing research.</p>',
    caseStudies: [
      { id: "cs-dc-md-va", place: "District of Columbia, Maryland, and Virginia", status: "DRAFT, NEEDS REVIEW" }
    ]
  },
  "consent": {
    type: "agreement",
    name: "Client consent form",
    panelHTML:
      '<p><em>What it is:</em> The document authorizing what client data can be shared, with whom, and for how long. It goes by different names depending on the program: a consent form, a release of information, or a section built into a broader program authorization form.</p>' +
      '<p><em>Who signs it:</em> The client, or their authorized representative.</p>' +
      '<p><em>What it needs to cover:</em></p>' +
      '<ul>' +
      '<li>Who it authorizes sharing with: the agencies involved, vendors supporting the program, contracted and non-contracted providers (including subrecipients), and other authorized users.</li>' +
      '<li>What the data can be used for. Common authorized uses include: establishing eligibility; managing enrollment; providing care; managing program operations; and compliance and audit-related purposes, for example reporting to funders on services provided and how funding was used, and the program\u2019s own monitoring and auditing of its subrecipients.</li>' +
      '<li>Scope, and how it can grow. When a program moves toward a more integrated system, consent often needs to be broadened to match, for example from a single Ryan White program\u2019s clients to all Ryan White programs across a state. That\u2019s a deliberate scope decision to make, separate from the technical work of integration.</li>' +
      '</ul>' +
      '<p><em>Template:</em> Yet to source.</p>',
    caseStudies: [
      { id: "cs-north-carolina", place: "North Carolina", status: "DRAFT, NEEDS REVIEW" },
      { id: "cs-miami-dade", place: "Miami-Dade County, Florida", status: "DRAFT, NEEDS REVIEW" }
    ]
  },
  "subrecipient": {
    type: "agreement",
    name: "Subrecipient agreement",
    panelHTML:
      '<p><em>What it is:</em> The agreement between a RWHAP recipient and a funded provider, setting the terms under which the provider documents and reports client data. <span class="source-note">[source: RWHAP Part A Program Manual]</span></p>' +
      '<p><em>Who signs it:</em> The RWHAP recipient (grantee) and the funded subrecipient agency.</p>' +
      '<p><em>What it needs to cover:</em> What data the subrecipient collects, how it\u2019s used, and how it\u2019s reported back to the recipient.</p>' +
      '<p><em>Template:</em> Yet to source.</p>',
    caseStudies: [
      { id: "cs-north-carolina", place: "North Carolina", status: "DRAFT, NEEDS REVIEW" },
      { id: "cs-broward", place: "Broward County, Florida", status: "DRAFT, NEEDS REVIEW" },
      { id: "cs-illinois", place: "Illinois", status: "DRAFT, NEEDS REVIEW" }
    ]
  },
  "use-agreement": {
    type: "agreement",
    name: "Use agreement",
    panelHTML:
      '<p><em>What it is:</em> The agreement covering data sharing with an unfunded provider, where no funding relationship exists to set the terms.</p>' +
      '<p><em>Who signs it:</em> The health department (or recipient) and the unfunded provider.</p>' +
      '<p><em>What it needs to cover:</em> Scope of data shared, permitted uses, and duration.</p>' +
      '<p><em>Template:</em> Yet to source.</p>',
    caseStudies: []
  },
  "vendor-contract": {
    type: "agreement",
    name: "Contract, including BAA",
    panelHTML:
      '<p><em>What it is:</em> The contract governing a vendor relationship, with business associate provisions built in under HIPAA. <span class="source-note">[source: HHS Sample Business Associate Agreement Provisions]</span></p>' +
      '<p><em>Who signs it:</em> The covered entity (health department or recipient) and the vendor.</p>' +
      '<p><em>What it needs to cover:</em> Permitted uses of protected health information, required safeguards, breach reporting, and subcontractor terms.</p>' +
      '<p><em>Template:</em> HHS sample business associate provisions. Link pending panel approval.</p>',
    caseStudies: [
      { id: "cs-washington", place: "Washington", status: "DRAFT, NEEDS REVIEW" }
    ]
  },
  "data-sharing": {
    type: "agreement",
    name: "Data sharing agreement",
    panelHTML:
      '<p><em>What it is:</em> The agreement covering data exchange between agencies, most often a health department and Medicaid, or a health department and another jurisdiction.</p>' +
      '<p><em>Who signs it:</em> The two (or more) agencies exchanging data.</p>' +
      '<p><em>What it needs to cover:</em> What\u2019s exchanged, the matching or verification purpose, and what each side is entitled to receive back. <span class="source-note">[source: NASTAD DSA Templates and User Guide]</span></p>' +
      '<p><em>Template:</em> NASTAD DSA templates and user guide. Link pending panel approval.</p>',
    caseStudies: [
      { id: "cs-north-carolina", place: "North Carolina", status: "DRAFT, NEEDS REVIEW" },
      { id: "cs-dc-md-va", place: "District of Columbia, Maryland, and Virginia", status: "DRAFT, NEEDS REVIEW" },
      { id: "cs-louisiana", place: "Louisiana", status: "DRAFT, NEEDS REVIEW" },
      { id: "cs-florida-statewide", place: "Florida statewide pathway", status: "DRAFT, NEEDS REVIEW" },
      { id: "cs-wisconsin", place: "Wisconsin", status: "DRAFT, NEEDS REVIEW" },
      { id: "cs-washington", place: "Washington", status: "DRAFT, NEEDS REVIEW" },
      { id: "cs-illinois", place: "Illinois", status: "DRAFT, NEEDS REVIEW" }
    ]
  }
};

(function () {
  "use strict";

  var panels = document.querySelectorAll(".diagram-panel");
  if (panels.length === 0) return;
  var placeholder = "Select a box or pill in the diagram to see its details.";

  function caseStudyListHTML(key) {
    var d = DIAGRAM_DATA[key];
    if (!d.caseStudies.length) return "";
    var approved = d.caseStudies.filter(function (cs) { return cs.status === "APPROVED" || cs.status === "APPROVED, VERBATIM"; });
    var html = "<p><strong>Case studies</strong></p><ul>";
    for (var i = 0; i < d.caseStudies.length; i++) {
      var cs = d.caseStudies[i];
      var tagClass = cs.status === "NEEDS KABIR INPUT" ? "status-tag input" : "status-tag draft";
      var tagText = cs.status === "NEEDS KABIR INPUT" ? "Needs input" : "Draft, needs review";
      html += '<li><button type="button" class="case-study-link" data-case-study="' + cs.id + '">' + cs.place + '</button> <span class="' + tagClass + '">' + tagText + '</span></li>';
    }
    html += "</ul>";
    return html;
  }

  function render(panel, key) {
    if (!key || !DIAGRAM_DATA[key]) {
      panel.innerHTML = '<p class="panel-placeholder">' + placeholder + "</p>";
      return;
    }
    var d = DIAGRAM_DATA[key];
    var html = "<h5>" + d.name + "</h5>";
    html += d.panelHTML;
    html += caseStudyListHTML(key);
    panel.innerHTML = html;
  }

  function markCaseStudyOutlines(root) {
    var nodes = root.querySelectorAll(".node");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-key");
      var d = DIAGRAM_DATA[key];
      if (!d || !d.caseStudies.length) continue;
      var hasApproved = d.caseStudies.some(function (cs) {
        return cs.status === "APPROVED" || cs.status === "APPROVED, VERBATIM";
      });
      nodes[i].classList.add(hasApproved ? "has-approved-case-study" : "has-draft-case-study");
    }
  }

  function selectNode(diagramRoot, panel, key) {
    var nodes = diagramRoot.querySelectorAll(".node");
    var already = panel.getAttribute("data-active-key") === key;
    var newKey = already ? "" : key;
    for (var i = 0; i < nodes.length; i++) {
      var isSelected = !already && nodes[i].getAttribute("data-key") === key;
      nodes[i].classList.toggle("selected", isSelected);
      nodes[i].setAttribute("aria-pressed", isSelected ? "true" : "false");
    }
    // Keep the paired desktop/mobile diagram in sync, so selecting a node
    // in one shows the same selection if the viewport crosses the
    // breakpoint without a reload.
    var pairRoot = diagramRoot.getAttribute("data-pair");
    if (pairRoot) {
      var pair = document.getElementById(pairRoot);
      if (pair) {
        var pairNodes = pair.querySelectorAll(".node");
        for (var j = 0; j < pairNodes.length; j++) {
          var isSel = !already && pairNodes[j].getAttribute("data-key") === key;
          pairNodes[j].classList.toggle("selected", isSel);
          pairNodes[j].setAttribute("aria-pressed", isSel ? "true" : "false");
        }
      }
    }
    panel.setAttribute("data-active-key", newKey);
    render(panel, newKey || null);
    if (newKey) {
      panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  var diagrams = document.querySelectorAll(".diagram-svg-wrap");
  diagrams.forEach(function (diagramRoot) {
    var panelId = diagramRoot.getAttribute("data-panel");
    var panel = panelId ? document.getElementById(panelId) : null;
    if (!panel) return;
    var nodes = diagramRoot.querySelectorAll(".node");
    nodes.forEach(function (node) {
      node.addEventListener("click", function () {
        selectNode(diagramRoot, panel, node.getAttribute("data-key"));
      });
      node.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
          e.preventDefault();
          selectNode(diagramRoot, panel, node.getAttribute("data-key"));
        }
      });
    });
    markCaseStudyOutlines(diagramRoot);
    render(panel, null);
  });
})();
