import { interiorHero } from "./shared.mjs";

const featureGrid = (features, accent) => `
    <section class="bg-[#111213] py-14 sm:py-20 lg:py-28">
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div data-reveal class="grid gap-8 border-b border-white/15 pb-12 lg:grid-cols-12">
          <div class="lg:col-span-4"><p class="text-sm" style="color:${accent}">Inside the suite</p></div>
          <div class="lg:col-span-8">
            <h2 class="max-w-4xl text-4xl font-medium leading-tight tracking-tight sm:text-6xl">Every tool your floor team and back office need.</h2>
          </div>
        </div>
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
${features.map((f, i) => `          <article data-reveal class="group rounded-md border border-white/15 bg-[#191a1b] p-6 transition duration-300 hover:-translate-y-1" style="--acc:${accent}" onmouseover="this.style.borderColor='${accent}'" onmouseout="this.style.borderColor=''">
            <div class="flex items-start justify-between">
              <i data-lucide="${f.icon}" class="h-6 w-6" style="color:${accent}"></i>
              <span class="text-xs text-white/30">${String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 class="mt-6 text-xl font-medium tracking-tight">${f.name}</h3>
            <p class="mt-2 text-sm leading-relaxed text-white/55">${f.copy}</p>
          </article>`).join("\n")}
        </div>
      </div>
    </section>`;

const suiteFacts = ({ stats, chips, accent }) => `
    <section class="border-y border-white/15 bg-[#161718]">
      <div class="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div class="grid grid-cols-3 gap-4 sm:gap-8">
${stats.map(s => `          <div data-reveal>
            <p class="stat-figure text-3xl font-semibold leading-none sm:text-5xl">${s.big}<span style="color:${accent}">${s.accent || ""}</span></p>
            <p class="mt-2 max-w-[18ch] text-xs leading-snug text-white/50 sm:text-sm">${s.label}</p>
          </div>`).join("\n")}
        </div>
        <div data-reveal class="mt-10 flex flex-wrap items-center gap-2 border-t border-white/10 pt-6">
          <span class="mr-2 text-xs uppercase tracking-widest text-white/35">Also in the suite</span>
${chips.map(c => `          <span class="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/65">${c}</span>`).join("\n")}
        </div>
      </div>
    </section>`;

const crossLinks = (current) => {
  const all = [
    { key: "fec", href: "family-entertainment-centers.html", label: "Family Entertainment Centers", tag: "Parafait", img: "images/fec.jpg" },
    { key: "parks", href: "water-theme-parks.html", label: "Water and Theme Parks", tag: "Tixera", img: "images/water-parks.jpg" },
    { key: "fnb", href: "food-and-beverage.html", label: "Food and Beverage", tag: "Delikopos", img: "images/restaurant.jpg" },
  ].filter(s => s.key !== current);
  return `
    <section class="bg-[#e9e7e1] py-14 text-black sm:py-20 lg:py-28">
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div data-reveal class="flex items-end justify-between border-b border-black/20 pb-8">
          <h2 class="text-4xl font-medium tracking-tight sm:text-5xl">Explore the other suites</h2>
        </div>
        <div class="mt-8 grid gap-5 sm:grid-cols-2">
${all.map(s => `          <a href="${s.href}" data-reveal class="group block focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4 focus:ring-offset-[#e9e7e1]">
            <div class="relative aspect-[16/9] overflow-hidden rounded-md bg-[#c9c8c3]">
              <img src="${s.img}" alt="${s.label}" loading="lazy" decoding="async" class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]">
              <div class="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/25"></div>
              <span class="absolute right-4 top-4 inline-flex items-center gap-2 rounded-md bg-black px-3 py-2 text-xs text-white opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">View suite <i data-lucide="arrow-up-right" class="h-3.5 w-3.5"></i></span>
            </div>
            <div class="mt-4 flex items-start justify-between gap-5">
              <h3 class="text-xl font-medium">${s.label}</h3>
              <span class="rounded-full border border-black/25 px-3 py-1 text-xs uppercase tracking-widest text-black/60">${s.tag}</span>
            </div>
          </a>`).join("\n")}
        </div>
      </div>
    </section>`;
};

