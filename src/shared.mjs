// Shared shell for every page of the Semnox revamp.

// The Semnox pinwheel "o": blue, red, and green sectors around a yellow play mark.
export const pinwheel = (cls = "h-6 w-6") => `<svg viewBox="0 0 100 100" class="${cls}" aria-hidden="true">
          <path d="M50 50 L12.7 24.8 A45 45 0 0 1 87.3 24.8 Z" fill="#2E86C8"></path>
          <path d="M50 50 L12.7 24.8 A45 45 0 0 1 87.3 24.8 Z" fill="#E5342B" transform="rotate(120 50 50)"></path>
          <path d="M50 50 L12.7 24.8 A45 45 0 0 1 87.3 24.8 Z" fill="#33A852" transform="rotate(240 50 50)"></path>
          <path d="M42 34 L70 50 L42 66 Z" fill="#FFD400" stroke="#FFD400" stroke-width="9" stroke-linejoin="round"></path>
        </svg>`;

export const NAV = {
  solutions: [
    { href: "family-entertainment-centers.html", label: "Family Entertainment Centers", tag: "Parafait" },
    { href: "water-theme-parks.html", label: "Water and Theme Parks", tag: "Tixera" },
    { href: "food-and-beverage.html", label: "Food and Beverage", tag: "Delikopos" },
  ],
  company: [
    { href: "about-us.html", label: "About Us" },
    { href: "our-team.html", label: "Our Team" },
    { href: "clients.html", label: "Our Clients" },
    { href: "partners.html", label: "Partners" },
    { href: "associations.html", label: "Associations" },
  ],
  media: [
    { href: "news-and-events.html", label: "News and Events" },
    { href: "gallery.html", label: "Gallery" },
    { href: "blog.html", label: "Blog" },
    { href: "testimonials.html", label: "Testimonials" },
    { href: "case-studies.html", label: "Case Studies" },
    { href: "csr.html", label: "CSR" },
  ],
};

const dropdown = (label, key, items, active) => `
        <div class="relative" data-dropdown>
          <button type="button" data-dropdown-button aria-expanded="false" class="inline-flex items-center gap-1.5 py-2 text-sm ${active === key ? "text-white" : "text-white/70"} transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-[#f26a1e]">
            ${label} <i data-lucide="chevron-down" class="h-3.5 w-3.5 transition-transform" data-dropdown-icon></i>
          </button>
          <div data-dropdown-panel class="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200">
            <div class="overflow-hidden rounded-md border border-white/15 bg-[#191a1b]/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-md">
${items.map(i => `              <a href="${i.href}" class="flex items-center justify-between gap-3 rounded-md px-4 py-3 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#f26a1e]">
                <span>${i.label}</span>${i.tag ? `<span class="rounded-full border border-[#f26a1e]/40 px-2 py-0.5 text-[10px] uppercase tracking-widest text-[#f26a1e]">${i.tag}</span>` : `<i data-lucide="arrow-up-right" class="h-3.5 w-3.5 text-white/30"></i>`}
              </a>`).join("\n")}
            </div>
          </div>
        </div>`;

