import { writeFileSync } from "node:fs";
import { pageShell } from "./shared.mjs";
import { homeBody } from "./page-home.mjs";
import { fecBody, parksBody, fnbBody } from "./page-solutions.mjs";
import { aboutBody, teamBody, clientsBody, partnersBody, associationsBody } from "./page-company.mjs";
import { testimonialsBody, blogBody, newsBody, galleryBody, csrBody, caseStudiesBody } from "./page-media.mjs";
import { contactBody, careersBody } from "./page-contact.mjs";

const pages = [
  { file: "index.html", title: "Semnox | Entertainment Technology for Venues Worldwide", desc: "Semnox powers 2,800+ entertainment venues in 60+ countries with integrated ticketing, cashless, POS, and CRM solutions.", active: "", body: homeBody },
  { file: "family-entertainment-centers.html", title: "Family Entertainment Center Solutions | Parafait by Semnox", desc: "Cashless RFID, POS, redemption, party bookings, kiosks, and CRM for family entertainment centers.", active: "solutions", body: fecBody },
  { file: "water-theme-parks.html", title: "Water and Theme Park Solutions | Tixera by Semnox", desc: "Ticketing, access control, RFID wristbands, lockers, and maintenance for water and theme parks.", active: "solutions", body: parksBody },
  { file: "food-and-beverage.html", title: "Food and Beverage Solutions | Delikopos by Semnox", desc: "POS, kitchen display, live inventory, and prepaid cashless for restaurants and food courts.", active: "solutions", body: fnbBody },
  { file: "about-us.html", title: "About Us | Semnox Solutions", desc: "Semnox is a technology partner to the leisure and hospitality industry, live across 2,800+ sites in 60+ countries.", active: "company", body: aboutBody },
  { file: "our-team.html", title: "Our Team | Semnox Solutions", desc: "Meet the global leadership team behind Semnox.", active: "company", body: teamBody },
  { file: "clients.html", title: "Our Clients | Semnox Solutions", desc: "Operators in every region trust Semnox: Chuck E. Cheese, Smaaash, Fantasy Island, Dubai Garden Glow, and thousands more.", active: "company", body: clientsBody },
  { file: "partners.html", title: "Partners | Semnox Solutions", desc: "Distributors, consultants, and solution integrations in the Semnox ecosystem.", active: "company", body: partnersBody },
  { file: "associations.html", title: "Associations | Semnox Solutions", desc: "Semnox is an active member of IAAPA, IAAPI, WWA, IATP, BALPPA, and more.", active: "company", body: associationsBody },
  { file: "testimonials.html", title: "Testimonials | Semnox Solutions", desc: "What operators around the world say about running their venues on Semnox.", active: "media", body: testimonialsBody },
  { file: "blog.html", title: "Blog | Semnox Solutions", desc: "Guides, product deep dives, and operations thinking for entertainment operators.", active: "media", body: blogBody },
  { file: "news-and-events.html", title: "News and Events | Semnox Solutions", desc: "Semnox news, partnerships, and the trade show calendar.", active: "media", body: newsBody },
  { file: "gallery.html", title: "Gallery | Semnox Solutions", desc: "A visual tour of venues and installs powered by Semnox.", active: "media", body: galleryBody },
  { file: "csr.html", title: "CSR | Semnox Solutions", desc: "Creating value, spurring progress: Semnox corporate social responsibility.", active: "media", body: csrBody },
  { file: "case-studies.html", title: "Case Studies | Semnox Solutions", desc: "Real venues, real numbers: GRS Fantasy Park, IFS Qatar, and more.", active: "media", body: caseStudiesBody },
  { file: "contact-us.html", title: "Contact Us | Semnox Solutions", desc: "Talk to Semnox: sales, support, WhatsApp, and eight offices worldwide.", active: "", body: contactBody },
  { file: "careers.html", title: "Careers | Semnox Solutions", desc: "Open positions at Semnox. Bring your best game to work.", active: "careers", body: careersBody },
];

let issues = 0;
for (const p of pages) {
  const html = pageShell(p);
  if (html.includes("—") || html.includes("–")) {
    console.warn(`WARNING: dash character found in ${p.file}`);
    issues++;
  }
  writeFileSync(new URL(`../${p.file}`, import.meta.url), html);
  console.log(`built ${p.file} (${(html.length / 1024).toFixed(1)} KB)`);
}
console.log(issues ? `${issues} pages need dash cleanup` : "all pages clean, no em or en dashes");
