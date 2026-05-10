import TypewriterText from "@/components/TypewriterText";
import { getNextQuarter } from "@/lib/utils";
import Link from "next/link";

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
            <TypewriterText words={["Build", "Fix", "Ship"]} /> it.
            <br />
            <em className="highlight">Zero-nonsense</em> Product leadership.
          </h1>
          <div className="page-head__body">
            <p className="lead">
              I'm Tudor, a Senior Product Manager with{" "}
              <strong>10+ years in global SaaS</strong> and a software
              engineering background that never really switched off.
            </p>
            <br></br>
            <p className="lead">
              I parachute into product orgs, read the room, and fix the problem.
              Then I move on.
            </p>
            <div className="page-head__meta">
              <Link href="/contact" className="tag tag--amber">
                <span className="tag__dot" /> BOOKING {nextQuarter}
              </Link>
              <span className="tag">FROM $80/HR</span>
              <span className="tag">REMOTE · EEST</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
