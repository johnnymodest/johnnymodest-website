import { pairs } from "../../../content/before-after";
import BeforeAfterSlider from "../../components/BeforeAfterSlider";
import Link from "next/link";

export default function SliderSection() {
  return (
    <section className="section">
      <div className="shell">
        <h2>
          State things clearly.
          <br />
          Watch the fluff dissolve.
        </h2>
        <div style={{ marginTop: "clamp(32px, 4vw, 56px)" }}>
          <p className="lead" style={{ maxWidth: "52ch" }}>
            I'm a Senior Product Manager with{" "}
            <strong>10+ years in global SaaS</strong> and a software engineering
            background that never really switched off.
          </p>
          <br></br>
          <p className="lead" style={{ maxWidth: "52ch" }}>
            I've been at this long enough to know that <strong>clarity</strong>{" "}
            is an organization's greatest asset. From product vision, to problem
            statement, to technical requirements.
          </p>
          <br></br>
        </div>
        <div style={{ marginTop: "clamp(32px, 4vw, 56px)" }}>
          <BeforeAfterSlider pairs={pairs} />
        </div>
        <p className="lead" style={{ maxWidth: "52ch" }}>
          My <em className="highlight">zero-nonsense</em> approach means a
          return to this clarity in communication, by getting rid of bombastic
          phrasing, hyperbole, and euphemisms.
        </p>
        <div style={{ marginTop: "clamp(24px, 3vw, 40px)" }}>
          <Link href="/zero-nonsense" className="amber-link">
            More about zero nonsense →
          </Link>
        </div>
      </div>
    </section>
  );
}
