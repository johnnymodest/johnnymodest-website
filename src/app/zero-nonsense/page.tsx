import type { Metadata } from "next";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import type { Pair } from "../../../content/before-after";

export const metadata: Metadata = {
  title: "Zero Nonsense — Johnny Modest",
  description: "What we believe, in plain language.",
};

const principle1Pairs: Pair[] = [
  {
    context: "QUARTERLY REVIEW · Q2 RETRO",
    before:
      "We need to leverage our core competencies to synergize cross-functional value delivery.",
    after: "We're good at X. Let's do more of it.",
  },
  {
    context: "PRODUCT PITCH · VERSION 3",
    before:
      "This initiative will holistically transform our go-to-market paradigm.",
    after: "This will help us sell to a new type of customer.",
  },
];

const principle2Pairs: Pair[] = [
  {
    context: "POST-MORTEM · SPRINT 17",
    before: "The engineering team failed to deliver on the committed timeline.",
    after:
      "The timeline was tight and we didn't have a flagging process. Let's add a weekly check-in.",
  },
  {
    context: "TEAM RETRO · SPRINT 9",
    before:
      "Design keeps changing requirements mid-sprint and it's tanking our velocity.",
    after:
      "We're locking requirements at sprint start. If something urgent comes up, we swap an equal-sized task out.",
  },
];

const principle3Pairs: Pair[] = [
  {
    context: "SHIP DECISION · MAY 2024",
    before:
      "We're monitoring the situation and will circle back if it becomes a priority.",
    after: "This is a problem. We can't fix it now. Here's when we will.",
  },
  {
    context: "CLIENT CHECK-IN · Q4",
    before:
      "There are some minor concerns around adoption but we're cautiously optimistic.",
    after: "Adoption is lower than expected. We need to find out why.",
  },
];

export default function ZeroNonsensePage() {
  return (
    <>
      <section
        className="page-head"
        style={
          {
            "--ph-pad": "clamp(120px, 18vh, 200px)",
            "--ph-pad-b": "clamp(80px, 10vw, 140px)",
          } as React.CSSProperties
        }
      >
        <div className="shell">
          <p className="eyebrow">
            SOME CALL IT A MANIFESTO · I JUST FOLLOW THREE PRINCIPLES · I TESTED
            THEM FOR YEARS
          </p>
          <h1>
            Zero <em className="highlight">Nonsense.</em>
          </h1>
          <p className="lead" style={{ marginTop: "clamp(24px, 3vw, 40px)" }}>
            What we believe, in plain language. If you read these and nod,
            we&rsquo;ll probably get along.
          </p>
        </div>
      </section>

      <div className="shell">
        <div className="principle-row">
          <p className="feature-block__num">Principle 01</p>
          <h2 className="feature-block__title">
            Ideas that stand on their own, explained plainly.
          </h2>
          <div className="principle-row__body">
            <BeforeAfterSlider pairs={principle1Pairs} />
            <div style={{ marginTop: "clamp(48px, 8vw, 64px)" }}>
              <p className="feature-block__body">
                Buzzwords, hyperbole, and bombastic phrasing are marketing copy
                bleeding into business language. That&rsquo;s the wrong
                direction.
              </p>
              <p className="feature-block__body">
                Instead, we choose to rely on the idea&rsquo;s own strength, and
                we are willing to let go of ideas that require buzzwords and
                hyperbole to stand. Function over form.
              </p>
            </div>
          </div>
        </div>

        <div className="principle-row principle-row--highlight">
          <p className="feature-block__num">Principle 02</p>
          <h2 className="feature-block__title">Blame doesn't ship code.</h2>
          <div className="principle-row__body">
            <BeforeAfterSlider pairs={principle2Pairs} />
            <div style={{ marginTop: "clamp(48px, 8vw, 64px)" }}>
              <p className="feature-block__body">
                The only thing that blame generates is excuses. Changes and
                setbacks are parts of the process, as is conflict.
              </p>
              <p className="feature-block__body">
                We believe in a pragmatic approach, where blame is stripped away
                in communication, everyone speaks freely, and the focus stays on
                fixing what's broken.
              </p>
            </div>
          </div>
        </div>

        <div className="principle-row">
          <p className="feature-block__num">Principle 03</p>
          <h2 className="feature-block__title">Problems don't go away.</h2>
          <div className="principle-row__body">
            <BeforeAfterSlider pairs={principle3Pairs} />
            <div style={{ marginTop: "clamp(48px, 8vw, 64px)" }}>
              <p className="feature-block__body">
                Wishful thinking is not a communication strategy. It only allows
                issues to grow, whether it's in strategy, workflows, or rapport.
              </p>
              <p className="feature-block__body">
                We believe in surfacing issues early, so they don't have time to
                compound. We state the problem clearly, early, and without
                blame.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <section className="section">
        <div className="shell">
          <h2>
            <em className="highlight">A little bit of humor</em> helps.
          </h2>
          <p className="feature-block__body">
            That one isn&rsquo;t a principle. We just believe that it helps gain
            perspective.
          </p>
        </div>
      </section>
    </>
  );
}
