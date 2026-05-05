import Link from "next/link";

const cases = [
  {
    num: "01",
    title: "AI-powered geographic expansion",
    nda: true,
    client: "Private Company",
    domain: "Agriculture",
    year: "2024",
    slug: "ai-geographic-expansion",
  },
  {
    num: "02",
    title: "LLM-based spam detection at scale",
    nda: false,
    client: "Mailtrap",
    domain: "Developer Tools",
    year: "2023",
    slug: "llm-spam-detection",
  },
  {
    num: "03",
    title: "ML display optimization, +38% engagement",
    nda: false,
    client: "TrendMD",
    domain: "Academic Media",
    year: "2022",
    slug: "ml-display-optimization",
  },
  {
    num: "04",
    title: "Partnership pipeline rebuild",
    nda: true,
    client: "Private Company",
    domain: "B2B SaaS",
    year: "2021",
    slug: "partnership-pipeline",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="section">
        <div className="shell">
          <p className="eyebrow">CASE STUDIES · 4 ENGAGEMENTS</p>
          <h1>
            Selected work,
            <br />
            told <em>plainly.</em>
          </h1>
          <p className="lead" style={{ marginTop: "clamp(24px, 3vw, 40px)" }}>
            Some clients are named. Some are NDA-bound and called &lsquo;Private
            Company.&rsquo; The lessons are the same in either column.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="shell">
          <div className="cs-list">
            {cases.map((c) => {
              const href =
                c.slug === "ai-geographic-expansion"
                  ? `/case-studies/${c.slug}`
                  : "/case-studies/ai-geographic-expansion";

              return (
                <Link key={c.num} href={href} className="cs-row">
                  <div className="cs-row__num">{c.num}</div>
                  <div className="cs-row__title">
                    {c.title}
                    {c.nda && <span className="cs-row__nda">NDA</span>}
                  </div>
                  <div className="cs-row__client">
                    {c.client} · {c.domain}
                  </div>
                  <div className="cs-row__year">{c.year}</div>
                  <div className="cs-row__arrow">→</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
