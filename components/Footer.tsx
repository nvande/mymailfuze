import Link from "next/link";
import { company, nav } from "@/lib/content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="grain bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo inverted />
            <p className="mt-6 max-w-sm text-pretty text-paper/70">
              Scale your business by streamlining your mailing process. Do more, with less.
            </p>
            <p className="mt-4 font-display text-xl text-gold">{company.tagline}</p>
            <div className="mt-8 flex flex-col gap-2 font-medium text-sm text-paper/75">
              <a href={company.emailHref} className="hover:text-paper">
                {company.email}
              </a>
              <a href={company.phoneHref} className="hover:text-paper">
                {company.phone}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            <FooterCol title="Product" items={nav.product} />
            <FooterCol title="Solutions" items={nav.solutions} />
            <div>
              <FooterCol title="Company" items={nav.company} />
              <ul className="mt-3 space-y-2">
                {nav.legal.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-paper/65 hover:text-paper">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-paper/45 sm:flex-row">
          <p>© {new Date().getFullYear()} {company.parent}. MailFuze is a product of {company.parent}.</p>
          <p>USPS, Certified Mail, Priority Mail, and Priority Mail Express are trademarks of the United States Postal Service.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="eyebrow text-gold/80">{title}</p>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-sm text-paper/75 hover:text-paper">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
