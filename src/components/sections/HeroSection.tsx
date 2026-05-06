import TypewriterText from "@/components/TypewriterText";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="shell">
        <div className="hero__grid">
          <h1 className="hero__title">
            Senior product
            <br />
            leadership.
            <br />
            <TypewriterText />
            <br />
            Zero nonsense.
          </h1>
          <div className="hero__lead-row">
            <p className="lead">
              I parachute into stuck product orgs, find the things you can't see
              from the inside, ship the fix, and move on before I become
              furniture.
            </p>
            <div className="hero__meta">
              <span className="tag tag--amber">
                <span className="tag__dot" /> BOOKING Q3
              </span>
              <span className="tag">FROM $80/HR</span>
              <span className="tag">REMOTE · BUCHAREST</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
