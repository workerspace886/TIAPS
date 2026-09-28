import type { Metadata } from "next";
import Link from "next/link";
import { Cover } from "@/components/Cover";
import { ReportExplorer } from "@/components/forms";
import { CtaPanel, PageHero, Placeholder } from "@/components/ui";
import { featuredReport, reports } from "@/lib/content";

export const metadata: Metadata = { title: "Intelligence" };

export default function IntelligencePage() {
  return (
    <>
      <PageHero
        badge={["Trend Reports", "Industry Insights", "Opportunity Reports"]}
        title="[Intelligence page headline placeholder]"
        intro="[One to two sentences describing the intelligence publications — what they cover and who they're for. Placeholder.]"
      />
      <div className="container-page py-24">
        <Link href={`/intelligence/${featuredReport.slug}`} className="card card-link group grid overflow-hidden md:grid-cols-[1.1fr_1fr]">
          <div className="aspect-[2/1] bg-bone md:aspect-auto md:border-r md:border-line">
            <Cover kind={featuredReport.cover} seed={featuredReport.seed} />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <div className="flex gap-3">
              <span className="badge">Latest</span>
              <Placeholder />
            </div>
            <p className="tag mt-6">
              {featuredReport.category} · {featuredReport.date}
            </p>
            <h2 className="mt-3 text-title font-normal">{featuredReport.title}</h2>
            <p className="mt-4 leading-relaxed text-taupe">{featuredReport.summary}</p>
            <span className="mt-8 text-[13px] font-semibold text-forest">Read the report →</span>
          </div>
        </Link>

        <h2 className="mb-6 mt-24 text-title font-normal">All publications</h2>
        <ReportExplorer reports={reports} />

        <div className="mt-24">
          <CtaPanel title={<>Know what&apos;s coming <em>next.</em></>} text="[Newsletter prompt placeholder.]">
            <Link href="/newsletter" className="btn btn-primary">
              Subscribe
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Request research
            </Link>
          </CtaPanel>
        </div>
      </div>
    </>
  );
}
