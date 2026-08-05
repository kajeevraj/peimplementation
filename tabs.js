/* Tab bar functionality with proper accessibility.
   Handles click activation, arrow-key navigation, and ARIA attributes.
   Works with any number of tablists on a page. */

(function() {
  "use strict";

  // Find all tablists on the page
  var tablists = document.querySelectorAll('[role="tablist"]');

  tablists.forEach(function(tablist) {
    var tabs = tablist.querySelectorAll('[role="tab"]');
    if (tabs.length === 0) return;

    // Set up click handlers on each tab
    tabs.forEach(function(tab, index) {
      tab.addEventListener('click', function() {
        activateTab(tab, tabs, tablist);
      });

      // Arrow key navigation
      tab.addEventListener('keydown', function(e) {
        var newTab = null;

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          newTab = tabs[(index + 1) % tabs.length];
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          newTab = tabs[(index - 1 + tabs.length) % tabs.length];
        } else if (e.key === 'Home') {
          e.preventDefault();
          newTab = tabs[0];
        } else if (e.key === 'End') {
          e.preventDefault();
          newTab = tabs[tabs.length - 1];
        }

        if (newTab) {
          newTab.focus();
          activateTab(newTab, tabs, tablist);
        }
      });
    });
  });

  function activateTab(selectedTab, tabs, tablist) {
    // Deactivate all tabs and hide all panels
    tabs.forEach(function(tab) {
      tab.setAttribute('aria-selected', 'false');
      tab.setAttribute('tabindex', '-1');
      var panelId = tab.getAttribute('aria-controls');
      var panel = document.getElementById(panelId);
      if (panel) {
        panel.setAttribute('hidden', '');
      }
    });

    // Activate selected tab and show its panel
    selectedTab.setAttribute('aria-selected', 'true');
    selectedTab.setAttribute('tabindex', '0');
    var panelId = selectedTab.getAttribute('aria-controls');
    var panel = document.getElementById(panelId);
    if (panel) {
      panel.removeAttribute('hidden');
    }
  }

  /* Cross-tab links to case studies. A case study is written once, in the
     Case studies tab. Every other mention (a state named in Barriers, a
     case study button on a diagram detail card, and so on) is a
     .case-study-link button carrying data-case-study="<entry id>". Clicking
     one switches to the Case studies tab, scrolls to the target entry,
     briefly highlights it, and moves focus there so keyboard and screen
     reader users land on the right entry, not just the tab. */
  document.addEventListener('click', function(e) {
    var link = e.target.closest ? e.target.closest('.case-study-link') : null;
    if (!link) return;

    var entryId = link.getAttribute('data-case-study');
    var caseStudiesTab = document.getElementById('tab-case-studies');
    if (caseStudiesTab) {
      var ownTablist = caseStudiesTab.closest('[role="tablist"]');
      var ownTabs = ownTablist ? ownTablist.querySelectorAll('[role="tab"]') : [caseStudiesTab];
      activateTab(caseStudiesTab, ownTabs, ownTablist);
    }

    var entry = entryId ? document.getElementById(entryId) : null;
    if (entry) {
      entry.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (!entry.hasAttribute('tabindex')) {
        entry.setAttribute('tabindex', '-1');
      }
      entry.focus();
      entry.classList.add('just-linked');
      window.setTimeout(function() {
        entry.classList.remove('just-linked');
      }, 2000);
    }
  });
})();
