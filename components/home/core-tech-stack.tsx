"use client";

import Image from "next/image";

import techStack from "@/data/tech-stack.json";
import { AllTechStackData } from "@/lib/types/all-tech-stack";
import { Title } from "../title";

interface CoreTechStackProps {
  data: AllTechStackData;
}

export default function CoreTechStack({ data }: CoreTechStackProps) {
  return (
    <section className="flex w-full flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <Title text1={data.title1} text2={data.title2} />
        <p className="text-sm text-muted-foreground max-w-2xl">
          {data.subtitle}
        </p>
      </div>

      {/* Groups */}
      <div className="flex flex-col gap-3">
        {data.groups.map((group) => (
          <div key={group.group} className="flex flex-col gap-2">
            <h3 className="text-base font-semibold text-muted-foreground">
              {group.group}
            </h3>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-2 rounded-xl border bg-white p-3 transition hover:shadow-sm dark:border-white/10 dark:bg-white/5"
                >
                  <div className="relative h-8 w-8 grayscale transition hover:grayscale-0">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
