"use client";

import techStack from "@/data/tech-stack-bookstore.json";

type TechStackEntry = {
  component: string;
  technologies: string;
  rationale: string;
};

const techStackEntries = techStack as TechStackEntry[];

export function BookstoreTechStack() {
  return (
    <section
      id="stack"
      className="flex flex-col gap-4 rounded-3xl bg-background/80 p-6 dark:border-white/10 dark:bg-[#0c1026]"
    >
      <div>
        <p className="text-2xl font-bold text-[#]">
          <span className="text-shadow-accent-foreground dark:text-[#ff5b35]">
            Tech
          </span>{" "}
          Stack
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techStackEntries.map((entry) => (
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
    </section>
  );
}
