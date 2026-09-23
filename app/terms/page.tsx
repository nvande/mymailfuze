import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the MailFuze website and services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms"
        lede="The MailFuze website is provided by Efformance for information and to start a conversation. Service agreements govern paid use."
      />
      <section>
        <div className="mx-auto max-w-3xl space-y-8 px-5 py-16 text-ink-soft md:px-8">
          <div>
            <h2 className="font-display text-2xl text-ink">The site</h2>
            <p className="mt-3">
              Content on this site describes MailFuze Standard and MailFuze for Rent Manager. Features,
              mail types, and automation may depend on the plan you purchase and the systems you connect.
              A demo is the right place to confirm fit.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink">Marks</h2>
            <p className="mt-3">
              USPS, Certified Mail, Priority Mail, and Priority Mail Express are trademarks of the United
              States Postal Service. Rent Manager is a trademark of its respective owner. MailFuze and
              Efformance are marks of Efformance.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink">Contact</h2>
            <p className="mt-3">
              {company.email} · {company.phone}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
