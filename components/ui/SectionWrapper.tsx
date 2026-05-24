import type { ReactNode } from "react";

type SectionWrapperProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  label?: string;
};

export function SectionWrapper({
  id,
  children,
  className = "",
  dark = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`
        relative overflow-hidden section-padding
        ${dark ? "bg-[#0b384d] text-text-invert" : ""}
        ${className}
      `}
    >
      {children}
    </section>
  );
}
