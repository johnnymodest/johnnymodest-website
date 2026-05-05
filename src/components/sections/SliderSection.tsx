import { pairs } from "../../../content/before-after";
import BeforeAfterSlider from "../../components/BeforeAfterSlider";

export default function SliderSection() {
  return (
    <section className="section">
      <div className="shell">
        <h2>
          Drag the divider.
          <br />
          Watch the fluff dissolve.
        </h2>
        <div style={{ marginTop: "clamp(32px, 4vw, 56px)" }}>
          <BeforeAfterSlider pairs={pairs} />
        </div>
      </div>
    </section>
  );
}
