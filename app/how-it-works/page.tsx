import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Choose recipients, choose the piece, choose the USPS service, and send. MailFuze handles print, stuff, stamp, and proof.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Four steps. Then the post office comes to you."
        lede="Don’t waste time printing, stuffing, stamping, or standing in line. With a couple of clicks, MailFuze automates the costly, time-consuming process of sending physical mail."
      >
        <Button href="/demo/" variant="wax">
          See it on a demo
        </Button>
      </PageHero>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <ol className="grid gap-6 md:grid-cols-2">
            {steps.map((step) => (
              <li key={step.n} className="rounded-3xl border border-ink/10 p-8">
                <p className="font-medium text-sm text-wax">{step.n}</p>
                <h2 className="font-display mt-3 text-3xl tracking-tight">{step.title}</h2>
                <p className="mt-4 text-pretty text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper-2/40">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <h2 className="font-display text-3xl tracking-tight">What you never do again</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { t: "Print", d: "No trays, no jams, no toner inventory." },
              { t: "Stuff", d: "No folding parties. Return envelopes optional." },
              { t: "Stamp & stand", d: "No meter, no lobby, no Friday-afternoon panic." },
            ].map((item) => (
              <div key={item.t} className="rounded-3xl bg-paper p-6 border border-ink/10">
                <h3 className="font-display text-2xl">{item.t}</h3>
                <p className="mt-2 text-ink-soft">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
