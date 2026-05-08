import TypewriterText from "@/components/TypewriterText";
import { getNextQuarter } from "@/lib/utils";

export default function HeroSection() {
  const nextQuarter = getNextQuarter();

  return (
    <section
      className="page-head page-head--border"
      style={
        {
          "--ph-pad": "clamp(48px, 7vw, 120px)",
          "--ph-pad-b": "clamp(56px, 7vw, 96px)",
        } as React.CSSProperties
      }
    >
      <div className="shell">
        <div className="page-head__inner">
          <h1 className="page-head__title">
            <TypewriterText />
            <br />
            <em className="highlight">Zero-nonsense</em>{" "}
            Product leadership.
          </h1>
          <div className="page-head__body">
            <p className="lead">
              Hi there! I'm Tudor. I parachute into product orgs, read the room,
              fix the problem, and move on.
            </p>
            <div className="page-head__meta">
              <span className="tag tag--amber">
                <span className="tag__dot" /> BOOKING {nextQuarter}
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
