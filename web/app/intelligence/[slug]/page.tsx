import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReportCard } from "@/components/cards";
import { Cover } from "@/components/Cover";
import { NewsletterForm } from "@/components/forms";
import { Breadcrumb, Checklist, Placeholder, SectionHeader } from "@/components/ui";
import { featuredReport, getReport, reports } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [featuredReport, ...reports].map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const report = getReport((await params).slug);
  return { title: report?.title ?? "Intelligence" };
}

export default async function ReportPage({ params }: Props) {
  const report = getReport((await params).slug);
  if (!report) notFound();
  const related = reports.filter((r) => r.slug !== report.slug).slice(0, 3);

  return (
    <>
      <header className="border-b border-line">
        <div className="container-page pt-12 sm:pt-16">
          <Breadcrumb href="/intelligence" parent="Intelligence" current={report.category} />
          <div className="mt-8 flex gap-3">
            <span className="badge">{report.category}</span>
            <Placeholder />
          </div>
          <h1 className="mt-6 max-w-4xl text-headline font-light">{report.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-taupe">{report.summary}</p>
          <p className="tag mt-6">
            {report.date} · {report.readTime}
          </p>
          <div className="mt-12 aspect-[3/1] overflow-hidden rounded-t-3xl border border-b-0 border-line bg-surface">
            <Cover kind={report.cover} seed={report.seed} />
          </div>
        </div>
      </header>

      <div className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
        <article className="prose-body min-w-0 max-w-[68ch]">
          {[1, 2, 3].map((n) => (
            <section key={n}>
              <h2>[Section heading {n}]</h2>
              <p>[Intelligence body copy placeholder — paragraph 1. Replace with approved content.]</p>
              <p>[Intelligence body copy placeholder — paragraph 2. Replace with approved content.]</p>
            </section>
          ))}
        </article>
        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <div className="card p-6">
            <p className="eyebrow text-taupe">Key takeaways</p>
            <Checklist marker="number" items={["[Key takeaway 1 placeholder]", "[Key takeaway 2 placeholder]", "[Key takeaway 3 placeholder]"]} />
          </div>
          <div className="card p-6">
            <p className="eyebrow text-taupe">Topics</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["[Tag]", "[Tag]", "[Tag]"].map((t, i) => (
                <span key={i} className="badge">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-forest p-6 text-bone">
            <p className="font-serif text-2xl">
              Know what&apos;s coming <em>next.</em>
            </p>
            <p className="mb-5 mt-2 text-[13px] text-bone/70">[Newsletter prompt placeholder.]</p>
            <NewsletterForm stacked tone="dark" />
          </div>
        </aside>
      </div>

      <section className="border-y border-line bg-surface">
        <div className="container-page py-24">
          <SectionHeader eyebrow="Related" title="More intelligence" href="/intelligence" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <ReportCard key={r.slug} report={r} index={i + 1} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
