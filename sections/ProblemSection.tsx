"use client";

import {
  AlertCircle,
  BarChart2,
  Clock,
  TrendingDown,
  Users,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const PAIN_POINTS = [
  {
    icon: Users,
    text: "You have a social media manager, an ads freelancer, a web developer, and a designer and nobody talks to each other.",
  },
  {
    icon: BarChart2,
    text: "You run ads but cannot tell whether they actually brought in revenue or just clicks.",
  },
  {
    icon: TrendingDown,
    text: "Your competitor started after you and already shows up on Google, Instagram, and billboards.",
  },
  {
    icon: AlertCircle,
    text: "You post consistently. Nothing converts. You are not sure what is wrong.",
  },
  {
    icon: Clock,
    text: "You spend hours every day on tasks your business should handle automatically.",
  },
];

export function ProblemSection() {
  return (
    <SectionWrapper id="problem" className="bg-background-soft">
      <div className="container-custom">
        <SectionLabel>Does this sound familiar?</SectionLabel>
        <RevealOnScroll stagger className="mt-8 grid gap-4 md:grid-cols-2 lg:gap-5">
          {PAIN_POINTS.map((item, i) => {
            const Icon = item.icon;
            const alt = i % 2 === 0;
            return (
              <article
                key={i}
                className={`
                  group card flex gap-4 p-6 transition-all duration-300
                  hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]
                  ${alt ? "bg-primary/10" : "bg-background-soft"}
                `}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <p className="text-base font-medium leading-snug text-text">
                  {item.text}
                </p>
              </article>
            );
          })}
        </RevealOnScroll>

        <RevealOnScroll className="mt-16 max-w-3xl">
          <p className="text-2xl font-bold leading-tight text-text sm:text-3xl lg:text-4xl">
            These are not marketing problems. They are{" "}
            <span className="text-primary">systems problems</span>. And systems
            are exactly what we build.
          </p>
        </RevealOnScroll>

        <div className="mt-10">
          <MagneticButton href="/contact" variant="primary">
            Sound familiar? Let us look at your business together.
          </MagneticButton>
        </div>
      </div>
    </SectionWrapper>
  );
}
