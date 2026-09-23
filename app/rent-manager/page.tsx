import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { RentManagerLogo } from "@/components/Logo";
import { PageHero } from "@/components/PageHero";
import { Testimonials } from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "MailFuze for Rent Manager",
  description:
    "Intelligent mailing for Rent Manager users. Pull tenants from the database, generate letters, automate chargebacks, and store proof in history.",
};

const send = [
  "Tenant notices",
  "Adverse action letters",
  "Tenant statements",
  "HOA documents",
  "Newsletters",
  "Any PDF",
];

export default function RentManagerPage() {
  return (
    <>
      <PageHero
        eyebrow="MailFuze for Rent Manager"
        title="Intelligent mailing, wired into your database."
        lede="Our solution built specifically for Rent Manager users connects directly to your data so you can send any mail type from your office chair. Automate bookkeeping and chargebacks—MailFuze is a bookkeeper’s dream."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/demo/" variant="wax">
            Schedule a demo
          </Button>
          <Button href="/plans/#compare" variant="ghost">
            See the feature list
          </Button>
        </div>
      </PageHero>

      <section>
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-3 md:px-8">
          {[
            "Integrates directly with your Rent Manager database",
            "Automated charge-backs to recoup your mailing costs",
            "Court-friendly documentation to prove mailings were sent",
          ].map((t) => (
            <article key={t} className="rounded-3xl border border-ink/10 p-6">
              <h2 className="font-display text-2xl tracking-tight">{t}</h2>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/10 bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <RentManagerLogo className="h-8 w-auto" />
          <p className="eyebrow mt-8 text-gold">What you send</p>
          <h2 className="font-display mt-3 text-3xl md:text-4xl">The notices that used to eat two days.</h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {send.map((item) => (
              <li key={item} className="rounded-2xl border border-white/10 px-5 py-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <h2 className="font-display text-3xl tracking-tight">What only Rent Manager unlocks</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Choose recipients from Tenants, Tenant Contacts, and Prospects",
              "Select any address type for those recipients",
              "Filter by Property Group, Property, Total Balance, Rent Balance, or UDF values",
              "Generate letters from Rent Manager letter templates",
              "Automatically create bills for each mailing batch (optional)",
              "Charge back the owner or property—and charge the tenant",
              "Save the letter and Proof of Mailing in the appropriate history / notes",
              "Transform mailing from an expense into a source of revenue",
            ].map((item) => (
              <p key={item} className="rounded-2xl border border-ink/10 px-5 py-4">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CtaBand />
    </>
  );
}
