"use client";

const steps = [
  "Audit current dashboards and playbooks.",
  "Map key moments (orders, inventory, campaigns).",
  "Design mid-fidelity wireframes with focus on scanning.",
  "Prototype alerts and drill-down modal patterns.",
  "Ship responsive dashboard with audit log and docs.",
];

export function BookstoreWorkflow() {
  return (
    <section
      id="workflow"
      className="flex flex-col gap-4 rounded-3xl border border-border bg-white/80 p-6 shadow-lg shadow-black/5 dark:border-white/10 dark:bg-zinc-950/60"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
          Workflow
        </p>
        <h2 className="text-2xl font-bold text-foreground">How we delivered</h2>
      </div>
      <ol className="space-y-3 text-sm text-muted-foreground">
        {steps.map((step, index) => (
          <li key={step} className="flex gap-3">
            <span className="text-xs font-bold text-foreground">{`0${index + 1}`}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
