import type { Metadata } from "next";
import { NewsletterForm } from "@/components/forms";
import { Checklist, PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Newsletter" };

export default function NewsletterPage() {
  return (
    <PageHero
      badge={["Newsletter"]}
      title={
        <>
          Know what&apos;s coming <em>next.</em>
        </>
      }
      intro="[Newsletter value proposition placeholder — what subscribers receive and how often.]"
      aside={
        <div className="rounded-3xl border border-line bg-surface p-8 shadow-soft sm:p-10">
          <p className="font-serif text-3xl">Subscribe</p>
          <p className="mb-6 mt-2 text-sm text-taupe">[Frequency placeholder.] Unsubscribe any time.</p>
          <NewsletterForm stacked />
          <p className="mt-6 border-t border-line pt-5 text-xs leading-relaxed text-taupe">[Privacy note placeholder — how subscriber data is handled.]</p>
        </div>
      }
    >
      <div className="-mt-2">
        <Checklist items={["[Newsletter benefit 1 placeholder]", "[Newsletter benefit 2 placeholder]", "[Newsletter benefit 3 placeholder]"]} />
      </div>
    </PageHero>
  );
}
