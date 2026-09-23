import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "MailFuze is built for property management, law, accounting, insurance, healthcare, self-storage—and any business that still sends mail.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Ideal for any business sending mail."
        lede="Property managers, counsel, accountants, carriers, clinics, and storage operators all share the same problem: paper still has to move. MailFuze is how it moves now."
      />
      <section>
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-16 md:grid-cols-2 md:px-8">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}/`}
              className="group rounded-3xl border border-ink/10 p-8 hover:bg-paper-2/60"
            >
              <h2 className="font-display text-3xl tracking-tight">{ind.name}</h2>
              <p className="mt-3 text-ink-soft">{ind.summary}</p>
              <p className="mt-6 text-sm font-medium text-teal group-hover:underline">Industry page →</p>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
