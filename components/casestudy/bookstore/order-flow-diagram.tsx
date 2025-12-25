// OrderFlowDiagram.tsx

import { FlowArrow } from "@/components/flow-arrow";
import Section from "@/components/section";
import { StatusBadge } from "@/components/status-badge";
import { Title } from "@/components/title";
import { OrderFlowDiagramData } from "@/lib/types/order-flow.types";
type Props = {
  data: OrderFlowDiagramData;
};
export function OrderFlowDiagram({ data }: Props) {
  const { title1, title2, subtitle, data: flow } = data;

  const mainEdges = flow.edges.filter((e) => !e.dashed && e.to !== "CANCELLED");

  const cancelEdges = flow.edges.filter((e) => e.to === "CANCELLED");
  return (
    <Section id="order-flow">
      <Title text1={title1} text2={title2} subtitle={subtitle} />

      <div className="flex flex-col bg-white dark:bg-white/5 rounded-lg p-4 gap-6">
        {/* Main Flow */}
        <div className="overflow-x-auto">
          <div className="mb-3 text-sm font-semibold text-muted-foreground">
            Main Flow
          </div>

          <div className="flex items-center gap-6 min-w-180">
            {flow.states.map((state) => {
              const edge = mainEdges.find((e) => e.from === state);

              return (
                <div key={state} className="flex items-center gap-4">
                  <StatusBadge status={state} variant="flow" />
                  {edge && (
                    <FlowArrow label={`${edge.action} (${edge.actor})`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Cancellation Paths */}
        <div>
          <div className="mb-3 text-sm font-semibold text-muted-foreground">
            Cancellation Paths
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <StatusBadge status="PENDING" variant="flow" />

            {cancelEdges.map((edge, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <FlowArrow label={`${edge.action} (${edge.actor})`} dashed />
                <StatusBadge status="CANCELLED" variant="flow" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
