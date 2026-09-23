import { company } from "@/lib/content";
import { Button } from "./Button";

export function ReturningUserBar() {
  return (
    <div className="border-b border-ink/10 bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-end gap-3 px-5 py-2.5 md:px-8">
        <p className="text-sm text-ink-soft md:text-base">Already a MailFuze user?</p>
        <Button href={company.appUrl} variant="primary" className="px-4 py-1.5 text-sm">
          Login
        </Button>
      </div>
    </div>
  );
}
