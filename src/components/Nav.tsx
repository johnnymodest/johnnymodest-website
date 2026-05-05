"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/case-studies", label: "Case studies" },
  { href: "/zero-nonsense", label: "Zero nonsense" },
  { href: "/about", label: "About" },
  //{ href: '/contact', label: 'Contact' },
] as const;

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav__inner shell">
        <Link href="/" className="nav__logo" onClick={() => setMenuOpen(false)}>
          <span className="nav__monogram" aria-hidden="true">
            <span className="nav__mono-j">J</span>
            <span className="nav__mono-m">M</span>
          </span>
          <span className="nav__wordmark">Johnny Modest</span>
        </Link>

        <button
          className="nav__hamburger"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
        </button>

        <div className={`nav__menu${menuOpen ? " is-open" : ""}`}>
          <div className="nav__links">
            {LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="nav__link amber-link"
                aria-current={pathname === href ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="nav__cta"
            onClick={() => setMenuOpen(false)}
          >
            Start a conversation &rarr;
          </Link>
        </div>
      </div>
    </nav>
  );
}
