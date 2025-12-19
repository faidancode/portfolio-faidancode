"use client";

import { CaseStudyData } from "@/lib/types/case-study";
import Image from "next/image";

import Link from "next/link";
import { Title } from "../title";

interface CaseStudyProps {
  data: CaseStudyData;
}

export default function CaseStudyProjects({ data }: CaseStudyProps) {
  return (
    <section className="flex flex-col gap-4 w-full p-6" id="caseStudy">
      <Title text1={data.title1} text2={data.title2} subtitle={data.subtitle} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {data.data.map((caseStudy) => (
          <Link href={caseStudy.url} key={caseStudy.url}>
            <article
              key={caseStudy.name}
              className="rounded-2xl bg-white p-4 text-left border dark:border-white/10 dark:bg-white/5"
            >
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
                    className="rounded-full bg-muted/20 border px-3 py-1 text-[10px] dark:text-orange-500 font-semibold uppercase tracking-wildest text-foreground"
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
