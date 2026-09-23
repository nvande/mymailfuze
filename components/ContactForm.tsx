"use client";

import { useState } from "react";

export function ContactForm({
  intent = "general",
  submitLabel = "Send message",
}: {
  intent?: "general" | "integration" | "demo";
  submitLabel?: string;
}) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-3xl border border-teal/25 bg-teal/5 p-8">
        <p className="eyebrow text-teal">Received</p>
        <h3 className="font-display mt-2 text-2xl">We’ll be in touch.</h3>
        <p className="mt-3 text-ink-soft">
          Thanks for reaching out. A MailFuze specialist will follow up at the email or phone you provided.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <input type="hidden" name="intent" value={intent} />
      <Field label="Name" name="name" required />
      <Field label="Company name" name="company" />
      <Field label="Email" name="email" type="email" required />
      <Field label="Phone number" name="phone" type="tel" />
      {intent === "demo" && (
        <label className="grid gap-1.5 text-sm">
          <span className="text-ink-soft">I’m interested in</span>
          <select
            name="plan"
            className="rounded-2xl border border-ink/15 bg-paper px-4 py-3 outline-none focus:border-ink/40"
            defaultValue="rent-manager"
          >
            <option value="standard">MailFuze Standard</option>
            <option value="rent-manager">MailFuze for Rent Manager</option>
            <option value="integration">A software integration</option>
            <option value="unsure">Not sure yet</option>
          </select>
        </label>
      )}
      <label className="grid gap-1.5 text-sm">
        <span className="text-ink-soft">Message</span>
        <textarea
          name="message"
          rows={5}
          required
          className="resize-y rounded-2xl border border-ink/15 bg-paper px-4 py-3 outline-none focus:border-ink/40"
        />
      </label>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-wax px-6 py-3 text-sm font-medium text-paper hover:bg-wax-deep"
      >
        {submitLabel}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="text-ink-soft">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-2xl border border-ink/15 bg-paper px-4 py-3 outline-none focus:border-ink/40"
      />
    </label>
  );
}
