import { pairs } from "../../../content/before-after";
import BeforeAfterSlider from "../../components/BeforeAfterSlider";
import Link from "next/link";

export default function SliderSection() {
  return (
    <section className="section">
      <div className="shell">
        <h2>Solutions in plain English</h2>
        <div style={{ marginTop: "clamp(32px, 4vw, 56px)" }}>
          <p className="lead" style={{ maxWidth: "52ch" }}>
            I've been at this long enough to know that{" "}
            <strong>stating things clearly</strong> is deceptively hard to do.
            But once done, you're well on your way to solving the problem.
          </p>
        </div>
        <div style={{ marginTop: "clamp(16px, 4vw, 32px)" }}>
          <BeforeAfterSlider pairs={pairs} />
        </div>
        <p
          className="lead"
          style={{ maxWidth: "52ch", marginTop: "clamp(32px, 4vw, 56px)" }}
        >
          My <em className="highlight">zero-nonsense</em> approach means
          focusing on the problem and solution, not on sounding cool.
        </p>
        <div style={{ marginTop: "clamp(24px, 2vw, 40px)" }}>
          <Link href="/zero-nonsense" className="amber-link">
            More about zero nonsense →
          </Link>
        </div>
      </div>
    </section>
  );
}
