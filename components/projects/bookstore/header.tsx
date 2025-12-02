"use client";

import { ThemeMenuToggle } from "@/components/theme-menu-toggle";

const navLinks = [
  { label: "Hero", href: "#hero" },
  { label: "Project Brief", href: "#brief" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Workflow", href: "#workflow" },
  { label: "Lesson Learned", href: "#lessons" },
];

export function BookstoreHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-zinc-950 border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-sm uppercase tracking-widest">
        <span className="font-semibold">Bookstore</span>
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
