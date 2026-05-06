import Link from "next/link";

interface CtaSectionProps {
  eyebrow?: string;
  title: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export default function CtaSection({
  eyebrow,
  title,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CtaSectionProps) {
  return (
    <section className="cta">
      <div className="shell shell--wide">
        {eyebrow && (
          <div
            className="eyebrow"
            style={{
              marginBottom: 24,
              color: "var(--amber-text)",
              opacity: 0.7,
            }}
          >
            {eyebrow}
          </div>
        )}
        <h2 className="cta__title">{title}</h2>
        <div className="cta__row">
          <Link href={primaryHref} className="btn">
            {primaryLabel}{" "}
            <svg
              className="btn__arrow"
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M3 9H15M15 9L9 3M15 9L9 15"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="square"
              />
            </svg>
          </Link>
          {secondaryHref && secondaryLabel && (
            <Link href={secondaryHref} className="btn btn--ghost">
              {secondaryLabel}{" "}
              <svg
                className="btn__arrow"
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M3 9H15M15 9L9 3M15 9L9 15"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="square"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
