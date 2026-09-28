import type { Metadata } from "next";
import { ContactForm } from "@/components/forms";
import { PageHero } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const details = [
    ["Email", SITE.email],
    ["Location", SITE.location],
    ["Response time", "[Typical response time]"],
  ];
  return (
    <>
      <PageHero
        badge={["Contact"]}
        title="[Contact page headline placeholder]"
        intro="[Contact page intro placeholder — who should get in touch and about what.]"
      />
      <div className="container-page grid gap-12 py-24 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div className="space-y-8">
          {details.map(([label, value]) => (
            <div key={label} className="border-t border-line pt-5">
              <p className="eyebrow text-taupe">{label}</p>
              <p className="mt-2 text-[15px] font-medium">{value}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-brass/40 bg-surface p-6">
            <p className="font-serif text-2xl text-forest">[B2B enquiry prompt heading]</p>
            <p className="mt-2 text-sm leading-relaxed">[Short prompt placeholder — what to include in a B2B enquiry.]</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
}
