"use client";

import Image from "next/image";

import techStack from "@/data/tech-stack.json";

type TechStackItem = {
  name: string;
  logo: string;
};

const techStackData = techStack as TechStackItem[];

export function CoreTechStack() {
  return (
    <section className="flex flex-col gap-4 w-full p-4 transition dark:bg-zinc-950/40">
      <div className="mb-4 flex flex-col gap-1 text-left">
        <h2 className="text-2xl font-bold text-foreground">
          Core Technologies Stack
        </h2>
        <p className="text-sm text-muted-foreground">
          Build consistent, performant experiences with the languages and tools
          I rely on daily.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {techStackData.map((tech) => (
          <article
            key={tech.name}
            className="flex flex-row items-center gap-2 rounded-lg border border-border bg-white/90 p-2 text-center shadow-sm shadow-black/5 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
          >
            <div className="relative flex items-center justify-center rounded-xl bg-muted/10 p-1">
              <Image
                src={tech.logo}
                alt={`${tech.name} logo`}
                width={48}
                height={48}
                className="h-10 w-10 object-contain rounded"
                priority={tech.name === "Next.js"}
              />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:text-sm">
              {tech.name}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
