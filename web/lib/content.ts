/*
  Typed placeholder content. Every page reads from here, so swapping in a headless CMS or
  the TIAPS API later means replacing these arrays, not editing page components.
  No proprietary material: all names, prices and descriptions are placeholders.
*/

export type CoverKind = "lines" | "dots" | "curve";

export const REPORT_CATEGORIES = ["Trend Report", "Industry Insight", "Opportunity Report"] as const;
export type ReportCategory = (typeof REPORT_CATEGORIES)[number];

export type Report = {
  slug: string;
  category: ReportCategory;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  impact: string;
  cover: CoverKind;
  seed: number;
};

export type Product = {
  slug: string;
  format: string;
  name: string;
  description: string;
  price: string;
  cover: CoverKind;
  seed: number;
};

export type Solution = {
  slug: string;
  category: string;
  name: string;
  summary: string;
  problem: string;
  solution: string;
};

/** Opportunity (Engine A → C/D). Placeholder rows; real ones come from the Opportunities database (OPP-####). */
export type Opportunity = {
  id: string;
  title: string;
  description: string;
  targetMarket: string;
  timeHorizon: string;
};

export type Metric = { value: string; label: string };

export type ResourceType = "Guide" | "Checklist" | "Template" | "Report";
export type Resource = { type: ResourceType; title: string; description: string };

const pad = (n: number) => String(n).padStart(2, "0");
const COVERS: CoverKind[] = ["lines", "dots", "curve"];

const REPORT_SUMMARY = "[Short description placeholder — one or two sentences summarising the publication.]";

export const featuredReport: Report = {
  slug: "featured-report",
  category: "Trend Report",
  title: "[Featured intelligence report title]",
  summary: REPORT_SUMMARY,
  date: "[Date]",
  readTime: "[X] min read",
  impact: "[Impact level]",
  cover: "curve",
  seed: 11,
};

export const reports: Report[] = Array.from({ length: 6 }, (_, i) => ({
  slug: `report-${pad(i + 1)}`,
  category: REPORT_CATEGORIES[i % 3],
  title: `[Intelligence report title ${pad(i + 1)}]`,
  summary: REPORT_SUMMARY,
  date: "[Date]",
  readTime: "[X] min read",
  impact: "[Impact level]",
  cover: COVERS[i % 3],
  seed: i + 3,
}));

export const getReport = (slug: string) => [featuredReport, ...reports].find((r) => r.slug === slug);

// Hero metrics bar. Values stay placeholders until there are real, sourced figures.
export const heroMetrics: Metric[] = [1, 2, 3].map((n) => ({ value: "[XX]", label: `[Metric ${n} label]` }));

export const opportunities: Opportunity[] = Array.from({ length: 3 }, (_, i) => ({
  id: `OPP-${String(i + 1).padStart(4, "0")}`,
  title: `[Opportunity title ${pad(i + 1)}]`,
  description: "[One to two sentences describing the opportunity and the problem it addresses.]",
  targetMarket: "[Target market]",
  timeHorizon: "[Time horizon]",
}));

const FORMATS = ["Guide", "Template", "Toolkit", "Report", "Checklist", "Playbook"];

export const products: Product[] = FORMATS.map((format, i) => ({
  slug: `product-${pad(i + 1)}`,
  format,
  name: `[Product name ${pad(i + 1)}]`,
  description: "[Product description placeholder — what it is and who it helps.]",
  price: "[$XX]",
  cover: COVERS[(i + 1) % 3],
  seed: i + 4,
}));

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const solutions: Solution[] = Array.from({ length: 3 }, (_, i) => ({
  slug: `solution-${pad(i + 1)}`,
  category: `[Solution category ${i + 1}]`,
  name: `[AI solution name ${pad(i + 1)}]`,
  summary: "[One-line solution summary placeholder.]",
  problem: "[The business problem this solves, in the customer's words.]",
  solution: "[What the AI-powered workflow does, at a high level.]",
}));

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);

const RESOURCE_TYPES: ResourceType[] = ["Guide", "Checklist", "Template", "Report"];

export const resources: Resource[] = Array.from({ length: 8 }, (_, i) => ({
  type: RESOURCE_TYPES[Math.floor(i / 2)],
  title: `[Resource title ${pad(i + 1)}]`,
  description: "[One-line resource description placeholder.]",
}));
