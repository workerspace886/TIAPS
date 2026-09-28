import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb, Checklist, CtaPanel, ProcessSteps } from "@/components/ui";
import { getSolution, solutions } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const solution = getSolution((await params).slug);
  return { title: solution?.name ?? "AI Solutions" };
}

export default async function SolutionPage({ params }: Props) {
  const solution = getSolution((await params).slug);
  if (!solution) notFound();

  return (
    <>
      <header className="bg-forest text-bone">
        <div className="container-page py-12 sm:py-16">
          <Breadcrumb href="/ai-solutions" parent="AI Solutions" current={solution.category} tone="dark" />
          <div className="mt-8 flex items-center gap-3">
            <p className="eyebrow text-brass">{solution.category}</p>
            <span className="rounded border border-dashed border-bone/30 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-bone/70">Placeholder</span>
          </div>
          <h1 className="mt-5 max-w-3xl text-headline font-light">{solution.name}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone/70">{solution.summary}</p>
          <ProcessSteps
            steps={[
              { title: "Problem", text: solution.problem },
              { title: "Solution", text: solution.solution },
              { title: "Benefits", text: "[Benefit 1] · [Benefit 2] · [Benefit 3]" },
            ]}
          />
        </div>
      </header>

      <div className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
        <article className="prose-body min-w-0 max-w-[68ch]">
          {[1, 2].map((n) => (
            <section key={n}>
              <h2>[Section heading {n}]</h2>
              <p>[Solution body copy placeholder — paragraph 1. Replace with approved content.]</p>
              <p>[Solution body copy placeholder — paragraph 2. Replace with approved content.]</p>
            </section>
          ))}
        </article>
        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <div className="card p-6">
            <p className="eyebrow text-taupe">Benefits</p>
            <Checklist items={["[Benefit 1 placeholder]", "[Benefit 2 placeholder]", "[Benefit 3 placeholder]"]} />
          </div>
          <div className="card p-6">
            <p className="eyebrow text-taupe">Capabilities</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[1, 2, 3, 4].map((n) => (
                <span key={n} className="badge">
                  [Capability {n}]
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="container-page pb-24">
        <CtaPanel title="[Consultation prompt heading]" text="[Short consultation prompt placeholder.]">
          <Link href="/contact" className="btn btn-primary">
            Talk to us
          </Link>
          <Link href="/ai-solutions" className="btn btn-secondary">
            All solutions
          </Link>
        </CtaPanel>
      </div>
    </>
  );
}
