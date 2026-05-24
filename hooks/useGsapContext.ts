"use client";

import { useGSAP } from "@gsap/react";
import { registerGsap, gsap, ScrollTrigger } from "@/lib/gsap";

export type GsapApi = {
  gsap: typeof gsap;
  ScrollTrigger: typeof ScrollTrigger;
};

export function useGsapContext(
  callback: (api: GsapApi) => void | (() => void),
  deps?: unknown[]
) {
  registerGsap();

  return useGSAP(() => callback({ gsap, ScrollTrigger }), deps ?? []);
}
