"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const COPY: Record<string, string> = {
  "/": "Like the cut of this jib? Tell me what's stuck.",
  "/zero-nonsense": "Sound like your kind of operator? Let's talk.",
  "/case-studies": "Want results like these? Let's talk.",
  "/about": "Convinced? Let's find out if we're a fit.",
};

export default function StickyBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  // Restore dismiss state on mount
  useEffect(() => {
    const stored = sessionStorage.getItem("sticky-bar-dismissed");
    if (stored === null) {
      setDismissed(false);
    }
  }, []);

  // Scroll detection
  useEffect(() => {
    if (dismissed) return;

    let raf: number;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setVisible(window.scrollY > 400);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [dismissed]);

  const handleDismiss = useCallback(() => {
    setDismissed(true);
    setVisible(false);
    sessionStorage.setItem("sticky-bar-dismissed", "1");
  }, []);

  if (pathname === "/" || pathname === "/contact") return null;

  const copy = COPY[pathname];

  return (
    <aside className={`sticky-bar${visible ? " is-visible" : ""}`}>
      <div className="sticky-bar__inner">
        <div className="sticky-bar__copy">
          <span className="dot" aria-hidden="true" />
          <span>{copy}</span>
        </div>
        <Link href="/contact" className="sticky-bar__cta">
          Hire me &rarr;
        </Link>
        <button
          className="sticky-bar__close"
          aria-label="Dismiss"
          onClick={handleDismiss}
        >
          &times;
        </button>
      </div>
    </aside>
  );
}
