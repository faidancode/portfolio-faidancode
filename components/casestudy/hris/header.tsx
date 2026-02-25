"use client";

import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeMenuToggle } from "@/components/theme-menu-toggle";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Scope", href: "#scope-constraints" },
  { label: "Decisions", href: "#engineering-decisions" },
  { label: "Stack", href: "#stack" },
  { label: "Improvements", href: "#improvements" },
];

const appName = process.env.PUBLIC_NEXT_APP_NAME || "Faidancode";

export function ProjectHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100/80 bg-white/80 backdrop-blur-xl dark:border-white/5 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-6 w-1 bg-emerald-600 dark:bg-emerald-400 rounded-full group-hover:h-8 transition-all" />
          <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white">
            {appName}
          </span>
        </Link>

        <nav className="hidden gap-8 text-[13px] font-medium text-slate-600 sm:flex dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="h-4 w-1px bg-slate-200 dark:bg-slate-800 mx-2" />
          <LanguageSwitcher />
          <ThemeMenuToggle />
        </div>
      </div>
    </header>
  );
}
