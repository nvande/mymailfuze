import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How MailFuze handles the information you share with us.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        lede="MailFuze is a product of Efformance. This page describes how we handle information you share through this site and our services."
      />
      <section>
        <div className="mx-auto max-w-3xl space-y-8 px-5 py-16 text-ink-soft md:px-8">
          <div>
            <h2 className="font-display text-2xl text-ink">What we collect</h2>
            <p className="mt-3">
              When you request a demo or contact us, we collect the name, company, email, phone, and message
              you provide so we can respond. If you become a customer, we process the recipient and document
              data required to print and enter mail with the USPS, plus account history needed for tracking,
              proof, and—when you use Rent Manager—chargebacks and notes.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink">How we use it</h2>
            <p className="mt-3">
              We use contact details to schedule demos, answer questions, and support your account. We use
              mailing data to produce and enter the mail you authorize, generate estimates and proof
              documents, and keep the batch history you rely on.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink">Who we share with</h2>
            <p className="mt-3">
              Mail must be produced and handed to the United States Postal Service to be delivered. We do not
              sell your contact list. Service providers who help us host, print, or enter mail see only what
              they need to do that work.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink">Questions</h2>
            <p className="mt-3">
              Email{" "}
              <a href={company.emailHref} className="text-ink underline">
                {company.email}
              </a>{" "}
              or call{" "}
              <a href={company.phoneHref} className="text-ink underline">
                {company.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
