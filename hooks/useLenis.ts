"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { registerGsap } from "@/lib/gsap";
import { ScrollTrigger } from "@/lib/gsap";

export function useLenis() {
  useEffect(() => {
    registerGsap();

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}