const solutionCta = (line) => `
    <section class="bg-[#f26a1e] py-14 text-black sm:py-20 lg:py-28">
      <div data-reveal class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h2 class="max-w-4xl text-5xl font-medium leading-[0.95] tracking-tight sm:text-7xl">${line}</h2>
          <a href="contact-us.html" class="group inline-flex min-h-14 shrink-0 items-center justify-center gap-3 self-start rounded-md bg-black px-7 text-base font-medium text-white transition-colors hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#f26a1e] lg:self-auto">
            Book a live demo <i data-lucide="arrow-up-right" class="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i>
          </a>
        </div>
      </div>
    </section>`;

export const fecBody = interiorHero({
  kicker: "Parafait · The FEC operating system",
  title: "Run your entire entertainment center from one screen.",
  lede: "Arcades, bowling, karting, laser tag, soft play, and parties. Parafait connects cashless play, redemption, bookings, and CRM so guests move faster and spend more.",
  image: "images/hero-fec.jpg",
  tint: "#c65712",
  links: [{ href: "contact-us.html", label: "Book a demo", primary: true }, { href: "case-studies.html", label: "See case studies" }],
}) + featureGrid([
  { icon: "credit-card", name: "Cashless RFID Cards and Wristbands", copy: "Tap to play across games and attractions. Cards roam between your locations, building loyalty at every visit." },
  { icon: "monitor-smartphone", name: "Point of Sale", copy: "Fast, configurable POS for admissions, game cards, retail, and parties. Works on counters, tablets, and mobile." },
  { icon: "gift", name: "Inventory and Redemption", copy: "Track tickets, prizes, and stock live. Guests redeem at counters or self-service Klaimprize kiosks." },
  { icon: "cake", name: "Party and Event Reservations", copy: "Online booking, packages, deposits, and day-of coordination for the busiest revenue line in your venue." },
  { icon: "touchpad", name: "Self Service Kiosks", copy: "Guests buy and recharge cards themselves. Shorter queues, lower labor cost, higher average spend." },
  { icon: "smartphone", name: "Mobile POS and Wireless Readers", copy: "Sell and recharge anywhere on the floor with handheld readers and mobile point of sale." },
  { icon: "tv", name: "Digital Signage", copy: "Menus, promos, and leaderboards that update themselves from the same platform." },
  { icon: "heart", name: "360 Degree CRM", copy: "Know every guest. Segments, campaigns, offers, and loyalty tied to real play behavior." },
  { icon: "bar-chart-3", name: "Reports and Analytics", copy: "Revenue, game performance, and labor in real time, from any device, across every site." },
], "#f26a1e") + suiteFacts({
  accent: "#f26a1e",
  stats: [
    { big: "2,800", accent: "+", label: "sites run on Parafait worldwide" },
    { big: "100", accent: "+", label: "change management projects delivered" },
    { big: "60", accent: "+", label: "countries with live FEC deployments" },
  ],
  chips: ["SmartFun guest app", "Waiver management", "Online booking, B2B and B2C", "Slot based bookings", "Access control", "Multi-location HQ control"],
}) + crossLinks("fec") + solutionCta("Give your guests a smarter day of play.");

