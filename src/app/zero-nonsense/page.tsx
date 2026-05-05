"use client";

import { useEffect, useRef } from "react";
import { principles } from "../../../content/principles";

export default function ZeroNonsensePage() {
  const principleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    principleRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="manifesto-hero">
        <div className="shell">
          <p className="eyebrow">THE MANIFESTO · SIX PRINCIPLES · SCROLL ON</p>
          <h1>
            Zero <em>Nonsense.</em>
          </h1>
          <p className="lead" style={{ marginTop: "clamp(24px, 3vw, 40px)" }}>
            What we believe, in plain language. If you read these and nod,
            we&rsquo;ll probably get along.
          </p>
        </div>
      </section>

      <div className="shell">
        {principles.map((p, i) => (
          <div
            key={p.num}
            ref={(el) => { principleRefs.current[i] = el; }}
            className={`principle${p.amber ? " principle--amber" : ""}`}
          >
            <p className="principle__num">
              Principle <span>{p.num}</span> / 06
            </p>
            <h2
              className="principle__text"
              dangerouslySetInnerHTML={{ __html: p.heading }}
            />
            <p className="principle__caption">{p.body}</p>
          </div>
        ))}
      </div>

      <section className="section">
        <div className="shell">
          <h2>
            We also believe a <em>little bit of humor</em> is nice.
          </h2>
          <p className="principle__caption">
            That one isn&rsquo;t a principle. It&rsquo;s just true.
          </p>
        </div>
      </section>
    </>
  );
}
