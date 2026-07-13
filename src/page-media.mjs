import { interiorHero } from "./shared.mjs";
import { testimonials, blogPosts, industries } from "./data.mjs";

export const testimonialsBody = interiorHero({
  kicker: "Testimonials",
  title: "Operators say it better than we ever could.",
  lede: "From arcade owners to franchise presidents, here is what running on Semnox actually feels like.",
  image: "images/kids-play.jpg",
  tint: "#e8631a",
  links: [{ href: "contact-us.html", label: "Join them", primary: true }],
}) + `
    <section class="bg-[#111213] py-14 sm:py-20 lg:py-28">
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div class="columns-1 gap-4 sm:columns-2 lg:columns-3">
${testimonials.map(t => `          <figure data-reveal class="mb-4 break-inside-avoid rounded-md border border-white/15 bg-[#191a1b] p-6 transition-colors hover:border-[#f26a1e]/60">
            <i data-lucide="quote" class="h-6 w-6 text-[#f26a1e]"></i>
            <blockquote class="mt-4 text-lg font-medium leading-snug tracking-tight">"${t.quote}"</blockquote>
            <figcaption class="mt-5 border-t border-white/10 pt-4">
              <p class="text-sm font-medium">${t.name}</p>
              <p class="mt-0.5 text-xs text-white/45">${t.role}</p>
            </figcaption>
          </figure>`).join("\n")}
        </div>
      </div>
    </section>`;

export const blogBody = interiorHero({
  kicker: "Blog",
  title: "Ideas for people who run fun for a living.",
  lede: "Guides, product deep dives, and operations thinking from the Semnox team. Written for operators, not for algorithms.",
  image: "images/foodcourt.jpg",
  tint: "#143a45",
}) + `
    <section class="bg-[#111213] py-14 sm:py-20 lg:py-28">
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div data-reveal class="flex items-end justify-between border-b border-white/15 pb-8">
          <div>
            <p class="text-sm text-white/45">Latest thinking</p>
            <h2 class="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">All posts</h2>
          </div>
          <span class="text-lg text-white/45">(${blogPosts.length})</span>
        </div>
        <div class="mt-8 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
${blogPosts.map(p => `          <a href="${p.url}" target="_blank" rel="noopener" data-reveal class="group focus:outline-none focus:ring-2 focus:ring-[#f26a1e] focus:ring-offset-4 focus:ring-offset-[#111213]">
            <div class="aspect-[4/3] overflow-hidden rounded-md bg-white/10">
              <img src="${p.img}" alt="" loading="lazy" decoding="async" class="h-full w-full object-cover sm:grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0">
            </div>
            <p class="mt-4 text-xs text-white/40">${p.cat} · ${p.date} · ${p.mins}</p>
            <h3 class="mt-2 text-lg font-medium leading-snug transition-colors group-hover:text-[#f26a1e]">${p.title}</h3>
          </a>`).join("\n")}
        </div>
        <p data-reveal class="mt-12 text-sm text-white/40">Each card opens the full article on the Semnox blog.</p>
      </div>
    </section>`;

const newsItems = [
  { date: "2026", tag: "Product", title: "Parafait suite continues its rollout across new international markets", copy: "New deployments across the Middle East, Southeast Asia, and the Americas keep pushing the platform past 2,800 live sites." },
  { date: "2024", tag: "Security", title: "Semnox and Kount partner on fraud protection for parks and FECs", copy: "An integrated fraud protection layer for online ticketing and card top-ups." },
  { date: "2023", tag: "Company", title: "A year of achievements, innovations, and industry impact", copy: "Product launches, award nominations, and a growing global team marked another record year." },
  { date: "Ongoing", tag: "Events", title: "Meet Semnox at IAAPA, IAAPI, DEAL, and WWA shows", copy: "The team exhibits at major amusement industry expos worldwide. Stop by the booth for a live demo." },
];

