/* Interactive diagram for "How it works".
   All party and agreement detail text lives here so the SVG markup
   can stay simple. Edit the DIAGRAM_DATA object to change panel copy. */

var DIAGRAM_DATA = {
  "client": {
    type: "party",
    name: "Client",
    who: "The person receiving care. The only one who can authorize their information to be shared.",
    what: "At intake they sign a consent form permitting their record to move beyond the organization that collected it.",
    worth: "Data is collected during care, but nothing moves without this signature.",
    caseStudies: [
      {
        place: "The client journey",
        stat: "Three separate eligibility applications become one.",
        body: "Without shared data, a client applying for medication assistance, then care services, then housing services fills out a full eligibility application, with proof of diagnosis, income, and residency, at each of three agencies, and recertifies with all three separately. With shared data, one unified application is completed once, each later agency looks up eligibility already verified, and recertification happens in one system instead of three. See the full illustration in <button type=\"button\" class=\"inline-tab-link\" data-tab-target=\"what-it-is\" data-scroll-target=\"client-journey-h\">What Is Data Sharing?</button>"
      }
    ]
  },
  "health-department": {
    type: "party",
    name: "Health department",
    who: "The state, county, or city agency that receives the federal Ryan White grant and holds the central client record. Often called the recipient.",
    what: "Every sharing relationship runs through the health department. It decides who gets access, to what, and under which agreement.",
    worth: "It is also accountable for federal reporting, so gaps in its record become gaps in the annual report.",
    caseStudies: [
      {
        place: "Louisiana",
        stat: "One director oversees surveillance, prevention, and services alike.",
        body: "Because these three functions sit under a single director, data has been shared and electronically linked between them for years without requiring agreements between them. The lesson: check your own organizational chart before asking what agreement you need. See the <button type=\"button\" class=\"inline-tab-link\" data-tab-target=\"case-studies\" data-scroll-target=\"cs-louisiana\">full case study</button> for more."
      }
    ]
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
    whatCovers: "Which categories of organization may receive the data, what may be shared and for what purpose, how long it lasts, and how to revoke it. A form naming only one program is the most common reason sharing stalls later.",
    stackNote: "NASTAD suggests jurisdictions consider adding language permitting the health department to tell a testing provider whether a person who tested positive there was subsequently linked to care. Whether this is allowed depends on state and local regulation, but it is a precise example of how consent language written at the start determines what is possible later.",
    examples: [
      { text: "A combined client consent form (none public)" }
    ],
    caseStudies: [
      {
        place: "Miami-Dade County, Florida",
        stat: "One signature covers five programs.",
        body: "Miami-Dade County uses a single combined consent form so partners across Ryan White Part A, the Minority AIDS Initiative, Ending the HIV Epidemic, Part B, and the AIDS Drug Assistance Program can share access to the same client data. See the <button type=\"button\" class=\"inline-tab-link\" data-tab-target=\"case-studies\" data-scroll-target=\"cs-miami-dade\">full case study</button> for more."
      },
      {
        place: "North Carolina",
        stat: "Consent scope determines what an agreement can actually move.",
        body: "In planning a state-to-Part A exchange, the consent form had to be checked to confirm it covered sharing eligibility data with the state, plus lab results, medication dispenses, and premium payments where applicable. See the <button type=\"button\" class=\"inline-tab-link\" data-tab-target=\"case-studies\" data-scroll-target=\"cs-north-carolina\">full case study</button> for more."
      }
    ]
  },
  "subrecipient": {
    type: "agreement",
    name: "Subrecipient agreement",
    whatItIs: "The contract through which the health department passes federal funds to a clinic or agency, with data handling written in as a condition of the funding.",
    whoSigns: "The health department and each funded provider.",
    whatCovers: "Who may access records, required security practices, and what happens to data if funding ends.",
    examples: [
      { text: "A subrecipient agreement with data clauses (none public)" }
    ],
    caseStudies: [
      {
        place: "North Carolina",
        stat: "Existing agreements were reviewed, not assumed.",
        body: "Existing subrecipient agreements had to be reviewed and confirmed consistent with new data sharing agreements. They were not simply left in place. See the <button type=\"button\" class=\"inline-tab-link\" data-tab-target=\"case-studies\" data-scroll-target=\"cs-north-carolina\">full case study</button> for more."
      },
      {
        place: "Broward County, Florida",
        stat: "One shared system, used by every funded agency in the network.",
        body: "All funded agencies across the Part A network document in the same shared system rather than separate records, giving the subrecipient agreement a single point of data entry to monitor. See the <button type=\"button\" class=\"inline-tab-link\" data-tab-target=\"case-studies\" data-scroll-target=\"cs-broward\">full case study</button> for how the county uses that system."
      }
    ]
  },
  "use-agreement": {
    type: "agreement",
    name: "Use agreement",
    whatItIs: "A standalone agreement with a provider that receives no program funding, since there is no contract to attach data terms to.",
    whoSigns: "The health department and the outside provider.",
    whatCovers: "Which clients and which fields are in scope, tied to the client consent already on file.",
    examples: [
      { text: "A use agreement (none public)" }
    ]
  },
  "vendor-contract": {
    type: "agreement",
    name: "Contract, including business associate agreement provisions",
    whatItIs: "A single service contract with a vendor. Because the vendor handles protected health information on the health department's behalf, the Health Insurance Portability and Accountability Act (HIPAA) requires business associate agreement (BAA) provisions. These sit inside the contract as a section or exhibit, not as a separate document.",
    whoSigns: "The health department and the vendor. One signature covers both the service terms and the business associate provisions.",
    whatCovers: "Permitted uses, required safeguards, breach notification duties, flow-down to subcontractors, and return or destruction of data when the contract ends.",
    stackNote: "Beyond the named examples below, this pattern is common more broadly: automated Medicaid eligibility verification transactions run during intake and recertification at Ryan White programs in multiple states, plus periodic checks against a third-party service that identifies other coverage a client did not disclose. This is how payer-of-last-resort compliance happens at scale.",
    examples: [
      {
        text: "U.S. Department of Health and Human Services, sample business associate contract provisions",
        url: "https://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html"
      }
    ],
    caseStudies: [
      {
        place: "Illinois",
        stat: "A two-way automated exchange with its pharmacy benefit manager.",
        body: "Enrollment, terminations, and benefit changes go out to the pharmacy benefit manager; dispense authorization requests and full medication dispense history come back. See the <button type=\"button\" class=\"inline-tab-link\" data-tab-target=\"case-studies\" data-scroll-target=\"cs-illinois\">full case study</button> for more."
      },
      {
        place: "Washington",
        stat: "Eligibility linked directly to the pharmacy counter.",
        body: "Pharmacy benefit manager integration links eligibility directly to point-of-sale medication pickup. See the <button type=\"button\" class=\"inline-tab-link\" data-tab-target=\"case-studies\" data-scroll-target=\"cs-washington\">full case study</button> for more."
      }
    ]
  },
  "data-sharing": {
    type: "agreement",
    name: "Data sharing agreement",
    whatItIs: "A negotiated agreement between two government programs, neither of which works for the other, such as a Ryan White program and Medicaid or a state HIV surveillance program.",
    whoSigns: "The health department and the partner agency, each with its own legal counsel.",
    whatCovers: "Permitted uses, security, and often the technical format of the files exchanged. There is no funding leverage here, unlike a subrecipient agreement, so expect legal review on both sides.",
    stackNote: "This agreement rarely stands alone. In one documented state-to-Part A exchange, enabling a single sharing relationship required a second data sharing agreement written specifically to permit lab results to be shared, a client consent form checked to confirm it actually covered the data in question, and existing subrecipient agreements confirmed consistent with both. Different data types can each need their own agreement; lab results are the common example.",
    examples: [
      {
        text: "NASTAD data sharing agreement templates and user guide (last updated 2017)",
        url: "https://nastad.org/resources/data-sharing-agreement-dsa-templates-and-user-guide"
      },
      {
        text: "Published example: Louisiana interagency data use agreement",
        url: "https://www.medicaid.gov/state-resource-center/innovation-accelerator-program/iap-downloads/program-areas/la-dua-example.pdf"
      }
    ],
    caseStudies: [
      {
        place: "District of Columbia, Maryland, and Virginia",
        stat: "Three health departments, one shared file format, exchanged quarterly.",
        body: "In 2017 the three health departments built a cross-jurisdictional surveillance data exchange: they developed agreements, standardized their statistical code and variables, and built a secure file transfer site for quarterly exchange. Staff from all three continue to meet regularly to review the results. See the <button type=\"button\" class=\"inline-tab-link\" data-tab-target=\"case-studies\" data-scroll-target=\"cs-dc-md-va\">full case study</button> for what the exchange achieved."
      },
      {
        place: "Louisiana",
        stat: "A monthly file to Medicaid, a quarterly match against vital records.",
        body: "Beyond the health department's own single-director structure, Louisiana Medicaid sends a monthly file to match against surveillance data to calculate viral suppression among Medicaid enrollees, and the surveillance unit runs quarterly matches against birth and death registry data. See the <button type=\"button\" class=\"inline-tab-link\" data-tab-target=\"case-studies\" data-scroll-target=\"cs-louisiana\">full case study</button> for more."
      },
      {
        place: "North Carolina",
        stat: "One integrated hub, scoped returns to each partner.",
        body: "North Carolina built an integrated data hub combining HIV surveillance data, the AIDS Drug Assistance Program (ADAP), Ryan White data, and Medicaid data. The health department matches internally, then limits what is shared back to each reporting entity, including returning data to a managed care organization for its own enrollees only. See the <button type=\"button\" class=\"inline-tab-link\" data-tab-target=\"case-studies\" data-scroll-target=\"cs-north-carolina\">full case study</button> for more."
      },
      {
        place: "Florida",
        stat: "A two-way loop between six Part A programs and the state.",
        body: "Each program's active client list goes out in a format the agreement defines, the state matches it against surveillance and other sources, updated care status comes back, clients presumed out of care are referred into the state's linkage module, and linkage outcomes return scoped to that program's own clients. See the <button type=\"button\" class=\"inline-tab-link\" data-tab-target=\"case-studies\" data-scroll-target=\"cs-florida\">full case study</button> for the complete six-step process."
      },
      {
        place: "Wisconsin",
        stat: "Broad legal authority, no named partner agencies required.",
        body: "Wisconsin relies on broader legal authority to share data in order to protect an individual's health, prevent transmission, or diagnose and care for the patient, without reference to specific partner agencies. It shows that states take different legal routes to reach the same place. See the <button type=\"button\" class=\"inline-tab-link\" data-tab-target=\"case-studies\" data-scroll-target=\"cs-wisconsin\">full case study</button> for more."
      }
    ]
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
    }

    /* Case studies sit right after the three-point explanation, above the
       stack note and example documents, since they are now some of the
       most-read content on the card. */
    if (d.caseStudies && d.caseStudies.length) {
      html += "<h4>Case studies</h4><div class=\"case-study-group\">";
      for (var j = 0; j < d.caseStudies.length; j++) {
        var cs = d.caseStudies[j];
        var btnId = "cs-btn-" + key + "-" + j;
        var bodyId = "cs-body-" + key + "-" + j;
        html += "<button type=\"button\" class=\"case-study-toggle\" id=\"" + btnId + "\" aria-expanded=\"false\" aria-controls=\"" + bodyId + "\">" + cs.place + "</button>";
        html += "<div class=\"case-study-body\" id=\"" + bodyId + "\" role=\"region\" aria-labelledby=\"" + btnId + "\" hidden>";
        if (cs.stat) {
          html += "<p class=\"case-study-stat\">" + cs.stat + "</p>";
        }
        html += "<p>" + cs.body + "</p>";
        html += "</div>";
      }
      html += "</div>";
    }

    if (d.type === "agreement") {
      if (d.stackNote) {
        html += "<div class=\"stack-note\">" + d.stackNote + "</div>";
      }
      if (d.examples && d.examples.length) {
        html += "<h4>Example documents</h4><ul class=\"example-doc-list\">";
        for (var i = 0; i < d.examples.length; i++) {
          var ex = d.examples[i];
          if (ex.url) {
            html += "<li><a href=\"" + ex.url + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + ex.text + "</a></li>";
          } else {
            html += "<li class=\"example-doc-empty\">" + ex.text + "</li>";
          }
        }
        html += "</ul>";
      }
    }
    panel.innerHTML = html;
  }

  /* Case study toggles are plain buttons, so click/keyboard/focus all come
     for free. One delegated listener handles all of them, since the panel's
     contents are replaced wholesale on every diagram selection. */
  function findToggle(el) {
    while (el && el !== panel) {
      if (el.classList && el.classList.contains("case-study-toggle")) return el;
      el = el.parentNode;
    }
    return null;
  }

  panel.addEventListener("click", function (e) {
    var btn = findToggle(e.target);
    if (!btn) return;
    var expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", expanded ? "false" : "true");
    var body = document.getElementById(btn.getAttribute("aria-controls"));
    if (body) body.hidden = expanded;
  });

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

