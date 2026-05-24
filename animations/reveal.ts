"use client";

import type { gsap } from "gsap";

type RevealOptions = {
  y?: number;
  opacity?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
};

export function revealUp(
  gsapInstance: typeof gsap,
  targets: gsap.TweenTarget,
  options: RevealOptions = {}
) {
  const { y = 48, opacity = 0, duration = 0.9, stagger = 0.08, delay = 0 } =
    options;

  return gsapInstance.fromTo(
    targets,
    { y, opacity, filter: "blur(8px)" },
    {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration,
      stagger,
      delay,
      ease: "power3.out",
    }
  );
}

export function splitTextReveal(
  gsapInstance: typeof gsap,
  lines: HTMLElement[],
  options: RevealOptions = {}
) {
  const { y = 40, duration = 0.85, stagger = 0.06 } = options;

  return gsapInstance.fromTo(
    lines,
    { y, opacity: 0 },
    { y: 0, opacity: 1, duration, stagger, ease: "power3.out" }
  );
}
