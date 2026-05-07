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
          <p>
            I'm a Senior Product Manager with{" "}
            <em className="highlight">10+ years in global SaaS</em> and a
            software engineering background that never really switched off.
          </p>
          <br></br>
          <p>
            I've been at this long enough to know that{" "}
            <em className="highlight">clarity</em> is an organization's greatest
            asset. From product vision, to problem statement, to technical
            requirements.
          </p>
          <br></br>
          <p>
            My <em className="highlight">zero-nonsense</em> approach means a
            return to this clarity in communication, by getting rid of bombastic
            phrasing, hyperbole, and euphemisms.
          </p>
        </div>
        <div style={{ marginTop: "clamp(32px, 4vw, 56px)" }}>
          <BeforeAfterSlider pairs={pairs} />
        </div>
        <div style={{ marginTop: "clamp(24px, 3vw, 40px)" }}>
          <Link href="/case-studies" className="amber-link">
            More about zero nonsense →
          </Link>
        </div>
      </div>
    </section>
  );
}
