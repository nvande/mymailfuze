import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { CtaBand } from "@/components/CtaBand";
import { RentManagerLogo } from "@/components/Logo";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Add USPS mail to your software. MailFuze integrates with Rent Manager today and partners with other systems that need physical mail in the workflow.",
};

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        title="Put the post office inside the software you already run."
        lede="Whether you use one of our integration partners or another ERP, MailFuze can work for you. Rent Manager is live. If you build software and want USPS mail as a feature, let’s talk."
      >
        <Button href="/rent-manager/" variant="ghost">
          Rent Manager details
        </Button>
      </PageHero>

      <section>
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-3 md:px-8">
          <article className="rounded-3xl bg-ink p-6 text-paper">
            <RentManagerLogo className="h-7 w-auto" />
            <p className="mt-5 text-paper/70">
              Official integration partner. Recipients, templates, history, bills, and chargebacks—without
              leaving the property system.
            </p>
          </article>
          <article className="rounded-3xl border border-ink/10 p-6">
            <h2 className="font-display text-2xl">CSV, Excel, PDF</h2>
            <p className="mt-3 text-ink-soft">
              MailFuze Standard meets every other stack where it already is: a list and a document.
            </p>
          </article>
          <article className="rounded-3xl border border-ink/10 p-6">
            <h2 className="font-display text-2xl">Your product</h2>
            <p className="mt-3 text-ink-soft">
              Add the ability to send USPS mail into your software solution. Integration is where the magic
              happens.
            </p>
          </article>
        </div>
      </section>

      <section className="border-t border-ink/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
          <div className="md:col-span-5">
            <h2 className="font-display text-3xl">Interested in integrating?</h2>
            <p className="mt-4 text-ink-soft">
              If you want Certified, First-Class, Priority, or Express inside your own product—with tracking,
              proof, and optional return envelopes—reach out. We’ll talk about what “a couple of clicks” should
              mean in your UI.
            </p>
          </div>
          <div className="rounded-3xl border border-ink/10 p-6 md:col-span-7 md:p-8">
            <ContactForm intent="integration" submitLabel="Start an integration conversation" />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
