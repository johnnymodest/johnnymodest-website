import Link from "next/link";

const cases = [
  {
    num: "02",
    title: "LLM-based spam detection at scale",
    client: "MAILTRAP · DEVELOPER TOOLS",
    year: "2023",
    slug: "ai-geographic-expansion",
  },
  {
    num: "03",
    title: "ML display optimization, +38% engagement",
    client: "TRENDMD · ACADEMIC MEDIA",
    year: "2022",
    slug: "ai-geographic-expansion",
  },
];

export default function SelectedWorkSection() {
  return (
    <section className="section">
      <div className="shell">
        <h2 style={{ marginBottom: "clamp(32px, 4vw, 56px)" }}>
          Selected Work
        </h2>

        <div className="cs-list">
          {cases.map((c) => (
            <Link
              key={c.num}
              href={`/case-studies/${c.slug}`}
              className="cs-row"
            >
              <div className="cs-row__num">{c.num}</div>
              <div className="cs-row__title">{c.title}</div>
              <div className="cs-row__client">{c.client}</div>
              <div className="cs-row__year">{c.year}</div>
              <div className="cs-row__arrow">→</div>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: "clamp(24px, 3vw, 40px)" }}>
          <Link href="/case-studies" className="amber-link">
            See all case studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
