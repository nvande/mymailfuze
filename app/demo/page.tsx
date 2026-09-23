import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Schedule a demo",
  description:
    "Schedule a MailFuze demo. Pick a time that works and see Standard or Rent Manager in action.",
};

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Schedule a demo"
        title="Find a time that works for you."
        lede="Tell us who you are and what you send. We’ll book a walkthrough of MailFuze Standard or MailFuze for Rent Manager—no slide deck required unless you want one."
      />
      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
          <div className="md:col-span-5">
            <h2 className="font-display text-2xl">What we’ll cover</h2>
            <ul className="mt-6 space-y-3 text-ink-soft">
              <li>Your current mailing volume and mail types</li>
              <li>Whether Rent Manager (or another system) is in the mix</li>
              <li>A live path: list → preview → estimate → send</li>
              <li>Proof, tracking, and chargebacks if they apply</li>
            </ul>
            <p className="mt-8 text-sm text-ink-soft">
              Prefer the phone? Call{" "}
              <a href={company.phoneHref} className="font-medium text-ink underline">
                {company.phone}
              </a>{" "}
              or email{" "}
              <a href={company.emailHref} className="font-medium text-ink underline">
                {company.email}
              </a>
              .
            </p>
          </div>
          <div className="rounded-3xl border border-ink/10 p-6 md:col-span-7 md:p-8">
            <ContactForm intent="demo" submitLabel="Request a time" />
          </div>
        </div>
      </section>
    </>
  );
}
