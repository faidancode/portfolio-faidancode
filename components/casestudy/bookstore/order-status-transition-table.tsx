"use client";
import { motion } from "framer-motion";
import { ArrowRight, UserCircle2 } from "lucide-react";
import { StatusBadge } from "@/components/status-badge";
import { OrderStatusTransitionData } from "@/lib/types/order-staus-transition.types";

type Props = {
  data: OrderStatusTransitionData;
};

export function OrderStatusTransitionTable({ data }: Props) {
  return (
    <section id="order-status-transition" className="py-24 px-6 bg-background">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400 mb-3">
            State Transitions
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {data.title1}{" "}
            <span className="text-emerald-500">{data.title2}</span>
          </h3>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 font-light max-w-2xl leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/5 dark:bg-slate-900/50"
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5">
                  <th className="p-6 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Current Status
                  </th>
                  <th className="p-6 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Trigger Action
                  </th>
                  <th className="p-6 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Actor
                  </th>
                  <th className="p-6 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Next Status
                  </th>
                  <th className="p-6 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Logic Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {data.data?.map((row, idx) => (
                  <tr
                    key={idx}
                    className="group transition-colors hover:bg-emerald-50/30 dark:hover:bg-emerald-500/5"
                  >
                    <td className="p-6">
                      <StatusBadge status={row.currentStatus} variant="flow" />
                    </td>
                    <td className="p-6">
                      <span className="font-medium text-slate-700 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {row.action}
                      </span>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                        <UserCircle2
                          size={14}
                          className="text-slate-300 dark:text-slate-600"
                        />
                        <span className="text-sm font-medium">{row.actor}</span>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        {row.nextStatus !== "N/A" ? (
                          <>
                            <ArrowRight
                              size={14}
                              className="text-slate-300 group-hover:text-emerald-500 transition-colors"
                            />
                            <StatusBadge
                              status={row.nextStatus}
                              variant="flow"
                            />
                          </>
                        ) : (
                          <span className="text-slate-300 dark:text-slate-700">
                            —
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-6">
                      <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-xs">
                        {row.notes ?? "-"}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
