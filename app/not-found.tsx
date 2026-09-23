import type { Metadata } from "next";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <p className="eyebrow text-wax">404</p>
      <h1 className="font-display mt-3 text-5xl tracking-tight">This piece didn’t land.</h1>
      <p className="mt-4 max-w-md text-ink-soft">
        That URL isn’t in the MailFuze tray. Head home, or pick a plan.
      </p>
      <div className="mt-8 flex gap-3">
        <Button href="/" variant="wax">
          Home
        </Button>
        <Button href="/plans/" variant="ghost">
          Plans
        </Button>
      </div>
    </section>
  );
}
