"use client";
import { EngineeringDecisionData } from "@/lib/types/engineering-decisions";
import { motion } from "framer-motion";

interface EngineeringDecisionsProps {
  data: EngineeringDecisionData;
}

const EngineeringDecisions = ({ data }: EngineeringDecisionsProps) => {
  // Variasi animasi staggered yang lebih halus
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="engineering-decisions"
      className="relative py-24 px-6 bg-background transition-colors duration-500"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header dengan style yang lebih minimalis */}
        <div className="mb-16 space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            {data.subtitle}
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {data.title1}{" "}
            <span className="text-slate-400 dark:text-slate-600">
              {data.title2}
            </span>
          </h3>
        </div>

        {/* Grid Kartu yang Elegan */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {data.data.map((entry, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="group relative flex flex-col gap-4 rounded-2xl border border-slate-200/60 bg-white p-8 shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-all hover:border-emerald-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] dark:border-white/5 dark:bg-slate-900/50 dark:hover:border-emerald-500/30"
            >
              {/* Decorative Accent: Dot pattern yang halus di pojok kartu */}
              <div className="absolute top-6 right-8 opacity-[0.03] dark:opacity-[0.1]">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2" cy="2" r="2" fill="currentColor" />
                  <circle cx="20" cy="2" r="2" fill="currentColor" />
                  <circle cx="38" cy="2" r="2" fill="currentColor" />
                  <circle cx="2" cy="20" r="2" fill="currentColor" />
                  <circle cx="20" cy="20" r="2" fill="currentColor" />
                  <circle cx="38" cy="20" r="2" fill="currentColor" />
                </svg>
              </div>

              <div className="flex flex-col gap-4">
                {/* Indikator Angka atau Icon Kecil */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 font-mono text-sm font-bold">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {entry.decision}
                  </h4>
                  <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    {entry.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EngineeringDecisions;
