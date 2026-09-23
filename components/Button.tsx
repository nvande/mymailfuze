import Link from "next/link";

type Variant = "primary" | "ghost" | "inverse" | "wax";

const styles: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:bg-ink/90 border border-ink",
  ghost:
    "bg-transparent text-ink border border-ink/20 hover:border-ink/50 hover:bg-ink/5",
  inverse:
    "bg-paper text-ink hover:bg-paper-2 border border-paper",
  wax: "bg-wax text-paper hover:bg-wax-deep border border-wax",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[0.95rem] font-medium tracking-tight transition ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
