"use client";

import { useRef } from "react";
import { useGsapContext } from "@/hooks/useGsapContext";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useGsapContext(({ gsap, ScrollTrigger }) => {
    const bar = barRef.current;
    if (!bar) return;

    gsap.fromTo(
      bar,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.15,
        },
      }
    );
  }, []);

  return (
    <div
      ref={barRef}
      aria-hidden
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left scale-x-0 bg-accent"
    />
  );
}
