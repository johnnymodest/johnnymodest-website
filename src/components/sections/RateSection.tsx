import Link from "next/link";

export default function RateSection() {
  return (
    <section className="stat-banner">
      <div className="shell">
        <div className="stat-banner__grid">
          <div className="stat-banner__num">
            <span>$80/hr</span>
          </div>
          <div className="stat-banner__notes">
            <p>I do the work myself. No bait-and-switch.</p>
            <p>From $80/hr. Shorter, more urgent engagements can cost more.</p>
            <p>
              Scope changes are welcome. They just need dedicated time to be
              done right.
            </p>
            <p>Two-week minimum. Most engagements run 6–14 weeks.</p>
            <Link
              href="/contact"
              className="sticky-bar__cta"
              style={{ marginTop: "clamp(24px, 3vw, 40px)" }}
            >
              Let's go &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
