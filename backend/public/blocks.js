/* blocks.js
   Fetches this page's content from the backend and renders it into any
   element with data-block-section="<name>". In edit mode (after logging
   in), each block gets edit/delete/move controls and each section gets
   an "Add block" button. No framework, no build step, plain fetch and
   DOM APIs, matching the rest of the site.

   Requires the page to set window.PLAYBOOK_PAGE to its slug, e.g.:
     <script>window.PLAYBOOK_PAGE = "data-sharing";</script>
   before this script loads. */

(function () {
  "use strict";

  const PAGE = window.PLAYBOOK_PAGE;
  if (!PAGE) {
    console.error("blocks.js: window.PLAYBOOK_PAGE is not set. Nothing to render.");
    return;
  }

  const API = "/api";
  let editMode = false;
  let blocksBySection = {};

  function api(path, options) {
    return fetch(API + path, {
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      ...options,
    }).then(async (res) => {
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || `Request failed (${res.status})`);
      return body;
    });
  }

  function slotsInPage() {
    return Array.from(document.querySelectorAll("[data-block-section]"));
  }

  async function loadAndRender() {
    const rows = await api(`/blocks?page=${encodeURIComponent(PAGE)}`);
    blocksBySection = {};
    rows.forEach((b) => {
      (blocksBySection[b.section] = blocksBySection[b.section] || []).push(b);
    });
    slotsInPage().forEach((slot) => renderSection(slot));
  }

  function renderSection(slot) {
    const section = slot.getAttribute("data-block-section");
    const blocks = (blocksBySection[section] || []).slice().sort((a, b) => a.position - b.position);
    slot.innerHTML = "";
    blocks.forEach((block, index) => {
      slot.appendChild(renderBlock(block, index, blocks.length));
    });
    if (editMode) {
      slot.appendChild(renderAddBlockControl(section));
    }
  }

  function renderBlock(block, index, total) {
    const wrap = document.createElement("div");
    wrap.className = "cms-block";
    wrap.dataset.blockId = block.id;

    // Some blocks (currently case studies) carry a stable entry_id that
    // other content links to by id (tabs.js's case-study-link buttons do
    // document.getElementById(entryId)). Put it on the rendered element so
    // those links keep resolving once the target comes from the CMS
    // instead of static HTML, and add case-study-entry so its existing
    // styling and the cross-link "just linked" flash still apply.
    if (block.entry_id) {
      wrap.id = block.entry_id;
      wrap.classList.add("case-study-entry");
    }

    if (block.title) {
      const h = document.createElement("h4");
      h.textContent = block.title;
      if (block.status !== "approved") {
        h.appendChild(document.createTextNode(" "));
        const tag = document.createElement("span");
        tag.className = "status-tag draft";
        tag.textContent = "Draft, needs review";
        h.appendChild(tag);
      }
      wrap.appendChild(h);
    }

    const body = document.createElement("div");
    body.className = "cms-block-body";
    body.innerHTML = block.content;
    wrap.appendChild(body);

    if (editMode) {
      wrap.appendChild(renderEditControls(block, index, total));
    }
    return wrap;
  }

  function renderEditControls(block, index, total) {
    const bar = document.createElement("div");
    bar.className = "cms-controls";

    const editBtn = button("Edit", () => openEditor(block));
    const deleteBtn = button("Delete", () => deleteBlock(block));
    deleteBtn.classList.add("cms-danger");
    const upBtn = button("\u2191", () => moveBlock(block, -1));
    const downBtn = button("\u2193", () => moveBlock(block, 1));
    upBtn.disabled = index === 0;
    downBtn.disabled = index === total - 1;

    const isApproved = block.status === "approved";
    const statusBtn = button(isApproved ? "Mark as draft" : "Approve", () => toggleStatus(block));

    bar.append(upBtn, downBtn, editBtn, statusBtn, deleteBtn);
    return bar;
  }

  async function toggleStatus(block) {
    const newStatus = block.status === "approved" ? "draft" : "approved";
    try {
      const updated = await api(`/blocks/${block.id}`, {
        method: "PUT",
        body: JSON.stringify({ status: newStatus }),
      });
      Object.assign(block, updated);
      await loadAndRender();
    } catch (err) {
      alert("Couldn't update status: " + err.message);
    }
  }

  function button(label, onClick) {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = label;
    b.className = "cms-btn";
    b.addEventListener("click", onClick);
    return b;
  }

  function openEditor(block) {
    const wrap = document.querySelector(`.cms-block[data-block-id="${block.id}"]`);
    if (!wrap) return;

    const form = document.createElement("div");
    form.className = "cms-editor";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.placeholder = "Title (optional)";
    titleInput.value = block.title || "";

    const contentArea = document.createElement("textarea");
    contentArea.value = block.content;
    contentArea.rows = 8;

    const saveBtn = button("Save", async () => {
      try {
        const updated = await api(`/blocks/${block.id}`, {
          method: "PUT",
          body: JSON.stringify({ title: titleInput.value, content: contentArea.value }),
        });
        Object.assign(block, updated);
        await loadAndRender();
      } catch (err) {
        alert("Couldn't save: " + err.message);
      }
    });
    const cancelBtn = button("Cancel", () => loadAndRender());

    form.append(titleInput, contentArea, saveBtn, cancelBtn);
    wrap.innerHTML = "";
    wrap.appendChild(form);
  }

  async function deleteBlock(block) {
    if (!confirm("Delete this block? The last version stays in history and can be restored.")) return;
    try {
      await api(`/blocks/${block.id}`, { method: "DELETE" });
      await loadAndRender();
    } catch (err) {
      alert("Couldn't delete: " + err.message);
    }
  }

  async function moveBlock(block, direction) {
    const section = block.section;
    const ordered = (blocksBySection[section] || []).slice().sort((a, b) => a.position - b.position);
    const i = ordered.findIndex((b) => b.id === block.id);
    const j = i + direction;
    if (j < 0 || j >= ordered.length) return;
    [ordered[i], ordered[j]] = [ordered[j], ordered[i]];
    try {
      await api("/blocks/reorder", {
        method: "PUT",
        body: JSON.stringify({ ids: ordered.map((b) => b.id) }),
      });
      await loadAndRender();
    } catch (err) {
      alert("Couldn't reorder: " + err.message);
    }
  }

  function renderAddBlockControl(section) {
    const wrap = document.createElement("div");
    wrap.className = "cms-add-block";
    wrap.appendChild(
      button("+ Add block", async () => {
        try {
          const created = await api("/blocks", {
            method: "POST",
            body: JSON.stringify({
              page: PAGE,
              section,
              block_type: "text",
              title: "",
              content: "<p>New block. Click Edit to write it.</p>",
            }),
          });
          await loadAndRender();
          const newWrap = document.querySelector(`.cms-block[data-block-id="${created.id}"]`);
          if (newWrap) newWrap.scrollIntoView({ behavior: "smooth", block: "center" });
        } catch (err) {
          alert("Couldn't add block: " + err.message);
        }
      })
    );
    return wrap;
  }

  // ---------- edit-mode toggle and login ----------

  function buildEditToggle() {
    const bar = document.createElement("div");
    bar.className = "cms-toolbar";
    bar.id = "cms-toolbar";
    document.body.appendChild(bar);
    refreshToolbar();
  }

  async function refreshToolbar() {
    const bar = document.getElementById("cms-toolbar");
    bar.innerHTML = "";
    let authed = false;
    try {
      const session = await api("/auth/session");
      authed = session.authed;
    } catch (err) {
      // Backend not reachable; leave the toolbar in its logged-out state.
    }
    editMode = authed;

    if (authed) {
      const label = document.createElement("span");
      label.textContent = "Editing this page";
      const exitBtn = button("Exit edit mode", async () => {
        await api("/auth/logout", { method: "POST" });
        await refreshToolbar();
        await loadAndRender();
      });
      bar.append(label, exitBtn);
    } else {
      const enterBtn = button("Edit this page", showLoginPrompt);
      bar.append(enterBtn);
    }
    await loadAndRender();
  }

  function showLoginPrompt() {
    const overlay = document.createElement("div");
    overlay.className = "cms-overlay";

    const box = document.createElement("div");
    box.className = "cms-login-box";
    box.innerHTML = "<p>Enter the admin password to edit this page.</p>";

    const input = document.createElement("input");
    input.type = "password";
    input.placeholder = "Password";

    const error = document.createElement("p");
    error.className = "cms-login-error";

    const submitBtn = button("Log in", async () => {
      try {
        await api("/auth/login", { method: "POST", body: JSON.stringify({ password: input.value }) });
        document.body.removeChild(overlay);
        await refreshToolbar();
      } catch (err) {
        error.textContent = err.message;
      }
    });
    const cancelBtn = button("Cancel", () => document.body.removeChild(overlay));

    box.append(input, submitBtn, cancelBtn, error);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
    input.focus();
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") submitBtn.click();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    buildEditToggle();
  });
})();
