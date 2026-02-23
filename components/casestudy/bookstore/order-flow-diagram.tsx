"use client";

import { motion } from "framer-motion";
import { FlowArrow } from "@/components/flow-arrow";
import { StatusBadge } from "@/components/status-badge";
import { OrderFlowDiagramData } from "@/lib/types/order-flow.types";
import { Info } from "lucide-react";

type Props = {
  data: OrderFlowDiagramData;
};

export function OrderFlowDiagram({ data }: Props) {
  const { title1, title2, subtitle, data: flow } = data;

  const mainEdges = flow.edges.filter((e) => !e.dashed && e.to !== "CANCELLED");
  const cancelEdges = flow.edges.filter((e) => e.to === "CANCELLED");

  return (
    <section
      id="order-flow"
      className="py-24 px-6 bg-slate-50/50 dark:bg-slate-950/20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400 mb-3">
            Business Logic
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {title1}{" "}
            <span className="text-emerald-500">{title2}</span>
          </h3>
          <p className="mt-6 text-lg text-slate-500 dark:text-slate-400 font-light max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Diagram Container */}
        <div className="flex flex-col gap-10 rounded-[2.5rem] border border-slate-200/60 bg-white p-8 md:p-12 shadow-sm dark:border-white/5 dark:bg-slate-900/50">
          {/* Main Flow Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Happy Path / Main Flow
              </span>
            </div>

            <div className="overflow-x-auto pb-6 scrollbar-hide">
              <div className="flex items-center gap-4 min-w-max px-2">
                {flow.states.map((state, idx) => {
                  const edge = mainEdges.find((e) => e.from === state);

                  return (
                    <motion.div
                      key={state}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="group relative">
                        <StatusBadge status={state} variant="flow" />
                        {/* Status Tooltip/Indicator bisa ditambah di sini */}
                      </div>

                      {edge && (
                        <div className="flex flex-col items-center min-w-35">
                          <span className="mb-2 text-[10px] font-bold uppercase tracking-tighter text-emerald-600/70 dark:text-emerald-400/70 bg-emerald-50 dark:bg-emerald-500/5 px-2 py-0.5 rounded">
                            {edge.actor}
                          </span>
                          <FlowArrow label={edge.action} />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-slate-100 dark:bg-white/5" />

          {/* Cancellation Paths Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Exception Handling
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-y-12 gap-x-6">
              <div className="relative">
                <StatusBadge status="PENDING" variant="flow" />
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-slate-400 uppercase tracking-tighter whitespace-nowrap">
                  Entry Point
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-auto">
                {cancelEdges.map((edge, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex items-center gap-4 bg-slate-50/50 dark:bg-white/5 p-4 rounded-2xl border border-dashed border-slate-200 dark:border-white/10"
                  >
                    <div className="flex flex-col items-center">
                      <span className="mb-1 text-[9px] font-bold text-slate-400 uppercase">
                        {edge.actor}
                      </span>
                      <FlowArrow label={edge.action} dashed />
                    </div>
                    <StatusBadge status="CANCELLED" variant="flow" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Legend/Info Footer */}
          <div className="mt-4 flex items-start gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-white/5">
            <Info
              size={16}
              className="mt-0.5 text-emerald-600 dark:text-emerald-400"
            />
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              Diagram ini merepresentasikan <strong>State Machine</strong> dari
              sistem pemesanan. Transisi antar status dikontrol secara ketat
              melalui <em>Service Layer</em> untuk memastikan konsistensi data
              dan mencegah perubahan status yang tidak valid.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
