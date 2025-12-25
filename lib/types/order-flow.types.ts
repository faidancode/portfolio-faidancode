// lib/types/order-flow.ts

export type OrderStatus =
  | "PENDING"
  | "PAID"
  | "DELIVERED"
  | "COMPLETED"
  | "CANCELLED";

export type OrderActor = "CUSTOMER" | "ADMIN" | "SYSTEM";

export interface OrderFlowEdge {
  from: OrderStatus;
  to: OrderStatus;
  action: string;
  actor: OrderActor;
  dashed?: boolean;
}

export interface OrderFlowData {
  states: OrderStatus[];
  edges: OrderFlowEdge[];
}

export interface OrderFlowDiagramData {
  title1: string;
  title2: string;
  subtitle: string;
  data: OrderFlowData;
}
