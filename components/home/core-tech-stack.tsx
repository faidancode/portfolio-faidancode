"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { AllTechStackData } from "@/lib/types/all-tech-stack";

interface CoreTechStackProps {
  data: AllTechStackData;
}

export default function CoreTechStack({ data }: CoreTechStackProps) {
  return (
    <section
      id="stack"
      className="py-24 px-6 bg-background relative overflow-hidden"
    >
      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header dengan style yang lebih "Clean & Bold" */}
        <div className="mb-20 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            {data.title1}{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              {data.title2}
            </span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Groups Mapping */}
        <div className="space-y-16">
          {data.groups.map((group, groupIdx) => (
            <div key={group.group} className="space-y-6">
              <div className="flex items-center gap-4">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                  {group.group}
                </h3>
                <div className="h-px flex-1 bg-slate-100 dark:bg-white/5" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {group.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: groupIdx * 0.1 + itemIdx * 0.05 }}
                    className="group relative flex items-center gap-3 rounded-2xl border border-slate-300/50 bg-white p-3 transition-all hover:border-emerald-500/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:border-white/5 dark:bg-slate-900/40 dark:hover:bg-slate-900"
                  >
                    {/* Background Soft Glow on Hover */}
                    <div className="absolute inset-0 rounded-2xl bg-emerald-500/2 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-lg bg-slate-50 p-1.5 transition-all group-hover:bg-white dark:bg-white/5 dark:group-hover:bg-white/10">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        fill
                        className="object-contain p-1 grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110"
                        sizes="32px"
                      />
                    </div>

                    <span className="text-xs font-semibold tracking-tight text-slate-600 transition-colors group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 blur-[120px] pointer-events-none" />
    </section>
  );
}
