/*
  TIAPS site preview — shared behaviour for every page.
  - Injects the preview ribbon, nav and footer (so all pages stay identical)
  - Draws abstract cover art into any <div data-cover="lines|dots|curve">
  - Demo forms: [data-demo-form] shows a confirmation, sends nothing
  - Category filter: [data-filter] buttons over [data-category] cards

  Brand values live in SITE below. Anything in [square brackets] is a placeholder.
*/
const SITE = {
  name: "TIAPS",
  tagline: "Trend Intelligence & AI-Powered System",
  cta: { href: "intelligence.html", label: "Explore Intelligence" },
  email: "[hello@company.com]",
  location: "[City, Country]",
  nav: [
    ["index.html", "Home"],
    ["intelligence.html", "Intelligence"],
    ["products.html", "Products"],
    ["ai-solutions.html", "AI Solutions"],
    ["newsletter.html", "Newsletter"],
    ["resources.html", "Resources"],
    ["about.html", "About"],
    ["contact.html", "Contact"],
  ],
  // Detail pages highlight their parent section in the nav.
  parents: { "intelligence-report.html": "intelligence.html", "product.html": "products.html", "solution.html": "ai-solutions.html" },
};

const page = location.pathname.split("/").pop() || "index.html";
const current = SITE.parents[page] || page;

const logo = `
  <a href="index.html" class="flex items-center gap-2.5" aria-label="${SITE.name} home">
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <rect width="28" height="28" rx="7" fill="#1A1A18"/>
      <path d="M7 19 L12 13.5 L16 16.5 L21 9" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="21" cy="9" r="2.3" fill="#34518C" stroke="#fff" stroke-width="1.2"/>
    </svg>
    <span class="font-display text-[19px] font-extrabold tracking-tight">${SITE.name}</span>
  </a>`;

function header() {
  const links = SITE.nav
    .map(([href, label]) => {
      const on = href === current;
      return `<a href="${href}" ${on ? 'aria-current="page"' : ""} class="relative py-2 text-sm font-semibold ${on ? "text-ink" : "text-muted hover:text-ink"}">${label}${
        on ? '<span class="absolute inset-x-0 -bottom-[3px] h-[2px] rounded-full bg-accent"></span>' : ""
      }</a>`;
    })
    .join("");
  const mobileLinks = SITE.nav
    .map(
      ([href, label]) =>
        `<a href="${href}" class="flex justify-between border-b border-line py-4 font-display text-xl font-bold ${href === current ? "text-accent" : ""}">${label}<span class="text-base text-muted">→</span></a>`,
    )
    .join("");
  return `
  <div class="bg-ink px-4 py-2 text-center text-xs font-medium text-[#C9C8C2]">
    Structure preview — all names, reports, products, pricing and statistics shown are placeholders.
  </div>
  <header class="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
    <div class="container-page flex h-[68px] items-center justify-between gap-6">
      ${logo}
      <nav class="hidden items-center gap-6 lg:flex" aria-label="Primary">${links}</nav>
      <a href="${SITE.cta.href}" class="btn btn-primary btn-sm hidden xl:inline-flex">${SITE.cta.label}</a>
      <button id="menu-btn" class="-mr-2 inline-flex h-10 w-10 items-center justify-center lg:hidden" aria-label="Open menu" aria-expanded="false">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 7h18M3 12h18M3 17h18"/></svg>
      </button>
    </div>
    <nav id="mobile-menu" class="fixed inset-x-0 bottom-0 top-[68px] hidden overflow-y-auto border-t border-line bg-bg lg:hidden" aria-label="Mobile">
      <div class="container-page py-6">${mobileLinks}
        <a href="${SITE.cta.href}" class="btn btn-primary mt-8 w-full">${SITE.cta.label}</a>
      </div>
    </nav>
  </header>`;
}

