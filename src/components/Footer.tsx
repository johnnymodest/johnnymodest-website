import Link from 'next/link';
import { getNextQuarter } from '@/lib/utils';

export default function Footer() {
  const nextQuarter = getNextQuarter();
  return (
    <footer className="site-footer">
      <div className="shell shell--wide">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link href="/" className="site-header__logo">
              <svg
                width={36}
                height={36}
                viewBox="0 0 36 36"
                aria-label="JM monogram"
                className="site-header__monogram"
              >
                <line
                  x1={3}
                  y1={32}
                  x2={33}
                  y2={4}
                  stroke="currentColor"
                  strokeWidth={1.5}
                />
                <text
                  x={6}
                  y={14}
                  fontFamily="var(--font-display)"
                  fontSize={13}
                  fontWeight={500}
                  fill="currentColor"
                  letterSpacing="-0.02em"
                >
                  J
                </text>
                <text
                  x={20}
                  y={30}
                  fontFamily="var(--font-display)"
                  fontSize={13}
                  fontWeight={500}
                  fill="currentColor"
                  letterSpacing="-0.02em"
                >
                  M
                </text>
              </svg>
              <span className="site-header__wordmark">Johnny Modest</span>
            </Link>
            <p>
              Senior product leadership for teams that need someone to see what
              they can&apos;t see from the inside. Based in Bucharest. Working
              globally.
            </p>
          </div>

          <div className="site-footer__col">
            <h5>Site</h5>
            <ul>
              <li><Link href="/" className="amber-link">Home</Link></li>
              <li><Link href="/zero-nonsense" className="amber-link">Zero nonsense</Link></li>
              <li><Link href="/case-studies" className="amber-link">Case studies</Link></li>
              <li><Link href="/about" className="amber-link">About</Link></li>
            </ul>
          </div>

          <div className="site-footer__col">
            <h5>Direct</h5>
            <ul>
              <li><a href="mailto:hello@johnnymodest.com" className="amber-link">hello@johnnymodest.com</a></li>
              <li><Link href="/contact" className="amber-link">Brief form</Link></li>
              <li><a href="https://linkedin.com/in/johnnymodest" target="_blank" rel="noopener noreferrer" className="amber-link">LinkedIn ↗</a></li>
            </ul>
          </div>

          <div className="site-footer__col">
            <h5>Engagement</h5>
            <ul>
              <li>Rates from $80/hr</li>
              <li>2 week minimum</li>
              <li>Currently booking {nextQuarter}</li>
            </ul>
          </div>
        </div>

        <div className="site-footer__base">
          <span>&copy; {new Date().getFullYear()} Johnny Modest Consultancy</span>
          <span>No packages. No theater. No buzzwords.</span>
        </div>
      </div>
    </footer>
  );
}
