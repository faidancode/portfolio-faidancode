"use client";

import Image from "next/image";

import { AllTechStackData } from "@/lib/types/all-tech-stack";
import { Title } from "../title";
import Section from "../section";

interface CoreTechStackProps {
  data: AllTechStackData;
}

export default function CoreTechStack({ data }: CoreTechStackProps) {
  return (
    <Section id="stack">
      <Title text1={data.title1} text2={data.title2} subtitle={data.subtitle} />

      {/* Groups */}
      <div className="flex flex-col gap-3">
        {data.groups.map((group) => (
          <div key={group.group} className="flex flex-col gap-2">
            <h3 className="text-base font-semibold text-muted-foreground">
              {group.group}
            </h3>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-2 rounded-lg border bg-white p-2 transition hover:shadow-sm dark:border-white/10 dark:bg-white/5"
                >
                  <div className="relative h-6 w-6 grayscale transition hover:grayscale-0">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      fill
                      className="object-contain"
                      sizes="12"
                    />
                  </div>
                  <span className="text-xs font-medium dark:text-gray-200">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
