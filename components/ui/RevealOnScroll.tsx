"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { useGsapContext } from "@/hooks/useGsapContext";
import { revealUp } from "@/animations/reveal";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
};

export function RevealOnScroll({
  children,
  className = "",
  stagger = false,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGsapContext(({ gsap, ScrollTrigger }) => {
    const el = ref.current;
    if (!el) return;

    const targets = stagger && el.children.length ? el.children : el;
    const tween = revealUp(gsap, targets, { y: 48 });

    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      animation: tween,
      toggleActions: "play none none none",
      once: true,
    });
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
