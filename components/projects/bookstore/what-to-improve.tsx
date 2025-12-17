"use client";

import { Title } from "@/components/title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WhatToImproveData } from "@/lib/types/what-to-improve";

interface WhatToImproveProps {
  data: WhatToImproveData;
}

export default function ProjectWhatToImprove({ data }: WhatToImproveProps) {
  return (
    <section className="flex flex-col gap-4 w-full px-6" id="improvements">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <Title text1={data.title1} text2={data.title2} />
        <p className="text-sm text-muted-foreground">{data.subtitle}</p>
      </div>

      {/* Accordion */}
      <Accordion
        type="single"
        collapsible
        className="w-full bg-white dark:bg-white/5 rounded-lg px-4"
      >
        {data.data.map((item, index) => (
          <AccordionItem key={item.item} value={`improvement-${index}`}>
            <AccordionTrigger className="text-left font-semibold">
              {item.item}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 p-2 mb-2 rounded text-sm text-foreground/80  dark:bg-white/5 leading-relaxed">
              {item.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
