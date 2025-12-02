"use client";

export function BookstoreBrief() {
  return (
    <section
      id="brief"
      className="flex flex-col gap-4 rounded-3xl border border-border bg-white/80 p-6 shadow-lg shadow-black/5 dark:border-white/10 dark:bg-zinc-950/60"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
          Project Brief
        </p>
        <h2 className="text-2xl font-bold text-foreground">Problem + Goal</h2>
      </div>
      <p className="text-sm text-muted-foreground">
        The bookstore needed a single-pane view of inventory, fulfillment status, and marketing campaigns—all without switching tabs. The dashboard surfaces real-time KPIs, highlights overdue deliveries, and ties every purchase back to seasonal promotions.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          {
            label: "Timeline",
            value: "6 weeks",
          },
          {
            label: "Team",
            value: "Product, UX, Engineering",
          },
          {
            label: "Persona",
            value: "Operations lead with data fatigue",
          },
        ].map((item) => (
          <div key={item.label} className="rounded-2xl border border-border bg-background/50 p-3 text-sm dark:border-white/10">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
              {item.label}
            </p>
            <p className="text-base font-semibold text-foreground">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
