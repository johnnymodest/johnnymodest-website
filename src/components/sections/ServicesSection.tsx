import { services } from "../../../content/services";

export default function ServicesSection() {
  return (
    <section className="section">
      <div className="shell">
        <div className="row-between" style={{ marginBottom: "clamp(32px, 4vw, 56px)" }}>
          <p className="eyebrow">THREE THINGS. NOT FOUR.</p>
          <p className="lead" style={{ maxWidth: 380 }}>
            No bronze/silver/gold tiers. No packages. We talk about the
            actual problem and shape the engagement around it.
          </p>
        </div>

        <div className="services">
          {services.map((s) => (
            <div key={s.num} className="service">
              <div className="service__num">{s.num}</div>
              <h3 className="service__title">{s.title}</h3>
              <p className="service__body">{s.body}</p>
              <p className="service__meta">{s.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
