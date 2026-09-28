import Link from "next/link";
import type { Opportunity, Product, Report, Resource, Solution } from "@/lib/content";
import { PILLARS } from "@/lib/site";
import { Cover } from "./Cover";
import { Placeholder, SectionTag } from "./ui";

/** Editorial feature grid (Front End Sample 2): 01 // SIGNAL, 02 // ARTIFACT, 03 // EXECUTION ... */
export function FeatureGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {PILLARS.map((p, i) => (
        <Link key={p.href} href={p.href} className="module group flex flex-col p-8 sm:p-10 lg:p-8">
          <SectionTag index={i + 1} label={p.tag} />
          <h3 className="mt-6 text-2xl font-normal transition-colors group-hover:text-forest">{p.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-taupe">{p.copy}</p>
        </Link>
      ))}
    </div>
  );
}

function CoverImage({ kind, seed }: { kind: Report["cover"]; seed: number }) {
  return (
    <div className="relative aspect-[2/1] overflow-hidden border-b border-line bg-bone">
      <Cover kind={kind} seed={seed} />
      <Placeholder className="absolute right-3 top-3" />
    </div>
  );
}

/** Intelligence card (Front End Sample 3 "insight" layout): category badge and index, title, summary, impact footer. */
export function ReportCard({ report, index }: { report: Report; index: number }) {
  return (
    <Link href={`/intelligence/${report.slug}`} className="card card-link group flex flex-col p-7 sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <span className="badge">{report.category}</span>
        <p className="tag">
          <span className="text-brass">{String(index).padStart(2, "0")}</span>
          {" // "}
          {report.date}
        </p>
      </div>
      <h3 className="mt-6 text-2xl font-normal leading-tight transition-colors group-hover:text-forest">{report.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-taupe">{report.summary}</p>
      <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-5">
        <span className="eyebrow text-forest">Impact: {report.impact}</span>
        <span className="text-[13px] font-semibold text-ink">Read brief →</span>
      </div>
    </Link>
  );
}

/** Opportunity card (Front End Sample 3): large index numeral, summary, market and horizon, action. */
export function OpportunityCard({ opportunity, index }: { opportunity: Opportunity; index: number }) {
  return (
    <div className="card flex flex-col p-8">
      <div className="flex items-start justify-between gap-3">
        <p className="font-serif text-5xl font-light text-brass">{String(index).padStart(2, "0")}</p>
        <Placeholder />
      </div>
      <h3 className="mt-4 text-2xl font-normal leading-tight">{opportunity.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-taupe">{opportunity.description}</p>
      <ul className="mb-8 mt-6 flex-1 space-y-2 text-xs text-taupe">
        {[
          ["Target market", opportunity.targetMarket],
          ["Time horizon", opportunity.timeHorizon],
        ].map(([label, value]) => (
          <li key={label} className="flex items-center gap-2">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brass" />
            {label}: {value}
          </li>
        ))}
      </ul>
      <Link href="/contact" className="btn btn-secondary w-full">
        Enquire about this opportunity
      </Link>
    </div>
  );
}

export function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <Link href={`/products/${product.slug}`} className="card card-link group flex flex-col overflow-hidden">
      <CoverImage kind={product.cover} seed={product.seed} />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <SectionTag index={index} label={product.format} />
        <h3 className="mt-4 text-2xl font-medium leading-tight">{product.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-taupe">{product.description}</p>
        <p className="mt-5 font-serif text-2xl text-forest">{product.price}</p>
      </div>
    </Link>
  );
}

export function SolutionCard({ solution, index }: { solution: Solution; index: number }) {
  return (
    <Link href={`/ai-solutions/${solution.slug}`} className="module group flex flex-col p-7">
      <div className="flex items-center justify-between gap-3">
        <SectionTag index={index} label={solution.category} />
        <Placeholder />
      </div>
      <h3 className="mt-5 text-2xl font-medium leading-tight">{solution.name}</h3>
      <dl className="mt-6 flex-1 space-y-4 border-t border-line pt-6 text-sm">
        <div>
          <dt className="eyebrow text-taupe">Problem</dt>
          <dd className="mt-1.5 leading-relaxed">{solution.problem}</dd>
        </div>
        <div>
          <dt className="eyebrow text-taupe">Solution</dt>
          <dd className="mt-1.5 leading-relaxed">{solution.solution}</dd>
        </div>
      </dl>
      <span className="mt-6 inline-flex min-h-12 items-center text-[13px] font-semibold text-forest">View solution →</span>
    </Link>
  );
}

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between gap-3">
        <p className="tag">{resource.type}</p>
        <Placeholder />
      </div>
      <h3 className="mt-4 text-xl font-medium">{resource.title}</h3>
      <p className="mt-2 text-[13px] leading-relaxed text-taupe">{resource.description}</p>
      <p className="mt-5 text-xs font-semibold text-taupe">Coming soon</p>
    </div>
  );
}
