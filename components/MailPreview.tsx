export function MailPreview() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="absolute -left-6 -top-6 hidden h-24 w-20 rotate-[-8deg] rounded-sm bg-wax/90 p-2 text-center text-paper shadow-xl md:block">
        <p className="font-mono text-[8px] uppercase tracking-widest">USPS</p>
        <p className="font-display mt-2 text-2xl leading-none">CM</p>
        <p className="mt-2 font-mono text-[8px] uppercase tracking-wider">Certified</p>
      </div>
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#161b22] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">MailFuze · New batch</p>
        </div>
        <div className="grid gap-4 p-5 text-paper">
          <div className="grid grid-cols-3 gap-2">
            {["Certified", "First-Class", "Priority"].map((s, i) => (
              <div
                key={s}
                className={`rounded-2xl px-3 py-3 text-xs ${
                  i === 0 ? "bg-wax text-paper" : "bg-white/5 text-white/70"
                }`}
              >
                {s}
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-white/5 p-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">Recipients</p>
            <p className="mt-1 font-display text-2xl">248 tenants</p>
            <p className="text-xs text-white/50">Filtered · Past due · Property group A</p>
          </div>
          <div className="flex items-end justify-between rounded-2xl bg-white/5 p-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">Estimate</p>
              <p className="font-display text-2xl">$1,412.40</p>
            </div>
            <div className="rounded-full bg-gold px-4 py-2 text-xs font-medium text-ink">Send batch</div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px] text-white/55">
            <div className="rounded-xl border border-white/10 px-3 py-2">Proof of mailing · on</div>
            <div className="rounded-xl border border-white/10 px-3 py-2">Chargeback · property</div>
          </div>
        </div>
      </div>
    </div>
  );
}
