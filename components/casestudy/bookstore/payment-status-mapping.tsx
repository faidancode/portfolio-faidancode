"use client";

import { motion } from "framer-motion";
import { Link2 } from "lucide-react";
import { PaymentStatusBagdge } from "@/components/payment-status-badge";
import { StatusBadge } from "@/components/status-badge";
import { PaymentStatusMappingData } from "@/lib/types/payment-status-mapping.types";

type Props = {
  data: PaymentStatusMappingData;
};

export function PaymentStatusMappingTable({ data }: Props) {
  return (
    <section
      id="payment-mapping"
      className="py-24 px-6 bg-slate-50/30 dark:bg-slate-950/10"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400 mb-3">
            Domain Mapping
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {data.title1}{" "}
            <span className="text-emerald-500">
              {data.title2}
            </span>
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
                    Order Domain
                  </th>
                  <th className="px-2 text-slate-300 dark:text-slate-700"></th>
                  <th className="p-6 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Payment Domain
                  </th>
                  <th className="p-6 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Context / Rule
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
                      <StatusBadge status={row.orderStatus} variant="flow" />
                    </td>
                    <td className="px-2">
                      <Link2
                        size={16}
                        className="text-slate-200 group-hover:text-emerald-500/40 transition-colors"
                      />
                    </td>
                    <td className="p-6">
                      <PaymentStatusBagdge status={row.paymentStatus} />
                    </td>
                    <td className="p-6">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                          {row.notes ?? "-"}
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Technical Note Footer */}
        <p className="mt-8 text-center text-[11px] uppercase tracking-widest text-slate-400 font-medium">
          Note: This mapping ensures atomicity between{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            Order Service
          </span>{" "}
          and{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            Payment Gateway
          </span>{" "}
          callbacks.
        </p>
      </div>
    </section>
  );
}
