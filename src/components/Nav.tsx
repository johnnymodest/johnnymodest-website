"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/zero-nonsense", label: "Zero nonsense" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav__inner shell shell--wide">
        <Link href="/" className="nav__logo" onClick={() => setMenuOpen(false)}>
          <svg
            width={36}
            height={36}
            viewBox="0 0 36 36"
            aria-label="JM monogram"
            className="nav__monogram"
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
