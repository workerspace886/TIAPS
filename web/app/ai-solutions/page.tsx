import type { Metadata } from "next";
import Link from "next/link";
import { SolutionCard } from "@/components/cards";
import { ForestPanel, PageHero, SectionHeader } from "@/components/ui";
import { solutions } from "@/lib/content";

export const metadata: Metadata = { title: "AI Solutions" };

export default function AiSolutionsPage() {
  return (
    <>
      <PageHero
        badge={["B2B", "AI Solutions", "Automation"]}
        title={
          <>
            We don&apos;t simply sell AI. <em>We solve real business problems.</em>
          </>
        }
        intro="[One to two sentences on the B2B AI-solutions offer — who it's for and what kind of problems it addresses. Placeholder.]"
      />
      <section className="container-page py-24">
        <SectionHeader eyebrow="Solutions" title="[Solutions section heading]" description="[Short description placeholder.]" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <SolutionCard key={s.slug} solution={s} index={i + 1} />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="container-page py-24">
          <SectionHeader eyebrow="How we work" title="[Engagement process heading]" />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((n) => (
              <li key={n} className="module p-7">
                <p className="tag">
                  <span className="text-brass">0{n}</span>
                  {" // "}Stage
                </p>
                <p className="mt-8 font-serif text-2xl">[Stage {n}]</p>
                <p className="mt-2 text-sm leading-relaxed text-taupe">[Engagement stage description placeholder.]</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="container-page py-24">
        <ForestPanel
          eyebrow="Start a conversation"
          title="[Consultation heading placeholder]"
          text="[Consultation prompt placeholder.]"
          action={
            <Link href="/contact" className="btn btn-inverse">
              Talk to us
            </Link>
          }
        />
      </div>
    </>
  );
}
