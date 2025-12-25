// ui/status-colors.ts

import { OrderStatus } from "@/lib/types/order-lifecycle";
import { PaymentStatus } from "@/lib/types/payment-status-mapping.types";

export const orderStatusColor: Record<OrderStatus, string> = {
  PENDING: "bg-yellow-100 text-yellow-800",
  PAID: "bg-blue-100 text-blue-800",
  PROCESSING: "bg-blue-100 text-blue-800",
  SHIPPED: "bg-blue-100 text-blue-800",
  DELIVERED: "bg-purple-100 text-purple-800",
  COMPLETED: "bg-green-100 text-green-800",
  CANCELLED: "bg-red-100 text-red-800",
};

export const paymentStatusColor: Record<PaymentStatus, string> = {
  UNPAID: "bg-yellow-100 text-yellow-800",
  PAID: "bg-green-100 text-green-800",
  EXPIRED: "bg-red-100 text-red-800",
  REFUNDED: "bg-gray-200 text-gray-800",
};
