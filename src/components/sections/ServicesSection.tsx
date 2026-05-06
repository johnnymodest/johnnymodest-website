import { services } from "../../../content/services";

export default function ServicesSection() {
  return (
    <section className="section">
      <div className="shell">
        <div
          className="row-between"
          style={{ marginBottom: "clamp(32px, 4vw, 56px)" }}
        >
          <p className="eyebrow">
            I do three things, and they cover most needs.
          </p>
          <p className="lead" style={{ maxWidth: 380 }}>
            No bronze/silver/gold tiers or add-ons. <br></br>
            We talk about the actual need and shape the engagement around it.
            Like adults.
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
