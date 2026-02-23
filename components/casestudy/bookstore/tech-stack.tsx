"use client";

import { ProjectTechStacksData } from "@/lib/types/project-tech-stack";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";

interface ProjectTechStackProps {
  data: ProjectTechStacksData;
}

export function ProjectTechStack({ data }: ProjectTechStackProps) {
  return (
    <section id="stack" className="py-24 px-6 bg-background">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400 mb-3">
            Technology Blueprint
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {data.title1}{" "}
            <span className="text-emerald-500">
              {data.title2}
            </span>
          </h3>
          <p className="mt-6 text-lg text-slate-500 dark:text-slate-400 font-light max-w-2xl leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Dynamic Bento Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.data.map((entry, index) => (
            <motion.article
              key={entry.component}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // Item pertama (biasanya Platform/Core) dibuat lebih lebar
              className={`group relative flex flex-col justify-between rounded-2xl border border-slate-200/60 bg-white p-8 transition-all hover:border-emerald-500/30 hover:shadow-[0_20px_50px_rgba(16,185,129,0.05)] dark:border-white/5 dark:bg-slate-900/50 
                ${index === 0 ? "lg:col-span-2" : "col-span-1"}
              `}
            >
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                    {entry.component}
                  </span>
                  <Layers
                    className="text-slate-200 dark:text-white/5 group-hover:text-emerald-500/20 transition-colors"
                    size={24}
                  />
                </div>

                <div className="space-y-3">
                  <h4 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {entry.technologies}
                  </h4>
                  <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400 font-light">
                    {entry.rationale}
                  </p>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="mt-8 h-1 w-12 rounded-full bg-slate-100 dark:bg-white/5 group-hover:bg-emerald-500/40 transition-all group-hover:w-20" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