export const newsBody = interiorHero({
  kicker: "News and events",
  title: "Where we've been. Where you'll find us next.",
  lede: "Product launches, partnerships, and the trade show calendar. Semnox exhibits at the industry's biggest events every year.",
  image: "images/hero-alt.jpg",
  tint: "#e8631a",
}) + `
    <section class="bg-[#111213] py-14 sm:py-20 lg:py-28">
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div data-reveal class="flex items-end justify-between border-b border-white/15 pb-8">
          <h2 class="text-4xl font-medium tracking-tight sm:text-5xl">In the news</h2>
        </div>
        <div class="divide-y divide-white/15">
${newsItems.map(n => `          <article data-reveal class="grid gap-3 py-8 sm:grid-cols-[8rem_1fr] sm:gap-8">
            <div>
              <p class="text-sm text-[#f26a1e]">${n.date}</p>
              <p class="mt-1 text-xs uppercase tracking-widest text-white/35">${n.tag}</p>
            </div>
            <div>
              <h3 class="text-2xl font-medium leading-snug tracking-tight">${n.title}</h3>
              <p class="mt-3 max-w-2xl text-base leading-relaxed text-white/55">${n.copy}</p>
            </div>
          </article>`).join("\n")}
        </div>
        <a href="https://www.semnox.com/news-and-events/" target="_blank" rel="noopener" data-reveal class="group mt-8 inline-flex min-h-12 items-center gap-2 rounded-md border border-white/25 px-5 text-sm font-medium transition-colors hover:border-white hover:bg-white hover:text-black">
          Full news archive <i data-lucide="arrow-up-right" class="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i>
        </a>
      </div>
    </section>

    <section class="bg-[#e9e7e1] py-14 text-black sm:py-20 lg:py-28">
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div data-reveal class="grid gap-10 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <p class="text-sm text-black/50">Upcoming events</p>
            <h2 class="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">Come say hi in person.</h2>
            <p class="mt-5 max-w-md text-lg leading-relaxed text-black/60">The best way to understand the platform is to touch it. Catch a live walkthrough at any of these industry shows.</p>
          </div>
          <div class="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            <article class="rounded-md border border-black/15 bg-white/70 p-6"><p class="text-xs text-black/50">Global flagship</p><h3 class="mt-4 text-xl font-medium">IAAPA Expo</h3><p class="mt-2 text-sm text-black/60">Orlando, Europe, and Asia editions</p></article>
            <article class="rounded-md border border-black/15 bg-white/70 p-6"><p class="text-xs text-black/50">India</p><h3 class="mt-4 text-xl font-medium">IAAPI Amusement Expo</h3><p class="mt-2 text-sm text-black/60">Mumbai, annually</p></article>
            <article class="rounded-md border border-black/15 bg-white/70 p-6"><p class="text-xs text-black/50">Middle East</p><h3 class="mt-4 text-xl font-medium">DEAL Show</h3><p class="mt-2 text-sm text-black/60">Dubai, annually</p></article>
            <article class="rounded-md border border-black/15 bg-white/70 p-6"><p class="text-xs text-black/50">Water parks</p><h3 class="mt-4 text-xl font-medium">WWA Show</h3><p class="mt-2 text-sm text-black/60">The waterpark industry's annual meet</p></article>
          </div>
        </div>
      </div>
    </section>`;

