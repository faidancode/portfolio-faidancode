// components/Section.tsx
import React from "react";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const Section = ({ id, children, className = "" }: SectionProps) => {
  return (
    <section
      id={id}
      className={`scroll-mt-12 flex flex-col gap-4 rounded-3xl bg-background/80 p-6 py-8 dark:border-white/10 dark:bg-[#0c1026] ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
