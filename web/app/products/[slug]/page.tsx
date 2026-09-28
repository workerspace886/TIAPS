import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/cards";
import { Cover } from "@/components/Cover";
import { Breadcrumb, Checklist, Placeholder, SectionHeader } from "@/components/ui";
import { getProduct, products } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProduct((await params).slug);
  return { title: product?.name ?? "Products" };
}

export default async function ProductPage({ params }: Props) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <header className="border-b border-line">
        <div className="container-page grid gap-12 py-12 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Breadcrumb href="/products" parent="Products" current={product.format} />
            <div className="mt-8 flex gap-3">
              <span className="badge">{product.format}</span>
              <Placeholder />
            </div>
            <h1 className="mt-6 text-headline font-light">{product.name}</h1>
            <p className="mt-6 text-lg leading-relaxed text-taupe">{product.description}</p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <span className="btn cursor-not-allowed border border-dashed border-brass/60 text-taupe">Available soon</span>
              <span className="font-serif text-4xl text-forest">{product.price}</span>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-surface shadow-soft">
            <Cover kind={product.cover} seed={product.seed} />
          </div>
        </div>
      </header>

      <div className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
        <article className="prose-body min-w-0 max-w-[68ch]">
          {[1, 2].map((n) => (
            <section key={n}>
              <h2>[Section heading {n}]</h2>
              <p>[Product body copy placeholder — paragraph 1. Replace with approved content.]</p>
              <p>[Product body copy placeholder — paragraph 2. Replace with approved content.]</p>
            </section>
          ))}
        </article>
        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <div className="card p-6">
            <p className="eyebrow text-taupe">What&apos;s included</p>
            <Checklist items={["[Included item 1]", "[Included item 2]", "[Included item 3]", "[Included item 4]"]} />
          </div>
          <div className="card p-6">
            <p className="eyebrow text-taupe">Who it&apos;s for</p>
            <p className="mt-3 text-sm leading-relaxed">[Target customer placeholder]</p>
          </div>
        </aside>
      </div>

      <section className="border-y border-line bg-surface">
        <div className="container-page py-24">
          <SectionHeader eyebrow="Related" title="More products" href="/products" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i + 1} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
