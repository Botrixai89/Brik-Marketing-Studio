"use client";

import {
  Bot,
  LayoutDashboard,
  MessageSquare,
  Sparkles,
  Workflow,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { GridBackground } from "@/components/ui/GridBackground";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const BLOCKS = [
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    text: "Instant responses. Lead qualification. Booking confirmation. Follow-up sequences. Running 24/7 without a team member.",
  },
  {
    icon: Bot,
    title: "AI Agents & Chatbots",
    text: "Custom AI agents for your business — trained on your products, your processes, your tone. Website chatbots, voice agents, support bots.",
  },
  {
    icon: Workflow,
    title: "CRM & Workflow Automation",
    text: "n8n · Make · Zapier · Zoho · Odoo — every action your team does manually gets a workflow. Lead comes in → CRM updated → WhatsApp sent → Calendar booked.",
  },
  {
    icon: Sparkles,
    title: "AI Content & Creative",
    text: "AI-generated posts, videos, carousels. Tools integrated into your content pipeline to produce at scale without losing quality.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Automation",
    text: "Real-time business dashboards — sales, leads, campaign performance, inventory. Everything visible in one place.",
  },
];

const AUTO_STATS = [
  { value: 14, suffix: "", label: "hrs/week saved (avg)", display: "14" },
  { value: 0, suffix: "", label: "missed inquiries", display: "0" },
  { value: 24, suffix: "/7", label: "active", display: "24/7" },
];

export function AutomationSection() {
  return (
    <section
      id="automation"
      className="relative overflow-hidden section-padding text-white"
      style={{
        background:
          "linear-gradient(160deg, #1a6a94 0%, #0b384d 50%, #071018 100%)",
      }}
    >
      <GridBackground className="opacity-40" />
      <NoiseOverlay />

      <div className="container-custom relative z-10">
        <SectionLabel light>AI Automation</SectionLabel>
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Your business should run while you sleep. AI automation makes that
          possible.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-white/70">
          Most businesses are doing manually what software can do better.
          Responding to WhatsApp inquiries. Following up on leads. Updating CRM.
          Scheduling posts. Sending invoices. Each one is an automation waiting to
          be built.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-6 sm:max-w-xl">
          {AUTO_STATS.map((s) => (
            <AnimatedCounter
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              displayOverride={s.display}
            />
          ))}
        </div>

        <RevealOnScroll
          stagger
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {BLOCKS.map((block) => {
            const Icon = block.icon;
            return (
              <article
                key={block.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-accent/50 hover:shadow-[0_0_40px_rgba(226,254,4,0.12)]"
              >
                <Icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
                <h3 className="mt-4 text-lg font-bold">{block.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {block.text}
                </p>
              </article>
            );
          })}
        </RevealOnScroll>

        <p className="mt-12 max-w-2xl text-lg font-medium text-white/90">
          We do not just set up tools. We build the entire automation architecture
          for your business.
        </p>

        <div className="mt-8">
          <MagneticButton href="/contact" variant="primary">
            Map what we would automate for your business — free.
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
