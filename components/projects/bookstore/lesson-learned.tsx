"use client";

const lessons = [
  "Cross-functional workshops kept assumptions grounded in real operational needs.",
  "Micro-metrics (orders, fulfillment, marketing) cut through data noise faster than large PDFs.",
  "Design tokens for alerts ensured consistency across desktop + mobile.",
];

export function BookstoreLessonLearned() {
  return (
    <section
      id="lessons"
      className="flex flex-col gap-4 rounded-3xl border border-border bg-white/80 p-6 shadow-lg shadow-black/5 dark:border-white/10 dark:bg-zinc-950/60"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
          Lesson Learned
        </p>
        <h2 className="text-2xl font-bold text-foreground">What stood out</h2>
      </div>
      <ul className="space-y-3 text-sm text-muted-foreground">
        {lessons.map((lesson) => (
          <li
            key={lesson}
            className="rounded-2xl border border-border bg-background/50 px-4 py-3 dark:border-white/10"
          >
            {lesson}
          </li>
        ))}
      </ul>
    </section>
  );
}
