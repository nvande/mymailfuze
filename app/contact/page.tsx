import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact MailFuze at 262-216-6300 or info@efformance.com. Ask about a demo or a software integration.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Contact MailFuze."
        lede="Sales, demos, and integration conversations all start here. Call, email, or send the form—whichever is faster for you."
      />

      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
          <div className="md:col-span-5">
            <h2 className="font-display text-2xl">Reach the team</h2>
            <ul className="mt-6 space-y-4">
              <li>
                <p className="eyebrow text-wax">Tel</p>
                <a href={company.phoneHref} className="text-xl hover:underline">
                  {company.phone}
                </a>
              </li>
              <li>
                <p className="eyebrow text-wax">Email</p>
                <a href={company.emailHref} className="text-xl hover:underline">
                  {company.email}
                </a>
              </li>
            </ul>

            <div className="mt-12 rounded-3xl border border-ink/10 bg-paper-2/60 p-6">
              <h3 className="font-display text-2xl">Interested in integrating?</h3>
              <p className="mt-3 text-pretty text-ink-soft">
                Integration… it’s where the magic happens. It’s where we can do so many other cool things
                beyond automating and sending your mail. If you’re interested in adding the ability to send
                USPS mail into your software solution, let’s talk.
              </p>
              <a href="/integrations/" className="mt-4 inline-block text-sm font-medium text-teal hover:underline">
                Integration overview →
              </a>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-3xl border border-ink/10 p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
