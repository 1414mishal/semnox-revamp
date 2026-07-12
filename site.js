lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const header = document.getElementById("site-header");
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = [...document.querySelectorAll(".mobile-link")];
let lastFocusedElement = null;

function updateHeader() {
  const scrolled = window.scrollY > 80;
  header.classList.toggle("bg-[#111213]/90", scrolled);
  header.classList.toggle("backdrop-blur-md", scrolled);
  header.classList.toggle("border-white/15", scrolled);
  header.classList.toggle("shadow-lg", scrolled);
  header.classList.toggle("shadow-black/10", scrolled);
}
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

function setMenuIcon(name) {
  const icon = document.createElement("i");
  icon.setAttribute("data-lucide", name);
  icon.className = "h-5 w-5";
  menuButton.replaceChildren(icon);
  lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
}

function openMenu() {
  lastFocusedElement = document.activeElement;
  mobileMenu.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
  menuButton.setAttribute("aria-expanded", "true");
  menuButton.setAttribute("aria-label", "Close navigation");
  setMenuIcon("x");
}

function closeMenu() {
  mobileMenu.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  setMenuIcon("menu");
  if (lastFocusedElement) lastFocusedElement.focus();
}

if (menuButton) {
  menuButton.addEventListener("click", () => {
    menuButton.getAttribute("aria-expanded") === "true" ? closeMenu() : openMenu();
  });
  mobileLinks.forEach(link => link.addEventListener("click", closeMenu));
  mobileMenu.addEventListener("click", e => { if (e.target === mobileMenu) closeMenu(); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024 && menuButton.getAttribute("aria-expanded") === "true") closeMenu();
  });
}

// Desktop dropdown menus (hover + click + keyboard friendly)
document.querySelectorAll("[data-dropdown]").forEach(dd => {
  const button = dd.querySelector("[data-dropdown-button]");
  const panel = dd.querySelector("[data-dropdown-panel]");
  const icon = dd.querySelector("[data-dropdown-icon]");
  let closeTimer = null;

  const setOpen = open => {
    button.setAttribute("aria-expanded", open ? "true" : "false");
    panel.classList.toggle("invisible", !open);
    panel.classList.toggle("opacity-0", !open);
    panel.classList.toggle("translate-y-2", !open);
    panel.classList.toggle("translate-y-0", open);
    if (icon) icon.style.transform = open ? "rotate(180deg)" : "";
  };

  dd.addEventListener("mouseenter", () => { clearTimeout(closeTimer); setOpen(true); });
  dd.addEventListener("mouseleave", () => { closeTimer = setTimeout(() => setOpen(false), 150); });
  button.addEventListener("click", () => setOpen(button.getAttribute("aria-expanded") !== "true"));
  dd.addEventListener("focusout", e => { if (!dd.contains(e.relatedTarget)) setOpen(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") setOpen(false); });
});

// Hero entrance
const heroElements = [...document.querySelectorAll("[data-hero]")];
if (reducedMotion) {
  heroElements.forEach(el => el.classList.remove("translate-y-6", "opacity-0"));
} else {
  heroElements.forEach((el, i) => {
    el.animate(
      [
        { opacity: 0, transform: "translateY(24px)", filter: "blur(4px)" },
        { opacity: 1, transform: "translateY(0)", filter: "blur(0)" }
      ],
      { duration: 760, delay: 120 + i * 105, easing: "cubic-bezier(.22,.61,.36,1)", fill: "forwards" }
    );
  });
}

// Scroll reveal
const revealElements = [...document.querySelectorAll("[data-reveal]")];
if (reducedMotion) {
  revealElements.forEach(el => { el.style.opacity = "1"; el.style.transform = "none"; });
} else {
  revealElements.forEach(el => { el.style.opacity = "0"; el.style.transform = "translateY(22px)"; });
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.animate(
        [
          { opacity: 0, transform: "translateY(22px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        { duration: 560, easing: "cubic-bezier(.22,.61,.36,1)", fill: "forwards" }
      );
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.15 });
  revealElements.forEach(el => revealObserver.observe(el));
}

// Accordions (process steps / FAQ style)
document.querySelectorAll("[data-accordion]").forEach(group => {
  const buttons = [...group.querySelectorAll("[data-accordion-button]")];
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(other => {
        const isCurrent = other === button && other.getAttribute("aria-expanded") !== "true";
        const detail = other.querySelector("[data-accordion-detail]");
        const icon = other.querySelector("[data-accordion-icon]");
        other.setAttribute("aria-expanded", isCurrent ? "true" : "false");
        if (detail) detail.classList.toggle("hidden", !isCurrent);
        if (icon) icon.setAttribute("data-lucide", isCurrent ? "minus" : "plus");
        if (isCurrent && detail && !reducedMotion) {
          detail.animate(
            [
              { opacity: 0, transform: "translateY(-8px)" },
              { opacity: 1, transform: "translateY(0)" }
            ],
            { duration: 210, easing: "ease-out" }
          );
        }
      });
      lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
    });
  });
});

// Simple counters for stats
const counters = [...document.querySelectorAll("[data-count]")];
if (counters.length) {
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || "";
      const duration = 1200;
      const start = performance.now();
      const tick = now => {
        const p = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      reducedMotion ? (el.textContent = target.toLocaleString() + suffix) : requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.4 });
  counters.forEach(el => counterObserver.observe(el));
}