function footer() {
  const col = (title, items) =>
    `<div><p class="eyebrow text-muted">${title}</p><ul class="mt-4 space-y-2.5">${items
      .map(([h, l]) => `<li><a href="${h}" class="text-sm hover:text-accent">${l}</a></li>`)
      .join("")}</ul></div>`;
  return `
  <footer class="border-t border-line bg-surface">
    <div class="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
      <div>${logo}<p class="mt-4 max-w-xs text-sm leading-relaxed text-muted">${SITE.tagline}</p></div>
      ${col("What we do", [["intelligence.html", "Intelligence"], ["products.html", "Products"], ["ai-solutions.html", "AI Solutions"], ["resources.html", "Resources"]])}
      ${col("Company", [["newsletter.html", "Newsletter"], ["about.html", "About"], ["contact.html", "Contact"]])}
      <div>
        <p class="eyebrow text-muted">Get in touch</p>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li>${SITE.email}</li><li class="text-muted">${SITE.location}</li>
          <li><a href="contact.html" class="font-semibold text-accent">Contact form →</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-line">
      <div class="container-page flex flex-col gap-4 py-6 text-[13px] text-muted sm:flex-row sm:justify-between">
        <p>© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</p>
        <div class="flex flex-wrap gap-x-5 gap-y-2"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">LinkedIn</a><a href="#">X</a></div>
      </div>
    </div>
  </footer>`;
}

/* ---- Abstract cover art (decorative, no data) ---- */
function cover(kind, seed) {
  let r = seed * 9301 + 49297;
  const rand = () => ((r = (r * 9301 + 49297) % 233280) / 233280);
  let art = "";
  if (kind === "lines") {
    const hi = Math.floor(rand() * 7);
    for (let i = 0; i < 7; i++) {
      const w = 80 + rand() * 240;
      art += `<rect x="40" y="${34 + i * 20}" width="${i === hi ? Math.min(w + 60, 320) : w}" height="6" rx="3" fill="#34518C" opacity="${i === hi ? 0.9 : 0.16}"/>`;
    }
  } else if (kind === "dots") {
    const cx = 120 + rand() * 180, cy = 60 + rand() * 80;
    for (let x = 30; x < 400; x += 22)
      for (let y = 24; y < 200; y += 22) {
        const d = Math.hypot(x - cx, y - cy), near = d < 60;
        art += `<circle cx="${x}" cy="${y}" r="${near ? 3.2 : 1.6}" fill="#34518C" opacity="${near ? 0.85 - d / 120 : 0.18}"/>`;
      }
  } else {
    const pts = Array.from({ length: 9 }, (_, i) => [30 + i * 43, Math.max(30, 150 - i * (8 + rand() * 6) + (rand() - 0.5) * 30)]);
    const d = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
    const [lx, ly] = pts[8];
    art = [60, 100, 140, 180].map((y) => `<line x1="0" x2="400" y1="${y}" y2="${y}" stroke="#34518C" stroke-opacity=".1"/>`).join("") +
      `<path d="${d} L${lx},200 L30,200 Z" fill="#34518C" opacity=".07"/><path d="${d}" fill="none" stroke="#34518C" stroke-width="2.5" stroke-linejoin="round"/>` +
      `<circle cx="${lx}" cy="${ly}" r="5" fill="#fff" stroke="#34518C" stroke-width="2.5"/>`;
  }
  return `<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" class="block h-full w-full transition-transform duration-500 group-hover:scale-[1.03]" aria-hidden="true">${art}</svg>`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("afterbegin", header());
  document.body.insertAdjacentHTML("beforeend", footer());

  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");
  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("hidden") === false;
    btn.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  });

  document.querySelectorAll("[data-cover]").forEach((el, i) => {
    el.innerHTML = cover(el.dataset.cover, Number(el.dataset.seed || i + 1));
  });

  document.querySelectorAll("[data-demo-form]").forEach((form) =>
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.outerHTML = `<p role="status" class="rounded-[9px] bg-tint px-4 py-3 text-sm font-medium text-accent">${
        form.dataset.demoForm || "Thanks — received."
      } (Preview: nothing is sent.)</p>`;
    }),
  );

  const filters = document.querySelectorAll("[data-filter]");
  filters.forEach((b) =>
    b.addEventListener("click", () => {
      filters.forEach((x) => x.classList.toggle("is-active", x === b));
      document.querySelectorAll("[data-category]").forEach((card) => {
        card.hidden = b.dataset.filter !== "All" && card.dataset.category !== b.dataset.filter;
      });
    }),
  );
});
