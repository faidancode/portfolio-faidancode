import { OrderStatus } from "@/lib/types/order-flow";
import { cn } from "@/lib/utils";
import { orderStatusColor, paymentStatusColor } from "./status-colors";
import { PaymentStatus } from "@/lib/types/payment-status-mapping.types";

type PaymentStatusBagdgeVariant = "table" | "flow";

type PaymentStatusBagdgeProps = {
  status: PaymentStatus;
  variant?: PaymentStatusBagdgeVariant;
};

export function PaymentStatusBagdge({
  status,
  variant = "table",
}: PaymentStatusBagdgeProps) {
  const base = "inline-flex items-center rounded font-medium whitespace-nowrap";

  const variantClass = {
    table: "px-2 py-1 text-xs",
    flow: "px-3 py-1.5 text-sm",
  }[variant];

  return (
    <span className={cn(base, variantClass, paymentStatusColor[status])}>
      {status}
    </span>
  );
}
