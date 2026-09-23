"use client";

import Link from "next/link";
import { useState } from "react";
import { company, nav } from "@/lib/content";
import { Button } from "./Button";
import { Logo } from "./Logo";

function Chevron() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden className="opacity-60">
      <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [which, setWhich] = useState<"product" | "solutions" | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.25rem] md:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setWhich("product")}
            onMouseLeave={() => setWhich(null)}
          >
            <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm text-ink-soft hover:text-ink">
              Product <Chevron />
            </button>
            {which === "product" && (
              <div className="absolute left-0 top-full w-52 rounded-2xl border border-ink/10 bg-paper p-2 shadow-[0_20px_50px_-24px_rgba(16,19,24,0.45)]">
                {nav.product.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3 py-2 text-sm text-ink-soft hover:bg-paper-2 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setWhich("solutions")}
            onMouseLeave={() => setWhich(null)}
          >
            <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm text-ink-soft hover:text-ink">
              Solutions <Chevron />
            </button>
            {which === "solutions" && (
              <div className="absolute left-0 top-full w-52 rounded-2xl border border-ink/10 bg-paper p-2 shadow-[0_20px_50px_-24px_rgba(16,19,24,0.45)]">
                {nav.solutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3 py-2 text-sm text-ink-soft hover:bg-paper-2 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/plans/" className="rounded-full px-3 py-2 text-sm text-ink-soft hover:text-ink">
            Plans
          </Link>
          <Link href="/contact/" className="rounded-full px-3 py-2 text-sm text-ink-soft hover:text-ink">
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={company.phoneHref} className="font-medium text-xs tracking-wide text-ink-soft">
            {company.phone}
          </a>
          <Button href="/demo/" variant="wax">
            Schedule a demo
          </Button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-4 flex-col gap-1.5">
            <span className={`h-px w-full bg-ink transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-full bg-ink transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-paper px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-1">
            {[...nav.product, ...nav.solutions, ...nav.company].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-ink hover:bg-paper-2"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
