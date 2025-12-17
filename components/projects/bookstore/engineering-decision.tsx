"use client";

import { Title } from "@/components/title";
import { EngineeringDecisionData } from "@/lib/types/engineering-decisions";

interface EngineeringDecisionsProps {
  data: EngineeringDecisionData;
}

export function ProjectEngineeringDecision({
  data,
}: EngineeringDecisionsProps) {
  return (
    <section
      id="engineering-decisions"
      className="flex flex-col gap-4 rounded-3xl bg-background/80 p-6 dark:border-white/10 dark:bg-[#0c1026]"
    >
      <div className="flex flex-col gap-1">
        <Title text1={data.title1} text2={data.title2} />
        <p className="text-sm text-muted-foreground">{data.subtitle}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {data.data.map((entry) => (
          <article
            key={entry.decision}
            className="flex flex-col gap-1 rounded-2xl bg-white p-4 text-sm leading-relaxed text-foreground shadow-sm shadow-black/5 transition hover:-translate-y-0.5  hover:shadow-lg dark:border-white/10 dark:bg-white/5"
          >
            <p className="text-lg font-semibold text-foreground">
              {entry.decision}
            </p>
            <p className="text-xs text-muted-foreground">{entry.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
