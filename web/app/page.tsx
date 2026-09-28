import Link from "next/link";
import { FeatureGrid, OpportunityCard, ProductCard, ReportCard, ResourceCard } from "@/components/cards";
import { AiBriefDemo, NewsletterForm } from "@/components/forms";
import { PageHero, SectionHeader } from "@/components/ui";
import { heroMetrics, opportunities, products, reports, resources } from "@/lib/content";

/*
  Section structure follows Rejoice's Front End Samples 2 and 3 (centred hero with metrics bar,
  editorial feature grid, intelligence spotlight, opportunities, two-column AI section, centred
  newsletter panel). Styling stays on the Phase 9 "Alabaster & Aged Brass" tokens.
  Headline, pillar copy, CTA labels and "Know what's coming next." are approved copy.
*/
export default function HomePage() {
  return (
    <>
      <PageHero
        size="display"
        centered
        badge={["Emerging Trends", "Intelligence", "AI Solutions"]}
        title={
          <>
            Discover what&apos;s changing.
            <br />
            <em className="text-taupe">Understand what it means.</em>
            <br />
            Turn it into opportunity.
          </>
        }
        intro="[Short supporting statement — one to two sentences on the company's value proposition, to be finalized with approved brand copy.]"
        metrics={heroMetrics}
      >
        <Link href="/intelligence" className="btn btn-primary">
          Explore Intelligence
        </Link>
        <Link href="/ai-solutions" className="btn btn-secondary">
          See AI Solutions
        </Link>
      </PageHero>

      <section className="border-b border-line bg-surface">
        <div className="container-page py-28">
          <SectionHeader eyebrow="What we do" title="[Core pillars heading]" description="[One-sentence description of how the four pillars work together. Placeholder.]" />
          <FeatureGrid />
        </div>
      </section>

      <section className="container-page py-24">
        <SectionHeader eyebrow="Intelligence" title="[Intelligence spotlight heading]" description="[One-line description of the intelligence publications placeholder.]" href="/intelligence" />
        <div className="grid gap-6 md:grid-cols-3">
          {reports.slice(0, 3).map((r, i) => (
            <ReportCard key={r.slug} report={r} index={i + 1} />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="container-page py-24">
          <SectionHeader
            centered
            eyebrow="Opportunities"
            title="[Emerging opportunities heading]"
            description="[One to two sentences on how opportunities are identified from early signals. Placeholder.]"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {opportunities.map((o, i) => (
              <OpportunityCard key={o.id} opportunity={o} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <SectionHeader eyebrow="Products" title="[Products section heading]" description="[One-line description of the product range placeholder.]" href="/products" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i + 1} />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="container-page grid items-center gap-16 py-24 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-taupe">B2B · AI Solutions</p>
            <h2 className="mt-3 text-title font-light">
              We don&apos;t simply sell AI. <em>We solve real business problems.</em>
            </h2>
            <p className="mt-6 leading-relaxed text-taupe">[Short description of the AI-solutions offer and how an engagement works. Placeholder.]</p>
            <ul className="mt-8 space-y-5">
              {[1, 2].map((n) => (
                <li key={n} className="flex gap-4">
                  <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brass/60 text-xs text-forest">
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-semibold">[Capability {n}]</p>
                    <p className="mt-1 text-sm leading-relaxed text-taupe">[One-line capability description placeholder.]</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/ai-solutions" className="btn btn-primary mt-10">
              View AI Solutions
            </Link>
          </div>
          <AiBriefDemo />
        </div>
      </section>

      <section className="container-page py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-line bg-surface p-8 text-center shadow-soft sm:p-12">
          <p className="eyebrow text-taupe">Newsletter</p>
          <h2 className="mt-3 text-title font-light">
            Know what&apos;s coming <em>next.</em>
          </h2>
          <p className="mx-auto mb-8 mt-5 max-w-xl text-sm leading-relaxed text-taupe">[Short newsletter value proposition placeholder.]</p>
          <div className="mx-auto max-w-md text-left">
            <NewsletterForm />
          </div>
          <p className="mt-4 text-[11px] text-taupe">[Privacy note placeholder.] Unsubscribe at any time.</p>
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="container-page py-24">
          <SectionHeader eyebrow="Resources" title="[Resources section heading]" href="/resources" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {resources.filter((_, i) => i % 2 === 0).map((r) => (
              <ResourceCard key={r.title} resource={r} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow text-taupe">About</p>
            <h2 className="mt-3 text-title font-light">[Who we are — one-line positioning statement placeholder.]</h2>
            <p className="mt-4 leading-relaxed text-taupe">[Two-sentence company introduction placeholder, to be written from approved brand copy.]</p>
          </div>
          <Link href="/about" className="text-link">
            Learn more →
          </Link>
        </div>
      </section>
    </>
  );
}
