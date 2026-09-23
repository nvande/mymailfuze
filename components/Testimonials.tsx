import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="eyebrow text-wax">What clients are saying</p>
        <h2 className="font-display mt-3 max-w-xl text-3xl tracking-tight md:text-4xl">
          Time back. Proof on file. Costs where they belong.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.attribution}
              className="flex flex-col justify-between rounded-3xl border border-ink/10 bg-paper-2/50 p-7 md:p-9"
            >
              <blockquote className="font-display text-xl leading-snug tracking-tight text-ink md:text-[1.35rem]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 border-t border-ink/10 pt-5">
                <p className="font-medium">{t.attribution}</p>
                <p className="text-sm text-ink-soft">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