export const header = (active = "") => `
  <a href="#main-content" class="fixed left-4 top-4 z-[100] -translate-y-24 rounded-md bg-white px-4 py-3 text-sm font-medium text-black transition-transform focus:translate-y-0">Skip to content</a>

  <header id="site-header" class="fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-200">
    <div class="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <a href="index.html" aria-label="Semnox home" class="group inline-flex items-baseline gap-[0.18em] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f26a1e] focus:ring-offset-4 focus:ring-offset-black">
        <span class="text-[1.35rem] font-bold lowercase leading-none tracking-[-0.045em] text-white">semn</span>
        ${pinwheel("h-[1.06rem] w-[1.06rem] translate-y-[0.09em] transition-transform duration-500 group-hover:rotate-[120deg]")}
        <span class="text-[1.35rem] font-bold lowercase leading-none tracking-[-0.045em] text-white">x</span>
        <span class="self-start text-[0.55rem] font-semibold text-white/70">®</span>
      </a>

      <nav aria-label="Primary navigation" class="hidden items-center gap-7 lg:flex">
${dropdown("Solutions", "solutions", NAV.solutions, active)}
${dropdown("Company", "company", NAV.company, active)}
${dropdown("Media", "media", NAV.media, active)}
        <a href="careers.html" class="relative py-2 text-sm ${active === "careers" ? "text-white" : "text-white/70"} transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-right after:scale-x-0 after:bg-white after:transition-transform hover:text-white hover:after:origin-left hover:after:scale-x-100 focus:outline-none focus:ring-2 focus:ring-[#f26a1e]">Careers</a>
      </nav>

      <div class="flex items-center gap-3">
        <a href="contact-us.html" class="group hidden min-h-11 items-center gap-2 rounded-md bg-[#f26a1e] px-5 text-sm font-medium text-black transition-colors duration-200 hover:bg-[#f5823f] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black sm:inline-flex">
          Book a demo
          <i data-lucide="arrow-up-right" class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"></i>
        </a>
        <button id="menu-button" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-menu" class="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:border-white/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#f26a1e] lg:hidden">
          <i data-lucide="menu" class="h-5 w-5"></i>
        </button>
      </div>
    </div>
  </header>

  <div id="mobile-menu" class="fixed inset-0 z-40 hidden overflow-y-auto bg-[#111213]/98 px-5 pb-10 pt-24 backdrop-blur-md lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
    <nav class="flex min-h-full flex-col" aria-label="Mobile navigation">
      <p class="text-xs uppercase tracking-[0.2em] text-[#f26a1e]">Solutions</p>
      <div class="mt-2 flex flex-col border-t border-white/15">
${NAV.solutions.map(i => `        <a href="${i.href}" class="mobile-link flex min-h-14 items-center justify-between border-b border-white/15 text-lg tracking-tight">${i.label} <i data-lucide="arrow-right" class="h-4 w-4 text-white/40"></i></a>`).join("\n")}
      </div>
      <p class="mt-8 text-xs uppercase tracking-[0.2em] text-[#f26a1e]">Company</p>
      <div class="mt-2 flex flex-col border-t border-white/15">
${NAV.company.map(i => `        <a href="${i.href}" class="mobile-link flex min-h-12 items-center justify-between border-b border-white/15 text-base tracking-tight">${i.label} <i data-lucide="arrow-right" class="h-4 w-4 text-white/40"></i></a>`).join("\n")}
      </div>
      <p class="mt-8 text-xs uppercase tracking-[0.2em] text-[#f26a1e]">Media</p>
      <div class="mt-2 flex flex-col border-t border-white/15">
${NAV.media.map(i => `        <a href="${i.href}" class="mobile-link flex min-h-12 items-center justify-between border-b border-white/15 text-base tracking-tight">${i.label} <i data-lucide="arrow-right" class="h-4 w-4 text-white/40"></i></a>`).join("\n")}
        <a href="careers.html" class="mobile-link flex min-h-12 items-center justify-between border-b border-white/15 text-base tracking-tight">Careers <i data-lucide="arrow-right" class="h-4 w-4 text-white/40"></i></a>
      </div>
      <a href="contact-us.html" class="mobile-link mt-10 inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-[#f26a1e] px-5 text-base font-medium text-black">
        Book a demo <i data-lucide="arrow-up-right" class="h-5 w-5"></i>
      </a>
    </nav>
  </div>`;