export const parksBody = interiorHero({
  kicker: "Tixera · Water and theme park suite",
  title: "From the front gate to the last ride, one system runs it all.",
  lede: "Tixera handles ticketing, access control, cashless spending, lockers, and maintenance for water parks, theme parks, museums, aquariums, and attractions.",
  image: "images/hero-park.jpg",
  tint: "#143a45",
  links: [{ href: "contact-us.html", label: "Book a demo", primary: true }, { href: "case-studies.html", label: "See case studies" }],
}) + featureGrid([
  { icon: "ticket", name: "Entry Ticketing and Access Control", copy: "Turnstiles, gates, and validation at speed. Handle peak season crowds without the pile-ups." },
  { icon: "globe", name: "Online and OTA Ticketing", copy: "Sell on your website and through online travel agencies with live inventory and dynamic pricing." },
  { icon: "touchpad", name: "Ticketing Kiosks", copy: "Self service sales and pickup that clear the queue before it forms." },
  { icon: "watch", name: "Cashless RFID Wristbands", copy: "Waterproof wristbands carry tickets, meals, and spending money. Nothing to lose in the wave pool." },
  { icon: "lock", name: "RFID Lockers", copy: "Keyless lockers on the same wristband. Fewer staff, happier guests, new revenue." },
  { icon: "scan-line", name: "Ride Based Readers", copy: "Per-ride validation and deducting agents for pay-per-ride and hybrid models." },
  { icon: "tv", name: "Digital Signage", copy: "Wait times, schedules, and promotions across the park, managed centrally." },
  { icon: "heart", name: "360 Degree CRM", copy: "Season passes, memberships, campaigns, and guest history in one place." },
  { icon: "wrench", name: "Maintenance Module", copy: "Checklists, asset schedules, and incident tracking that prolong the life of every asset." },
], "#7dd3e8") + suiteFacts({
  accent: "#7dd3e8",
  stats: [
    { big: "400", accent: "+", label: "park and attraction clients globally" },
    { big: "2,800", accent: "+", label: "sites on the same platform" },
    { big: "60", accent: "+", label: "countries, every climate and season" },
  ],
  chips: ["Queue management", "F&B sales", "Retail and merchandise", "Recipe management", "Mobile dashboards", "Zoos and attractions"],
}) + crossLinks("parks") + solutionCta("Ready for your smoothest season yet?");

export const fnbBody = interiorHero({
  kicker: "Delikopos · Food and beverage suite",
  title: "Serve more covers with fewer headaches.",
  lede: "Delikopos brings POS, kitchen displays, live inventory, and prepaid cashless together for restaurants, cafes, and food courts, standalone or inside your venue.",
  image: "images/hero-fnb.jpg",
  tint: "#a91f18",
  links: [{ href: "contact-us.html", label: "Book a demo", primary: true }, { href: "case-studies.html", label: "See case studies" }],
}) + featureGrid([
  { icon: "monitor-smartphone", name: "Point of Sale", copy: "Counter, table, and mobile ordering with modifiers, combos, and multi-terminal sync." },
  { icon: "chef-hat", name: "Kitchen Display System", copy: "Orders flow straight to the kitchen with timing, routing, and bump screens. No lost tickets." },
  { icon: "boxes", name: "Live Inventory and Recipes", copy: "Recipe level stock deduction, wastage tracking, and purchase planning in real time." },
  { icon: "credit-card", name: "Prepaid Cashless Cards", copy: "One card for food, drinks, and fun. Perfect for food courts and entertainment venues." },
  { icon: "file-bar-chart", name: "Centralized Reporting", copy: "Sales, margins, and outlet comparisons across every location, updated live." },
  { icon: "message-circle", name: "SMS, Email, and WhatsApp", copy: "Order updates, receipts, and offers on the channels your guests actually read." },
  { icon: "tv", name: "Signage and Token Displays", copy: "Digital menus and order-ready token screens that keep counters calm." },
  { icon: "heart", name: "CRM and Loyalty", copy: "Repeat guests recognized and rewarded at every outlet." },
  { icon: "clock", name: "Staff Clock In and Out", copy: "Attendance and shift tracking built into the same system your team already uses." },
], "#ffb4a8") + suiteFacts({
  accent: "#ffb4a8",
  stats: [
    { big: "94", accent: "%", label: "of customers recommend Deliko" },
    { big: "4-8", accent: "", label: "weeks from signature to service" },
    { big: "2008", accent: "", label: "the year we started perfecting this" },
  ],
  chips: ["Table management", "Contactless ordering", "Promotions and discounts", "Multi-chain standardization", "Data visualisation", "Third party integrations"],
}) + crossLinks("fnb") + solutionCta("Hungry queues move fast on Delikopos.");
