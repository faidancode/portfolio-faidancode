"use client";

import { ProjectsData } from "@/lib/types/project";

import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";

interface ProjectsProps {
  data: ProjectsData;
}

export default function Projects({ data }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            {data.title1}{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              {data.title2}
            </span>
          </h2>
          <p className="max-w-2xl text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-8">
            {data.subtitle}
          </p>

          {/* Refined Note/Alert */}
          <div className="inline-flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {data.note}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {data.data.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col rounded-2xl border border-slate-200/60 bg-white p-8 transition-all hover:border-emerald-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] dark:border-white/5 dark:bg-slate-900/50"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="h-12 w-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-emerald-500 transition-colors">
                  <Folder size={24} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  {project.year}
                </span>
              </div>

              <div className="space-y-2 mb-6">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium uppercase tracking-wider text-emerald-600/80 dark:text-emerald-400/80">
                  {project.industry}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-slate-50 border border-slate-200 px-2.5 py-1 text-[12px] font-bold uppercase tracking-tight text-slate-600 dark:bg-white/5 dark:border-white/10 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex-1 mb-8">
                <ul className="space-y-3">
                  {project.description.map((desc, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Links */}
              {Array.isArray(project.links) && project.links.length > 0 && (
                <div className="pt-6 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-3">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-white transition-transform hover:scale-105 active:scale-95 dark:bg-white dark:text-slate-900"
                    >
                      {link.title}
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
