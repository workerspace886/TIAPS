import Link from "next/link";
import type { ReactNode } from "react";

export function Logo() {
  return (
    <Link href="/" className="inline-flex min-h-12 items-center gap-2.5" aria-label="TIAPS home">
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
        <rect width="28" height="28" rx="7" fill="#162B22" />
        <path d="M7 19 L12 13.5 L16 16.5 L21 9" fill="none" stroke="#F7F6F0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="21" cy="9" r="2.3" fill="#A38A52" stroke="#F7F6F0" strokeWidth="1.2" />
      </svg>
      <span className="font-serif text-[22px] font-semibold tracking-[.04em]">TIAPS</span>
    </Link>
  );
}

/** Pill-shaped metadata badge with brass dot indicators: ● EMERGING TRENDS ● INTELLIGENCE */
export function PillBadge({ items }: { items: string[] }) {
  return (
    <p className="inline-flex flex-wrap items-center gap-x-4 gap-y-1.5 rounded-2xl border border-line bg-surface px-4 py-2 text-[11px] font-semibold uppercase tracking-[.16em] text-taupe shadow-soft sm:rounded-full">
      {items.map((item) => (
        <span key={item} className="inline-flex items-center gap-2">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brass" />
          {item}
        </span>
      ))}
    </p>
  );
}

/** Monospaced section tag: "01 // SIGNAL". */
export function SectionTag({ index, label, className = "" }: { index: number; label: string; className?: string }) {
  return (
    <p className={`tag ${className}`}>
      <span className="text-brass">{String(index).padStart(2, "0")}</span>
      {" // "}
      <span className="transition-colors group-hover:text-forest">{label}</span>
    </p>
  );
}

/**
  Top-of-page hero: pill badge, light serif headline, intro, actions (pt-32 pb-24).
  `centered` follows the Front End Sample 2/3 layout, with an optional metrics bar underneath.
*/
export function PageHero({
  badge,
  title,
  intro,
  size = "headline",
  centered = false,
  metrics,
  children,
  aside,
}: {
  badge: string[];
  title: ReactNode;
  intro?: ReactNode;
  size?: "display" | "headline";
  centered?: boolean;
  metrics?: { value: string; label: string }[];
  children?: ReactNode;
  aside?: ReactNode;
}) {
  const layout = centered
    ? "mx-auto max-w-5xl text-center"
    : aside
      ? "grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-16"
      : "";
  return (
    <section className="border-b border-line">
      <div className={`container-page pt-32 pb-24 ${layout}`}>
        <div>
          <PillBadge items={badge} />
          <h1 className={`mt-8 max-w-4xl font-light tracking-[-0.01em] ${centered ? "mx-auto" : ""} ${size === "display" ? "text-display" : "text-headline"}`}>{title}</h1>
          {intro && <p className={`mt-7 max-w-2xl text-base leading-relaxed text-taupe sm:text-lg ${centered ? "mx-auto" : ""}`}>{intro}</p>}
          {children && <div className={`mt-10 flex flex-col gap-3 sm:flex-row ${centered ? "sm:justify-center" : ""}`}>{children}</div>}
        </div>
        {aside}
        {metrics && (
          <dl className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-8 border-t border-line pt-14 md:grid-cols-3">
            {metrics.map((m, i) => (
              <div key={m.label} className={i === metrics.length - 1 && metrics.length % 2 ? "col-span-2 md:col-span-1" : ""}>
                <dd className="font-serif text-4xl text-forest">{m.value}</dd>
                <dt className="eyebrow mt-2 text-taupe">{m.label}</dt>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}

/**
  Section heading. Default: eyebrow and title on the left, description (or a "See all" link) on the right.
  `centered`: stacked and centred, for standalone sections such as Opportunities.
*/
export function SectionHeader({
  eyebrow,
  title,
  description,
  href,
  linkLabel = "See all →",
  centered = false,
}: {
  eyebrow: string;
  title?: ReactNode;
  description?: string;
  href?: string;
  linkLabel?: string;
  centered?: boolean;
}) {
  if (centered) {
    return (
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <p className="eyebrow text-taupe">{eyebrow}</p>
        {title && <h2 className="mt-3 text-title font-light">{title}</h2>}
        {description && <p className="mt-5 leading-relaxed text-taupe">{description}</p>}
      </div>
    );
  }
  return (
    <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
      <div className="max-w-2xl">
        <p className="eyebrow text-taupe">{eyebrow}</p>
        {title && <h2 className="mt-3 text-title font-light">{title}</h2>}
      </div>
      {(description || href) && (
        <div className="flex flex-col gap-2 md:max-w-sm md:items-end md:text-right">
          {description && <p className="text-sm leading-relaxed text-taupe">{description}</p>}
          {href && (
            <Link href={href} className="text-link self-start md:self-auto">
              {linkLabel}
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export function Placeholder({ className = "" }: { className?: string }) {
  return <span className={`ph ${className}`}>Placeholder</span>;
}

export function Breadcrumb({ href, parent, current, tone = "light" }: { href: string; parent: string; current: string; tone?: "light" | "dark" }) {
  const muted = tone === "dark" ? "text-bone/70" : "text-taupe";
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-[13px] ${muted}`}>
      <Link href={href} className={`inline-flex min-h-12 items-center font-semibold ${tone === "dark" ? "hover:text-bone" : "hover:text-ink"}`}>
        {parent}
      </Link>
      <span className="mx-2">/</span>
      {current}
    </nav>
  );
}

export function Checklist({ items, marker }: { items: string[]; marker?: "number" | "check" }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brass/60 text-[10px] font-semibold text-forest">
            {marker === "number" ? i + 1 : "✓"}
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Light call-to-action panel: heading and text on the left, actions on the right. */
export function CtaPanel({ title, text, children }: { title: ReactNode; text?: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-line bg-surface p-8 shadow-soft sm:p-12 md:flex-row md:items-center md:justify-between">
      <div className="max-w-xl">
        <h2 className="text-title font-normal">{title}</h2>
        {text && <p className="mt-3 text-sm leading-relaxed text-taupe">{text}</p>}
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">{children}</div>
    </div>
  );
}

/** Deep Forest panel for high-impact moments (AI Solutions, consultations). */
export function ForestPanel({ eyebrow, title, text, action, children }: { eyebrow: string; title: ReactNode; text: string; action: ReactNode; children?: ReactNode }) {
  return (
    <div className="rounded-3xl bg-forest px-6 py-12 text-bone sm:px-12 sm:py-14">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow text-brass">{eyebrow}</p>
          <h2 className="mt-4 text-title font-light">{title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-bone/70 sm:text-[15px]">{text}</p>
        </div>
        <div className="self-start lg:self-center">{action}</div>
      </div>
      {children}
    </div>
  );
}

/** Problem → Solution → Benefits strip, used on dark (forest) grounds. */
export function ProcessSteps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/10 md:grid-cols-3">
      {steps.map((step, i) => (
        <li key={step.title} className="bg-forest p-6">
          <p className="font-mono text-[11px] text-brass">{String(i + 1).padStart(2, "0")}</p>
          <p className="mt-3 font-serif text-2xl">{step.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-bone/70">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
