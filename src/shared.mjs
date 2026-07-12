// Shared shell for every page of the Semnox revamp.

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
          <button type="button" data-dropdown-button aria-expanded="false" class="inline-flex items-center gap-1.5 py-2 text-sm ${active === key ? "text-white" : "text-white/70"} transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6a1a]">
            ${label} <i data-lucide="chevron-down" class="h-3.5 w-3.5 transition-transform" data-dropdown-icon></i>
          </button>
          <div data-dropdown-panel class="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200">
            <div class="overflow-hidden rounded-md border border-white/15 bg-[#191a1b]/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-md">
${items.map(i => `              <a href="${i.href}" class="flex items-center justify-between gap-3 rounded-md px-4 py-3 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6a1a]">
                <span>${i.label}</span>${i.tag ? `<span class="rounded-full border border-[#ff6a1a]/40 px-2 py-0.5 text-[10px] uppercase tracking-widest text-[#ff6a1a]">${i.tag}</span>` : `<i data-lucide="arrow-up-right" class="h-3.5 w-3.5 text-white/30"></i>`}
              </a>`).join("\n")}
            </div>
          </div>
        </div>`;

export const header = (active = "") => `
  <a href="#main-content" class="fixed left-4 top-4 z-[100] -translate-y-24 rounded-md bg-white px-4 py-3 text-sm font-medium text-black transition-transform focus:translate-y-0">Skip to content</a>

  <header id="site-header" class="fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-200">
    <div class="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <a href="index.html" aria-label="Semnox home" class="group inline-flex items-center gap-2.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#ff6a1a] focus:ring-offset-4 focus:ring-offset-black">
        <svg viewBox="0 0 34 34" class="h-7 w-7 text-[#ff6a1a]" aria-hidden="true">
          <rect x="1" y="1" width="32" height="32" rx="3" fill="none" stroke="currentColor" stroke-width="1.5"></rect>
          <path d="M24 10.5c-1.6-1.4-4.2-1.9-6.4-1C15 10.6 14.6 13.6 16.6 15c2.2 1.6 6 1 7.6 3.2 1.5 2.1.3 5-2.2 5.9-2.3.8-5 .2-6.6-1.3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
        </svg>
        <span class="text-lg font-medium tracking-tight text-white">Semnox<span class="text-[#ff6a1a]">.</span></span>
      </a>

      <nav aria-label="Primary navigation" class="hidden items-center gap-7 lg:flex">
${dropdown("Solutions", "solutions", NAV.solutions, active)}
${dropdown("Company", "company", NAV.company, active)}
${dropdown("Media", "media", NAV.media, active)}
        <a href="careers.html" class="relative py-2 text-sm ${active === "careers" ? "text-white" : "text-white/70"} transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-right after:scale-x-0 after:bg-white after:transition-transform hover:text-white hover:after:origin-left hover:after:scale-x-100 focus:outline-none focus:ring-2 focus:ring-[#ff6a1a]">Careers</a>
      </nav>

      <div class="flex items-center gap-3">
        <a href="contact-us.html" class="group hidden min-h-11 items-center gap-2 rounded-md bg-[#ff6a1a] px-5 text-sm font-medium text-black transition-colors duration-200 hover:bg-[#ff8444] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black sm:inline-flex">
          Book a demo
          <i data-lucide="arrow-up-right" class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"></i>
        </a>
        <button id="menu-button" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-menu" class="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:border-white/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#ff6a1a] lg:hidden">
          <i data-lucide="menu" class="h-5 w-5"></i>
        </button>
      </div>
    </div>
  </header>

  <div id="mobile-menu" class="fixed inset-0 z-40 hidden overflow-y-auto bg-[#111213]/98 px-5 pb-10 pt-24 backdrop-blur-md lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
    <nav class="flex min-h-full flex-col" aria-label="Mobile navigation">
      <p class="text-xs uppercase tracking-[0.2em] text-[#ff6a1a]">Solutions</p>
      <div class="mt-2 flex flex-col border-t border-white/15">
${NAV.solutions.map(i => `        <a href="${i.href}" class="mobile-link flex min-h-14 items-center justify-between border-b border-white/15 text-lg tracking-tight">${i.label} <i data-lucide="arrow-right" class="h-4 w-4 text-white/40"></i></a>`).join("\n")}
      </div>
      <p class="mt-8 text-xs uppercase tracking-[0.2em] text-[#ff6a1a]">Company</p>
      <div class="mt-2 flex flex-col border-t border-white/15">
${NAV.company.map(i => `        <a href="${i.href}" class="mobile-link flex min-h-12 items-center justify-between border-b border-white/15 text-base tracking-tight">${i.label} <i data-lucide="arrow-right" class="h-4 w-4 text-white/40"></i></a>`).join("\n")}
      </div>
      <p class="mt-8 text-xs uppercase tracking-[0.2em] text-[#ff6a1a]">Media</p>
      <div class="mt-2 flex flex-col border-t border-white/15">
