"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { whatsappUrl } from "@/constants/site";
import { CLIENT_NAMES } from "@/constants/clients";

const SERVICES = [
  "Business Consultation",
  "Digital Marketing",
  "Performance Marketing",
  "AI Automation",
  "ERP Services",
  "Website / Web App",
  "Other",
];

const WHY_BRIK = [
  "We document everything — you own the strategy",
  "No one-size-fits-all retainers",
  "Monthly ROI reports, not vanity metrics",
  "Full-stack: strategy → execution → automation",
];

type FormState = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: { currentTarget: HTMLFormElement; preventDefault(): void }) {
    e.preventDefault();
    setState("loading");
    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("server error");
      setState("success");
    } catch {
      setErrorMsg("Something went wrong. Please try WhatsApp instead.");
      setState("error");
    }
  }

  return (
    <SectionWrapper id="contact" className="bg-background">
      <div className="container-custom">
        <SectionLabel>Book a call</SectionLabel>
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Tell us about your business. We will tell you what is holding it back.
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {state === "success" ? (
            <div className="card flex min-h-[420px] flex-col items-center justify-center p-8 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-3xl text-accent">
                ✓
              </span>
              <h3 className="mt-4 text-xl font-bold text-text">We got your details!</h3>
              <p className="mt-2 text-text-muted">
                Our team will reach out within 24 hours to schedule your free discovery call.
              </p>
            </div>
          ) : (
            <form className="card space-y-4 p-8" onSubmit={handleSubmit}>
              <Field label="Your Name" name="name" required />
              <Field label="Email Address" name="email" type="email" required />
              <Field label="Phone Number" name="phone" type="tel" required />
              <Field label="Business / Company Name" name="business" required />

              <label className="block">
                <span className="text-sm font-medium text-text">
                  Service you&apos;re interested in
                </span>
                <select
                  name="service"
                  required
                  defaultValue=""
                  className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-primary"
                >
                  <option value="" disabled>
                    Select a service…
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-text">
                  Tell us more{" "}
                  <span className="font-normal text-text-muted">(optional)</span>
                </span>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Any specific challenges or goals?"
                  className="mt-1.5 w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </label>

              {state === "error" && (
                <p className="text-sm text-red-500">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={state === "loading"}
                className="magnetic-btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#071018] shadow-[var(--shadow-glow)] transition-all duration-300 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {state === "loading" ? "Sending…" : "Book My Free Discovery Call"}
              </button>

              <p className="text-center text-xs text-text-muted">
                30-minute call. No agency pitch. Just an honest look at your business.
              </p>
            </form>
          )}

          <div>
            <div className="card p-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-text-muted">
                Why BRIK?
              </p>
              <ul className="mt-4 space-y-3">
                {WHY_BRIK.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                    <span className="mt-0.5 text-accent">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 text-sm text-text-muted">
              We have done this for 50+ businesses. We will not waste your time.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {CLIENT_NAMES.slice(0, 8).map((name) => (
                <span key={name} className="text-xs text-text-muted/70">
                  {name}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <MagneticButton
                href={whatsappUrl(
                  "Hi BRIK, I want a free consultation about my business."
                )}
                external
                variant="secondary"
              >
                Message on WhatsApp
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
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
    <label className="block">
      <span className="text-sm font-medium text-text">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </label>
  );
}