export const galleryBody = interiorHero({
  kicker: "Gallery",
  title: "The platform, out in the wild.",
  lede: "Venues, installs, events, and the moments in between. A visual tour of where Semnox lives.",
  image: "images/water-parks.jpg",
  tint: "#143a45",
}) + `
    <section class="bg-[#111213] py-14 sm:py-20 lg:py-28">
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div class="columns-2 gap-3 sm:gap-4 lg:columns-3">
${[
  { img: "images/gallery/wokivia-1.jpg", cap: "Wokivia, Mexico" },
  { img: "images/gallery/iaapa-1.jpg", cap: "Semnox booth, IAAPA Expo" },
  { img: "images/gallery/panda-1.jpg", cap: "Panda Aventura, Colombia" },
  { img: "images/gallery/cec-1.jpg", cap: "Chuck E. Cheese, Honduras" },
  { img: "images/gallery/mundijuegos-1.jpg", cap: "Mundijuegos, Ecuador" },
  { img: "images/gallery/carrousel-1.jpg", cap: "Carrousel, Guatemala" },
  { img: "images/gallery/lmbol-1.jpg", cap: "LMBOL, Mexico" },
  { img: "images/gallery/iaapa-2.jpg", cap: "Live demos at IAAPA" },
  { img: "images/gallery/wokivia-2.jpg", cap: "Wokivia, Mexico" },
  { img: "images/gallery/klaimprize-1.jpg", cap: "KlaimPrize redemption kiosk" },
  { img: "images/gallery/panda-2.jpg", cap: "Panda Aventura, Colombia" },
  { img: "images/gallery/cec-2.jpg", cap: "Chuck E. Cheese, Honduras" },
  { img: "images/gallery/mundijuegos-2.jpg", cap: "Mundijuegos, Ecuador" },
  { img: "images/gallery/iaapa-3.jpg", cap: "IAAPA Expo floor" },
  { img: "images/gallery/carrousel-2.jpg", cap: "Carrousel, Guatemala" },
  { img: "images/gallery/lmbol-2.jpg", cap: "LMBOL, Mexico" },
].map(g => `          <figure data-reveal class="group relative mb-3 break-inside-avoid overflow-hidden rounded-md sm:mb-4">
            <img src="${g.img}" alt="${g.cap}" loading="lazy" decoding="async" class="w-full transition duration-700 ease-out group-hover:scale-[1.04]">
            <figcaption class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-2.5 pt-10 text-xs text-white sm:px-4 sm:pb-3 sm:text-sm">${g.cap}</figcaption>
          </figure>`).join("\n")}
        </div>
      </div>
    </section>`;

export const csrBody = interiorHero({
  kicker: "Corporate social responsibility",
  title: "Creating value, spurring progress.",
  lede: "Sustainable value for clients, partners, shareholders, employees, and the communities that host us. CSR at Semnox has been formal policy since December 2016.",
  image: "images/csr-banner.jpg",
  tint: "#143a45",
}) + `
    <section class="bg-[#111213] py-14 sm:py-20 lg:py-28">
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div data-reveal class="border-b border-white/15 pb-10">
          <p class="text-sm text-[#f26a1e]">Focus areas</p>
          <h2 class="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">Nine commitments.</h2>
        </div>
        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
${[
  { icon: "graduation-cap", name: "Education", copy: "Vocational training and job placement support for differently abled individuals." },
  { icon: "soup", name: "Hunger and Nutrition", copy: "Supporting mid-day meal initiatives in schools across the country." },
  { icon: "tractor", name: "Rural Development", copy: "Roads, drainage, and electricity access for underserved communities." },
  { icon: "leaf", name: "Environment", copy: "Conservation of natural resources and ecological protection." },
  { icon: "landmark", name: "National Relief", copy: "Contributions to the Prime Minister's National Relief Fund." },
  { icon: "flask-conical", name: "Technology Incubators", copy: "Funding innovation hubs inside approved academic institutions." },
  { icon: "castle", name: "Heritage and Culture", copy: "Restoration projects and promotion of traditional arts." },
  { icon: "medal", name: "Sports", copy: "Training support for rural, Olympic, and Paralympic athletes." },
  { icon: "shield", name: "Armed Forces", copy: "Assistance for veterans and war widows." },
].map(c => `          <article data-reveal class="rounded-md border border-white/15 bg-[#191a1b] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#f26a1e]/60">
            <i data-lucide="${c.icon}" class="h-7 w-7 text-[#f26a1e]"></i>
            <h3 class="mt-5 text-xl font-medium tracking-tight">${c.name}</h3>
            <p class="mt-2 text-sm leading-relaxed text-white/55">${c.copy}</p>
          </article>`).join("\n")}
        </div>
        <div data-reveal class="mt-14 rounded-md border border-white/15 p-8">
          <p class="text-sm text-[#f26a1e]">Governance</p>
          <p class="mt-3 max-w-3xl text-xl font-medium leading-snug tracking-tight">The CSR committee is chaired at the very top: Iqbal Mohammad, Kiran Karanki, and Umesh Prabhu personally steer where the effort goes.</p>
        </div>
      </div>
    </section>`;

