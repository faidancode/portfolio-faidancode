// types/order-status-transition.types.ts

export type OrderStatus =
  | "PENDING"
  | "PAID"
  | "PROCESSING"
  | "SHIPPED"
  | "DELIVERED"
  | "COMPLETED"
  | "CANCELLED";

export type OrderActor = "CUSTOMER" | "ADMIN" | "SYSTEM" | "N/A";

export type OrderStatusTransitionItem = {
  currentStatus: OrderStatus;
  action: string;
  actor: OrderActor;
  nextStatus: OrderStatus | "N/A";
  notes?: string;
};

export type OrderStatusTransitionData = {
  title1: string;
  title2: string;
  subtitle: string;
  data: OrderStatusTransitionItem[];
};
