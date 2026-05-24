"use client";

import { useEffect, useRef, useState } from "react";
import { registerGsap, gsap } from "@/lib/gsap";
import { ScrollTrigger } from "@/lib/gsap";

export function useCounter(end: number, suffix = "", duration = 2) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el || started.current) return;

    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: end,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => {
          started.current = true;
        },
      },
      onUpdate: () => setValue(Math.round(obj.val)),
    });

    return () => {
      tween.kill();
    };
  }, [end, duration]);

  return { ref, display: `${value}${suffix}` };
}
