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
      className={`scroll-mt-12 flex flex-col gap-4 rounded-3xl p-6 py-8 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
