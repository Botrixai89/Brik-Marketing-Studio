"use client";

import { motion } from "framer-motion";
import {
  CLIENT_NAMES,
  FEATURED_CLIENTS,
  INDUSTRIES_SERVED,
  SHOWCASE_STATS,
} from "@/constants/clients";
import { whatsappUrl } from "@/constants/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ClientsSection() {
  const doubled = [...CLIENT_NAMES, ...CLIENT_NAMES];

  return (
    <SectionWrapper id="work" className="bg-background">
      <div className="container-custom">
        <SectionLabel>Our work</SectionLabel>
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Trusted by 50+ Brand Partners Across Industries.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-text-muted">
          From local businesses to growing national brands — we help businesses
          scale through marketing, automation, branding, advertising, and digital
          systems.
        </p>

        <div className="relative mt-12 overflow-hidden border-y border-border py-6">
          <motion.div
            className="flex w-max gap-12"
            animate={{ x: [0, -2400] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {doubled.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="shrink-0 text-sm font-semibold uppercase tracking-wider text-text-muted/60"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 border-y border-border py-10 sm:grid-cols-4">
          {SHOWCASE_STATS.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              displayOverride={"display" in stat ? stat.display : undefined}
            />
          ))}
        </div>

        <RevealOnScroll
          stagger
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURED_CLIENTS.map((client) => (
            <article
              key={client.name}
              className="card group p-6 transition-all hover:-translate-y-1 hover:border-primary/30"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {client.industry}
              </p>
              <h3 className="mt-2 text-lg font-bold text-text">{client.name}</h3>
              <p className="mt-2 text-sm text-text-muted">
                {client.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {client.services.map((s) => (
                  <li
                    key={s}
                    className="rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </RevealOnScroll>

        <div className="mt-10 flex flex-wrap gap-2">
          {INDUSTRIES_SERVED.map((ind) => (
            <span
              key={ind}
              className="rounded-full border border-border px-3 py-1 text-xs text-text-muted"
            >
              {ind}
            </span>
          ))}
        </div>

        <div className="mt-10">
          <MagneticButton href={whatsappUrl()} external variant="secondary">
            Want to see the strategy behind one of these? Ask us.
          </MagneticButton>
        </div>
      </div>
    </SectionWrapper>
  );
}
