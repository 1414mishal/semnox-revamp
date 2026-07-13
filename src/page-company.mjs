import { interiorHero } from "./shared.mjs";
import { values, team, clientRegions, partnerGroups, associations, testimonials } from "./data.mjs";

export const aboutBody = interiorHero({
  kicker: "About Semnox",
  title: "Two decades of making entertainment run better.",
  lede: "Semnox is a technology partner to the leisure and hospitality industry, live across 2,800+ sites in 60+ countries, with offices in India, USA, UAE, China, and the UK.",
  image: "images/about-banner.jpg",
  tint: "#e8631a",
  links: [{ href: "our-team.html", label: "Meet the team", primary: true }, { href: "clients.html", label: "Our clients" }],
}) + `
    <section class="bg-[#111213] py-20 sm:py-28">
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-12">
          <div data-reveal class="lg:col-span-5">
            <p class="text-sm text-[#f26a1e]">Vision</p>
            <h2 class="mt-4 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">To be the most admired solutions provider to the leisure and hospitality industry.</h2>
            <p class="mt-6 max-w-md text-lg leading-relaxed text-white/60">
              We get there by leveraging technology and intellect to deliver the best business value to every customer, at every site, every day.
            </p>
          </div>
          <div data-reveal class="lg:col-span-7">
            <div class="rounded-md border border-white/15 bg-[#191a1b] p-8">
              <p class="text-sm text-[#f26a1e]">Mission</p>
              <p class="mt-4 text-2xl font-medium leading-snug tracking-tight">
                Help customers gain real business benefits through innovative, complete, high quality technology solutions, delivered by a customer-centric team.
              </p>
              <div class="mt-8 grid gap-6 border-t border-white/15 pt-6 sm:grid-cols-3">
                <div><p class="stat-figure text-3xl font-semibold">2,800<span class="text-[#f26a1e]">+</span></p><p class="mt-1 text-xs text-white/45">Sites live worldwide</p></div>
                <div><p class="stat-figure text-3xl font-semibold">60<span class="text-[#f26a1e]">+</span></p><p class="mt-1 text-xs text-white/45">Countries</p></div>
                <div><p class="stat-figure text-3xl font-semibold">24<span class="text-[#f26a1e]">/7</span></p><p class="mt-1 text-xs text-white/45">Global support, all year</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#e9e7e1] py-20 text-black sm:py-28">
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div data-reveal class="border-b border-black/20 pb-10">
          <p class="text-sm text-black/50">What we stand for</p>
          <h2 class="mt-3 text-5xl font-medium tracking-tight sm:text-6xl">Values we actually use.</h2>
        </div>
        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
${values.map(v => `          <article data-reveal class="rounded-md border border-black/15 bg-white/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#e9540d]">
            <i data-lucide="${v.icon}" class="h-7 w-7 text-[#e9540d]"></i>
            <h3 class="mt-5 text-xl font-medium tracking-tight">${v.name}</h3>
            <p class="mt-2 text-sm leading-relaxed text-black/60">${v.copy}</p>
          </article>`).join("\n")}
        </div>
      </div>
    </section>

    <section class="bg-[#111213] py-20 sm:py-28">
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-12">
          <div data-reveal class="lg:col-span-4">
            <p class="text-sm text-[#f26a1e]">Recognition</p>
            <h2 class="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">Awarded by the industry itself.</h2>
          </div>
          <div class="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            <article data-reveal class="rounded-md border border-[#f26a1e] bg-[#f26a1e] p-6 text-black">
              <i data-lucide="trophy" class="h-8 w-8"></i>
              <h3 class="mt-5 text-2xl font-medium tracking-tight">2x IAAPA Brass Ring Awards</h3>
              <p class="mt-3 text-base leading-relaxed text-black/65">The amusement industry's highest honor, awarded twice for product excellence.</p>
            </article>
            <article data-reveal class="rounded-md border border-white/15 p-6">
              <i data-lucide="award" class="h-8 w-8 text-[#f26a1e]"></i>
              <h3 class="mt-5 text-2xl font-medium tracking-tight">6x Innovative Product of the Year</h3>
              <p class="mt-3 text-base leading-relaxed text-white/55">Recognized six times at IAAPI conferences for breakthrough products.</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#f26a1e] py-20 text-black sm:py-28">
      <div data-reveal class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h2 class="max-w-4xl text-5xl font-medium leading-[0.95] tracking-tight sm:text-7xl">Meet the people behind the platform.</h2>
          <a href="our-team.html" class="group inline-flex min-h-14 shrink-0 items-center justify-center gap-3 self-start rounded-md bg-black px-7 text-base font-medium text-white transition-colors hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#f26a1e] lg:self-auto">
            Our leadership <i data-lucide="arrow-up-right" class="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i>
          </a>
        </div>
      </div>
    </section>`;

