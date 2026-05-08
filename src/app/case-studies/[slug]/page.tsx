import type { Metadata } from "next";
import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { parse as parseYaml } from "yaml";
import CaseStudyNav from "./CaseStudyNav";
import Metrics from "@/components/Metrics";
import type { MetricItem } from "@/components/Metrics";
import PullQuote from "@/components/PullQuote";
import CtaSection from "@/components/sections/CtaSection";

interface CaseStudyCta {
  eyebrow?: string;
  title: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

interface Frontmatter {
  title: string;
  client: string;
  domain: string;
  year: string;
  nda: string;
  slug: string;
  metrics?: MetricItem[];
  pullQuote?: string;
  cta?: CaseStudyCta;
}

function parseFrontmatter(raw: string): { fm: Frontmatter; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error("Invalid frontmatter");
  const fm = parseYaml(match[1]) as Frontmatter;
  return { fm, body: match[2] };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(
    process.cwd(),
    "content/case-studies",
    `${slug}.mdx`
  );
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    const { fm } = parseFrontmatter(raw);
    return {
      title: `${fm.title} — Johnny Modest`,
      description: `${fm.client} · ${fm.domain} · ${fm.year}`,
    };
  } catch {
    return {
      title: "Case Study — Johnny Modest",
      description: "Selected work, told plainly.",
    };
  }
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
      <section
        className="page-head page-head--border"
        style={
          {
            "--ph-pad": "clamp(64px, 8vw, 120px)",
            "--ph-pad-b": "clamp(48px, 6vw, 80px)",
          } as React.CSSProperties
        }
      >
        <div className="shell">
          <p className="page-head__crumb">
            <Link href="/case-studies" className="amber-link">
              &larr; Case studies
            </Link>
          </p>
          <h1 className="page-head__title page-head__title--case">{fm.title}</h1>
          <dl className="page-head__meta-grid">
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
          <div className="article-layout">
            <CaseStudyNav />
            <div className="article-layout__content">
              <MDXRemote
                source={body}
                components={{
                  Metrics: (props: { items?: MetricItem[] }) => {
                    const items = props.items ?? fm.metrics;
                    return items ? <Metrics items={items} /> : null;
                  },
                  PullQuote: (props: { text?: string }) => {
                    const text = props.text ?? fm.pullQuote;
                    return text ? <PullQuote text={text} /> : null;
                  },
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {fm.cta && (
        <CtaSection
          eyebrow={fm.cta.eyebrow}
          title={fm.cta.title}
          primaryHref={fm.cta.primaryHref}
          primaryLabel={fm.cta.primaryLabel}
          secondaryHref={fm.cta.secondaryHref}
          secondaryLabel={fm.cta.secondaryLabel}
        />
      )}
    </>
  );
}
