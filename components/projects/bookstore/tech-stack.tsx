"use client";

const stack = ["React", "Laravel", "Tailwind", "Supabase", "Vercel"];

export function BookstoreTechStack() {
  return (
    <section
      id="stack"
      className="flex flex-col gap-4 rounded-3xl border border-border bg-white/80 p-6 shadow-lg shadow-black/5 dark:border-white/10 dark:bg-zinc-950/60"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
          Tech Stack
        </p>
        <h2 className="text-2xl font-bold text-foreground">Tools in play</h2>
      </div>
      <div className="flex flex-wrap gap-3 text-sm">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-2xl border border-border bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-foreground dark:border-white/10 dark:bg-white/10"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 text-sm">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-2xl border border-border bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-foreground dark:border-white/10 dark:bg-white/10"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 text-sm">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-2xl border border-border bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-foreground dark:border-white/10 dark:bg-white/10"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 text-sm">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-2xl border border-border bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-foreground dark:border-white/10 dark:bg-white/10"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 text-sm">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-2xl border border-border bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-foreground dark:border-white/10 dark:bg-white/10"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
