import type { Metadata } from "next";
import { Outfit, IBM_Plex_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ReturningUserBar } from "@/components/ReturningUserBar";
import { company } from "@/lib/content";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MailFuze — Modern mailing solutions",
    template: "%s · MailFuze",
  },
  description:
    "Send USPS Certified, First-Class, Priority, and Priority Express mail from your office chair. Unlimited users. No equipment. Optional Rent Manager integration with automatic chargebacks.",
  metadataBase: new URL("https://mymailfuze.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${plex.variable}`}>
      <body className="min-h-dvh font-sans">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <ReturningUserBar />
        <main id="content">{children}</main>
        <Footer />
        <p className="sr-only">
          {company.name}. {company.tagline}
        </p>
      </body>
    </html>
  );
}
