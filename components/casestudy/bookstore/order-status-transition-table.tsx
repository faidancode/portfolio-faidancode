// components/OrderStatusTransitionTable.tsx

import Section from "@/components/section";
import { StatusBadge } from "@/components/status-badge";
import { orderStatusColor } from "@/components/status-colors";
import { Title } from "@/components/title";
import { OrderStatusTransitionData } from "@/lib/types/order-staus-transition.types";

type Props = {
  data: OrderStatusTransitionData;
};

export function OrderStatusTransitionTable({ data }: Props) {
  return (
    <Section id="order-status-transition">
      <Title text1={data.title1} text2={data.title2} subtitle={data.subtitle} />
      <div className="overflow-x-auto rounded-xl bg-white dark:bg-white/5 border border-gray-300">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-gray-100 dark:bg-white/10">
            <tr>
              <th className="p-3 text-left">Current Status</th>
              <th className="p-3 text-left">Action</th>
              <th className="p-3 text-left">Actor</th>
              <th className="p-3 text-left">Next Status</th>
              <th className="p-3 text-left">Notes</th>
            </tr>
          </thead>
          <tbody>
            {data.data?.map((row, idx) => (
              <tr key={idx} className="border-t border-gray-300">
                <td className="p-3 font-mono">
                  <StatusBadge status={row.currentStatus} />
                </td>
                <td className="p-3">{row.action}</td>
                <td className="p-3">{row.actor}</td>
                <td>
                  {row.nextStatus !== "N/A" ? (
                    <StatusBadge status={row.nextStatus} />
                  ) : (
                    "-"
                  )}
                </td>
                <td className="p-3 text-gray-600 dark:text-gray-400">{row.notes ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
