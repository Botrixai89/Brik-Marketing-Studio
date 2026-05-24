"use client";

import { useCounter } from "@/hooks/useCounter";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  label: string;
  displayOverride?: string;
  className?: string;
};

export function AnimatedCounter({
  value,
  suffix = "",
  label,
  displayOverride,
  className = "",
}: AnimatedCounterProps) {
  const { ref, display } = useCounter(value, suffix);

  return (
    <div className={`text-center ${className}`}>
      <span
        ref={ref}
        className="block text-3xl font-bold tracking-tight text-text sm:text-4xl dark:text-white"
      >
        {displayOverride ?? display}
      </span>
      <span className="mt-1 block text-sm text-text-muted">{label}</span>
    </div>
  );
}
