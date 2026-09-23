import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { FeatureTable } from "@/components/FeatureTable";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Unlimited users, every major USPS mail type, court-friendly proof, cost estimates, previews, and Rent Manager automation.",
};

const highlights = [
  {
    title: "Unlimited users, no extra seats",
    body: "Stand up your whole organization at no additional cost. Busy season does not mean buying licenses.",
  },
  {
    title: "Every mail type, one console",
    body: "First-Class, First-Class with COM, Certified, Priority, and Priority Express—chosen per batch, not per vendor.",
  },
  {
    title: "Proof that holds up",
    body: "Court-friendly Confirmation of Mailing and Certified tracking documents, plus USPS Electronic Return Receipt.",
  },
  {
    title: "See it before it leaves",
    body: "Preview documents and generate a cost estimate before you send. History of every batch stays on file.",
  },
  {
    title: "Lists your way",
    body: "Type recipients, import CSV or Excel, or—on Rent Manager—select Tenants, Tenant Contacts, and Prospects.",
  },
  {
    title: "Expense becomes revenue",
    body: "Automatically create bills, charge back owners and properties, and charge tenants for each mailing.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="The mailing desk, without the desk."
        lede="Mail hundreds of letters in minutes, not hours. Keep the proof. Charge the right ledger. Never buy another folder."
      />
      <section>
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-16 md:grid-cols-3 md:px-8">
          {highlights.map((h) => (
            <article key={h.title} className="rounded-3xl border border-ink/10 p-6">
              <h2 className="font-display text-2xl tracking-tight">{h.title}</h2>
              <p className="mt-3 text-ink-soft">{h.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-t border-ink/10 bg-paper-2/30">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <h2 className="font-display text-3xl tracking-tight">Standard vs. Rent Manager</h2>
          <div className="mt-10">
            <FeatureTable />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
