import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="shell">
        <div className="foot__grid">
          <div className="foot__brand">
            <div className="nav__logo">
              <span className="nav__monogram" aria-hidden="true">
                <span className="nav__mono-j">J</span>
                <span className="nav__mono-m">M</span>
              </span>
              <span className="nav__wordmark">Johnny Modest</span>
            </div>
            <p>
              Zero-nonsense product design, research, and strategy for teams
              that want outcomes, not theater.
            </p>
          </div>

          <div className="foot__col">
            <h5>Site</h5>
            <ul>
              <li><Link href="/" className="amber-link">Home</Link></li>
              <li><Link href="/zero-nonsense" className="amber-link">Zero nonsense</Link></li>
              <li><Link href="/case-studies" className="amber-link">Case studies</Link></li>
              <li><Link href="/about" className="amber-link">About</Link></li>
            </ul>
          </div>

          <div className="foot__col">
            <h5>Direct</h5>
            <ul>
              <li><a href="mailto:hello@johnnymodest.com" className="amber-link">hello@johnnymodest.com</a></li>
              <li><Link href="/contact" className="amber-link">Brief form</Link></li>
              <li><a href="https://linkedin.com/in/johnnymodest" target="_blank" rel="noopener noreferrer" className="amber-link">LinkedIn &nearr;</a></li>
            </ul>
          </div>

          <div className="foot__col">
            <h5>Engagement</h5>
            <ul>
              <li>Rates from $80/hr</li>
              <li>2 week minimum</li>
              <li>Currently booking Q3</li>
            </ul>
          </div>
        </div>

        <div className="foot__base">
          <span>&copy; 2026 Johnny Modest Consultancy</span>
          <span>No packages. No theater. No buzzwords.</span>
        </div>
      </div>
    </footer>
  );
}
