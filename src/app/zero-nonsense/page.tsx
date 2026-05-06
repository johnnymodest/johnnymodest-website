import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zero Nonsense — Johnny Modest",
  description: "What we believe, in plain language.",
};

export default function ZeroNonsensePage() {
  return (
    <>
      <section className="manifesto-hero">
        <div className="shell">
          <p className="eyebrow">
            THE MANIFESTO · TWO PRINCIPLES · THAT&rsquo;S IT
          </p>
          <h1>
            Zero <em>Nonsense.</em>
          </h1>
          <p className="lead" style={{ marginTop: "clamp(24px, 3vw, 40px)" }}>
            What we believe, in plain language. If you read these and nod,
            we&rsquo;ll probably get along.
          </p>
        </div>
      </section>

      <div className="shell">
        <div className="principle">
          <p className="principle__num">Principle 01</p>
          <h2 className="principle__text">
            Ideas that stand on their own, explained plainly.
          </h2>
          <p className="principle__caption">
            Buzzwords, hyperbole, and bombastic phrasing are marketing copy
            bleeding into business language. We don&rsquo;t believe that&rsquo;s
            the right direction.
          </p>
          <p className="principle__caption">
            Instead, we choose to rely on idea&rsquo;s own strength, and we are
            willing to let go of ideas that require buzzwords and hyperbole to
            stand. Function over form.
          </p>
        </div>

        <hr />

        <div className="principle principle--amber">
          <p className="principle__num">Principle 02</p>
          <h2 className="principle__text">Say what&rsquo;s true, early.</h2>
          <p className="principle__caption">
            We believe in stating intentions or agenda clearly, and in
            acknowledging mistakes made on either side of the conversation
            directly.
          </p>
          <p className="principle__caption">
            We also believe setbacks and conflict are natural parts of any
            process, and need to be surfaced early, so they can be addressed.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="shell">
          <h2>
            We also believe a <em>little bit of humor</em> is fine.
          </h2>
          <p className="principle__caption">
            That one isn&rsquo;t a principle. We just believe that the more
            effort spent curating one&rsquo;s external persona, the less can be
            spent on the task at hand. And that&rsquo;s quite a bit more
            nonsense than zero.
          </p>
        </div>
      </section>
    </>
  );
}
