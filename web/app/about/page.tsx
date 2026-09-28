import type { Metadata } from "next";
import Link from "next/link";
import { FeatureGrid } from "@/components/cards";
import { CtaPanel, PageHero, SectionHeader } from "@/components/ui";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge={["About"]}
        title="[About page headline — who we are, in one line. Placeholder.]"
        intro="[Company introduction placeholder — two to three sentences, written from approved brand copy.]"
      />
      <section className="container-page grid gap-12 py-24 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="eyebrow text-taupe">Our mission</p>
          <h2 className="mt-3 text-title font-normal">[Mission statement placeholder]</h2>
        </div>
        <div className="prose-body text-taupe">
          <p>[Company story placeholder — paragraph 1. Replace with approved copy.]</p>
          <p>[Company story placeholder — paragraph 2. Replace with approved copy.]</p>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="container-page py-24">
          <SectionHeader eyebrow="What we do" title="[What we do heading placeholder]" />
          <FeatureGrid />
        </div>
      </section>

      <section className="container-page py-24">
        <SectionHeader eyebrow="How we think" title="[Principles heading placeholder]" />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-surface p-8">
              <p className="tag">
                <span className="text-brass">0{n}</span>
                {" // "}Principle
              </p>
              <p className="mt-6 font-serif text-2xl">[Principle {n}]</p>
              <p className="mt-2 text-sm leading-relaxed text-taupe">[Short description of this principle placeholder.]</p>
            </div>
          ))}
        </div>
      </section>

      <div className="container-page pb-24">
        <CtaPanel title="[Partnership prompt heading]" text="[Partnership / hiring prompt placeholder.]">
          <Link href="/contact" className="btn btn-primary">
            Get in touch
          </Link>
          <Link href="/intelligence" className="btn btn-secondary">
            Explore Intelligence
          </Link>
        </CtaPanel>
      </div>
    </>
  );
}
