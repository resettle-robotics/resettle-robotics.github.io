"use strict";

const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab, focus = false) {
  tabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute("aria-selected", String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute("aria-controls")).hidden = !selected;
  });
  if (focus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", (event) => {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      selectTab(tabs[next], true);
    }
  });
});

const copyButton = document.getElementById("copy-citation");
const copyStatus = document.getElementById("copy-status");
let copyReset;
copyButton.addEventListener("click", async () => {
  const text = document.getElementById("bibtex").textContent;
  try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "BibTeX copied to clipboard.";
    copyButton.textContent = "Copied ✓";
  } catch {
    const range = document.createRange();
    range.selectNodeContents(document.getElementById("bibtex"));
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.textContent = "Citation selected. Press Ctrl+C or Command+C to copy.";
  }
  clearTimeout(copyReset);
  copyReset = setTimeout(() => {
    copyButton.textContent = "Copy BibTeX ⧉";
    copyStatus.textContent = "";
  }, 4500);
});

const sectionLinks = [...document.querySelectorAll(".contents a")];
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting);
    if (!visible.length) return;
    const id = visible[0].target.id;
    sectionLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }, { rootMargin: "-15% 0px -55% 0px", threshold: 0 });
  document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
}

// On small screens, announce that wide result tables can scroll horizontally.
document.querySelectorAll(".table-scroll").forEach((wrapper) => {
  wrapper.tabIndex = 0;
  wrapper.setAttribute("role", "region");
  wrapper.setAttribute("aria-label", `${wrapper.querySelector("caption").textContent}. Scroll horizontally if needed.`);
});
