"use client";

import { ThemeMenuToggle } from "@/components/theme-menu-toggle";
import Link from "next/link";

const navLinks = [
  // { label: "Hero", href: "#hero" },
  // { label: "Project Brief", href: "#brief" },
  { label: "Home", href: "#" },
  { label: "Tech Stack", href: "#stack" },
  // { label: "Workflow", href: "#workflow" },
  // { label: "Lesson Learned", href: "#lessons" },
];
const appName = process.env.PUBLIC_NEXT_APP_NAME || "Faidancode";

export function BookstoreHeader() {
  return (
    <header className="sticky top-0 z-50 w-full  bg-white dark:bg-[#0c1026] border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-sm uppercase tracking-widest">
        <Link href="/">
          <span className="font-semibold">{appName}</span>
        </Link>
        <nav className="hidden gap-4 text-xs font-semibold sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground/80"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <ThemeMenuToggle />
      </div>
    </header>
  );
}
