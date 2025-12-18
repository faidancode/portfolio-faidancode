"use client";

import Section from "@/components/section";
import { Title } from "@/components/title";
import { ProjectTechStacksData } from "@/lib/types/project-tech-stack";

interface ProjectTechStackProps {
  data: ProjectTechStacksData;
}

export function ProjectTechStack({ data }: ProjectTechStackProps) {
  return (
    <Section id="stack">
      <Title text1={data.title1} text2={data.title2} subtitle={data.subtitle} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {data.data.map((entry) => (
          <article
            key={entry.component}
            className="flex flex-col gap-1 rounded-2xl bg-white p-4 text-sm leading-relaxed text-foreground shadow-sm shadow-black/5 transition hover:-translate-y-0.5  hover:shadow-lg dark:border-white/10 dark:bg-white/5"
          >
            <p className="text-xs font-semibold uppercase text-muted-foreground">
              {entry.component}
            </p>
            <p className="text-lg font-semibold text-foreground">
              {entry.technologies}
            </p>
            <p className="text-xs text-muted-foreground">{entry.rationale}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
