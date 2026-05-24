"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { SERVICE_PILLARS } from "@/constants/services";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ServicesSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <SectionWrapper id="services" className="bg-background-soft">
      <div className="container-custom">
        <SectionLabel>Five pillars</SectionLabel>
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Five pillars. One strategy. Every service your business will ever need.
        </h2>

        <RevealOnScroll
          stagger
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {SERVICE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            const isOpen = expanded === pillar.id;
            return (
              <article
                key={pillar.id}
                onMouseEnter={() => setExpanded(pillar.id)}
                onMouseLeave={() => setExpanded(null)}
                className="card group cursor-default p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-[var(--shadow-glow)]"
              >
                <Icon
                  className="h-8 w-8 text-primary transition-transform group-hover:scale-110"
                  strokeWidth={1.5}
                />
                <h3 className="mt-4 text-lg font-bold text-text">{pillar.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-text-muted">
                  {(isOpen ? pillar.fullList : pillar.highlights).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
                  onClick={() => setExpanded(isOpen ? null : pillar.id)}
                >
                  {isOpen ? "Show less" : "Learn more"}
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </article>
            );
          })}
        </RevealOnScroll>

        <p className="mt-10 text-center text-lg font-medium text-text-muted">
          All five pillars. One team. Total alignment. No juggling vendors.
        </p>

        <div className="mt-8 flex justify-center">
          <MagneticButton href="/contact" variant="primary">
            Not sure which pillars you need? We&apos;ll map it in 20 minutes.
          </MagneticButton>
        </div>
      </div>
    </SectionWrapper>
  );
}
