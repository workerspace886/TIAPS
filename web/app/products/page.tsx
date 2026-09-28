import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/cards";
import { CtaPanel, PageHero } from "@/components/ui";
import { products } from "@/lib/content";

export const metadata: Metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <>
      <PageHero
        badge={["Guides", "Templates", "Toolkits", "Reports"]}
        title="[Products page headline placeholder]"
        intro="[One to two sentences describing the digital product range — formats and who they help. Placeholder.]"
      >
        <p className="tag self-center">Formats: {products.map((p) => p.format).join(" · ")}</p>
      </PageHero>
      <div className="container-page py-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i + 1} />
          ))}
        </div>
        <div className="mt-24">
          <CtaPanel title="Looking for something specific?" text="[Custom product / bulk enquiry prompt placeholder.]">
            <Link href="/contact" className="btn btn-primary">
              Get in touch
            </Link>
          </CtaPanel>
        </div>
      </div>
    </>
  );
}