/* Tab navigation for the page sections, following the ARIA APG tabs pattern. */
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
     omitted on initial page load so nothing steals focus on open.

     updateHistory is false on the initial page-load call. Chrome scrolls to
     the element matching the URL fragment even when the fragment is set via
     replaceState, so calling this unconditionally on load caused the page to
     silently scroll itself past the header on every visit. */
  function activate(tab, focusTarget, updateHistory) {
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
    if (updateHistory && history.replaceState) {
      history.replaceState(null, "", "#" + tab.getAttribute("data-tab"));
    }
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      activate(tab, "panel", true);
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
      activate(tabs[newIndex], "tab", true);
    }
  });

  var initial = tabs[0];
  if (location.hash) {
    var match = tabs.filter(function (t) {
      return "#" + t.getAttribute("data-tab") === location.hash;
    })[0];
    if (match) initial = match;
  }
  activate(initial, null, false);

  /* Cross-references elsewhere on the page ("See the full case study...")
     are rendered as .inline-tab-link buttons carrying data-tab-target and,
     optionally, data-scroll-target (an element id to open and scroll to
     inside the destination tab, such as one jurisdiction's <details>). One
     delegated listener covers both statically-written links and links inside
     the dynamically rendered diagram panel. */
  document.addEventListener("click", function (e) {
    var link = e.target.closest ? e.target.closest(".inline-tab-link") : null;
    if (!link) return;
    var targetTab = link.getAttribute("data-tab-target");
    var tabBtn = document.querySelector('button.tab[data-tab="' + targetTab + '"]');
    if (tabBtn) tabBtn.click();
    var scrollTargetId = link.getAttribute("data-scroll-target");
    if (scrollTargetId) {
      var scrollTarget = document.getElementById(scrollTargetId);
      if (scrollTarget) {
        if (scrollTarget.tagName === "DETAILS") {
          scrollTarget.open = true;
        }
        scrollTarget.scrollIntoView({ behavior: "smooth", block: "start" });
        var summary = scrollTarget.tagName === "DETAILS" ? scrollTarget.querySelector("summary") : scrollTarget;
        if (summary && summary.focus) {
          if (!summary.hasAttribute("tabindex") && summary.tagName !== "SUMMARY") {
            summary.setAttribute("tabindex", "-1");
          }
          summary.focus();
        }
      }
    }
  });
})();
