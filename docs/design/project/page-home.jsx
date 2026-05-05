/* JohnnyModest — Home page */

function HomePage({ tweaks }) {
  const heroVariants = {
    direct: {
      eyebrow: "Senior product leadership · Available now",
      title: <>Senior product leadership. <em>Fix the thing.</em> High-five.</>,
      lead: "I parachute into stuck product orgs, find the things you can't see from the inside, ship the fix, and exit before I become furniture.",
    },
    dry: {
      eyebrow: "Senior product leadership · Available now",
      title: <>Most consultancies sell decks. <em>I ship.</em></>,
      lead: "Twelve years of cross-domain pattern recognition, applied to whatever's actually broken in your product org. No frameworks named after vegetables.",
    },
    stark: {
      eyebrow: "Johnny Modest Consultancy",
      title: <><em>Zero-nonsense</em> consulting.</>,
      lead: "Plain language. Uncomfortable conversations sooner rather than later. Data-driven decisions. Buzzwords are not a substitute for clear thinking.",
    },
  };
  const v = heroVariants[tweaks.hero] || heroVariants.direct;

  const pairs = [
    {
      before: "Leveraging synergistic cross-functional alignment to holistically drive stakeholder value across the product ecosystem.",
      after: "We got the teams talking to each other. The product shipped on time.",
      tag: "Quarterly review · Q2 retro",
    },
    {
      before: "We're activating a transformative AI-first paradigm shift to unlock next-generation customer-centric experiences at scale.",
      after: "We added a smart search box. People found things. They bought more.",
      tag: "Product strategy memo",
    },
    {
      before: "Our north-star metric strategy will incentivize cross-pillar collaboration around shared OKR ownership rituals.",
      after: "Two teams want the same number to go up. They share a Slack channel now.",
      tag: "Org redesign proposal",
    },
    {
      before: "We're investing in a holistic re-imagining of the onboarding journey to maximize day-one engagement velocity.",
      after: "New users hit a wall on step three. We removed step three.",
      tag: "Activation deep dive",
    },
    {
      before: "Pursuing strategic optionality through a phased capability-build initiative to derisk our market entry posture.",
      after: "We don't know if this will work. So we're going to ship a small version and find out.",
      tag: "Geo expansion brief",
    },
  ];

  const services = [
    { num: "01", title: "Product Strategy & GTM", body: "Where does the product actually win? What's the order of operations? Who do we talk to first, and what do we say? Strategy that survives contact with the calendar.", meta: "2–8 week engagements" },
    { num: "02", title: "Hands-on Product Leadership", body: "I parachute in, course-correct, build systems that run without me, then leave. Not day-to-day management. Fix and exit. Most engagements end with me being unnecessary — that's the goal.", meta: "6–14 week engagements" },
    { num: "03", title: "Tooling & Workflow Setup", body: "Modern stack including AI tooling, set up so your team is faster on Monday than they were on Friday. Without leading with the buzzword.", meta: "1–4 week engagements" },
  ];

  return (
    <main className="page-enter">
      {/* Hero */}
      <section className="hero">
        <div className="shell shell--wide">
          <div className="eyebrow" style={{ marginBottom: 32 }}>{v.eyebrow}</div>
          <h1 className="hero__title">{v.title}</h1>
          <div className="hero__lead-row">
            <p className="lead">{v.lead}</p>
            <div className="hero__meta">
              <span className="tag tag--amber"><span className="tag__dot" />Booking Q3</span>
              <span className="tag">From $80/hr</span>
              <span className="tag">Remote · Bucharest</span>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="section">
        <div className="shell shell--wide">
          <div className="row-between" style={{ marginBottom: 40 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>The Zero Nonsense principle, in two paragraphs</div>
              <h2 style={{ maxWidth: "16ch" }}>Drag the divider. Watch the fluff dissolve.</h2>
            </div>
            <a href="#/zero-nonsense" className="btn btn--ghost" onClick={(e) => navTo(e, "zero-nonsense")}>
              Read the manifesto <Arrow />
            </a>
          </div>
          <BeforeAfter pairs={pairs} />
        </div>
      </section>

      <hr className="rule" />

      {/* Services */}
      <section className="section">
        <div className="shell shell--wide">
          <div className="row-between" style={{ marginBottom: clamp(32) }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Three things. Not four.</div>
              <h2 style={{ maxWidth: "18ch" }}>What I actually do for you.</h2>
            </div>
            <p className="muted text-mono" style={{ fontSize: 12, maxWidth: "32ch", letterSpacing: "0.04em" }}>
              No bronze/silver/gold tiers. No packages. We talk about the actual problem and shape the engagement around it.
            </p>
          </div>

          <div className="services">
            {services.map((s) => (
              <div className="service" key={s.num}>
                <div className="service__num">{s.num}</div>
                <h3 className="service__title">{s.title}</h3>
                <p className="service__body">{s.body}</p>
                <div className="service__meta">{s.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rate anchor */}
      <section className="rate">
        <div className="shell shell--wide">
          <div className="rate__grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: 24, color: "rgba(255,255,255,0.5)" }}>Rate, plainly</div>
              <div className="rate__num">$80<span>/hr</span></div>
            </div>
            <div className="rate__notes">
              <p><b>Starting rate.</b> Shorter or more urgent engagements cost more. That's not punishment, it's calendar math.</p>
              <p><b>Longer commits</b> may be negotiated down. We talk like adults about it.</p>
              <p><b>Scope changes</b> are welcome — they need dedicated time and resources to be done right. This is stated clearly here, not hidden in small print.</p>
              <p style={{ paddingTop: 8 }}>
                <a href="#/contact" className="amber-link" onClick={(e) => navTo(e, "contact")} style={{ color: "var(--amber)", fontWeight: 500 }}>
                  Tell me about the engagement →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected work teaser */}
      <section className="section">
        <div className="shell shell--wide">
          <div className="row-between" style={{ marginBottom: 40 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Selected work</div>
              <h2 style={{ maxWidth: "18ch" }}>What it looks like when it's working.</h2>
            </div>
            <a href="#/work" className="btn btn--ghost" onClick={(e) => navTo(e, "work")}>All case studies <Arrow /></a>
          </div>

          <div className="cs-list">
            {[
              { num: "01", title: "AI-powered geographic expansion", client: "Private Company · Agriculture", year: "2024", slug: "case-geo" },
              { num: "02", title: "LLM-based spam detection at scale", client: "Mailtrap", year: "2023", slug: "case-mailtrap", nda: false },
              { num: "03", title: "ML display optimization, +38% engagement", client: "TrendMD", year: "2022", slug: "case-trendmd" },
            ].map((c) => (
              <a key={c.num} className="cs-row" href={"#/" + c.slug} onClick={(e) => navTo(e, c.slug)}>
                <div className="cs-row__num">{c.num}</div>
                <div className="cs-row__title">
                  {c.title}
                  {c.client.includes("Private") && <span className="cs-row__nda">NDA</span>}
                </div>
                <div className="cs-row__client">{c.client}</div>
                <div className="cs-row__year">{c.year}</div>
                <div className="cs-row__arrow"><Arrow /></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="shell shell--wide">
          <div className="eyebrow" style={{ marginBottom: 24, color: "var(--amber-text)", opacity: 0.7 }}>The point of this page</div>
          <h2 className="cta__title">If something's stuck, let's talk about it.</h2>
          <div className="cta__row">
            <a href="#/contact" className="btn" onClick={(e) => navTo(e, "contact")}>Send a brief <Arrow /></a>
            <a href="mailto:hello@johnnymodest.com" className="btn btn--ghost">hello@johnnymodest.com</a>
          </div>
        </div>
      </section>
    </main>
  );
}

const clamp = (px) => `clamp(${Math.round(px*0.6)}px, 4vw, ${px}px)`;

window.HomePage = HomePage;
