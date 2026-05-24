"use client";

import { useRef, useState } from "react";
import { useGsapContext } from "@/hooks/useGsapContext";

const LETTERS = ["B", "R", "I", "K"];

export function LoadingScreen() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const bricksRef = useRef<(HTMLDivElement | null)[]>([]);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [done, setDone] = useState(false);

  useGsapContext(({ gsap }) => {
    const overlay = overlayRef.current;
    const bricks = bricksRef.current.filter(Boolean) as HTMLDivElement[];
    const letters = lettersRef.current.filter(Boolean) as HTMLSpanElement[];
    if (!overlay || bricks.length === 0) return;

    const tl = gsap.timeline({ onComplete: () => setDone(true) });

    // Bricks drop in together from slightly above
    tl.fromTo(
      bricks,
      { y: -32, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
    )
      // Letters rise up one by one from the bottom of each brick
      .fromTo(
        letters,
        { y: "115%" },
        { y: "0%", duration: 0.48, stagger: 0.13, ease: "power3.out" },
        "-=0.05"
      )
      // Exit: slide the whole overlay up
      .to(overlay, {
        yPercent: -100,
        duration: 0.88,
        ease: "power4.inOut",
        delay: 0.55,
      });
  }, []);

  if (done) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#071018]"
      aria-hidden
    >
      <div className="flex items-center gap-[clamp(6px,1.5vw,14px)]">
        {LETTERS.map((letter, i) => (
          <div
            key={letter}
            ref={(el) => {
              bricksRef.current[i] = el;
            }}
            className="relative flex items-center justify-center overflow-hidden"
            style={{
              width: "clamp(56px, 15vw, 100px)",
              height: "clamp(68px, 18vw, 120px)",
              borderRadius: "clamp(8px, 1.5vw, 14px)",
              background:
                "linear-gradient(160deg, #131f2d 0%, #0c1820 100%)",
              border: "1.5px solid rgba(61,169,216,0.45)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -2px 0 rgba(0,0,0,0.3), 0 8px 28px rgba(0,0,0,0.55)",
            }}
          >
            {/* bottom-edge depth line */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(61,169,216,0.35), transparent)",
              }}
            />

            <span
              ref={(el) => {
                lettersRef.current[i] = el;
              }}
              className="select-none font-bold leading-none text-accent"
              style={{ fontSize: "clamp(28px, 7.5vw, 56px)" }}
            >
              {letter}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