export const footer = `
  <footer class="bg-[#111213]">
    <div class="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid gap-10 border-b border-white/15 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p class="text-sm font-medium">Semnox Solutions</p>
          <p class="mt-4 max-w-xs text-sm leading-relaxed text-white/45">
            Technology that powers the world's entertainment and leisure venues. Live across 2,800+ sites in 60+ countries.
          </p>
          <div class="mt-5 flex flex-col gap-2 text-sm text-white/55">
            <a href="mailto:corp.sales@semnox.com" class="transition-colors hover:text-[#f26a1e]">corp.sales@semnox.com</a>
            <a href="tel:+918244255888" class="transition-colors hover:text-[#f26a1e]">+91 824 425 5888</a>
          </div>
        </div>
        <div>
          <p class="text-xs text-white/35">Solutions</p>
          <div class="mt-4 flex flex-col items-start gap-3 text-sm">
            <a href="family-entertainment-centers.html" class="transition-colors hover:text-[#f26a1e] focus:outline-none focus:ring-2 focus:ring-[#f26a1e]">Family Entertainment Centers</a>
            <a href="water-theme-parks.html" class="transition-colors hover:text-[#f26a1e] focus:outline-none focus:ring-2 focus:ring-[#f26a1e]">Water and Theme Parks</a>
            <a href="food-and-beverage.html" class="transition-colors hover:text-[#f26a1e] focus:outline-none focus:ring-2 focus:ring-[#f26a1e]">Food and Beverage</a>
            <a href="case-studies.html" class="transition-colors hover:text-[#f26a1e] focus:outline-none focus:ring-2 focus:ring-[#f26a1e]">Case Studies</a>
          </div>
        </div>
        <div>
          <p class="text-xs text-white/35">Company</p>
          <div class="mt-4 flex flex-col items-start gap-3 text-sm">
            <a href="about-us.html" class="transition-colors hover:text-[#f26a1e] focus:outline-none focus:ring-2 focus:ring-[#f26a1e]">About us</a>
            <a href="our-team.html" class="transition-colors hover:text-[#f26a1e] focus:outline-none focus:ring-2 focus:ring-[#f26a1e]">Our team</a>
            <a href="clients.html" class="transition-colors hover:text-[#f26a1e] focus:outline-none focus:ring-2 focus:ring-[#f26a1e]">Our clients</a>
            <a href="partners.html" class="transition-colors hover:text-[#f26a1e] focus:outline-none focus:ring-2 focus:ring-[#f26a1e]">Partners</a>
            <a href="careers.html" class="transition-colors hover:text-[#f26a1e] focus:outline-none focus:ring-2 focus:ring-[#f26a1e]">Careers</a>
          </div>
        </div>
        <div>
          <p class="text-xs text-white/35">Media</p>
          <div class="mt-4 flex flex-col items-start gap-3 text-sm">
            <a href="news-and-events.html" class="transition-colors hover:text-[#f26a1e] focus:outline-none focus:ring-2 focus:ring-[#f26a1e]">News and events</a>
            <a href="blog.html" class="transition-colors hover:text-[#f26a1e] focus:outline-none focus:ring-2 focus:ring-[#f26a1e]">Blog</a>
            <a href="gallery.html" class="transition-colors hover:text-[#f26a1e] focus:outline-none focus:ring-2 focus:ring-[#f26a1e]">Gallery</a>
            <a href="testimonials.html" class="transition-colors hover:text-[#f26a1e] focus:outline-none focus:ring-2 focus:ring-[#f26a1e]">Testimonials</a>
            <a href="csr.html" class="transition-colors hover:text-[#f26a1e] focus:outline-none focus:ring-2 focus:ring-[#f26a1e]">CSR</a>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-8 pt-8">
        <div class="flex flex-col gap-3 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Semnox Solutions Ltd. All rights reserved.</p>
          <div class="flex flex-wrap gap-5">
            <a href="https://www.semnox.com/privacy-policy.html" target="_blank" rel="noopener" class="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#f26a1e]">Privacy</a>
            <a href="https://www.semnox.com/cookie-policy.html" target="_blank" rel="noopener" class="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#f26a1e]">Cookie policy</a>
            <a href="https://www.semnox.com/disclaimer.html" target="_blank" rel="noopener" class="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#f26a1e]">Disclaimer</a>
          </div>
        </div>
        <a href="index.html" aria-label="Semnox home" class="group inline-flex w-fit items-baseline gap-[0.14em] focus:outline-none focus:ring-2 focus:ring-[#f26a1e]">
          <span class="text-6xl font-bold lowercase leading-none tracking-[-0.05em] text-white/90 transition-colors duration-300 group-hover:text-white sm:text-8xl lg:text-9xl">semn</span>
          ${pinwheel("h-[3rem] w-[3rem] translate-y-[0.1em] transition-transform duration-700 ease-out group-hover:rotate-[240deg] sm:h-[4.2rem] sm:w-[4.2rem] lg:h-[5.6rem] lg:w-[5.6rem]")}
          <span class="text-6xl font-bold lowercase leading-none tracking-[-0.05em] text-white/90 transition-colors duration-300 group-hover:text-white sm:text-8xl lg:text-9xl">x</span>
          <span class="self-start text-base font-semibold text-white/60 sm:text-xl">®</span>
        </a>
        <p class="max-w-md text-xs leading-relaxed text-white/30">Where the world goes to play.</p>
      </div>
    </div>
  </footer>`;

