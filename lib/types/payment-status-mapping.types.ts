// types/payment-status-mapping.types.ts

import { OrderStatus } from "./order-lifecycle";

export type PaymentStatus = "UNPAID" | "PAID" | "EXPIRED" | "REFUNDED";

export type PaymentStatusMappingItem = {
  orderStatus: OrderStatus;
  paymentStatus: PaymentStatus;
  notes?: string;
};

export type PaymentStatusMappingData = {
  title1: string;
  title2: string;
  subtitle: string;
  data: PaymentStatusMappingItem[];
};
