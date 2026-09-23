export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-ink/10">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        {eyebrow && (
          <p className="eyebrow text-wax rise">{eyebrow}</p>
        )}
        <h1 className="font-display mt-4 max-w-4xl text-balance text-4xl leading-[1.1] tracking-tight md:text-6xl rise rise-delay-1">
          {title}
        </h1>
        {lede && (
          <p className="mt-6 max-w-2xl text-pretty text-lg text-ink-soft rise rise-delay-2">{lede}</p>
        )}
        {children && <div className="mt-8 rise rise-delay-3">{children}</div>}
      </div>
    </section>
  );
}
