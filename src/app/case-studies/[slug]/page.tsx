import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import CaseStudyNav from "./CaseStudyNav";

interface Frontmatter {
  title: string;
  client: string;
  domain: string;
  year: string;
  nda: string;
  slug: string;
}

function parseFrontmatter(raw: string): { fm: Frontmatter; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error("Invalid frontmatter");
  const lines = match[1].split("\n");
  const fm: Record<string, string> = {};
  for (const line of lines) {
    const [k, ...rest] = line.split(":");
    if (k && rest.length) fm[k.trim()] = rest.join(":").trim();
  }
  return { fm: fm as unknown as Frontmatter, body: match[2] };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(
    process.cwd(),
    "content/case-studies",
    `${slug}.mdx`
  );
  let fm: Frontmatter;
  let body: string;

  try {
    const raw = await fs.readFile(filePath, "utf-8");
    const parsed = parseFrontmatter(raw);
    fm = parsed.fm;
    body = parsed.body;
  } catch {
    return (
      <section className="section">
        <div className="shell">
          <h2>Case study not found.</h2>
          <p className="muted" style={{ marginTop: 16 }}>
            <Link href="/case-studies" className="amber-link">
              &larr; Back to case studies
            </Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="cs-hero">
        <div className="shell">
          <p className="cs-hero__crumb">
            <Link href="/case-studies" className="amber-link">
              &larr; Case studies
            </Link>
          </p>
          <h1 className="cs-hero__title">{fm.title}</h1>
          <dl className="cs-hero__meta">
            <div>
              <dt>Client</dt>
              <dd>{fm.client}</dd>
            </div>
            <div>
              <dt>Domain</dt>
              <dd>{fm.domain}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{fm.year}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{fm.nda === "true" ? "NDA · Anonymised" : "Public"}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section section--tight">
        <div className="shell">
          <div className="cs-body">
            <CaseStudyNav />
            <div className="cs-body__content">
              <MDXRemote source={body} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
