import Link from "next/link";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { MailFuzeMark, RentManagerLogo } from "@/components/Logo";
import { MailPreview } from "@/components/MailPreview";
import { Testimonials } from "@/components/Testimonials";
import { industries, mailTypes } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="grain relative overflow-hidden bg-ink text-paper">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(232,146,51,0.22),transparent_40%),radial-gradient(circle_at_10%_80%,rgba(232,146,51,0.14),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
          <div className="md:col-span-7">
            <p className="eyebrow text-gold rise">
              Modern mailing solutions
            </p>
            <h1 className="font-display mt-4 text-balance text-5xl leading-[1.05] tracking-tight md:text-7xl rise rise-delay-1">
              Automate the busywork.
              <span className="block text-gold">Send USPS mail from your chair.</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg text-paper/70 rise rise-delay-2">
              No user limit. No mailing limit. No equipment. MailFuze prints, stuffs, stamps, and enters the
              stream—Certified, First-Class, Priority, and Express—while your team stays at their desks.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 rise rise-delay-3">
              <Button href="/demo/" variant="inverse">
                Schedule a demo
              </Button>
              <Button href="/plans/" variant="ghost" className="border-white/20 text-paper hover:bg-white/10 hover:border-white/40">
                Compare plans
              </Button>
            </div>
          </div>
          <div className="md:col-span-5 rise rise-delay-4">
            <MailPreview />
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-3 md:px-8 md:py-20">
          <Why
            title="Scalable mailing"
            items={["No user limit", "No mailings limit", "No limits."]}
          />
          <Why
            title="Any mail type"
            items={["USPS Certified Mail®", "First-Class Mail", "Priority Mail® & Express"]}
          />
          <Why
            title="Time and money back"
            items={["Eliminate post office trips", "No equipment to buy or lease", "Staff time, returned"]}
          />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="eyebrow text-wax">Plans</p>
          <h2 className="font-display mt-3 max-w-2xl text-4xl tracking-tight md:text-5xl">
            Built for any business. Tuned for Rent Manager.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <PlanCard
              kicker="Standard"
              href="/plans/"
              points={["Any business", "Any time", "Anywhere"]}
              body="Upload a PDF, import a list, pick a USPS service, and send. Unlimited users. Court-friendly proof. Cost estimates before you commit."
            />
            <PlanCard
              kicker="for Rent Manager"
              href="/rent-manager/"
              featured
              points={[
                "Eliminates bookkeeping on mailings",
                "Automates chargebacks so you get reimbursed",
              ]}
              body="Intelligent mailing for Rent Manager users. Pull tenants from the database, generate letters from templates, and bill the property, owner, or tenant automatically."
            />
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper-2/40">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-wax">Send</p>
              <h2 className="font-display mt-3 text-3xl tracking-tight md:text-4xl">
                Notices, statements, any PDF.
              </h2>
            </div>
            <Link href="/mail-types/" className="text-sm font-medium text-teal underline-offset-4 hover:underline">
              Explore mail types →
            </Link>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Tenant notices",
              "Adverse action letters",
              "Tenant statements",
              "HOA documents",
              "Newsletters",
              "Any PDF",
            ].map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-ink/10 bg-paper px-5 py-4 text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {mailTypes.map((m) => (
              <Link
                key={m.slug}
                href={`/mail-types/${m.slug}/`}
                className="rounded-2xl border border-ink/10 bg-paper p-4 hover:border-ink/30"
              >
                <p className="eyebrow text-wax">{m.eyebrow}</p>
                <p className="mt-2 font-medium leading-snug">{m.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="eyebrow text-wax">Industries</p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl tracking-tight md:text-4xl">
            Ideal for anyone who still has to put paper in the mail.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}/`}
                className="group rounded-3xl border border-ink/10 p-6 hover:bg-paper-2/70"
              >
                <h3 className="font-display text-2xl tracking-tight">{ind.name}</h3>
                <p className="mt-2 text-sm text-ink-soft">{ind.summary}</p>
                <p className="mt-4 text-sm font-medium text-teal group-hover:underline">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CtaBand />
    </>
  );
}

function Why({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="font-display text-2xl tracking-tight">{title}</h2>
      <ul className="mt-4 space-y-2 text-ink-soft">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-wax" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PlanCard({
  kicker,
  body,
  points,
  href,
  featured,
}: {
  kicker: string;
  body: string;
  points: string[];
  href: string;
  featured?: boolean;
}) {
  return (
    <article
      className={`flex flex-col rounded-3xl border p-8 ${
        featured ? "border-ink bg-ink text-paper" : "border-ink/10 bg-paper"
      }`}
    >
      <p className={`eyebrow ${featured ? "text-gold" : "text-wax"}`}>
        {kicker}
      </p>
      <div className="mt-4">
        {featured ? (
          <RentManagerLogo className="h-8 w-auto" />
        ) : (
          <MailFuzeMark className="h-8 w-auto" />
        )}
      </div>
      <p className={`mt-4 text-pretty ${featured ? "text-paper/70" : "text-ink-soft"}`}>{body}</p>
      <ul className="mt-6 space-y-2">
        {points.map((p) => (
          <li key={p} className="text-sm">
            {p}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button href={href} variant={featured ? "inverse" : "ghost"}>
          More info
        </Button>
      </div>
    </article>
  );
}
