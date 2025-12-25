import { cn } from "@/lib/utils";
import { orderStatusColor } from "./status-colors";
import { OrderStatus } from "@/lib/types/order-staus-transition.types";

type StatusBadgeVariant = "table" | "flow";

type StatusBadgeProps = {
  status: OrderStatus;
  variant?: StatusBadgeVariant;
};

export function StatusBadge({ status, variant = "table" }: StatusBadgeProps) {
  const base = "inline-flex items-center rounded font-medium whitespace-nowrap";

  const variantClass = {
    table: "px-2 py-1 text-xs",
    flow: "px-3 py-1.5 text-sm",
  }[variant];

  return (
    <span className={cn(base, variantClass, orderStatusColor[status])}>
      {status}
    </span>
  );
}
