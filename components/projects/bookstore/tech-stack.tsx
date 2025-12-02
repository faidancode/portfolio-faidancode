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
      className="flex flex-col gap-4 rounded-3xl bg-background/80 p-6 dark:border-white/10 dark:bg-zinc-950/60"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Tech Stack
        </p>
        <h2 className="text-2xl font-bold text-foreground">Tools in play</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techStackEntries.map((entry) => (
          <article
            key={entry.component}
            className="flex flex-col gap-2 rounded-2xl bg-white p-4 text-sm leading-relaxed text-foreground shadow-sm shadow-black/5 transition hover:-translate-y-0.5  hover:shadow-lg dark:border-white/10 dark:bg-white/5"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {entry.component}
            </p>
            <p className="text-sm font-semibold text-foreground">
              {entry.technologies}
            </p>
            <p className="text-xs text-muted-foreground">{entry.rationale}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
