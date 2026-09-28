"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { Logo } from "./ui";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Detail pages (/intelligence/report-01) highlight their parent section.
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bone/85 backdrop-blur-md">
      <div className="container-page flex h-[72px] items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {SITE.nav.map(({ href, label }) => {
            const on = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={on ? "page" : undefined}
                className={`relative inline-flex min-h-12 items-center text-sm font-medium ${on ? "text-ink" : "text-taupe hover:text-ink"}`}
              >
                {label}
                {on && <span className="absolute inset-x-0 bottom-2 h-px bg-brass" />}
              </Link>
            );
          })}
        </nav>
        <Link href={SITE.cta.href} className="btn btn-primary hidden xl:inline-flex">
          {SITE.cta.label}
        </Link>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="-mr-3 inline-flex h-12 w-12 items-center justify-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="absolute inset-x-0 top-full h-[calc(100dvh-72px)] overflow-y-auto border-t border-line bg-bone lg:hidden">
          <div className="container-page py-6">
            {SITE.nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`flex min-h-14 items-center justify-between border-b border-line font-serif text-2xl ${isActive(href) ? "text-forest italic" : ""}`}
              >
                {label}
                <span className="font-sans text-base text-taupe">→</span>
              </Link>
            ))}
            <Link href={SITE.cta.href} onClick={() => setOpen(false)} className="btn btn-primary mt-8 w-full">
              {SITE.cta.label}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
