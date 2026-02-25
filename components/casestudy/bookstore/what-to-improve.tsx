"use client";

import { WhatToImproveData } from "@/lib/types/what-to-improve";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface WhatToImproveProps {
  data: WhatToImproveData;
}

export default function ProjectWhatToImprove({ data }: WhatToImproveProps) {
  return (
    <section
      id="improvements"
      className="py-24 px-6 bg-background relative overflow-hidden"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-emerald-500/50" />
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
              Future Roadmap
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {data.title1}{" "}
            <span className="text-emerald-500">{data.title2}</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 font-light max-w-2xl leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Improvements List */}
        <div className="relative space-y-6">
          {/* Vertical Line Decor */}
          <div className="absolute left-7 top-0 bottom-0 w-px bg-slate-100 dark:bg-white/5 hidden md:block" />

          {data.data.map((item, index) => (
            <motion.div
              key={item.item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative md:pl-20"
            >
              {/* Dot Decor on Line */}
              <div className="absolute left-5 top-8 h-4 w-4 rounded-full border-4 border-background bg-slate-200 transition-colors group-hover:bg-emerald-500 hidden md:block z-10" />

              <div className="relative rounded-2xl border border-slate-200/60 bg-white p-8 transition-all hover:border-emerald-500/30 hover:shadow-[0_20px_50px_rgba(16,185,129,0.05)] dark:border-white/5 dark:bg-slate-900/50">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-2">
                      <Sparkles
                        size={16}
                        className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {item.item}
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Phase Label or Simple Icon */}
                  <div className="shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-400 group-hover:bg-emerald-50 dark:bg-white/5 dark:group-hover:bg-emerald-500/10 transition-colors">
                      <ArrowUpRight
                        size={18}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute right-0 bottom-0 w-125 h-125 bg-emerald-500/5 blur-[120px] -z-10 pointer-events-none" />
    </section>
  );
}
