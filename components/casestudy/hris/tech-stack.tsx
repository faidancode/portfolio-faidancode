"use client";

import { ProjectTechStacksData } from "@/lib/types/project-tech-stack";
import { motion } from "framer-motion";

interface ProjectTechStackProps {
  data: ProjectTechStacksData;
}

export function ProjectTechStack({ data }: ProjectTechStackProps) {
  return (
    <section id="stack" className="py-24 px-6 bg-background">
      <div className="mx-auto max-w-6xl">
        {/* Header Tetap Sama */}
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 mb-3">
            {data.subtitle}
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {data.title1}{" "}
            <span className="text-slate-400 dark:text-slate-600">
              {data.title2}
            </span>
          </h3>
        </div>

        {/* Grid: Kita hapus auto-rows agar fleksibel mengikuti tinggi konten */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.data.map((entry, index) => (
            <motion.article
              key={entry.component}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              // Kita buat kartu pertama (Platform) lebih menonjol secara horizontal saja
              className={`group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-emerald-500/5 dark:border-white/5 dark:bg-slate-900/50 
                ${index === 0 ? "lg:col-span-2" : "col-span-1"}
              `}
            >
              {/* Subtle Gradient Glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/5 blur-3xl transition-opacity opacity-0 group-hover:opacity-100" />

              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                    {entry.component}
                  </span>

                  {/* Icon Indicator (Opsional) */}
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-200 dark:bg-slate-700 group-hover:bg-emerald-500 transition-colors" />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {entry.technologies}
                  </h4>
                  {/* Hapus line-clamp agar semua teks terbaca */}
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {entry.rationale}
                  </p>
                </div>
              </div>

              {/* Decorative Accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