export const teamBody = interiorHero({
  kicker: "Our team",
  title: "A wide range of skills. One shared obsession.",
  lede: "The strength behind Semnox is its people: engineers, implementers, support specialists, and industry veterans across every region we serve.",
  image: "images/hero-alt.jpg",
  tint: "#e8631a",
  links: [{ href: "careers.html", label: "Join the team", primary: true }],
}) + `
    <section class="bg-[#111213] py-20 sm:py-28">
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div data-reveal class="flex items-end justify-between border-b border-white/15 pb-8">
          <div>
            <p class="text-sm text-white/45">Global leadership</p>
            <h2 class="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">Leadership</h2>
          </div>
          <span class="text-lg text-white/45">(${team.length})</span>
        </div>
        <div class="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
${team.map(m => `          <div data-reveal class="group">
            <div class="relative aspect-[4/5] overflow-hidden rounded-md bg-[#191a1b]">
              <img src="${m.img}" alt="${m.name}" loading="lazy" class="h-full w-full object-cover object-top grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
            <h3 class="mt-4 text-lg font-medium">${m.name}</h3>
            <p class="mt-1 text-sm text-white/50">${m.role}</p>
          </div>`).join("\n")}
        </div>
        <div data-reveal class="mt-14 rounded-md border border-white/15 bg-[#191a1b] p-8 sm:p-10">
          <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p class="text-sm text-[#f26a1e]">And many more</p>
              <p class="mt-3 max-w-2xl text-2xl font-medium leading-snug tracking-tight">A global sales and support network of 18+ regional leaders keeps Semnox close to every customer, in every timezone.</p>
            </div>
            <a href="contact-us.html" class="group inline-flex min-h-12 shrink-0 items-center gap-2 rounded-md border border-white/25 px-5 text-sm font-medium transition-colors hover:border-white hover:bg-white hover:text-black">
              Find your regional contact <i data-lucide="arrow-right" class="h-4 w-4 transition-transform group-hover:translate-x-1"></i>
            </a>
          </div>
        </div>
      </div>
    </section>`;

export const clientsBody = interiorHero({
  kicker: "Our clients",
  title: "2,800+ venues. 60+ countries. One platform.",
  lede: "From single-location arcades to global franchise chains and destination parks, operators everywhere trust Semnox with their busiest days.",
  image: "images/theme-parks.jpg",
  tint: "#e8631a",
  links: [{ href: "testimonials.html", label: "What they say", primary: true }, { href: "case-studies.html", label: "Case studies" }],
}) + `
    <section class="bg-[#111213] py-20 sm:py-28">
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
${clientRegions.map((r, idx) => `        <div data-reveal class="${idx === 0 ? "" : "mt-16 "}border-b border-white/15 pb-6">
          <div class="flex items-end justify-between">
            <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">${r.region}</h2>
            <span class="text-sm text-white/40">(${r.clients.length})</span>
          </div>
        </div>
        <div class="mt-6 flex flex-wrap gap-3">
