import { PaymentStatusBagdge } from "@/components/payment-status-badge";
import Section from "@/components/section";
import { StatusBadge } from "@/components/status-badge";
import { Title } from "@/components/title";
import { PaymentStatusMappingData } from "@/lib/types/payment-status-mapping.types";

type Props = {
  data: PaymentStatusMappingData;
};

export function PaymentStatusMappingTable({ data }: Props) {
  return (
    <Section id="payment-mapping">
      <Title text1={data.title1} text2={data.title2} subtitle={data.subtitle} />
      <div className="overflow-x-auto rounded-xl border border-gray-300">
        <table className="w-full bg-white dark:bg-white/5 border-collapse text-sm">
          <thead className="bg-gray-100 dark:bg-white/10">
            <tr>
              <th className="p-3 text-left">Order Status</th>
              <th className="p-3 text-left">Payment Status</th>
              <th className="p-3 text-left">Notes</th>
            </tr>
          </thead>
          <tbody>
            {data.data?.map((row, idx) => (
              <tr key={idx} className="border-t border-gray-200">
                <td className="p-3 font-mono">
                  <StatusBadge status={row.orderStatus} />
                </td>
                <td className="p-3 font-mono">
                  <PaymentStatusBagdge status={row.paymentStatus} />
                </td>
                <td className="p-3 text-gray-600 dark:text-gray-400">
                  {row.notes ?? "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
