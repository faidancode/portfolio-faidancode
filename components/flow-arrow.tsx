// FlowArrow.tsx
type Props = {
  label: string;
  dashed?: boolean;
};

export function FlowArrow({ label, dashed }: Props) {
  return (
    <div className="flex flex-col items-center gap-1">
      <svg width="70" height="20">
        <line
          x1="0"
          y1="10"
          x2="55"
          y2="10"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray={dashed ? '4 4' : '0'}
        />
        <polygon points="55,5 70,10 55,15" fill="currentColor" />
      </svg>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}
