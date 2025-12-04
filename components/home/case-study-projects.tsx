"use client";

import Image from "next/image";

import caseStudies from "@/data/case-study-projects.json";
import Link from "next/link";

type CaseStudy = {
  name: string;
  description: string;
  image: string;
  url: string;
  stack: string[];
};

const caseStudyData = caseStudies as CaseStudy[];

export default function CaseStudyProjects() {
  return (
    <section className="flex flex-col gap-4 w-full p-4">
      <div className="mb-4 flex flex-col gap-1 text-left">
        <h2 className="text-2xl font-bold text-foreground">Case Studies</h2>
        <p className="text-sm text-muted-foreground">
          Realistic, end-to-end projects showcasing my full-stack approach.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {caseStudyData.map((caseStudy) => (
         <Link href={caseStudy.url}>
          <article
            key={caseStudy.name}
            className="rounded-2xl bg-white p-4 text-left border dark:border-white/10 dark:bg-white/5">
            <div className="relative mb-3 h-40 w-full overflow-hidden rounded-xl">
              <Image
                src={caseStudy.image}
                alt={caseStudy.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="font-semibold uppercase tracking-wildest">
              {caseStudy.name}
            </p>
            <p className="text-sm text-foreground/80">
              {caseStudy.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {caseStudy.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-muted/20 border px-3 py-1 text-[10px] font-semibold uppercase tracking-wildest text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
         </Link>
        ))}
      </div>
    </section>
  );
}
