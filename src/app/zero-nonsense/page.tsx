import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zero Nonsense — Johnny Modest",
  description: "What we believe, in plain language.",
};

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
            SOME CALL IT A MANIFESTO · I JUST FOLLOW THREE PRINCIPLES ·
            THAT&rsquo;S IT
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
        <div className="feature-block">
          <p className="feature-block__num">Principle 01</p>
          <h2 className="feature-block__title">
            Ideas that stand on their own, explained plainly.
          </h2>
          <p className="feature-block__body">
            Buzzwords, hyperbole, and bombastic phrasing are marketing copy are
            bleeding into business language. That&rsquo;s the wrong direction.
          </p>
          <p className="feature-block__body">
            Instead, we choose to rely on the idea&rsquo;s own strength, and we
            are willing to let go of ideas that require buzzwords and hyperbole
            to stand. Function over form.
          </p>
        </div>

        <div className="feature-block feature-block--highlight">
          <p className="feature-block__num">Principle 02</p>
          <h2 className="feature-block__title">Blame doesn't ship code.</h2>
          <p className="feature-block__body">
            The only thing that blame generates is excuses. Changes and setbacks
            are parts of the process, as is conflict.
          </p>
          <p className="feature-block__body">
            We believe in a pragmatic approach, where blame is stipped away in
            communication, everyone speaks freely, and the focus stays on fixing
            what's broken.
          </p>
        </div>

        <div className="feature-block">
          <p className="feature-block__num">Principle 03</p>
          <h2 className="feature-block__title">Problems don't go away.</h2>
          <p className="feature-block__body">
            Wishful thinking is not a communication strategy. It only allows
            issues to grow, whether it's in strategy, workflows, or rapport.
          </p>
          <p className="feature-block__body">
            We believe in surfacing issues early, so they don't have time to
            grow, fester, or compound. We state the problem clearly, early, and
            without blame.
          </p>
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
            perspective. We tend to think about things, especially difficult
            things, logically. Humor, by definition, breaks logic, allowing us
            to have a perspective we might miss on a normal train of thought.
          </p>
        </div>
      </section>
    </>
  );
}
