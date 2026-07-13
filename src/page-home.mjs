import { industries, testimonials, blogPosts } from "./data.mjs";

const solutionCards = `
        <article data-reveal class="group relative flex min-h-[20rem] sm:min-h-[26rem] flex-col justify-between overflow-hidden rounded-md border border-white/15 bg-[#191a1b] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#f26a1e]/70 sm:p-8">
          <div class="flex items-start justify-between">
            <span class="text-sm text-white/45">01</span>
            <i data-lucide="gamepad-2" class="h-7 w-7 text-[#f26a1e]"></i>
          </div>
          <div>
            <p class="text-xs uppercase tracking-[0.25em] text-[#f26a1e]">Parafait</p>
            <h3 class="mt-2 text-3xl font-medium tracking-tight">Family Entertainment Centers</h3>
            <p class="mt-4 max-w-xl text-lg leading-relaxed text-white/60">
              Cashless cards, POS, redemption, party bookings, kiosks, and CRM. One connected system for arcades, bowling, karting, and play.
            </p>
            <a href="family-entertainment-centers.html" class="group/link mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#f26a1e] focus:outline-none focus:ring-2 focus:ring-[#f26a1e]">
              Explore the FEC suite <i data-lucide="arrow-right" class="h-4 w-4 transition-transform group-hover/link:translate-x-1"></i>
            </a>
          </div>
        </article>

        <article data-reveal class="group relative flex min-h-[20rem] sm:min-h-[26rem] flex-col justify-between overflow-hidden rounded-md border border-white/15 bg-[#143a45] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70 sm:p-8">
          <div class="flex items-start justify-between">
            <span class="text-sm text-white/45">02</span>
            <i data-lucide="ferris-wheel" class="h-7 w-7 text-cyan-200"></i>
          </div>
          <div>
            <p class="text-xs uppercase tracking-[0.25em] text-cyan-200">Tixera</p>
            <h3 class="mt-2 text-3xl font-medium tracking-tight">Water and Theme Parks</h3>
            <p class="mt-4 max-w-xl text-lg leading-relaxed text-white/65">
              Ticketing, access control, RFID wristbands and lockers, OTA integrations, and maintenance. Built for high volume park days.
            </p>
            <a href="water-theme-parks.html" class="group/link mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white transition-colors hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200">
              Explore the parks suite <i data-lucide="arrow-right" class="h-4 w-4 transition-transform group-hover/link:translate-x-1"></i>
            </a>
          </div>
        </article>

        <article data-reveal class="group relative flex min-h-[20rem] sm:min-h-[26rem] flex-col justify-between overflow-hidden rounded-md border border-white/15 bg-[#a91f18] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-200/70 sm:p-8">
          <div class="flex items-start justify-between">
            <span class="text-sm text-white/50">03</span>
            <i data-lucide="utensils" class="h-7 w-7 text-red-100"></i>
          </div>
          <div>
            <p class="text-xs uppercase tracking-[0.25em] text-red-100">Delikopos</p>
            <h3 class="mt-2 text-3xl font-medium tracking-tight">Food and Beverage</h3>
            <p class="mt-4 max-w-xl text-lg leading-relaxed text-white/70">
              POS, kitchen display, live inventory, prepaid cards, and CRM for restaurants and food courts inside and outside venues.
            </p>
            <a href="food-and-beverage.html" class="group/link mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white transition-colors hover:text-red-100 focus:outline-none focus:ring-2 focus:ring-red-100">
              Explore the F&amp;B suite <i data-lucide="arrow-right" class="h-4 w-4 transition-transform group-hover/link:translate-x-1"></i>
            </a>
          </div>
        </article>`;

