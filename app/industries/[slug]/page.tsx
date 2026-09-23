import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { industries } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};
  return { title: industry.name, description: industry.summary };
}

export default async function IndustryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  return (
    <>
      <PageHero eyebrow="Industry" title={industry.name} lede={industry.summary}>
        <Button href="/demo/" variant="wax">
          Schedule a demo
        </Button>
      </PageHero>
      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
          <p className="md:col-span-7 text-lg text-pretty text-ink-soft">{industry.description}</p>
          <ul className="md:col-span-5 space-y-3">
            {industry.useCases.map((u) => (
              <li key={u} className="rounded-2xl border border-ink/10 bg-paper-2/50 px-5 py-4">
                {u}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
