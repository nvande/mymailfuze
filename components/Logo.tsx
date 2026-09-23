import Link from "next/link";
import { withBase } from "@/lib/paths";

const mailfuze = {
  src: withBase("/images/logos/Efformance_MailFuze_Logo_RGB-smaller.png"),
  width: 486,
  height: 150,
};

const rentManager = {
  src: withBase("/images/logos/RentManager_WhiteLogo.png"),
  width: 536,
  height: 120,
};

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="MailFuze home">
      <img
        {...mailfuze}
        alt="MailFuze"
        className={`h-8 w-auto md:h-9 ${inverted ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}

export function MailFuzeMark({ className = "h-8 w-auto" }: { className?: string }) {
  return <img {...mailfuze} alt="MailFuze" className={className} />;
}

export function RentManagerLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return <img {...rentManager} alt="Rent Manager" className={className} />;
}
