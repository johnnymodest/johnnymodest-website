import type { Metadata } from "next";
import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";
import { parse as parseYaml } from "yaml";

export const metadata: Metadata = {
  title: "Case Studies — Johnny Modest",
  description: "Selected work, told plainly.",
};

interface CaseStudyEntry {
  slug: string;
  title: string;
  client: string;
  domain: string;
  year: string;
  nda: string;
}

async function getCaseStudies(): Promise<CaseStudyEntry[]> {
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
      nda: string;
    };
    entries.push({
      slug: file.replace(/\.mdx$/, ""),
      title: fm.title,
      client: fm.client,
      domain: fm.domain,
      year: fm.year,
      nda: fm.nda,
    });
  }

  entries.sort((a, b) => parseInt(b.year) - parseInt(a.year));
  return entries;
}

export default async function CaseStudiesPage() {
  const cases = await getCaseStudies();
  return (
    <>
      <section className="section">
        <div className="shell">
          <p className="eyebrow">CASE STUDIES · {cases.length} ENGAGEMENTS</p>
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
            {cases.map((c, i) => (
                <Link key={c.slug} href={`/case-studies/${c.slug}`} className="cs-row">
                  <div className="cs-row__num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="cs-row__title">
                    {c.title}
                    {c.nda === "true" && <span className="cs-row__nda">NDA</span>}
                  </div>
                  <div className="cs-row__client">
                    {c.client} · {c.domain}
                  </div>
                  <div className="cs-row__year">{c.year}</div>
                  <div className="cs-row__arrow">→</div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
