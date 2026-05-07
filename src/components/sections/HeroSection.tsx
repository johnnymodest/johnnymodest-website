import TypewriterText from "@/components/TypewriterText";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="shell">
        <div className="hero__grid">
          <h1 className="hero__title">
            <TypewriterText />
            <br />
            <em className="highlight">Zero-nonsense</em>{" "}
            Product leadership.
          </h1>
          <div className="hero__lead-row">
            <p className="lead">
              Hi there! I'm Tudor. I parachute into product orgs, read the room,
              fix the problem, and move on.
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
