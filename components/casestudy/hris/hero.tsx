"use client";

import { Button } from "@/components/ui/button";
import { CaseStudyOverviewData } from "@/lib/types/case-study-overview";
import { motion } from "framer-motion";
import Image from "next/image";

export function ProjectHero({ data }: { data: CaseStudyOverviewData }) {
  return (
    <section className="relative pt-20 pb-16 px-6 overflow-hidden">
      {/* Background Soft Glow - Lebih subtle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-100 bg-emerald-500/5 dark:bg-emerald-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50/50 px-3 py-1 text-xs font-medium text-emerald-600 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400 mb-6"
        >
          Case Study: Human Resources System
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
          {data.name}
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
          {data.description}
        </p>

        {/* Action Buttons - Rounded for Modern Feel */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-slate-900 px-8 dark:bg-white dark:text-slate-950 hover:scale-105 transition-transform"
          >
            <a href={data.firstLink}>{data.firstLinkTitle}</a>
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-slate-200 dark:border-slate-800 px-8"
          >
            <a href={data.secondLink}>{data.secondLinkTitle}</a>
          </Button>
        </div>
      </div>

      {/* Hero Image - Seperti floating dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-5xl"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)]">
          <Image
            src={data.image}
            alt="Dashboard Preview"
            width={1200}
            height={700}
            className="rounded-xl border border-slate-100 dark:border-slate-800"
          />
        </div>
      </motion.div>
    </section>
  );
}
