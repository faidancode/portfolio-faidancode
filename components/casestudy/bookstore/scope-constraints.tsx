"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScopeConstraintsData } from "@/lib/types/scope-constraints";
import { motion } from "framer-motion";

interface ProjectScopeConstraintsProps {
  data: ScopeConstraintsData;
}

export default function ProjectScopeConstraints({
  data,
}: ProjectScopeConstraintsProps) {
  return (
    <section id="scope-constraints" className="py-24 px-6 bg-background">
      <div className="mx-auto max-w-5xl">
        {/* Header: Menggunakan style yang konsisten dengan Hero */}
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400 mb-3">
            Boundaries & Goals
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {data.title1}{" "}
            <span className="text-emerald-500 dark:text-slate-500">
              {data.title2}
            </span>
          </h3>
          <p className="mt-6 text-lg text-slate-500 dark:text-slate-400 font-light max-w-2xl leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Refined Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-slate-200/60 bg-white/50 backdrop-blur-sm p-4 dark:border-white/5 dark:bg-slate-900/50"
        >
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="w-full space-y-2"
          >
            {data.data.map((item, index) => (
              <AccordionItem
                key={item.title}
                value={`item-${index}`}
                className="border-none px-4 rounded-2xl transition-all data-[state=open]:bg-emerald-50/50 dark:data-[state=open]:bg-emerald-500/5"
              >
                <AccordionTrigger className="hover:no-underline py-6 group">
                  <div className="flex items-center gap-4 text-left">
                    {/* Index Number or Icon */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-600 dark:bg-white/5 dark:text-slate-400 dark:group-hover:bg-emerald-500/20 dark:group-hover:text-emerald-400 transition-colors font-mono text-xs font-bold">
                      0{index + 1}
                    </div>
                    <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pb-6 pt-0">
                  <div className="pl-14 pr-4">
                    <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400 font-light border-l-2 border-emerald-500/30 pl-6 py-1">
                      {item.description}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
