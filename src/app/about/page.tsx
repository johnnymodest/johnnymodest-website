import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaSection from "@/components/sections/CtaSection";
import DomainsSection from "@/components/sections/DomainsSection";
import TypewriterText from "@/components/TypewriterText";

export const metadata: Metadata = {
  title: "About — Johnny Modest",
  description: "Cross-domain pattern recognition.",
};
export default function AboutPage() {
  return (
    <>
      <section
        className="page-head"
        style={
          {
            "--ph-pad": "clamp(80px, 10vw, 140px)",
            "--ph-pad-b": "clamp(64px, 8vw, 96px)",
          } as React.CSSProperties
        }
      >
        <div className="shell">
          <h1>
            I&rsquo;m Tudor. <br></br>
            <em className="highlight">
              I{" "}
              <TypewriterText
                words={[
                  "solve problems",
                  "ask hard questions",
                  "speak business",
                  "speak engineering",
                  "lead teams",
                  "ship products",
                  "build systems",
                ]}
              />
              .
            </em>{" "}
            <br></br>I call it product leadership.
          </h1>
        </div>
      </section>

      <section className="section section--tight">
        <div className="shell">
          <div className="two-col">
            <div className="stack">
              <Image
                src="/content/tudor-photo-office-setting.png"
                alt="Tudor in his office"
                width={1792}
                height={2390}
                preload
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ width: "100%", height: "auto" }}
              />
              <p className="lead">
                <b>
                  I'm Tudor. I parachute into product orgs, read the room, fix
                  the problem, and move on.
                </b>
              </p>
            </div>
            <div className="stack">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p>
                  <b>My credentials</b>
                </p>
                <Link
                  href="https://www.linkedin.com/in/tudormarciu/"
                  target="_blank"
                  className="site-header__cta"
                >
                  View my profile &rarr;
                </Link>
              </div>
              <p>
                My background spans engineering, design, and product strategy. I
                can read code, sketch flows, write copy, and build a revenue
                model. I know which hat to wear and when to hand something off
                to someone better.
              </p>
              <p>
                Before going fully independent, I led product at a YC-backed
                startup, built internal platforms at enterprise scale, and
                shipped AI-powered features that moved real revenue numbers
                (upward). I&rsquo;ve been the first product hire, the interim
                CPO, and the person brought in to un-stick a $20M initiative.
              </p>
              <p>
                I&rsquo;ve also been told I'm easy to work with, which I
                consider a hard skill, rather than a personality bonus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="shell">
          <h2 style={{ marginBottom: "clamp(32px, 4vw, 56px)" }}>
            Frequent questions (answered)
          </h2>
          <div className="two-col">
            <div className="stack">
              <p>
                <b>Who is this for?</b>
              </p>
              <p>
                I work with product teams that are stuck, scaling fast, or
                building something genuinely new. Typically the team is strong
                but is missing a trained eye or a confident hand. It's not
                missing someone who will nod along and bill the hours, which is
                good, because I'm not that.
              </p>
              <p>
                <b>How long?</b>
              </p>
              <p>
                Most engagements run 6–14 weeks, but that's just an observation:
                each engagement is different, and what you need me to do might
                take less, or longer. The point is to get in, understand the
                actual problem (rarely the stated one), ship the fix, and build
                the system to run on its own.
              </p>
            </div>
            <div className="stack">
              <p>
                <b>How do you work?</b>
              </p>
              <p>
                I take on one engagement at a time, two at most. You get my full
                attention. I build trust by surfacing bad news early and
                refusing to dress it up as good news. I will tell you if I think
                you&rsquo;re wrong, and why. Then, when you've made an informed
                decision, I will support whatever course of action you choose.
              </p>
              <p>
                <b>I want to use Scrumban/SAFe/some specific framework</b>
              </p>
              <p>
                That&rsquo;s not really a question, but OK. I have a pragmatic
                approach to frameworks, agile or otherwise. The focus is on
                being productive, not fashionable so, if a framework is a good
                fit, I will use it. I&rsquo;ll even help implement it. But if
                all it adds is overhead, we&rsquo;ll have a talk about why, and
                about what resources you're willing to commit towards forcing
                it.
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