${r.clients.map(c => `          <span data-reveal class="rounded-md border border-white/15 bg-[#191a1b] px-4 py-3 text-sm text-white/75 transition-colors hover:border-[#f26a1e]/60 hover:text-white">${c}</span>`).join("\n")}
        </div>`).join("\n")}
      </div>
    </section>

    <section class="bg-[#f26a1e] py-20 text-black sm:py-28">
      <div data-reveal class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-12">
          <i data-lucide="quote" class="h-10 w-10 lg:col-span-2"></i>
          <blockquote class="lg:col-span-9">
            <p class="text-4xl font-medium leading-tight tracking-tight sm:text-6xl">"${testimonials[3].quote}"</p>
            <footer class="mt-10 border-t border-black/25 pt-5">
              <p class="text-base font-medium">${testimonials[3].name}</p>
              <p class="mt-1 text-sm text-black/60">${testimonials[3].role}</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>`;

export const partnersBody = interiorHero({
  kicker: "Partners",
  title: "An ecosystem that plugs straight in.",
  lede: "Distributors, consultants, and best-in-class integrations across bowling, karting, laser tag, redemption, payments, and more.",
  image: "images/vr-ar.jpg",
  tint: "#143a45",
  links: [{ href: "contact-us.html", label: "Become a partner", primary: true }],
}) + `
    <section class="bg-[#111213] py-20 sm:py-28">
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
${partnerGroups.map((g, idx) => `        <div data-reveal class="${idx === 0 ? "" : "mt-16 "}flex items-center gap-4 border-b border-white/15 pb-6">
          <i data-lucide="${g.icon}" class="h-7 w-7 text-[#f26a1e]"></i>
          <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">${g.type}</h2>
          <span class="ml-auto text-sm text-white/40">(${g.partners.length})</span>
        </div>
        <div class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
${g.partners.map(p => `          <div data-reveal class="flex items-center justify-between gap-3 rounded-md border border-white/15 bg-[#191a1b] px-5 py-4 text-sm text-white/75 transition-colors hover:border-[#f26a1e]/60 hover:text-white">
            <span>${p}</span><i data-lucide="handshake" class="h-4 w-4 shrink-0 text-white/25"></i>
          </div>`).join("\n")}
        </div>`).join("\n")}
      </div>
    </section>

    <section class="bg-[#e9e7e1] py-20 text-black sm:py-28">
      <div data-reveal class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p class="text-sm text-black/50">Want to work with us?</p>
            <h2 class="mt-3 max-w-3xl text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl">Let's build the ecosystem together.</h2>
          </div>
          <a href="contact-us.html" class="group inline-flex min-h-14 shrink-0 items-center justify-center gap-3 self-start rounded-md bg-black px-7 text-base font-medium text-white transition-colors hover:bg-[#f26a1e] hover:text-black lg:self-auto">
            Talk to our partnerships team <i data-lucide="arrow-up-right" class="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i>
          </a>
        </div>
      </div>
    </section>`;

export const associationsBody = interiorHero({
  kicker: "Associations",
  title: "Active members of the industry we serve.",
  lede: "Semnox participates in the leading amusement, leisure, and attractions associations around the world, staying close to where the industry is heading.",
  image: "images/museum.jpg",
  tint: "#e8631a",
}) + `
    <section class="bg-[#111213] py-20 sm:py-28">
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div data-reveal class="flex items-end justify-between border-b border-white/15 pb-8">
          <h2 class="text-4xl font-medium tracking-tight sm:text-5xl">Memberships</h2>
          <span class="text-lg text-white/45">(${associations.length})</span>
        </div>
        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
${associations.map(a => `          <article data-reveal class="group rounded-md border border-white/15 bg-[#191a1b] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#f26a1e]/70">
            <div class="flex items-start justify-between">
              <span class="text-2xl font-medium tracking-tight text-[#f26a1e]">${a.name}</span>
              <i data-lucide="badge-check" class="h-5 w-5 text-white/30"></i>
            </div>
            <p class="mt-3 text-sm leading-relaxed text-white/55">${a.full}</p>
          </article>`).join("\n")}
        </div>
      </div>
    </section>`;
