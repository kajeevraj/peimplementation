/* Data Sharing topic: interactive agreements diagram.
   Per 00-global.md, only APPROVED and APPROVED, VERBATIM content may render.
   Diagram structure and the case-study marking rule are APPROVED (see
   pages/data sharing/02-data-sharing.md, section 2.2), so the diagram itself
   is fully built. Every element's panel text is still DRAFT, NEEDS REVIEW,
   and every named case study is DRAFT, NEEDS REVIEW or NEEDS KABIR INPUT, so
   panels render the pending status instead of invented copy. */

var DIAGRAM_DATA = {
  "client": {
    type: "party",
    name: "Client",
    panelStatus: "DRAFT, NEEDS REVIEW"
  },
  "health-department": {
    type: "party",
    name: "Health department",
    panelStatus: "DRAFT, NEEDS REVIEW",
    caseStudies: [
      { place: "Louisiana", status: "DRAFT, NEEDS REVIEW" }
    ]
  },
  "funded-providers": {
    type: "party",
    name: "Funded providers",
    panelStatus: "DRAFT, NEEDS REVIEW"
  },
  "unfunded-providers": {
    type: "party",
    name: "Unfunded providers",
    panelStatus: "DRAFT, NEEDS REVIEW"
  },
  "vendors": {
    type: "party",
    name: "Vendors",
    panelStatus: "DRAFT, NEEDS REVIEW"
  },
  "other-agencies": {
    type: "party",
    name: "Other agencies",
    panelStatus: "DRAFT, NEEDS REVIEW",
    caseStudies: [
      { place: "District of Columbia, Maryland, and Virginia", status: "DRAFT, NEEDS REVIEW" }
    ]
  },
  "consent": {
    type: "agreement",
    name: "Client consent form",
    panelStatus: "DRAFT, NEEDS REVIEW",
    documentSlot: "Kabir providing",
    caseStudies: [
      { place: "North Carolina", status: "DRAFT, NEEDS REVIEW" },
      { place: "Miami-Dade County, Florida", status: "DRAFT, NEEDS REVIEW" }
    ]
  },
  "subrecipient": {
    type: "agreement",
    name: "Subrecipient agreement",
    panelStatus: "DRAFT, NEEDS REVIEW",
    documentSlot: "Kabir providing",
    caseStudies: [
      { place: "North Carolina", status: "DRAFT, NEEDS REVIEW" },
      { place: "Broward County, Florida", status: "DRAFT, NEEDS REVIEW" }
    ]
  },
  "use-agreement": {
    type: "agreement",
    name: "Use agreement",
    panelStatus: "DRAFT, NEEDS REVIEW",
    documentSlot: "Kabir providing"
  },
  "vendor-contract": {
    type: "agreement",
    name: "Contract, including BAA",
    panelStatus: "DRAFT, NEEDS REVIEW",
    documentSlot: "HHS sample business associate provisions — template link pending panel approval",
    caseStudies: [
      { place: "Washington", status: "DRAFT, NEEDS REVIEW" },
      { place: "Illinois", status: "NEEDS KABIR INPUT" }
    ]
  },
  "data-sharing": {
    type: "agreement",
    name: "Data sharing agreement",
    panelStatus: "DRAFT, NEEDS REVIEW",
    documentSlot: "NASTAD templates and user guide — template link pending panel approval",
    caseStudies: [
      { place: "North Carolina", status: "DRAFT, NEEDS REVIEW" },
      { place: "District of Columbia, Maryland, and Virginia", status: "DRAFT, NEEDS REVIEW" },
      { place: "Louisiana", status: "DRAFT, NEEDS REVIEW" },
      { place: "Florida statewide pathway", status: "DRAFT, NEEDS REVIEW" },
      { place: "Wisconsin", status: "DRAFT, NEEDS REVIEW" }
    ]
  }
};

(function () {
  "use strict";

  var panel = document.getElementById("diagram-panel");
  if (!panel) return;
  var placeholder = "Select a box or pill in either diagram above to see its status.";

  function statusTagClass(status) {
    if (status === "NEEDS KABIR INPUT") return "tag-input";
    if (status === "HOLD") return "tag-hold";
    return "tag-draft";
  }

  function render(key) {
    if (!key || !DIAGRAM_DATA[key]) {
      panel.innerHTML = "<p class=\"panel-placeholder\">" + placeholder + "</p>";
      return;
    }
    var d = DIAGRAM_DATA[key];
    var html = "<h3>" + d.name + "</h3>";
    html += "<div class=\"empty-state\">";
    html += "<span class=\"empty-state-tag " + statusTagClass(d.panelStatus) + "\">" + d.panelStatus + "</span>";
    html += "<p class=\"empty-state-note\">Panel text (who/what/worth or what it is/who signs/what it covers) is drafted but not yet approved. Not built until Kabir signs off.</p>";
    if (d.documentSlot) {
      html += "<p class=\"empty-state-note\"><strong>Example document:</strong> " + d.documentSlot + ".</p>";
    }
    html += "</div>";

    if (d.caseStudies && d.caseStudies.length) {
      html += "<h4>Case studies (pending)</h4><ul class=\"empty-state-list\">";
      for (var i = 0; i < d.caseStudies.length; i++) {
        var cs = d.caseStudies[i];
        html += "<li><span class=\"place\">" + cs.place + "</span>";
        html += "<span class=\"empty-state-tag " + statusTagClass(cs.status) + "\">" + cs.status + "</span></li>";
      }
      html += "</ul>";
    }

    panel.innerHTML = html;
  }

  function selectNode(key) {
    var nodes = document.querySelectorAll(".node");
    var already = panel.getAttribute("data-active-key") === key;
    var newKey = already ? "" : key;
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      var isSelected = !already && n.getAttribute("data-key") === key;
      n.classList.toggle("selected", isSelected);
      n.setAttribute("aria-pressed", isSelected ? "true" : "false");
    }
    panel.setAttribute("data-active-key", newKey);
    render(newKey || null);
  }

  var allNodes = document.querySelectorAll(".node");
  for (var i = 0; i < allNodes.length; i++) {
    (function (node) {
      node.addEventListener("click", function () {
        selectNode(node.getAttribute("data-key"));
      });
      node.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
          e.preventDefault();
          selectNode(node.getAttribute("data-key"));
        }
      });
    })(allNodes[i]);
  }

  render(null);
})();
