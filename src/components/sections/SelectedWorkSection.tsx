import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";
import { parse as parseYaml } from "yaml";

interface CaseStudyEntry {
  slug: string;
  title: string;
  client: string;
  domain: string;
  year: string;
}

async function getTopCases(count: number): Promise<CaseStudyEntry[]> {
  const dir = path.join(process.cwd(), "content/case-studies");
  const files = (await fs.readdir(dir)).filter((f) => f.endsWith(".mdx"));

  const entries: CaseStudyEntry[] = [];
  for (const file of files) {
    const raw = await fs.readFile(path.join(dir, file), "utf-8");
    const match = raw.match(/^---\n([\s\S]*?)\n---/);
    if (!match) continue;
    const fm = parseYaml(match[1]) as {
      title: string;
      client: string;
      domain: string;
      year: string;
    };
    entries.push({
      slug: file.replace(/\.mdx$/, ""),
      title: fm.title,
      client: fm.client,
      domain: fm.domain,
      year: fm.year,
    });
  }

  entries.sort((a, b) => parseInt(b.year) - parseInt(a.year));
  return entries.slice(0, count);
}

export default async function SelectedWorkSection() {
  const cases = await getTopCases(2);
  return (
    <section className="section">
      <div className="shell">
        <h2 style={{ marginBottom: "clamp(32px, 4vw, 56px)" }}>
          Selected Work
        </h2>

        <div className="cs-list">
          {cases.map((c, i) => (
            <Link
              key={c.slug}
              href={`/case-studies/${c.slug}`}
              className="cs-row"
            >
              <div className="cs-row__num">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="cs-row__title">{c.title}</div>
              <div className="cs-row__client">
                {c.client.toUpperCase()} · {c.domain.toUpperCase()}
              </div>
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
