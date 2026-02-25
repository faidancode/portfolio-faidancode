"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CaseStudyData } from "@/lib/types/case-study";

interface CaseStudyProps {
  data: CaseStudyData;
}

export default function CaseStudyProjects({ data }: CaseStudyProps) {
  return (
    <section id="caseStudy" className="py-24 px-6 bg-background relative">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            {data.title1}{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              {data.title2}
            </span>
          </h2>
          <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {data.data.map((caseStudy, idx) => (
            <Link href={caseStudy.url} key={caseStudy.url} className="group">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative h-full flex flex-col rounded-2xl border border-slate-300/50 bg-white p-4 transition-all hover:border-emerald-200 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] dark:border-white/5 dark:bg-slate-900/40"
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative mb-8 h-64 w-full overflow-hidden rounded-xl">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Floating Action Button */}
                  <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-4 pb-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-emerald-500" />
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
                      Deep Dive
                    </p>
                  </div>

                  <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {caseStudy.name}
                  </h3>

                  <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 font-light line-clamp-2">
                    {caseStudy.description}
                  </p>

                  <div className="pt-4 flex flex-wrap gap-2">
                    {caseStudy.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-50 px-3 py-1 text-[12px] font-bold uppercase tracking-tight text-slate-600 border border-slate-200 dark:bg-white/5 dark:border-white/10 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-emerald-500/5 blur-[100px] pointer-events-none" />
    </section>
  );
}
