"use client";

import { ArrowDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GridBackground } from "@/components/ui/GridBackground";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { useGsapContext } from "@/hooks/useGsapContext";

const HERO_STATS = [
  { value: 30, suffix: "+", label: "Businesses Served" },
  { value: 150, suffix: "+", label: "Consultations Done" },
  { value: 30, suffix: "+", label: "Team Members Nationally" },
  { value: 8, suffix: "+", label: "Cities across India" },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);

  useGsapContext(({ gsap }) => {
    const headline = headlineRef.current;
    const floats = floatRef.current?.children;
    if (!headline) return;

    const lines = headline.querySelectorAll("[data-line]");
    gsap.from(lines, {
      y: 64,
      opacity: 0,
      duration: 1,
      stagger: 0.13,
      ease: "power4.out",
      delay: 0.3,
    });

    if (floats?.length) {
      gsap.to(floats, {
        y: "+=20",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.4,
      });
    }
  }, []);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll("[data-hero-fade]");
    if (!els) return;
    import("@/lib/gsap").then(({ registerGsap, gsap }) => {
      registerGsap();
      gsap.from(els, {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        delay: 0.85,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[100dvh] overflow-hidden pt-8 pb-20"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(165deg, #0b384d 0%, #071018 45%, color-mix(in srgb, var(--color-primary) 25%, #071018) 100%)",
        }}
      />
      <GridBackground className="opacity-60" />
      <NoiseOverlay />

      <div
        ref={floatRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-[80px]" />
        <div className="absolute left-[10%] top-[20%] h-40 w-40 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl" />
        <div className="absolute bottom-[25%] right-[15%] h-24 w-24 rotate-12 rounded-2xl border border-accent/30 bg-accent/10" />
      </div>

      <div className="container-custom relative z-10 flex min-h-[calc(100dvh-5rem)] flex-col items-center justify-center text-center">
        <p
          data-hero-fade
          className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-primary/90"
        >
          BRIK Marketing &amp; Automation Studio
        </p>

        <h1
          ref={headlineRef}
          className="text-3xl font-bold leading-[1.45] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl"
        >
          <span data-line className="block">We help businesses grow</span>
          <span data-line className="block">
            through{" "}
            <span
              style={{
                display: "inline",
                background: "rgba(226,254,4,0.08)",
                color: "#e2fe04",
                border: "1.5px solid #e2fe04",
                padding: "0.06em 0.26em",
                borderRadius: "0.18em",
                fontWeight: 700,
                boxShadow: "0 0 18px rgba(226,254,4,0.12)",
              }}
            >
              marketing
            </span>
            ,
          </span>
          <span data-line className="block">
            systems &amp;{" "}
            <span
              style={{
                display: "inline",
                background: "rgba(61,169,216,0.08)",
                color: "#3da9d8",
                border: "1.5px solid #3da9d8",
                padding: "0em 0.1em",
                borderRadius: "0.18em",
                fontWeight: 700,
                boxShadow: "0 0 18px rgba(61,169,216,0.12)",
              }}
            >
              automation
            </span>
            .
          </span>
        </h1>

        <p
          data-hero-fade
          className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl"
        >
          From business consultation to AI automation — BRIK builds the
          complete infrastructure your business needs to attract, convert, and
          retain customers at scale.
        </p>

        <p data-hero-fade className="mt-4 text-sm text-white/50">
          Serving 50+ businesses across India. Office in Raipur · Mumbai
          (August 2025).
        </p>

        <div
          data-hero-fade
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="/#contact" variant="primary">
            Book Your Free Discovery Call
            <ChevronRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton
            href="/#work"
            variant="secondary"
            className="border-white/30 text-white hover:bg-white/10"
          >
            See Our Work
          </MagneticButton>
        </div>

        <p data-hero-fade className="mt-6 text-sm text-white/45">
          30-minute call. No pitch. Just an honest look at your business.
        </p>

        <div
          data-hero-fade
          className="mt-16 grid grid-cols-2 gap-x-10 gap-y-6 border-t border-white/10 pt-10 sm:grid-cols-4"
        >
          {HERO_STATS.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

        <Link
          href="/#problem"
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-white/70"
          aria-label="Scroll to next section"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
