"use client";

import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useGsapContext } from "@/hooks/useGsapContext";

export function PositioningSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const compareRef = useRef<HTMLDivElement>(null);

  useGsapContext(({ gsap, ScrollTrigger }) => {
    const section = sectionRef.current;
    const compare = compareRef.current;
    if (!section || !compare) return;

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=70%",
      pin: compare,
      pinSpacing: true,
    });

    gsap.from(compare.children, {
      x: (i: number) => (i === 0 ? -40 : 40),
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: { trigger: compare, start: "top 70%" },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="positioning"
      className="relative section-padding bg-background"
    >
      <div className="container-custom">
        <SectionLabel>What BRIK is</SectionLabel>
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
          We are not an agency. We are your business&apos;s growth architecture
          team.
        </h2>

        <div
          ref={compareRef}
          className="mt-12 grid gap-0 overflow-hidden rounded-2xl border border-border lg:grid-cols-2"
        >
          <div className="bg-background-soft p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
              What most agencies do
            </p>
            <ul className="mt-4 space-y-3 text-text-muted">
              <li>Post content</li>
              <li>Run ads</li>
              <li>Send reports</li>
              <li>Repeat</li>
            </ul>
          </div>
          <div className="relative border-t-4 border-accent bg-primary p-8 text-white lg:border-t-0 lg:border-l-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
              What BRIK does
            </p>
            <ul className="mt-4 space-y-3 font-medium">
              <li>Consult first</li>
              <li>Build a 6–12 month marketing strategy</li>
              <li>Execute on time</li>
              <li>Track revenue, not vanity metrics</li>
              <li>Automate everything that doesn&apos;t need a human</li>
            </ul>
          </div>
        </div>

        <p className="mt-12 max-w-3xl text-lg text-text-muted">
          Every business that works with BRIK gets a{" "}
          <strong className="text-primary">documented strategy</strong> before we
          touch a single campaign. That is the difference.
        </p>
        <p className="mt-4 text-xl font-semibold text-text">
          One agency. Five pillars. Every growth lever your business needs.
        </p>

        <div className="mt-8">
          <MagneticButton href="/#process" variant="secondary">
            See how we actually work
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
