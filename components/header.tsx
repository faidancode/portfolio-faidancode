"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { ThemeMenuToggle } from "./theme-menu-toggle";
import { LanguageSwitcher } from "./language-switcher";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Case Study", href: "#caseStudy" },
];

export default function Header() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const appName = process.env.PUBLIC_NEXT_APP_NAME || "Faidancode";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white dark:bg-black shadow-sm shadow-black/5 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-sm uppercase tracking-widest">
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:border-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-full max-w-xs rounded-none border-r border-border px-6 py-8"
          >
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setSheetOpen(false)}
                  className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground  transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <span className="font-bold uppercase tracking-wider text-foreground text-lg sm:flex-none sm:text-left">
          {appName}
        </span>

        <nav
          aria-label="Primary navigation"
          className="hidden flex-1 justify-center sm:flex"
        >
          <ul className="flex items-center justify-center gap-3 font-semibold uppercase  tracking-widest text-muted-foreground transition-colors sm:gap-6 sm:text-[0.75rem]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors text-sm dark:text-orange-600 dark:hover:text-orange-300 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-1">
          <LanguageSwitcher />
          <ThemeMenuToggle />
        </div>
      </div>
    </header>
  );
}
