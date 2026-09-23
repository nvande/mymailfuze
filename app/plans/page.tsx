import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { FeatureTable } from "@/components/FeatureTable";
import { MailFuzeMark, RentManagerLogo } from "@/components/Logo";
import { PageHero } from "@/components/PageHero";
import { Testimonials } from "@/components/Testimonials";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Plans",
  description:
    "Compare MailFuze Standard and MailFuze for Rent Manager. Unlimited users, every USPS mail type, and optional automated chargebacks.",
};

export default function PlansPage() {
  return (
    <>
      <PageHero
        eyebrow="Plans"
        title="Save money and time by sending mail from your office chair."
        lede="Now that is smart. Two plans, one workflow—Standard for any business, Rent Manager for teams who want the post office wired into the database."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/demo/" variant="wax">
            Schedule a demo
          </Button>
          <Button href="#compare" variant="ghost">
            Feature comparison
          </Button>
        </div>
      </PageHero>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <p className="eyebrow text-wax">Ideal for</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}/`}
                className="rounded-full border border-ink/15 px-4 py-2 text-sm hover:border-ink/40"
              >
                {ind.name}
              </Link>
            ))}
            <span className="rounded-full bg-ink px-4 py-2 text-sm text-paper">Any business sending mail</span>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-2 md:px-8">
          <article className="rounded-3xl border border-ink/10 p-8">
            <p className="eyebrow text-wax">Standard</p>
            <div className="mt-4">
              <MailFuzeMark className="h-8 w-auto" />
            </div>
            <p className="mt-4 text-ink-soft">
              For teams that already have a list and a PDF. Import recipients, preview, estimate, and send
              First-Class, COM, Certified, Priority, or Express. Unlimited users. Full batch history.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>Manual entry or CSV / Excel import</li>
              <li>Upload a static PDF</li>
              <li>Court-friendly proof and tracking documents</li>
              <li>Electronic Return Receipt</li>
            </ul>
            <div className="mt-8">
              <Button href="/demo/" variant="ghost">
                Talk to us
              </Button>
            </div>
          </article>
          <article className="rounded-3xl bg-ink p-8 text-paper">
            <p className="eyebrow text-gold">MailFuze for</p>
            <div className="mt-4">
              <RentManagerLogo className="h-8 w-auto" />
            </div>
            <p className="mt-4 text-paper/70">
              Sending mail is time-consuming, costly, and necessary for remaining compliant in today’s
              tenant-communication environment. MailFuze connects directly to your Rent Manager database so
              you can send any mail type from your office chair—and automate bookkeeping and chargebacks.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-paper/85">
              <li>Integrates directly with your Rent Manager database</li>
              <li>Automated chargebacks to recoup mailing costs</li>
              <li>Court-friendly documentation to prove mailings were sent</li>
              <li>Letters and proof saved to history / notes</li>
            </ul>
            <div className="mt-8">
              <Button href="/rent-manager/" variant="inverse">
                Explore the integration
              </Button>
            </div>
          </article>
        </div>
      </section>

      <section id="compare" className="border-t border-ink/10 bg-paper-2/30">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">Features comparison</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            Everything you can send is available on both plans. Rent Manager adds live recipients, templates,
            filters, and the accounting you used to do by hand.
          </p>
          <div className="mt-10">
            <FeatureTable />
          </div>
        </div>
      </section>

      <Testimonials />
      <CtaBand />
    </>
  );
}
