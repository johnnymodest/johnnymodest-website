"use client";

import { useEffect, useRef, useState } from "react";

const DOMAINS = [
  "Ad tech",
  "B2B SaaS",
  "B2C SaaS",
  "Developer tools",
  "Email delivery",
  "Document management",
  "Agriculture",
  "Pharma",
  "Fintech & retail trading",
  "Customer support software",
  "Residential & Community",
  "Telecom",
  "HR & L&D",
  "Academic media",
  "Regulated industries",
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function DomainsSection() {
  const [domains, setDomains] = useState(DOMAINS);
  const [delays, setDelays] = useState<number[]>([]);
  const gridRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [primed, setPrimed] = useState(false);

  // Shuffle + generate delays only on the client to avoid SSR hydration mismatch
  useEffect(() => {
    const shuffled = shuffle(DOMAINS);
    setDomains(shuffled);
    setDelays(shuffled.map(() => Math.random() * 0.6));
  }, []);

  // Initial pause before cells are allowed to appear
  useEffect(() => {
    const t = setTimeout(() => setPrimed(true), 400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section">
      <div className="shell">
        <h2>Domains I&rsquo;ve worked in</h2>

        <div ref={gridRef} className="tag-grid">
          {domains.map((d, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <div
                key={num}
                className="tag-grid__item"
                style={{
                  opacity: visible && primed ? 1 : 0,
                  transform:
                    visible && primed ? "translateY(0)" : "translateY(8px)",
                  transition: `opacity 0.5s ease, transform 0.5s ease`,
                  transitionDelay: visible && primed ? `${delays[i]}s` : "0s",
                }}
              >
                <span className="tag-grid__num">{num}</span>
                {d}
              </div>
            );
          })}
        </div>
        <div
          className="eyebrow"
          style={{
            maxWidth: "clamp(180px, 50vw, 520px)",
            marginTop: "clamp(16px, 2vw, 32px)",
          }}
        >
          <p>
            I've worked in enough industries to know that most problems look
            familiar once you strip the jargon. And I enjoy the challenge of
            solving the ones that don't.
          </p>
        </div>
      </div>
    </section>
  );
}