export const pageShell = ({ file, title, desc, active = "", body }) => `<!DOCTYPE html>
<html lang="en" class="scroll-smooth bg-[#111213]">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="${desc}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:type" content="website">
<title>${title}</title>
<link rel="icon" type="image/svg+xml" href="favicon.svg">
<link rel="alternate icon" type="image/png" href="images/logo.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://unpkg.com/lucide@latest"></script>
<style>
  @keyframes marquee { to { transform: translateX(-50%); } }
  .marquee-track { display: flex; width: max-content; animation: marquee 42s linear infinite; }
  .marquee:hover .marquee-track { animation-play-state: paused; }
  @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none; } }
  .grain { position: absolute; inset: 0; pointer-events: none; opacity: .5; mix-blend-mode: overlay; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E"); }
  .stat-figure { font-variant-numeric: tabular-nums; letter-spacing: -0.05em; }
</style>
</head>

<body class="min-h-screen overflow-x-hidden bg-[#111213] font-['Inter'] text-[#f4f2ed] antialiased selection:bg-[#f26a1e] selection:text-black">
${header(active)}

  <main id="main-content">
${body}
  </main>
${footer}

  <script src="site.js"></script>
</body>
</html>
`;

// Shared page-top hero for interior pages.
export const interiorHero = ({ kicker, title, lede, image, tint = "#e8631a", links = [] }) => `
    <section class="relative overflow-hidden" style="background-color:${tint}">
      <div class="absolute inset-0">
        <img src="${image}" alt="" class="h-full w-full object-cover object-center mix-blend-multiply opacity-90" fetchpriority="high">
        <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50"></div>
        <div class="grain"></div>
      </div>
      <div class="relative mx-auto flex min-h-[62vh] max-w-screen-2xl flex-col justify-end px-4 pb-10 pt-32 sm:px-6 lg:px-8">
        <p data-hero class="mb-4 translate-y-6 text-sm font-medium text-white/80 opacity-0">${kicker}</p>
        <h1 data-hero class="max-w-4xl translate-y-6 text-4xl font-medium leading-[0.95] tracking-tight text-white opacity-0 sm:text-6xl lg:text-7xl">${title}</h1>
        <div class="mt-7 grid gap-6 border-t border-white/35 pt-6 md:grid-cols-12 md:items-end">
          <p data-hero class="translate-y-6 text-lg leading-relaxed text-white/90 opacity-0 md:col-span-7">${lede}</p>
          ${links.length ? `<div data-hero class="flex translate-y-6 flex-col gap-3 opacity-0 sm:flex-row md:col-span-5 md:justify-end">
${links.map(l => `            <a href="${l.href}" class="${l.primary
              ? "group inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black"
              : "inline-flex min-h-12 items-center justify-center rounded-md border border-white/50 px-6 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"}">${l.label}${l.primary ? ` <i data-lucide="arrow-down-right" class="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></i>` : ""}</a>`).join("\n")}
          </div>` : ""}
        </div>
      </div>
    </section>`;
