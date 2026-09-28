"use client";

import { useId, useState, type FormEvent } from "react";
import { REPORT_CATEGORIES, type Report } from "@/lib/content";
import { ReportCard } from "./cards";

// Preview forms: they confirm on submit but send nothing.
function Confirmation({ message, tone = "light" }: { message: string; tone?: "light" | "dark" }) {
  return (
    <p role="status" className={`rounded-xl px-4 py-3 text-sm font-medium ${tone === "dark" ? "bg-bone/10 text-bone" : "border border-line bg-bone text-forest"}`}>
      {message} (Preview: nothing is sent.)
    </p>
  );
}

export function NewsletterForm({ stacked = false, tone = "light" }: { stacked?: boolean; tone?: "light" | "dark" }) {
  const id = useId();
  const [sent, setSent] = useState(false);
  if (sent) return <Confirmation message="Thanks — you're on the list." tone={tone} />;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <form onSubmit={submit} className={`flex w-full flex-col gap-3 ${stacked ? "" : "sm:flex-row"}`}>
      <label className="sr-only" htmlFor={id}>
        Email address
      </label>
      <input id={id} type="email" required placeholder="you@company.com" className="input sm:min-w-64" />
      <button className={`btn ${tone === "dark" ? "btn-inverse" : "btn-primary"}`}>Subscribe</button>
    </form>
  );
}

const label = "mb-1.5 block text-[13px] font-semibold";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  if (sent) return <Confirmation message="Message received." />;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <form onSubmit={submit} className="card grid gap-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Name <span className="text-brass">*</span>
          </label>
          <input id="name" required className="input" />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Work email <span className="text-brass">*</span>
          </label>
          <input id="email" type="email" required className="input" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={label}>
            Company
          </label>
          <input id="company" className="input" />
        </div>
        <div>
          <label htmlFor="type" className={label}>
            Enquiry type
          </label>
          <select id="type" className="input">
            <option>[Enquiry type 1]</option>
            <option>[Enquiry type 2]</option>
            <option>[Enquiry type 3]</option>
            <option>Something else</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className={label}>
          Message <span className="text-brass">*</span>
        </label>
        <textarea id="message" rows={5} required className="input" />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-taupe">[Data-use note placeholder.]</p>
        <button className="btn btn-primary">Send message</button>
      </div>
    </form>
  );
}

/** Intelligence listing: category filter chips over the report grid. */
export function ReportExplorer({ reports }: { reports: Report[] }) {
  const [filter, setFilter] = useState<string>("All");
  return (
    <>
      <div className="-mx-1 mb-10 flex gap-2 overflow-x-auto px-1 pb-1">
        {["All", ...REPORT_CATEGORIES].map((c) => (
          <button key={c} type="button" aria-pressed={filter === c} onClick={() => setFilter(c)} className="filter">
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reports.map((r, i) => (filter === "All" || r.category === filter ? <ReportCard key={r.slug} report={r} index={i + 1} /> : null))}
      </div>
    </>
  );
}

/** AI brief panel (Front End Sample 3 layout). Preview only: it shows placeholder output and runs no analysis. */
export function AiBriefDemo() {
  const [ran, setRan] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setRan(true);
  };
  return (
    <form onSubmit={submit} className="card p-6 sm:p-8">
      <div className="mb-6 flex items-center justify-between gap-3 border-b border-line pb-6">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-brass" />
          <span className="font-serif text-xl">[AI agent panel name]</span>
        </div>
        <span className="ph">Preview</span>
      </div>
      <div className="space-y-5">
        <div>
          <label htmlFor="ai-sector" className={label}>
            Industry sector
          </label>
          <select id="ai-sector" className="input">
            {[1, 2, 3, 4].map((n) => (
              <option key={n}>[Industry sector {n}]</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="ai-objective" className={label}>
            Primary objective
          </label>
          <input id="ai-objective" className="input" placeholder="[Example objective placeholder]" />
        </div>
        <button className="btn btn-primary w-full">Generate brief</button>
        {ran && (
          <div role="status" className="rounded-xl border border-line bg-bone p-4 text-sm leading-relaxed text-taupe">
            <p className="font-semibold text-forest">Sample output</p>
            <p className="mt-2">[Sample brief output placeholder.] (Preview: no analysis is run.)</p>
          </div>
        )}
      </div>
    </form>
  );
}
