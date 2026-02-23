"use client";

import { HeroData } from "@/lib/types/hero";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  data: HeroData;
}

export function Hero({ data }: HeroProps) {
  return (
    <section
      id="Hero"
      className="relative min-h-screen w-full flex items-center justify-center px-6 py-20 overflow-hidden bg-background"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-5%] left-[-5%] w-[60%] h-[60%] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[60%] h-[60%] bg-violet-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Container diubah ke max-w-none atau max-w-[1400px] agar lebih lega */}
      <div className="mx-auto w-full max-w-350 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[60%] flex flex-col items-center text-center md:items-start md:text-left space-y-8"
        >
          <div className="w-full space-y-4">
            <span className="inline-block px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.4em] text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400 rounded-full">
              Fullstack Developer
            </span>

            {/* Ukuran Font dibuat lebih fluid: text-5xl di mobile, text-7xl di tablet, text-8xl di desktop besar */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.05] md:leading-none">
              {data.title}
              <span className="block mt-2 bg-linear-to-r from-emerald-600 via-green-600 to-green-400 bg-clip-text text-transparent">
                {data.name}
              </span>
            </h1>
          </div>

          <p className="max-w-xl text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-light">
            {data.description}
          </p>

          <a
            href="https://github.com/faidancode"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 h-14 px-8 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 transition-all hover:border-emerald-600 dark:hover:border-emerald-400"
          >
            <div className="relative w-6 h-6 transition-transform group-hover:rotate-12">
              {/* Logo untuk Light Mode */}
              <Image
                src="/github.svg"
                alt="Github"
                fill
                className="object-contain dark:hidden"
              />
              {/* Logo untuk Dark Mode */}
              <Image
                src="/github-white.svg"
                alt="Github"
                fill
                className="object-contain hidden dark:block"
              />
            </div>

            <span className="text-sm font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Github
            </span>
          </a>
        </motion.div>

        {/* Image Section - Ukuran dikontrol agar tidak memakan terlalu banyak tempat di layar lebar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-[40%] flex justify-center md:justify-end"
        >
          <div className="relative aspect-square w-full max-w-87 lg:max-w-md">
            <Image
              src="/deep_work.svg"
              alt="Professional Illustration"
              fill
              className="object-contain scale-x-[-1] drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
