"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "the-problem", label: "The problem" },
  { id: "the-approach", label: "The approach" },
  { id: "the-outcome", label: "The outcome" },
  { id: "what-id-do-differently", label: "What I'd do differently" },
];

export default function CaseStudyNav() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="cs-body__nav">
      <h5>On this page</h5>
      <ol>
        {sections.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(s.id);
              }}
              style={{
                color: active === s.id ? "var(--amber-dark)" : "inherit",
                fontWeight: active === s.id ? 500 : 400,
              }}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
