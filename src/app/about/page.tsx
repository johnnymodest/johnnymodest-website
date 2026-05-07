import type { Metadata } from "next";
import CtaSection from "@/components/sections/CtaSection";
import DomainsSection from "@/components/sections/DomainsSection";

export const metadata: Metadata = {
  title: "About — Johnny Modest",
  description: "Cross-domain pattern recognition.",
};
export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="shell">
          <h1>
            You hire me because I&rsquo;ll see things your team can&rsquo;t see{" "}
            <em className="highlight">from the inside.</em>
          </h1>
        </div>
      </section>

      <section className="section section--tight">
        <div className="shell">
          <div className="about-grid">
            <div className="stack">
              <p>
                I work with product teams that are stuck, scaling fast, or
                building something genuinely new. Typically the team is strong
                but missing a particular lens — someone who can see the shape of
                the problem from outside the org chart.
              </p>
              <p>
                I don&rsquo;t do long engagements. Most run 6–14 weeks. The
                point is to get in, understand the actual problem (rarely the
                stated one), ship the fix, and build the system to run without
                me. Then I exit.
              </p>
              <p>
                Before going independent I led product at a YC-backed startup,
                built internal platforms at enterprise scale, and shipped
                ML-powered features that moved real revenue numbers. I&rsquo;ve
                been the first product hire, the interim CPO, and the person
                brought in to un-stick a $20M initiative.
              </p>
            </div>

            <div className="stack">
              <p>
                <b>How I work, briefly.</b>
              </p>
              <p>
                I take on one engagement at a time, two at most. You get my full
                attention. I build trust by surfacing bad news early and
                refusing to dress it up as good news. I will tell you when your
                instinct is right and when it&rsquo;s about to cost you six
                figures.
              </p>
              <p>
                I don&rsquo;t use frameworks as crutches. If a framework helps
                communicate, fine. If it replaces thinking, we skip it. Every
                recommendation comes with the reasoning attached — you should
                never have to take my word for it.
              </p>
              <p>
                My background spans engineering, design, and business strategy.
                I can read code, sketch flows, write copy, and build a financial
                model. I know which hat to wear and when to hand something off
                to someone better.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DomainsSection />

      <CtaSection
        title="Got a 30-minute version of the problem?"
        primaryHref="/contact"
        primaryLabel="Send a brief"
      />
    </>
  );
}
