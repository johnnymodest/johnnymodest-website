export interface MetricItem {
  value: string;
  label: string;
}

export default function Metrics({ items }: { items: MetricItem[] }) {
  return (
    <div className="stat-grid">
      {items.map((m, i) => (
        <div className="stat-grid__item" key={i}>
          <div className="stat-grid__num">{m.value}</div>
          <div className="stat-grid__label">{m.label}</div>
        </div>
      ))}
    </div>
  );
}