${NAV.media.map(i => `        <a href="${i.href}" class="mobile-link flex min-h-12 items-center justify-between border-b border-white/15 text-base tracking-tight">${i.label} <i data-lucide="arrow-right" class="h-4 w-4 text-white/40"></i></a>`).join("\n")}
        <a href="careers.html" class="mobile-link flex min-h-12 items-center justify-between border-b border-white/15 text-base tracking-tight">Careers <i data-lucide="arrow-right" class="h-4 w-4 text-white/40"></i></a>
      </div>
      <a href="contact-us.html" class="mobile-link mt-10 inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-[#ff6a1a] px-5 text-base font-medium text-black">
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
            <a href="mailto:corp.sales@semnox.com" class="transition-colors hover:text-[#ff6a1a]">corp.sales@semnox.com</a>
            <a href="tel:+918244255888" class="transition-colors hover:text-[#ff6a1a]">+91 824 425 5888</a>
          </div>
        </div>
        <div>
          <p class="text-xs text-white/35">Solutions</p>
          <div class="mt-4 flex flex-col items-start gap-3 text-sm">
            <a href="family-entertainment-centers.html" class="transition-colors hover:text-[#ff6a1a] focus:outline-none focus:ring-2 focus:ring-[#ff6a1a]">Family Entertainment Centers</a>
            <a href="water-theme-parks.html" class="transition-colors hover:text-[#ff6a1a] focus:outline-none focus:ring-2 focus:ring-[#ff6a1a]">Water and Theme Parks</a>
            <a href="food-and-beverage.html" class="transition-colors hover:text-[#ff6a1a] focus:outline-none focus:ring-2 focus:ring-[#ff6a1a]">Food and Beverage</a>
            <a href="case-studies.html" class="transition-colors hover:text-[#ff6a1a] focus:outline-none focus:ring-2 focus:ring-[#ff6a1a]">Case Studies</a>
          </div>
        </div>
        <div>
          <p class="text-xs text-white/35">Company</p>
          <div class="mt-4 flex flex-col items-start gap-3 text-sm">
            <a href="about-us.html" class="transition-colors hover:text-[#ff6a1a] focus:outline-none focus:ring-2 focus:ring-[#ff6a1a]">About us</a>
            <a href="our-team.html" class="transition-colors hover:text-[#ff6a1a] focus:outline-none focus:ring-2 focus:ring-[#ff6a1a]">Our team</a>
            <a href="clients.html" class="transition-colors hover:text-[#ff6a1a] focus:outline-none focus:ring-2 focus:ring-[#ff6a1a]">Our clients</a>
            <a href="partners.html" class="transition-colors hover:text-[#ff6a1a] focus:outline-none focus:ring-2 focus:ring-[#ff6a1a]">Partners</a>
            <a href="careers.html" class="transition-colors hover:text-[#ff6a1a] focus:outline-none focus:ring-2 focus:ring-[#ff6a1a]">Careers</a>
          </div>
        </div>
        <div>
          <p class="text-xs text-white/35">Media</p>
          <div class="mt-4 flex flex-col items-start gap-3 text-sm">
            <a href="news-and-events.html" class="transition-colors hover:text-[#ff6a1a] focus:outline-none focus:ring-2 focus:ring-[#ff6a1a]">News and events</a>
            <a href="blog.html" class="transition-colors hover:text-[#ff6a1a] focus:outline-none focus:ring-2 focus:ring-[#ff6a1a]">Blog</a>
            <a href="gallery.html" class="transition-colors hover:text-[#ff6a1a] focus:outline-none focus:ring-2 focus:ring-[#ff6a1a]">Gallery</a>
            <a href="testimonials.html" class="transition-colors hover:text-[#ff6a1a] focus:outline-none focus:ring-2 focus:ring-[#ff6a1a]">Testimonials</a>
            <a href="csr.html" class="transition-colors hover:text-[#ff6a1a] focus:outline-none focus:ring-2 focus:ring-[#ff6a1a]">CSR</a>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-8 pt-8">
        <div class="flex flex-col gap-3 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Semnox Solutions Ltd. All rights reserved.</p>
          <div class="flex flex-wrap gap-5">
            <a href="contact-us.html" class="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6a1a]">Privacy</a>
            <a href="contact-us.html" class="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6a1a]">Cookie policy</a>
            <a href="contact-us.html" class="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6a1a]">Disclaimer</a>
          </div>
        </div>
        <p class="break-words text-5xl font-medium leading-none tracking-tight text-white/90 sm:text-7xl lg:text-8xl">Semnox<span class="text-[#ff6a1a]">®</span></p>
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
<link rel="icon" type="image/png" href="images/logo.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://unpkg.com/lucide@latest"></script>
</head>

<body class="min-h-screen overflow-x-hidden bg-[#111213] font-['Inter'] text-[#f4f2ed] antialiased selection:bg-[#ff6a1a] selection:text-black">
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
export const interiorHero = ({ kicker, title, lede, image, tint = "#f06a18", links = [] }) => `
    <section class="relative overflow-hidden" style="background-color:${tint}">
      <div class="absolute inset-0">
        <img src="${image}" alt="" class="h-full w-full object-cover object-center mix-blend-multiply opacity-90" fetchpriority="high">
        <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50"></div>
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
