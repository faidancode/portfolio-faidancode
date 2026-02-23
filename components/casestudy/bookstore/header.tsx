"use client";

import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeMenuToggle } from "@/components/theme-menu-toggle";
import Link from "next/link";

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
    <header className="sticky top-0 bg-background z-50 w-full border-b border-slate-200/60  backdrop-blur-md dark:border-white/5 ">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xl group-hover:rotate-6 transition-transform">
            {appName.charAt(0)}
          </div>
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-slate-900 dark:text-white">
            {appName}
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-[12px] font-bold uppercase tracking-[0.2em] sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-500 transition-colors hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 pr-4 border-r border-slate-200 dark:border-white/10">
            <LanguageSwitcher />
          </div>
          <ThemeMenuToggle />
        </div>
      </div>
    </header>
  );
}
