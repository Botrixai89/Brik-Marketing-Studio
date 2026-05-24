type SectionLabelProps = {
  children: string;
  light?: boolean;
};

export function SectionLabel({ children, light }: SectionLabelProps) {
  return (
    <p
      className={`
        mb-4 text-xs font-semibold uppercase tracking-[0.28em]
        ${light ? "text-primary/90" : "text-primary"}
      `}
    >
      {children}
    </p>
  );
}
