/* JohnnyModest — Zero Nonsense manifesto + Case Studies + About + Contact */

const { useState: uS, useEffect: uE, useRef: uR } = React;

/* ============ Zero Nonsense ============ */
function ZeroNonsensePage() {
  const principles = [
    {
      num: "01",
      text: <>We are actively trying to return the business environment to <em>truth and clarity</em>.</>,
      caption: "The mission, in one sentence. Everything below follows from this.",
    },
    {
      num: "02",
      text: <>In a world where <em>buzzwords and bombastic wording</em> are routinely used instead of clear arguments, we choose to rely on an idea's own strength — and let go of ideas that cannot stand on their own.</>,
      caption: "If a sentence needs three adjectives to make a point, the point isn't there.",
      amber: true,
    },
    {
      num: "03",
      text: <>We accept that conflict exists, and that avoiding it at all costs is a <em>recipe for failure</em>.</>,
      caption: "The expensive disagreements are the ones you don't have on time.",
    },
    {
      num: "04",
      text: <>We believe in having <em>uncomfortable conversations</em> sooner rather than later.</>,
      caption: "Six weeks is a more expensive medium for the same conversation than six minutes.",
    },
    {
      num: "05",
      text: <>We recognize that setbacks are part of everyday life, and choose to <em>point them out early and directly</em>.</>,
      caption: "Surprises in week eleven are usually visible in week two if anyone is looking.",
      amber: true,
    },
    {
      num: "06",
      text: <>We believe in <em>data-driven decisions</em>, clear goals, and not adding an item to a list just because three is a good number to have.</>,
      caption: "This list has six items because six was the number it ended at. There is no seventh.",
    },
  ];

  uE(() => {
    const els = document.querySelectorAll(".principle");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("is-revealed"); });
    }, { threshold: 0.25 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="page-enter">
      <section className="manifesto-hero">
        <div className="shell">
          <div className="eyebrow" style={{ marginBottom: 32 }}>The manifesto · Six principles · Scroll on</div>
          <h1 style={{ maxWidth: "12ch" }}>Zero <em style={{ fontStyle: "normal", background: "var(--amber)", color: "var(--amber-text)", padding: "0 0.18em" }}>Nonsense</em>.</h1>
          <p className="lead" style={{ marginTop: 32 }}>
            What we believe, in plain language. If you read these and nod, we'll probably get along.
          </p>
        </div>
      </section>

      <div className="shell">
        {principles.map((p) => (
          <article key={p.num} className={"principle" + (p.amber ? " principle--amber" : "")}>
            <div className="principle__num">Principle <span>{p.num}</span> / 06</div>
            <h2 className="principle__text">{p.text}</h2>
            <p className="principle__caption">{p.caption}</p>
          </article>
        ))}

        <article className="principle is-revealed">
          <div className="principle__num">Footnote</div>
          <h2 className="principle__text" style={{ fontSize: "clamp(28px, 4.4vw, 60px)" }}>
            We also believe a <em>little bit of humor</em> is nice.
          </h2>
          <p className="principle__caption">That one isn't a principle. It's just true.</p>
        </article>
      </div>

      <section className="cta" style={{ marginTop: 80 }}>
        <div className="shell shell--wide">
          <h2 className="cta__title">Sound like your kind of operator?</h2>
          <div className="cta__row">
            <a href="#/contact" className="btn" onClick={(e) => navTo(e, "contact")}>Send a brief <Arrow /></a>
            <a href="#/work" className="btn btn--ghost" onClick={(e) => navTo(e, "work")}>See the work <Arrow /></a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============ Case Studies index ============ */
const CASES = [
  { num: "01", title: "AI-powered geographic expansion", client: "Private Company", sector: "Agriculture", year: "2024", slug: "case-geo", nda: true,
    summary: "A 30-year-old agricultural distributor needed to enter three new countries without 30 years of local relationships. We built a model that did the relationship-building." },
  { num: "02", title: "LLM-based spam detection at scale", client: "Mailtrap", sector: "Developer tools", year: "2023", slug: "case-mailtrap",
    summary: "Rule-based filters were missing 12% of spam and flagging 4% of real mail. We replaced the heuristic stack with an LLM classifier that did better on both." },
  { num: "03", title: "ML display optimization, +38% engagement", client: "TrendMD", sector: "Academic media", year: "2022", slug: "case-trendmd",
    summary: "Recommended-content widgets that learned what each user actually wanted, not what the editorial team thought they should want." },
  { num: "04", title: "Partnership pipeline rebuild", client: "Private Company", sector: "B2B SaaS", year: "2021", slug: "case-partner", nda: true,
    summary: "A revenue line that hadn't grown in two years. We rebuilt how partners were sourced, qualified, and onboarded. Pipeline doubled in two quarters." },
];

function WorkPage() {
  return (
    <main className="page-enter">
      <section className="manifesto-hero">
        <div className="shell shell--wide">
          <div className="eyebrow" style={{ marginBottom: 32 }}>Case studies · {CASES.length} engagements</div>
          <h1 style={{ maxWidth: "16ch" }}>Selected work, told <em style={{ fontStyle: "normal", color: "var(--amber-dark)" }}>plainly</em>.</h1>
          <p className="lead" style={{ marginTop: 32 }}>
            Some clients are named. Some are NDA-bound and called "Private Company." The lessons are the same in either column.
          </p>
        </div>
      </section>

      <section className="section--tight">
        <div className="shell shell--wide">
          <div className="cs-list">
            {CASES.map((c) => (
              <a key={c.num} className="cs-row" href={"#/" + c.slug} onClick={(e) => navTo(e, c.slug)}>
                <div className="cs-row__num">{c.num}</div>
                <div className="cs-row__title">
                  {c.title}
                  {c.nda && <span className="cs-row__nda">NDA</span>}
                </div>
                <div className="cs-row__client">{c.client} · {c.sector}</div>
                <div className="cs-row__year">{c.year}</div>
                <div className="cs-row__arrow"><Arrow /></div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

/* ============ Case Study Detail (geo expansion) ============ */
function CaseGeoPage() {
  const sections = [
    { id: "context", title: "Context" },
    { id: "problem", title: "Problem" },
    { id: "approach", title: "Approach" },
    { id: "outcome", title: "Outcome" },
    { id: "what-i-took", title: "What I took from it" },
  ];

  return (
    <main className="page-enter">
      <section className="cs-hero">
        <div className="shell shell--wide">
          <div className="cs-hero__crumb">
            <a href="#/work" className="amber-link text-mono" onClick={(e) => navTo(e, "work")} style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              ← Back to case studies
            </a>
          </div>
          <div className="eyebrow" style={{ marginBottom: 24 }}>Case 01 · Private Company · NDA</div>
          <h1 className="cs-hero__title">AI-powered geographic expansion into three new markets.</h1>
          <dl className="cs-hero__meta">
            <div><dt>Client</dt><dd>Private Company <span className="cs-row__nda">NDA</span></dd></div>
            <div><dt>Sector</dt><dd>Agricultural distribution</dd></div>
            <div><dt>Engagement</dt><dd>14 weeks · Hands-on product leadership</dd></div>
            <div><dt>Year</dt><dd>2024</dd></div>
          </dl>
        </div>
      </section>

      <section>
        <div className="shell shell--wide">
          <div className="cs-body">
            <aside className="cs-body__nav">
              <h5>Contents</h5>
              <ol>
                {sections.map((s) => (
                  <li key={s.id}><a href={"#" + s.id} className="amber-link">{s.title}</a></li>
                ))}
              </ol>
            </aside>

            <div className="cs-body__content">
              <section className="cs-section" id="context">
                <div className="eyebrow" style={{ marginBottom: 12 }}>01 · Context</div>
                <h3>A 30-year-old distributor wanted to skip the next 30 years.</h3>
                <p>The client had spent three decades building a regional agricultural distribution business on top of human relationships — sales reps who knew which farms grew what, which co-ops bought from whom, and which veterinarian-on-call routinely got paid late.</p>
                <p>The board had decided to enter three new countries within 18 months. They didn't have 18 months of relationship-building runway, and they couldn't afford to staff 60 new sales reps and watch most of them fail.</p>
              </section>

              <section className="cs-section" id="problem">
                <div className="eyebrow" style={{ marginBottom: 12 }}>02 · Problem</div>
                <h3>The thing they were good at was the thing that didn't scale.</h3>
                <p>Their entire operation was tuned to high-trust, low-data sales motion. The new markets had no trust to draw on and very little public data on the long tail of small farms — the segment that mattered most economically.</p>
                <p>The first proposal on the table was the obvious one: hire local sales managers, give them a CRM, copy the playbook. The math didn't work. We needed a different kind of sales motion entirely.</p>

                <blockquote className="cs-pull">
                  "The thing they were proud of being good at was the same thing keeping them from growing."
                </blockquote>
              </section>

              <section className="cs-section" id="approach">
                <div className="eyebrow" style={{ marginBottom: 12 }}>03 · Approach</div>
                <h3>Let the model do the cold work. Let humans do the warm work.</h3>
                <p>We built an internal tool that ingested public satellite imagery, agricultural ministry filings, equipment registries, and weather data. It scored every parcel of farmland in the three target countries on three things: probable crop type, probable scale of operation, and probable buying window.</p>
                <p>That gave the (now much smaller) sales team a ranked list every Monday morning. They didn't make 200 cold calls. They made 30 warm ones, with a specific guess about what the farm was already doing and what they probably needed next month.</p>
                <p>The pitch was wrong about 40% of the time. That was fine. Being specifically wrong is a much better conversation-opener than being vaguely right.</p>

                <div className="metrics">
                  <div className="metric"><div className="metric__num">3 mkts</div><div className="metric__label">Entered in 14 weeks</div></div>
                  <div className="metric"><div className="metric__num">−68%</div><div className="metric__label">Sales headcount vs. proposal</div></div>
                  <div className="metric"><div className="metric__num">2.4x</div><div className="metric__label">Conversion vs. cold</div></div>
                </div>
              </section>

              <section className="cs-section" id="outcome">
                <div className="eyebrow" style={{ marginBottom: 12 }}>04 · Outcome</div>
                <h3>The first market hit its 12-month revenue target in month seven.</h3>
                <p>The other two followed within a quarter of each other. The model is now part of how the company looks at every new market — including markets they already serve, where it surfaced segments their reps had been walking past for years.</p>
                <p>I left in week 14. The system is owned and operated by an internal team of three. None of them are me.</p>
              </section>

              <section className="cs-section" id="what-i-took">
                <div className="eyebrow" style={{ marginBottom: 12 }}>05 · What I took from it</div>
                <h3>Pattern recognition is portable. Vertical expertise is rented.</h3>
                <p>I have never sold a kilo of fertilizer in my life. The thing I was useful for had nothing to do with knowing the agricultural distribution business — it had to do with having seen enough orgs try to scale a high-touch motion to know what breaks first, and how to swap in a different motion without throwing out the part that was actually working.</p>
                <p>That's the engagement, more or less, every time.</p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="shell shell--wide">
          <div className="eyebrow" style={{ marginBottom: 24, color: "var(--amber-text)", opacity: 0.7 }}>If this sounds familiar</div>
          <h2 className="cta__title">Bring me a problem your team has been circling.</h2>
          <div className="cta__row">
            <a href="#/contact" className="btn" onClick={(e) => navTo(e, "contact")}>Send a brief <Arrow /></a>
            <a href="#/work" className="btn btn--ghost" onClick={(e) => navTo(e, "work")}>More case studies <Arrow /></a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============ Generic case study placeholder ============ */
function CasePlaceholderPage({ slug }) {
  const c = CASES.find((x) => x.slug === slug);
  if (!c) return <NotFoundPage />;
  return (
    <main className="page-enter">
      <section className="cs-hero">
        <div className="shell shell--wide">
          <div className="cs-hero__crumb">
            <a href="#/work" className="amber-link text-mono" onClick={(e) => navTo(e, "work")} style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              ← Back to case studies
            </a>
          </div>
          <div className="eyebrow" style={{ marginBottom: 24 }}>Case {c.num} · {c.client}{c.nda ? " · NDA" : ""}</div>
          <h1 className="cs-hero__title">{c.title}</h1>
          <p className="lead" style={{ marginTop: 32 }}>{c.summary}</p>
          <p className="muted text-mono" style={{ fontSize: 12, marginTop: 32, letterSpacing: "0.04em" }}>
            Full write-up in progress. The geo-expansion case (01) is the representative slice.
          </p>
          <div style={{ marginTop: 32 }}>
            <a href="#/case-geo" className="btn" onClick={(e) => navTo(e, "case-geo")}>Read case 01 in full <Arrow /></a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

/* ============ About ============ */
function AboutPage() {
  const domains = [
    "Developer tools", "B2B SaaS", "Marketplaces", "Academic media",
    "Edtech", "Fintech (consumer)", "Agriculture", "Email infrastructure",
    "Logistics", "Subscription products", "Vertical AI", "Internal platforms",
  ];
  return (
    <main className="page-enter">
      <section className="about-hero">
        <div className="shell shell--wide">
          <div className="eyebrow" style={{ marginBottom: 32 }}>About</div>
          <h1 style={{ maxWidth: "16ch" }}>You hire me because I'll see things your team can't see <em style={{ fontStyle: "normal", color: "var(--amber-dark)" }}>from the inside</em>.</h1>
        </div>
      </section>

      <section className="section--tight">
        <div className="shell shell--wide">
          <div className="about-grid">
            <div>
              <p>Twelve years in product leadership across developer tools, B2B SaaS, agricultural tech, academic media, and a couple of markets I'm still surprised I worked in.</p>
              <p>I'm not a vertical specialist. The thing I sell is cross-domain pattern recognition: the kind of intuition that comes from watching enough product orgs get stuck in similar ways to recognize the shape of the problem before everyone in the room has finished describing it.</p>
              <p>That intuition is portable. Vertical expertise is rented — when an engagement needs deep domain knowledge, I bring in a specialist from a small network of NDA-bound collaborators. You always know who you're talking to. It's me.</p>
            </div>
            <div>
              <p><strong style={{ fontWeight: 500 }}>How I work, briefly.</strong> Two-week minimum. Most engagements are 6–14 weeks. I parachute in, get embedded enough to understand the actual problem (not the one written on the brief), recommend, ship, build the system to run without me, then exit.</p>
              <p>I do not run a team. I will not become your interim VP. I will not still be on your payroll in month seven.</p>
              <p>The goal of every engagement is for me to become unnecessary as quickly as possible. That's measurable. We measure it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="shell shell--wide">
          <div className="eyebrow" style={{ marginBottom: 24 }}>Domains worked in</div>
          <div className="domains">
            {domains.map((d, i) => (
              <div className="domain" key={d}>
                <div className="domain__num">{String(i + 1).padStart(2, "0")}</div>
                <div>{d}</div>
              </div>
            ))}
          </div>
          <p className="muted" style={{ marginTop: 24, fontSize: 14 }}>
            If your industry isn't on this list, that's not a disqualifier. <a href="#/contact" className="amber-link" onClick={(e) => navTo(e, "contact")}>Tell me about it</a> — the cross-domain thing only works if there are new domains.
          </p>
        </div>
      </section>

      <section className="cta">
        <div className="shell shell--wide">
          <h2 className="cta__title">Got a 30-minute version of the problem?</h2>
          <div className="cta__row">
            <a href="#/contact" className="btn" onClick={(e) => navTo(e, "contact")}>Send a brief <Arrow /></a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============ Contact ============ */
function ContactPage() {
  const [scope, setScope] = uS("Strategy & GTM");
  const [duration, setDuration] = uS("6–10 weeks");
  const [submitted, setSubmitted] = uS(false);

  if (submitted) {
    return (
      <main className="page-enter">
        <section className="contact-hero">
          <div className="shell shell--wide">
            <div className="eyebrow" style={{ marginBottom: 32 }}>Brief received</div>
            <h1 style={{ maxWidth: "14ch" }}>Got it. I'll reply within <em style={{ fontStyle: "normal", color: "var(--amber-dark)" }}>two business days</em>.</h1>
            <p className="lead" style={{ marginTop: 32 }}>
              If it's something I can help with, you'll get a real response — not a Calendly link with twelve options. If it's not, you'll get a real "no" with a reason and, when I have one, a recommendation for someone better-suited.
            </p>
            <div style={{ marginTop: 40, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#/home" className="btn" onClick={(e) => navTo(e, "home")}>← Back to home</a>
              <button className="btn btn--ghost" onClick={() => setSubmitted(false)}>Send another</button>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="page-enter">
      <section className="contact-hero">
        <div className="shell shell--wide">
          <div className="eyebrow" style={{ marginBottom: 32 }}>Contact</div>
          <h1 style={{ maxWidth: "14ch" }}>Tell me what's <em style={{ fontStyle: "normal", color: "var(--amber-dark)" }}>actually</em> stuck.</h1>
          <p className="lead" style={{ marginTop: 32, maxWidth: "44ch" }}>
            Plain language is fine. Long is fine. "I don't know what's wrong but the team is unhappy" is also fine — that's diagnostic, not bad data.
          </p>
        </div>
      </section>

      <section className="section--tight">
        <div className="shell shell--wide">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="eyebrow" style={{ marginBottom: 16 }}>Or, the analog options</div>
              <ul>
                <li><span>Email</span><b><a className="amber-link" href="mailto:hello@johnnymodest.com">hello@johnnymodest.com</a></b></li>
                <li><span>LinkedIn</span><b><a className="amber-link" href="#" onClick={(e) => e.preventDefault()}>/in/johnnymodest</a></b></li>
                <li><span>Based</span><b>Bucharest, GMT+2/+3</b></li>
                <li><span>Booking</span><b>Q3 onward · 2 slots</b></li>
                <li><span>Response</span><b>Within 2 business days</b></li>
              </ul>
              <div className="eyebrow" style={{ marginTop: 48, marginBottom: 16 }}>What I won't do</div>
              <ul>
                <li style={{ display: "block" }}>· Send a deck before the first call</li>
                <li style={{ display: "block" }}>· Quote a flat fee without scoping the problem</li>
                <li style={{ display: "block" }}>· Take engagements I don't think I'll move the needle on</li>
              </ul>
            </div>

            <form className="form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div className="field--row">
                <div className="field">
                  <label className="field__label">Your name</label>
                  <input className="field__input" type="text" required placeholder="Jane Becker" />
                </div>
                <div className="field">
                  <label className="field__label">Company</label>
                  <input className="field__input" type="text" placeholder="Optional" />
                </div>
              </div>
              <div className="field">
                <label className="field__label">Email</label>
                <input className="field__input" type="email" required placeholder="jane@company.com" />
              </div>
              <div className="field">
                <label className="field__label">What kind of help?</label>
                <div className="scope-pills">
                  {["Strategy & GTM", "Hands-on leadership", "Tooling & workflow", "I'm not sure yet"].map((s) => (
                    <button type="button" key={s} className={"scope-pill" + (s === scope ? " is-active" : "")} onClick={() => setScope(s)}>{s}</button>
                  ))}
                </div>
              </div>
              <div className="field">
                <label className="field__label">Rough duration</label>
                <div className="scope-pills">
                  {["1–2 weeks (urgent, costs more)", "6–10 weeks", "10+ weeks (committed, may negotiate down)", "TBD"].map((s) => (
                    <button type="button" key={s} className={"scope-pill" + (s === duration ? " is-active" : "")} onClick={() => setDuration(s)}>{s}</button>
                  ))}
                </div>
              </div>
              <div className="field">
                <label className="field__label">What's stuck?</label>
                <textarea className="field__textarea" required placeholder="Plain language is fine. Long is fine. The boring details are the useful ones." rows="6" />
              </div>
              <div style={{ marginTop: 16 }}>
                <button type="submit" className="btn btn--amber">Send brief <Arrow /></button>
              </div>
              <p className="muted text-mono" style={{ fontSize: 11, letterSpacing: "0.04em", marginTop: 8 }}>
                No newsletter. No drip campaign. No follow-up sequence.
              </p>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

/* ============ 404 ============ */
function NotFoundPage() {
  return (
    <main className="page-enter">
      <section className="manifesto-hero">
        <div className="shell shell--wide">
          <div className="eyebrow" style={{ marginBottom: 32 }}>404 · Not here</div>
          <h1 style={{ maxWidth: "16ch" }}>This page <em style={{ fontStyle: "normal", color: "var(--amber-dark)" }}>doesn't exist</em>. Plainly.</h1>
          <div style={{ marginTop: 32 }}>
            <a href="#/home" className="btn" onClick={(e) => navTo(e, "home")}>← Back to home</a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

Object.assign(window, { ZeroNonsensePage, WorkPage, CaseGeoPage, CasePlaceholderPage, AboutPage, ContactPage, NotFoundPage });
