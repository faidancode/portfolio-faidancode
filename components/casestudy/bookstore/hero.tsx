"use client";

import { CaseStudyOverviewData } from "@/lib/types/case-study-overview";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  data: CaseStudyOverviewData;
}

export function ProjectHero({ data }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center gap-12 pt-16 pb-0 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-emerald-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-6 items-center text-center max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <span className="inline-block px-4 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400 rounded-full">
            Case Study
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {data.name}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-2xl"
        >
          {data.description}
        </motion.p>

        {/* Tech Stack Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {data.stack.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-slate-200 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-tight text-slate-600 dark:border-white/5 dark:bg-white/5 dark:text-slate-400"
            >
              {item}
            </span>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mt-4"
        >
          <a
            href={data.firstLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 h-12 px-8 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold text-xs uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/10"
          >
            {data.firstLinkTitle}
            <ExternalLink size={14} />
          </a>

          <a
            href={data.secondLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 h-12 px-8 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-widest transition-all hover:border-emerald-500 dark:hover:border-emerald-400"
          >
            <ExternalLink size={14} />
            {data.secondLinkTitle}
          </a>
        </motion.div>
      </div>

      {/* Preview Image: Sits at the bottom of hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-6xl px-6"
      >
        <div className="relative group rounded-t-[2.5rem] border-x border-t border-slate-200 dark:border-white/10 overflow-hidden shadow-[0_-20px_80px_-20px_rgba(16,185,129,0.15)]">
          {data.image && (
            <Image
              alt="app-screenshot"
              width={1200}
              height={700}
              src={data.image}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              priority
            />
          )}
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </motion.div>
    </section>
  );
}
