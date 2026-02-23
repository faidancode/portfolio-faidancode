"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, ShieldCheck, Database } from "lucide-react";
import { EngineeringDecisionData } from "@/lib/types/engineering-decisions";

interface EngineeringDecisionsProps {
  data: EngineeringDecisionData;
}

export function ProjectEngineeringDecision({
  data,
}: EngineeringDecisionsProps) {
  return (
    <section
      id="engineering-decisions"
      className="py-24 px-6 bg-slate-50/50 dark:bg-slate-950/20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400 mb-3">
              Technical Rationale
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {data.title1}{" "}
              <span className="text-emerald-500 dark:text-slate-500">
                {data.title2}
              </span>
            </h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-light max-w-xs leading-relaxed border-l-2 border-emerald-500/20 pl-4">
            {data.subtitle}
          </p>
        </div>

        {/* Decisions Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {data.data.map((entry, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col gap-4 rounded-2xl border border-slate-200/60 bg-white p-8 transition-all hover:border-emerald-500/30 hover:shadow-[0_20px_50px_rgba(16,185,129,0.05)] dark:border-white/5 dark:bg-slate-900/50"
            >
              {/* Decorative Corner Icon - Memberikan kesan "Engineering" */}
              <div className="absolute top-8 right-8 text-slate-100 group-hover:text-emerald-500/10 transition-colors dark:text-white/5">
                <Cpu size={40} strokeWidth={1} />
              </div>

              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                  <Zap size={12} fill="currentColor" />
                  Decision {index + 1}
                </div>

                <h4 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {entry.decision}
                </h4>

                <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400 font-light">
                  {entry.description}
                </p>
              </div>

              {/* Progress-like accent at bottom */}
              <div className="absolute bottom-0 left-12 right-12 h-0.5 bg-linear-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