export const homeBody = `
    <section id="home" class="relative min-h-[100svh] overflow-hidden bg-[#e8631a]">
      <div class="absolute inset-0">
        <img src="images/hero-park.jpg" alt="Guests enjoying an amusement park powered by Semnox" data-hero-image class="h-full w-full scale-[1.07] object-cover object-center mix-blend-multiply" fetchpriority="high">
        <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/45"></div>
        <div class="grain"></div>
      </div>

      <div class="relative mx-auto flex min-h-[100svh] max-w-screen-2xl flex-col justify-end px-4 pb-8 pt-28 sm:px-6 sm:pb-10 lg:px-8">
        <div class="max-w-5xl">
          <p data-hero class="mb-5 translate-y-6 text-sm font-medium text-white/80 opacity-0">
            Entertainment technology, since 2008
          </p>
          <h1 data-hero class="max-w-5xl translate-y-6 text-5xl font-medium leading-[0.92] tracking-tight text-white opacity-0 sm:text-7xl lg:text-8xl">
            We power the world's best days out.
          </h1>
          <div class="mt-7 grid gap-6 border-t border-white/35 pt-6 md:grid-cols-12 md:items-end">
            <p data-hero class="translate-y-6 text-lg leading-relaxed text-white/90 opacity-0 md:col-span-6 lg:col-span-5">
              One connected platform for family entertainment centers, water and theme parks, and food and beverage operations. Ticketing, cashless, POS, CRM, and everything in between.
            </p>
            <div data-hero class="flex translate-y-6 flex-col gap-3 opacity-0 sm:flex-row md:col-span-6 md:justify-end">
              <a href="#solutions" class="group inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-[#e8631a]">
                Explore solutions
                <i data-lucide="arrow-down-right" class="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></i>
              </a>
              <a href="contact-us.html" class="inline-flex min-h-12 items-center justify-center rounded-md border border-white/50 px-6 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white">
                Book a demo
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="marquee overflow-hidden border-b border-white/15 bg-[#111213] py-5" aria-label="A few of the operators running on Semnox">
      <div class="marquee-track items-center gap-10 text-sm text-white/40">
${"x".repeat(2).split("").map(() => `        <span class="flex shrink-0 items-center gap-10">
${["Chuck E. Cheese", "Smaaash", "Fantasy Island", "Dubai Garden Glow", "Monster Mini Golf", "GameTime", "Aeon Fantasy", "Clacton Pier", "Black Thunder", "Top Fun", "Sparks Indonesia", "Funcity", "Aqua Planet", "Cowplay CowMoo", "GRS Fantasy Park", "IFS Qatar"].map(c => `          <span class="whitespace-nowrap">${c}</span><span class="h-1 w-1 shrink-0 rounded-full bg-[#f26a1e]"></span>`).join("\n")}
        </span>`).join("\n")}
      </div>
    </section>

    <section id="proof" class="border-b border-white/15 bg-[#111213]">
      <div class="mx-auto max-w-screen-2xl px-4 py-14 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4 lg:gap-y-0">
          <div data-reveal class="flex flex-col justify-between gap-6 border-white/15 pr-8 lg:border-r">
            <p class="stat-figure text-4xl font-semibold leading-none sm:text-6xl lg:text-7xl">2,800<span class="text-[#f26a1e]">+</span></p>
            <p class="max-w-[16ch] text-sm leading-snug text-white/50">venues open their gates on Semnox</p>
          </div>
          <div data-reveal class="flex flex-col justify-between gap-6 border-white/15 lg:border-r lg:px-8">
            <p class="stat-figure text-4xl font-semibold leading-none sm:text-6xl lg:text-7xl">60<span class="text-[#f26a1e]">+</span></p>
            <p class="max-w-[16ch] text-sm leading-snug text-white/50">countries, from Texas to Tasmania</p>
          </div>
          <div data-reveal class="flex flex-col justify-between gap-6 border-white/15 lg:border-r lg:px-8">
            <p class="stat-figure text-4xl font-semibold leading-none sm:text-6xl lg:text-7xl">2<span class="text-[#f26a1e]">x</span></p>
            <p class="max-w-[16ch] text-sm leading-snug text-white/50">IAAPA Brass Ring Awards, the industry's highest honor</p>
          </div>
          <div data-reveal class="flex flex-col justify-between gap-6 lg:pl-8">
            <p class="stat-figure text-4xl font-semibold leading-none sm:text-6xl lg:text-7xl">0<span class="text-[#f26a1e]">:00</span></p>
            <p class="max-w-[18ch] text-sm leading-snug text-white/50">hours per year our support engineers are offline</p>
          </div>
        </div>
        <p data-now-line data-reveal class="mt-10 border-t border-white/10 pt-5 text-xs text-white/35"></p>
      </div>
    </section>

    <section id="solutions" class="bg-[#111213] py-14 sm:py-20 lg:py-28">
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div data-reveal class="grid gap-8 border-b border-white/15 pb-12 lg:grid-cols-12">
          <div class="lg:col-span-4">
            <p class="text-sm text-[#f26a1e]">What we build</p>
          </div>
          <div class="lg:col-span-8">
            <h2 class="max-w-4xl text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
              Three suites. One platform. Every moment of the guest journey.
            </h2>
          </div>
        </div>
        <div class="mt-12 grid gap-4 lg:grid-cols-3">
${solutionCards}
        </div>
      </div>
    </section>

    <section id="industries" class="bg-[#e9e7e1] py-20 text-[#111213] sm:py-28">
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div data-reveal class="flex flex-col justify-between gap-7 border-b border-black/20 pb-10 sm:flex-row sm:items-end">
          <div>
            <p class="text-sm text-black/50">Industries we serve</p>
            <h2 class="mt-3 text-5xl font-medium tracking-tight sm:text-7xl">Built for fun, everywhere.</h2>
          </div>
          <a href="clients.html" class="group inline-flex min-h-11 items-center gap-2 self-start text-sm font-medium underline decoration-black/30 underline-offset-8 transition hover:decoration-black sm:self-auto">
            See who runs on Semnox
            <i data-lucide="arrow-right" class="h-4 w-4 transition-transform group-hover:translate-x-1"></i>
          </a>
        </div>

        <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
${industries.map(ind => `          <a href="${ind.href}" data-reveal class="group block focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4 focus:ring-offset-[#e9e7e1]">
            <div class="relative aspect-[4/5] overflow-hidden rounded-md bg-[#c9c8c3]">
              <img src="${ind.img}" alt="${ind.name}" loading="lazy" decoding="async" class="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.05]">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              <span class="absolute inset-x-3 bottom-3 text-sm font-medium leading-snug text-white">${ind.name}</span>
              <span class="absolute right-3 top-3 inline-flex items-center rounded-md bg-black/70 p-1.5 text-white opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100"><i data-lucide="arrow-up-right" class="h-3.5 w-3.5"></i></span>
            </div>
          </a>`).join("\n")}
        </div>
      </div>
    </section>

    <section class="bg-[#f26a1e] py-14 text-black sm:py-20 lg:py-28">
      <div data-reveal class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-12">
          <i data-lucide="quote" class="h-10 w-10 lg:col-span-2"></i>
          <blockquote class="lg:col-span-9">
            <p class="text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
              "${testimonials[0].quote}"
            </p>
            <footer class="mt-10 flex flex-col gap-4 border-t border-black/25 pt-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p class="text-base font-medium">${testimonials[0].name}</p>
                <p class="mt-1 text-sm text-black/60">${testimonials[0].role}</p>
              </div>
              <a href="testimonials.html" class="group inline-flex min-h-11 items-center gap-2 text-sm font-medium underline decoration-black/40 underline-offset-8 transition hover:decoration-black">
                Read all testimonials <i data-lucide="arrow-right" class="h-4 w-4 transition-transform group-hover:translate-x-1"></i>
              </a>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>

    <section class="bg-[#111213] py-14 sm:py-20 lg:py-28">
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-12">
          <div data-reveal class="lg:col-span-5">
            <div class="lg:sticky lg:top-28">
              <p class="text-sm text-[#f26a1e]">Why operators choose Semnox</p>
              <h2 class="mt-4 text-5xl font-medium tracking-tight sm:text-6xl">
                One partner.<br>Zero gaps.
              </h2>
              <p class="mt-6 max-w-md text-lg leading-relaxed text-white/60">
                Semnox builds, implements, and supports the whole stack. Hardware, software, and a support engineer who picks up at 3 am.
              </p>
              <a href="about-us.html" class="group mt-8 inline-flex min-h-12 items-center gap-2 rounded-md border border-white/25 px-5 text-sm font-medium transition-colors hover:border-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-[#f26a1e]">
                More about the company
                <i data-lucide="arrow-up-right" class="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i>
              </a>
            </div>
          </div>

          <div class="lg:col-span-7" data-accordion>
            <button data-accordion-button aria-expanded="true" class="w-full border-t border-white/20 py-8 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#f26a1e]">
              <div class="grid gap-5 sm:grid-cols-[4rem_1fr_auto] sm:items-start">
                <span class="text-sm text-[#f26a1e]">01</span>
                <div>
                  <h3 class="text-3xl font-medium tracking-tight">Truly integrated</h3>
                  <div data-accordion-detail class="overflow-hidden">
                    <p class="mt-4 max-w-xl text-lg leading-relaxed text-white/55">
                      Ticketing, cashless, POS, F&amp;B, inventory, CRM, and reporting share one database. No brittle bridges between vendors, no reconciliation headaches.
                    </p>
                  </div>
                </div>
                <i data-accordion-icon data-lucide="minus" class="h-5 w-5"></i>
              </div>
            </button>
            <button data-accordion-button aria-expanded="false" class="w-full border-t border-white/20 py-8 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#f26a1e]">
              <div class="grid gap-5 sm:grid-cols-[4rem_1fr_auto] sm:items-start">
                <span class="text-sm text-white/35">02</span>
                <div>
                  <h3 class="text-3xl font-medium tracking-tight">Support that never sleeps</h3>
                  <div data-accordion-detail class="hidden overflow-hidden">
                    <p class="mt-4 max-w-xl text-lg leading-relaxed text-white/55">
                      Online engineers around the clock, all year. Critical support lines in the Americas and worldwide, plus a dedicated support portal.
                    </p>
                  </div>
                </div>
                <i data-accordion-icon data-lucide="plus" class="h-5 w-5"></i>
              </div>
            </button>
            <button data-accordion-button aria-expanded="false" class="w-full border-t border-white/20 py-8 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#f26a1e]">
              <div class="grid gap-5 sm:grid-cols-[4rem_1fr_auto] sm:items-start">
                <span class="text-sm text-white/35">03</span>
                <div>
                  <h3 class="text-3xl font-medium tracking-tight">Proven at scale</h3>
                  <div data-accordion-detail class="hidden overflow-hidden">
                    <p class="mt-4 max-w-xl text-lg leading-relaxed text-white/55">
                      From single arcades to national chains and destination parks, the same platform runs 2,800+ sites in 60+ countries, backed by IAAPA award winning innovation.
                    </p>
                  </div>
                </div>
                <i data-accordion-icon data-lucide="plus" class="h-5 w-5"></i>
              </div>
            </button>
            <button data-accordion-button aria-expanded="false" class="w-full border-y border-white/20 py-8 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#f26a1e]">
              <div class="grid gap-5 sm:grid-cols-[4rem_1fr_auto] sm:items-start">
                <span class="text-sm text-white/35">04</span>
                <div>
                  <h3 class="text-3xl font-medium tracking-tight">Value that shows up in reports</h3>
                  <div data-accordion-detail class="hidden overflow-hidden">
                    <p class="mt-4 max-w-xl text-lg leading-relaxed text-white/55">
                      Operators report higher repeat visits, faster queues, and cleaner books. Real returns, visible in the same dashboards the platform gives you.
                    </p>
                  </div>
                </div>
                <i data-accordion-icon data-lucide="plus" class="h-5 w-5"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="border-y border-white/15 bg-[#111213] py-14 sm:py-20 lg:py-28">
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div data-reveal class="flex items-end justify-between border-b border-white/15 pb-8">
          <div>
            <p class="text-sm text-white/45">Ideas from the team</p>
            <h2 class="mt-3 text-5xl font-medium tracking-tight">From the blog</h2>
          </div>
          <a href="blog.html" class="group hidden min-h-11 items-center gap-2 text-sm text-white/60 transition-colors hover:text-white sm:inline-flex">
            All posts <i data-lucide="arrow-right" class="h-4 w-4 transition-transform group-hover:translate-x-1"></i>
          </a>
        </div>

        <div class="mt-8 grid gap-5 md:grid-cols-3">
${blogPosts.slice(0, 3).map(p => `          <a href="${p.url}" target="_blank" rel="noopener" data-reveal class="group focus:outline-none focus:ring-2 focus:ring-[#f26a1e] focus:ring-offset-4 focus:ring-offset-[#111213]">
            <div class="aspect-[4/3] overflow-hidden rounded-md bg-white/10">
              <img src="${p.img}" alt="" loading="lazy" decoding="async" class="h-full w-full object-cover sm:grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0">
            </div>
            <p class="mt-4 text-xs text-white/40">${p.cat} · ${p.mins}</p>
            <h3 class="mt-2 text-lg font-medium leading-snug">${p.title}</h3>
          </a>`).join("\n")}
        </div>
      </div>
    </section>

    <section id="contact" class="bg-[#f26a1e] py-14 text-black sm:py-20 lg:py-28">
      <div data-reveal class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm text-black/55">Planning a venue, an upgrade, or an expansion?</p>
        <div class="mt-5 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h2 class="max-w-5xl text-5xl font-medium leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Let's make your venue unforgettable.
          </h2>
          <a href="mailto:corp.sales@semnox.com" class="group inline-flex min-h-14 shrink-0 items-center justify-center gap-3 self-start rounded-md bg-black px-7 text-base font-medium text-white transition-colors hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#f26a1e] lg:self-auto">
            corp.sales@semnox.com
            <i data-lucide="arrow-up-right" class="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i>
          </a>
        </div>
        <div class="mt-14 flex flex-col gap-3 border-t border-black/25 pt-6 text-sm text-black/60 sm:flex-row sm:items-center sm:justify-between">
          <span>Demos are live, on your use case, with a real solutions engineer.</span>
          <span>Offices in India, USA, UAE, China, and the UK.</span>
        </div>
      </div>
    </section>`;
