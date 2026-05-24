"use client";

import { BrickWallPattern } from "@/components/brick-wall/BrickWallPattern";

/** Full-viewport brick outline pattern behind all page content */
export function SiteBrickBackground() {
  return (
    <BrickWallPattern className="pointer-events-none fixed inset-0 z-0 h-full w-full" />
  );
}
