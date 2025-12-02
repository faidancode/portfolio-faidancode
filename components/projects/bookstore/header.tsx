"use client";

const navLinks = [
  { label: "Hero", href: "#hero" },
  { label: "Project Brief", href: "#brief" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Workflow", href: "#workflow" },
  { label: "Lesson Learned", href: "#lessons" },
];

export function BookstoreHeader() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-sm uppercase tracking-[0.3em]">
        <span className="font-semibold text-chart-1">Bookstore</span>
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
        <div className="text-xs font-semibold tracking-[0.4em] text-chart-1">
          Case Study
        </div>
      </div>
    </header>
  );
}
