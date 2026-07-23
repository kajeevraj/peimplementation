/* Interactive diagram for "How it works".
   All party and agreement detail text lives here so the SVG markup
   can stay simple. Edit the DIAGRAM_DATA object to change panel copy. */

var DIAGRAM_DATA = {
  "client": {
    type: "party",
    name: "Client",
    who: "The person receiving care. The only one who can authorize their information to be shared.",
    what: "At intake they sign a consent form permitting their record to move beyond the organization that collected it.",
    worth: "Data is collected during care, but nothing moves without this signature."
  },
  "health-department": {
    type: "party",
    name: "Health department",
    who: "The state, county, or city agency that receives the federal Ryan White grant and holds the central client record. Often called the recipient.",
    what: "Every sharing relationship runs through the health department. It decides who gets access, to what, and under which agreement.",
    worth: "It is also accountable for federal reporting, so gaps in its record become gaps in the annual report."
  },
  "funded-providers": {
    type: "party",
    name: "Funded providers",
    who: "Clinics and community agencies the program pays to deliver services. Also called subrecipients.",
    what: "Access is granted through the funding agreement they already sign.",
    worth: "Usually the easiest relationship to establish, because the contract and the working relationship already exist. Most programs start here."
  },
  "unfunded-providers": {
    type: "party",
    name: "Unfunded providers",
    who: "Providers treating the same clients who receive no program funding.",
    what: "Access requires a standalone agreement, since there is no funding contract to attach data terms to.",
    worth: "Easy to overlook, but clients do not only see funded providers. Skipping these leaves gaps in the record."
  },
  "vendors": {
    type: "party",
    name: "Vendors",
    who: "Companies the health department hires, such as pharmacy benefit managers, insurance benefit managers, and software vendors.",
    what: "Access flows from the service contract, which carries the required business associate agreement provisions inside it.",
    worth: "A vendor handles data on the health department's behalf, which is a different legal position from a peer agency that works for no one."
  },
  "other-agencies": {
    type: "party",
    name: "Other agencies",
    who: "Peer government programs such as Medicaid, Ryan White Part A programs, and HIV surveillance.",
    what: "Access requires an agreement negotiated between equals.",
    worth: "Neither agency works for the other, which is exactly what makes this the hardest relationship to establish."
  },
  "consent": {
    type: "agreement",
    name: "Client consent form",
    whatItIs: "The client's written authorization for their information to be shared beyond the organization collecting it. Everything downstream depends on it.",
    whoSigns: "The client, usually at intake with a case manager.",
    whatCovers: "Which categories of organization may receive the data, what may be shared and for what purpose, how long it lasts, and how to revoke it. A form naming only one program is the most common reason sharing stalls later."
  },
  "subrecipient": {
    type: "agreement",
    name: "Subrecipient agreement",
    whatItIs: "The contract through which the health department passes federal funds to a clinic or agency, with data handling written in as a condition of the funding.",
    whoSigns: "The health department and each funded provider.",
    whatCovers: "Who may access records, required security practices, and what happens to data if funding ends."
  },
  "use-agreement": {
    type: "agreement",
    name: "Use agreement",
    whatItIs: "A standalone agreement with a provider that receives no program funding, since there is no contract to attach data terms to.",
    whoSigns: "The health department and the outside provider.",
    whatCovers: "Which clients and which fields are in scope, tied to the client consent already on file."
  },
  "vendor-contract": {
    type: "agreement",
    name: "Contract, including business associate agreement provisions",
    whatItIs: "A single service contract with a vendor. Because the vendor handles protected health information on the health department's behalf, the Health Insurance Portability and Accountability Act (HIPAA) requires business associate provisions. These sit inside the contract as a section or exhibit, not as a separate document.",
    whoSigns: "The health department and the vendor. One signature covers both the service terms and the business associate provisions.",
    whatCovers: "Permitted uses, required safeguards, breach notification duties, flow-down to subcontractors, and return or destruction of data when the contract ends.",
    template: {
      text: "U.S. Department of Health and Human Services, sample business associate contract provisions",
      url: "https://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html"
    }
  },
  "data-sharing": {
    type: "agreement",
    name: "Data sharing agreement",
    whatItIs: "A negotiated agreement between two government programs, neither of which works for the other, such as a Ryan White program and Medicaid.",
    whoSigns: "The health department and the partner agency, each with its own legal counsel.",
    whatCovers: "Permitted uses, security, and often the technical format of the files exchanged.",
    template: {
      text: "NASTAD data sharing agreement templates and user guide (last updated 2017)",
      url: "https://nastad.org/resources/data-sharing-agreement-dsa-templates-and-user-guide"
    }
  }
};

