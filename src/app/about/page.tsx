import type { Metadata } from "next";

const domains = [
  "01 Developer tools",
  "02 B2B SaaS",
  "03 Marketplaces",
  "04 Academic media",
  "05 Edtech",
  "06 Fintech (consumer)",
  "07 Agriculture",
  "08 Email infrastructure",
  "09 Logistics",
  "10 Subscription products",
  "11 Vertical AI",
  "12 Internal platforms",
];

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
            You hire me because I&rsquo;ll see things your team can&rsquo;t
            see <em>from the inside.</em>
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
                I can read code, sketch flows, write copy, and build a
                financial model. I know which hat to wear and when to hand
                something off to someone better.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="shell">
          <h2 style={{ marginBottom: "clamp(32px, 4vw, 56px)" }}>
            Domains I&rsquo;ve worked in
          </h2>

          <div className="domains">
            {domains.map((d) => (
              <div key={d} className="domain">
                <span className="domain__num">{d.slice(0, 2)}</span>
                {d.slice(3)}
              </div>
            ))}
          </div>

          <p className="muted" style={{ marginTop: 20, fontSize: 14 }}>
            If your industry isn&rsquo;t on this list, that&rsquo;s not a
            disqualifier. Tell me about it — the cross-domain thing only works
            if there are new domains.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="shell">
          <h2 className="cta__title">Get a 30-minute no-agenda call.</h2>
          <div className="cta__row">
            <a href="/contact" className="btn">
              Send a brief <span className="btn__arrow">→</span>
            </a>
            <a href="mailto:hello@johnnymodest.com" className="btn btn--ghost">
              hello@johnnymodest.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
