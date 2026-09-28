import Link from "next/link";
import { SITE } from "@/lib/site";
import { Logo } from "./ui";

const footerLink = "inline-flex min-h-12 items-center text-sm hover:text-forest md:min-h-9";

function Column({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <p className="eyebrow text-taupe">{title}</p>
      <ul className="mt-3">
        {links.map(([href, label]) => (
          <li key={href}>
            <Link href={href} className={footerLink}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-taupe">{SITE.tagline}</p>
        </div>
        <Column title="What we do" links={[["/intelligence", "Intelligence"], ["/products", "Products"], ["/ai-solutions", "AI Solutions"], ["/resources", "Resources"]]} />
        <Column title="Company" links={[["/newsletter", "Newsletter"], ["/about", "About"], ["/contact", "Contact"]]} />
        <div>
          <p className="eyebrow text-taupe">Get in touch</p>
          <ul className="mt-3 text-sm">
            <li className="py-1.5">{SITE.email}</li>
            <li className="py-1.5 text-taupe">{SITE.location}</li>
            <li>
              <Link href="/contact" className={`${footerLink} font-semibold text-forest`}>
                Contact form →
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-2 py-6 text-[13px] text-taupe sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5">
            {["Privacy", "Terms", "LinkedIn", "X"].map((label) => (
              <a key={label} href="#" className="inline-flex min-h-12 items-center hover:text-ink">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