(function () {
  "use strict";

  var panel = document.getElementById("diagram-panel");
  var placeholder = "Select a box or pill in either diagram above to see what it is, who signs it or acts on it, and what it covers.";

  function render(key) {
    if (!key) {
      panel.innerHTML = "<p class=\"panel-placeholder\">" + placeholder + "</p>";
      return;
    }
    var d = DIAGRAM_DATA[key];
    if (!d) {
      panel.innerHTML = "<p class=\"panel-placeholder\">" + placeholder + "</p>";
      return;
    }
    var html = "<h3>" + d.name + "</h3>";
    if (d.type === "party") {
      html += "<h4>Who they are</h4><p>" + d.who + "</p>";
      html += "<h4>What happens here</h4><p>" + d.what + "</p>";
      html += "<h4>Worth knowing</h4><p>" + d.worth + "</p>";
    } else {
      html += "<h4>What it is</h4><p>" + d.whatItIs + "</p>";
      html += "<h4>Who signs it</h4><p>" + d.whoSigns + "</p>";
      html += "<h4>What it needs to cover</h4><p>" + d.whatCovers + "</p>";
      if (d.template) {
        html += "<h4>Template</h4><p><a href=\"" + d.template.url + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + d.template.text + "</a></p>";
      }
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

/* Tab navigation for the six page sections, following the ARIA APG tabs pattern. */
(function () {
  "use strict";

  var tablist = document.querySelector('[role="tablist"]');
  if (!tablist) return;
  var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));

  function panelFor(tab) {
    return document.getElementById(tab.getAttribute("aria-controls"));
  }

  /* focusTarget: "tab" moves focus to the activated tab (used for arrow-key
     roving so continued arrow presses keep working); "panel" moves focus to
     the panel's own heading, so a screen reader user who clicks a tab lands
     on the new content instead of staying parked on the tab button;
     omitted on initial page load so nothing steals focus on open. */
  function activate(tab, focusTarget) {
    for (var i = 0; i < tabs.length; i++) {
      var t = tabs[i];
      var selected = t === tab;
      t.setAttribute("aria-selected", selected ? "true" : "false");
      t.tabIndex = selected ? 0 : -1;
      panelFor(t).hidden = !selected;
    }
    if (focusTarget === "tab") {
      tab.focus();
    } else if (focusTarget === "panel") {
      var heading = panelFor(tab).querySelector("h2");
      if (heading) {
        heading.setAttribute("tabindex", "-1");
        heading.focus();
      }
    }
    if (history.replaceState) {
      history.replaceState(null, "", "#" + tab.getAttribute("data-tab"));
    }
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      activate(tab, "panel");
    });
  });

  tablist.addEventListener("keydown", function (e) {
    var currentIndex = tabs.indexOf(document.activeElement);
    if (currentIndex === -1) return;
    var newIndex = null;
    if (e.key === "ArrowRight") {
      newIndex = (currentIndex + 1) % tabs.length;
    } else if (e.key === "ArrowLeft") {
      newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (e.key === "Home") {
      newIndex = 0;
    } else if (e.key === "End") {
      newIndex = tabs.length - 1;
    }
    if (newIndex !== null) {
      e.preventDefault();
      activate(tabs[newIndex], "tab");
    }
  });

  var initial = tabs[0];
  if (location.hash) {
    var match = tabs.filter(function (t) {
      return "#" + t.getAttribute("data-tab") === location.hash;
    })[0];
    if (match) initial = match;
  }
  activate(initial, null);
})();
