import { company } from "@/lib/content";
import { Button } from "./Button";

export function CtaBand({
  title = "Ready to skip the post office?",
  body = "Schedule a time that works for you. We’ll walk through MailFuze Standard or MailFuze for Rent Manager and get you sending from the chair you’re already in.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="grain bg-teal text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-end md:px-8 md:py-20">
        <div className="max-w-xl">
          <p className="eyebrow text-gold">Upgrade your mailing</p>
          <h2 className="font-display mt-3 text-3xl tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-4 text-pretty text-paper/75">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/demo/" variant="inverse">
            Schedule a demo
          </Button>
          <Button href={company.phoneHref} variant="ghost" className="border-white/25 text-paper hover:bg-white/10 hover:border-white/40">
            Call {company.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