export const caseStudiesBody = interiorHero({
  kicker: "Case studies",
  title: "Proof, in production.",
  lede: "Real venues, real numbers, real operators. How the platform performs when the gates open.",
  image: "images/case-grs.jpg",
  tint: "#e8631a",
}) + `
    <section class="bg-[#111213] py-14 sm:py-20 lg:py-28">
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-x-5 gap-y-14 lg:grid-cols-12">
          <a href="https://www.semnox.com/portfolios/grs-fantasy-park/" target="_blank" rel="noopener" data-reveal class="group block focus:outline-none focus:ring-2 focus:ring-[#f26a1e] focus:ring-offset-4 focus:ring-offset-[#111213] lg:col-span-7">
            <div class="relative aspect-[4/3] overflow-hidden rounded-md bg-[#191a1b]">
              <img src="images/case-grs.jpg" alt="GRS Fantasy Park" loading="lazy" decoding="async" class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]">
              <span class="absolute right-4 top-4 inline-flex items-center gap-2 rounded-md bg-black px-3 py-2 text-xs text-white opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">Read case study <i data-lucide="arrow-up-right" class="h-3.5 w-3.5"></i></span>
            </div>
            <div class="mt-4 flex items-start justify-between gap-5">
              <div>
                <h3 class="text-xl font-medium">GRS Fantasy Park</h3>
                <p class="mt-1 text-sm text-white/50">Water park, dry park, snow park, inverted museum, and food courts in South India, all on one platform</p>
              </div>
              <span class="text-sm text-white/45">Parks</span>
            </div>
          </a>
          <a href="https://www.semnox.com/portfolios/ifs-qatar/" target="_blank" rel="noopener" data-reveal class="group block self-end focus:outline-none focus:ring-2 focus:ring-[#f26a1e] focus:ring-offset-4 focus:ring-offset-[#111213] lg:col-span-5 lg:pt-24">
            <div class="relative aspect-square overflow-hidden rounded-md bg-[#191a1b]">
              <img src="images/case-ifs.jpg" alt="IFS Qatar" loading="lazy" decoding="async" class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]">
              <span class="absolute right-4 top-4 inline-flex items-center gap-2 rounded-md bg-black px-3 py-2 text-xs text-white opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">Read case study <i data-lucide="arrow-up-right" class="h-3.5 w-3.5"></i></span>
            </div>
            <div class="mt-4 flex items-start justify-between gap-5">
              <div>
                <h3 class="text-xl font-medium">IFS Qatar</h3>
                <p class="mt-1 text-sm text-white/50">Hospitality, restaurant operations, retail food services, and contract catering across the Middle East</p>
              </div>
              <span class="text-sm text-white/45">F&amp;B</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section class="bg-[#f26a1e] py-14 text-black sm:py-20 lg:py-28">
      <div data-reveal class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h2 class="max-w-4xl text-5xl font-medium leading-[0.95] tracking-tight sm:text-7xl">Want results like these?</h2>
          <a href="contact-us.html" class="group inline-flex min-h-14 shrink-0 items-center justify-center gap-3 self-start rounded-md bg-black px-7 text-base font-medium text-white transition-colors hover:bg-white hover:text-black lg:self-auto">
            Start the conversation <i data-lucide="arrow-up-right" class="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i>
          </a>
        </div>
      </div>
    </section>`;
