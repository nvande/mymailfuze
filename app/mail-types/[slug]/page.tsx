import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { mailTypes } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams() {
  return mailTypes.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const mail = mailTypes.find((m) => m.slug === slug);
  if (!mail) return {};
  return { title: mail.name, description: mail.summary };
}

export default async function MailTypePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const mail = mailTypes.find((m) => m.slug === slug);
  if (!mail) notFound();

  return (
    <>
      <PageHero eyebrow={mail.eyebrow} title={mail.name} lede={mail.summary}>
        <Button href="/demo/" variant="wax">
          Send this on a demo
        </Button>
      </PageHero>
      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
          <div className="md:col-span-7">
            <p className="text-lg text-pretty text-ink-soft">{mail.description}</p>
          </div>
          <ul className="md:col-span-5 space-y-3">
            {mail.points.map((p) => (
              <li key={p} className="rounded-2xl border border-ink/10 bg-paper-2/50 px-5 py-4">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
