export interface MetricItem {
  value: string;
  label: string;
}

export default function Metrics({ items }: { items: MetricItem[] }) {
  return (
    <div className="metrics">
      {items.map((m, i) => (
        <div className="metric" key={i}>
          <div className="metric__num">{m.value}</div>
          <div className="metric__label">{m.label}</div>
        </div>
      ))}
    </div>
  );
}
