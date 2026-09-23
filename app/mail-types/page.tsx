import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { mailTypes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mail types",
  description:
    "Send USPS Certified Mail, First-Class, Priority, Priority Express, and First-Class with Confirmation of Mailing from MailFuze.",
};

export default function MailTypesPage() {
  return (
    <>
      <PageHero
        eyebrow="Mail types"
        title="Send any mail type. In seconds."
        lede="Certified when you need the trail. First-Class when you need volume. Priority and Express when the calendar is unkind. COM when proof matters more than the premium."
      />
      <section>
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-16 md:grid-cols-2 md:px-8">
          {mailTypes.map((m) => (
            <Link
              key={m.slug}
              href={`/mail-types/${m.slug}/`}
              className="group rounded-3xl border border-ink/10 p-8 hover:bg-paper-2/60"
            >
              <p className="eyebrow text-wax">{m.eyebrow}</p>
              <h2 className="font-display mt-3 text-3xl tracking-tight">{m.name}</h2>
              <p className="mt-3 text-ink-soft">{m.summary}</p>
              <p className="mt-6 text-sm font-medium text-teal group-hover:underline">Details →</p>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
