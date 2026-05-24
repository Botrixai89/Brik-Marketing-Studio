"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-accent text-[#071018] shadow-[var(--shadow-glow)] hover:brightness-105",
  secondary:
    "border border-primary/40 bg-transparent text-text hover:bg-primary/10 dark:text-white dark:hover:bg-white/10",
  ghost: "text-primary hover:bg-primary/10",
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: MagneticButtonProps) {
  const ref = useMagnetic(0.28);
  const classes = `
    magnetic-btn inline-flex items-center justify-center gap-2 rounded-full
    px-6 py-3 text-sm font-semibold transition-all duration-300
    ${variants[variant]} ${className}
  `;

  if (external) {
    return (
      <a ref={ref as React.RefObject<HTMLAnchorElement>} href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link ref={ref as React.RefObject<HTMLAnchorElement>} href={href} className={classes}>
      {children}
    </Link>
  );
}
