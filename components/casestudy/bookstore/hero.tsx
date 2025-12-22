"use client";

import { Button } from "@/components/ui/button";
import { CaseStudyOverviewData } from "@/lib/types/case-study-overview";
import { Link } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  data: CaseStudyOverviewData;
}

export function ProjectHero({ data }: HeroProps) {
  return (
    <section
      id="hero"
      className="flex flex-col gap-8 rounded-3xl p-6 dark:border-white/10 dark:bg-[#0c1026] md:grid-cols-2"
    >
      <div className="flex flex-col gap-4 items-center text-center">
        <div>
          <h1 className="mt-2 text-4xl font-bold sm:text-4xl text-shadow-accent-foreground dark:text-[#ff5b35]">
            {data.name}
          </h1>
        </div>
        <p className="text-xl">{data.description}</p>
        <div className="flex flex-wrap justify-center gap-1 text-xs uppercase text-foreground">
          {data.stack.map((item) => (
            <span
              key={item}
              className="rounded-md bg-gray-50 border border-gray-300 px-3 py-1 dark:border-white/10 dark:bg-white/5 dark:text-orange-500 text-xs"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          <Button asChild size="lg">
            <a href={data.firstLink} target="_blank" rel="noopener noreferrer">
              {data.firstLinkTitle}
            </a>
          </Button>
          <Button size="lg" variant="orange">
            <a href={data.secondLink} target="_blank" rel="noopener noreferrer">
              {data.secondLinkTitle}
            </a>
          </Button>
        </div>

        {/* <Image
          src="/images/playstore.png"
          alt="Download on playstore"
          width={180}
          height={80}
        /> */}
      </div>
      <div className="flex items-center justify-center">
        {/* <div className="absolute inset-0 bg-linear-to-br from-foreground/20 via-transparent to-foreground/10 rounded-3xl"/> */}
        {data.image && (
          <Image
            alt="app-screenshoot"
            width={800}
            height={500}
            src={data.image}
            className="rounded-t-3xl border border-gray-700"
          />
        )}
      </div>
    </section>
  );
}
