import { interiorHero } from "./shared.mjs";
import { offices } from "./data.mjs";

export const contactBody = interiorHero({
  kicker: "Contact us",
  title: "Talk to a human. Get a real answer.",
  lede: "Sales, support, partnerships, or a live demo. Pick a channel and we will get back to you fast, usually within two working days.",
  image: "images/hero-fec.jpg",
  tint: "#c65712",
}) + `
    <section class="bg-[#111213] py-14 sm:py-20 lg:py-28">
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a href="mailto:corp.sales@semnox.com" data-reveal class="group rounded-md border border-white/15 bg-[#191a1b] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#f26a1e]/70">
            <i data-lucide="mail" class="h-7 w-7 text-[#f26a1e]"></i>
            <h3 class="mt-5 text-lg font-medium">Sales</h3>
            <p class="mt-1 break-all text-sm text-white/55">corp.sales@semnox.com</p>
          </a>
          <a href="tel:+918244255888" data-reveal class="group rounded-md border border-white/15 bg-[#191a1b] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#f26a1e]/70">
            <i data-lucide="phone" class="h-7 w-7 text-[#f26a1e]"></i>
            <h3 class="mt-5 text-lg font-medium">Call us</h3>
            <p class="mt-1 text-sm text-white/55">+91 824 425 5888</p>
          </a>
          <a href="https://wa.me/919620233236" target="_blank" rel="noopener" data-reveal class="group rounded-md border border-white/15 bg-[#191a1b] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#f26a1e]/70">
            <i data-lucide="message-circle" class="h-7 w-7 text-[#f26a1e]"></i>
            <h3 class="mt-5 text-lg font-medium">WhatsApp</h3>
            <p class="mt-1 text-sm text-white/55">+91 962 023 3236</p>
          </a>
          <a href="mailto:careers@semnox.com" data-reveal class="group rounded-md border border-white/15 bg-[#191a1b] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#f26a1e]/70">
            <i data-lucide="briefcase" class="h-7 w-7 text-[#f26a1e]"></i>
            <h3 class="mt-5 text-lg font-medium">Careers</h3>
            <p class="mt-1 break-all text-sm text-white/55">careers@semnox.com</p>
          </a>
        </div>

        <div data-reveal class="mt-6 grid gap-4 sm:grid-cols-2">
          <div class="rounded-md border border-[#f26a1e]/50 bg-[#f26a1e]/10 p-6">
            <div class="flex items-center gap-3">
              <i data-lucide="siren" class="h-6 w-6 text-[#f26a1e]"></i>
              <h3 class="text-lg font-medium">Critical support, Americas</h3>
            </div>
            <p class="mt-2 text-sm text-white/60">+1 610 458 5110 · around the clock</p>
          </div>
          <div class="rounded-md border border-[#f26a1e]/50 bg-[#f26a1e]/10 p-6">
            <div class="flex items-center gap-3">
              <i data-lucide="siren" class="h-6 w-6 text-[#f26a1e]"></i>
              <h3 class="text-lg font-medium">Critical support, rest of world</h3>
            </div>
            <p class="mt-2 text-sm text-white/60">+91 808 873 6669 · around the clock</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#e9e7e1] py-14 text-black sm:py-20 lg:py-28">
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div data-reveal class="border-b border-black/20 pb-10">
          <p class="text-sm text-black/50">Where we are</p>
          <h2 class="mt-3 text-5xl font-medium tracking-tight sm:text-6xl">Eight offices. Every timezone.</h2>
        </div>
        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
${offices.map(o => `          <article data-reveal class="rounded-md border border-black/15 bg-white/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#e9540d]">
            <p class="text-xs uppercase tracking-widest text-[#e9540d]">${o.label}</p>
            <h3 class="mt-3 text-xl font-medium tracking-tight">${o.country}</h3>
            <p class="mt-2 text-sm leading-relaxed text-black/60">${o.address}</p>
            ${o.phone ? `<p class="mt-3 text-sm font-medium text-black/75">${o.phone}</p>` : ""}
          </article>`).join("\n")}
        </div>
      </div>
    </section>

    <section class="bg-[#f26a1e] py-14 text-black sm:py-20 lg:py-28">
      <div data-reveal class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <p class="text-sm text-black/55">Prefer email?</p>
        <div class="mt-5 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h2 class="max-w-5xl text-5xl font-medium leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">Let's talk about your venue.</h2>
          <a href="mailto:corp.sales@semnox.com" class="group inline-flex min-h-14 shrink-0 items-center justify-center gap-3 self-start rounded-md bg-black px-7 text-base font-medium text-white transition-colors hover:bg-white hover:text-black lg:self-auto">
            corp.sales@semnox.com <i data-lucide="arrow-up-right" class="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i>
          </a>
        </div>
        <div class="mt-14 flex flex-col gap-3 border-t border-black/25 pt-6 text-sm text-black/60 sm:flex-row sm:items-center sm:justify-between">
          <span>New conversations start with a short, candid call.</span>
          <span>Replies usually arrive within two working days.</span>
        </div>
      </div>
    </section>`;

