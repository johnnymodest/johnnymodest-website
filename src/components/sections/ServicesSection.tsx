import { services } from "../../../content/services";

export default function ServicesSection() {
  return (
    <section className="section">
      <div className="shell">
        <div
          className="row-between"
          style={{ marginBottom: "clamp(16px, 2vw, 32px)" }}
        >
          <h2>
            What you need<br></br>
            comes in <em>three buckets.</em>
          </h2>
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

        <div
          className="row-between"
          style={{ marginTop: "clamp(16px, 2vw, 32px)" }}
        >
          <p className="eyebrow" style={{ maxWidth: 380 }}>
            No bronze/silver/gold tiers or add-ons. <br></br>
            We talk about the actual need and shape the engagement around it.
            Like adults.
          </p>
        </div>
      </div>
    </section>
  );
}
