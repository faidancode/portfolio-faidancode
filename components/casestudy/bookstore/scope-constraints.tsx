"use client";

import Section from "@/components/section";
import { Title } from "@/components/title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScopeConstraintsData } from "@/lib/types/scope-constraints";

interface ProjectScopeConstraintsProps {
  data: ScopeConstraintsData;
}

export default function ProjectScopeConstraints({
  data,
}: ProjectScopeConstraintsProps) {
  return (
    <Section id="scope-constraints">
      {/* Header */}
      <Title text1={data.title1} text2={data.title2} subtitle={data.subtitle} />

      {/* Accordion */}
      <Accordion
        type="single"
        collapsible
        className="w-full bg-white dark:bg-white/5 rounded-lg px-2"
        defaultValue="item-0"
      >
        {data.data.map((item, index) => (
          <AccordionItem key={item.title} value={`item-${index}`}>
            <AccordionTrigger className="text-left p-2 mb-1 font-semibold">
              {item.title}
            </AccordionTrigger>

            <AccordionContent className="flex flex-col gap-3 p-2 mb-2 rounded text-sm text-foreground/80  dark:bg-white/5 leading-relaxed">
              <p>{item.description}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