const jobs = [
  { title: "Associate Graphic Designer", exp: "2+ years", loc: "Mangaluru, Karnataka, India", mode: "On-site", copy: "Adobe tools, video editing, AI multimedia tools, and event marketing collateral." },
  { title: "Software Engineer, Hardware", exp: "1 to 3 years", loc: "Bangalore, Karnataka, India", mode: "On-site", copy: "Circuit design, firmware development, and hardware testing for our reader and kiosk lines." },
  { title: "Senior Software Engineer / Tech Lead, Backend (.NET / SQL)", exp: "5 to 10 years", loc: "Mangaluru, Karnataka, India", mode: "On-site", copy: "Team leadership, backend architecture, and deep platform expertise." },
];

export const careersBody = interiorHero({
  kicker: "Careers",
  title: "Bring your best game to work.",
  lede: "The smartest technology. An experienced team. Immense commitment and razor sharp focus. If that sounds like your kind of place, we should talk.",
  image: "images/trampoline.jpg",
  tint: "#143a45",
  links: [{ href: "mailto:careers@semnox.com", label: "careers@semnox.com", primary: true }],
}) + `
    <section class="bg-[#111213] py-14 sm:py-20 lg:py-28">
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div data-reveal class="flex items-end justify-between border-b border-white/15 pb-8">
          <div>
            <p class="text-sm text-white/45">We're hiring</p>
            <h2 class="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">Open positions</h2>
          </div>
          <span class="text-lg text-white/45">(${jobs.length})</span>
        </div>
        <div class="divide-y divide-white/15">
${jobs.map(j => `          <article data-reveal class="grid gap-4 py-8 lg:grid-cols-12 lg:items-center">
            <div class="lg:col-span-6">
              <h3 class="text-2xl font-medium leading-snug tracking-tight">${j.title}</h3>
              <p class="mt-2 max-w-xl text-sm leading-relaxed text-white/55">${j.copy}</p>
            </div>
            <div class="flex flex-wrap gap-2 text-xs text-white/60 lg:col-span-4">
              <span class="rounded-full border border-white/20 px-3 py-1.5">${j.exp}</span>
              <span class="rounded-full border border-white/20 px-3 py-1.5">${j.loc}</span>
              <span class="rounded-full border border-white/20 px-3 py-1.5">${j.mode}</span>
            </div>
            <div class="lg:col-span-2 lg:text-right">
              <a href="mailto:careers@semnox.com?subject=Application: ${j.title}" class="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#f26a1e] transition-colors hover:text-white">
                Apply <i data-lucide="arrow-right" class="h-4 w-4 transition-transform group-hover:translate-x-1"></i>
              </a>
            </div>
          </article>`).join("\n")}
        </div>
        <div data-reveal class="mt-10 rounded-md border border-white/15 bg-[#191a1b] p-8">
          <p class="max-w-3xl text-lg leading-relaxed text-white/60">
            Don't see your role? Send your resume and a covering letter to <a href="mailto:careers@semnox.com" class="font-medium text-[#f26a1e] hover:underline">careers@semnox.com</a> anyway. We keep strong profiles on file for up to a year and reach out when the right seat opens.
          </p>
        </div>
      </div>
    </section>`;
