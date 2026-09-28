import type { Metadata } from "next";
import Link from "next/link";
import { ResourceCard } from "@/components/cards";
import { CtaPanel, PageHero } from "@/components/ui";
import { resources, type ResourceType } from "@/lib/content";

export const metadata: Metadata = { title: "Resources" };

const GROUPS: [ResourceType, string][] = [
  ["Guide", "Guides"],
  ["Checklist", "Checklists"],
  ["Template", "Templates"],
  ["Report", "Reports"],
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        badge={["Free resources"]}
        title="[Resources page headline placeholder]"
        intro="[One to two sentences describing the free resource library. Placeholder.]"
      />
      <div className="container-page space-y-16 py-24">
        {GROUPS.map(([type, heading], i) => {
          const items = resources.filter((r) => r.type === type);
          return (
            <section key={type}>
              <div className="mb-6 flex items-baseline justify-between border-b border-line pb-4">
                <h2 className="text-3xl font-normal">{heading}</h2>
                <p className="tag">
                  <span className="text-brass">{String(i + 1).padStart(2, "0")}</span>
                  {" // "}
                  {items.length} items
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((r) => (
                  <ResourceCard key={r.title} resource={r} />
                ))}
              </div>
            </section>
          );
        })}
        <div className="pt-8">
          <CtaPanel title="Get new resources as they're published.">
            <Link href="/newsletter" className="btn btn-primary">
              Subscribe
            </Link>
          </CtaPanel>
        </div>
      </div>
    </>
  );
}
