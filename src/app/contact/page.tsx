"use client";

import { useState, useCallback } from "react";
import { sendBrief } from "./actions";

const SCOPE_OPTIONS = [
  "One conversation",
  "Short (2–4 weeks)",
  "Full (6–14 weeks)",
  "Not sure yet",
];

const TIMELINE_OPTIONS = [
  "Immediately",
  "Next month",
  "Next quarter",
  "Just exploring",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    context: "",
    stuck: "",
    scope: "",
    timeline: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    },
    [],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus("sending");

      try {
        await sendBrief({
          name: form.name,
          email: form.email,
          context: form.context,
          stuck: form.stuck,
          scope: form.scope,
          timeline: form.timeline,
        });
        setStatus("success");
      } catch {
        setStatus("error");
      }
    },
    [form],
  );

  return (
    <>
      {/* Hero — amber full-bleed */}
      <section className="callout">
        <div className="shell">
          <h1 className="callout__title">
            Something not quite right?
            <br />
            Let&rsquo;s talk about it.
          </h1>
          <div className="callout__actions">
            <a href="#brief-form" className="btn">
              Start here <span className="btn__arrow">&rarr;</span>
            </a>
            <a href="mailto:hello@johnnymodest.com" className="btn btn--ghost">
              hello@johnnymodest.com
            </a>
          </div>
        </div>
      </section>

      {/* Contact grid */}
      <section className="section" id="brief-form">
        <div className="shell">
          <div className="two-col two-col--wide-right">
            {/* Left — contact info */}
            <div className="two-col__aside">
              <h2 className="lead">
                No gatekeepers. No templates. Just a human who reads your
                message.
              </h2>
              <ul>
                <li>
                  <span>EMAIL</span>
                  <span>
                    <a
                      href="mailto:hello@johnnymodest.com"
                      className="amber-link"
                    >
                      hello@johnnymodest.com
                    </a>
                  </span>
                </li>
                <li>
                  <span>RESPONSE</span>
                  <span>
                    Within <b>2 business days</b>
                  </span>
                </li>
                <li>
                  <span>FORMAT</span>
                  <span>No pitch decks needed</span>
                </li>
                <li>
                  <span>BASED</span>
                  <span>Bucharest, EU timezone</span>
                </li>
              </ul>
            </div>

            {/* Right — brief form */}
            {status === "success" ? (
              <div className="stack stack--lg" style={{ paddingTop: 8 }}>
                <p className="lead" style={{ color: "var(--amber-dark)" }}>
                  Got it. I&rsquo;ll read this and reply within two business
                  days.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 14,
                    color: "var(--muted)",
                  }}
                >
                  No automated response. No sales sequence. Just me.
                </p>
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit} noValidate>
                {/* What's stuck */}
                <div className="field">
                  <label className="field__label" htmlFor="contact-stuck">
                    What&rsquo;s stuck
                  </label>
                  <textarea
                    id="contact-stuck"
                    className="field__textarea"
                    name="stuck"
                    value={form.stuck}
                    onChange={handleChange}
                    required
                    disabled={status === "sending"}
                  />
                </div>

                {/* Company / context */}
                <div className="field">
                  <label className="field__label" htmlFor="contact-context">
                    Company / context
                  </label>
                  <input
                    id="contact-context"
                    className="field__input"
                    type="text"
                    name="context"
                    value={form.context}
                    onChange={handleChange}
                    disabled={status === "sending"}
                  />
                </div>

                {/* Name + Email */}
                <div className="field field--row">
                  <div className="field">
                    <label className="field__label" htmlFor="contact-name">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      className="field__input"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      disabled={status === "sending"}
                    />
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="contact-email">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      className="field__input"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      disabled={status === "sending"}
                    />
                  </div>
                </div>

                {/* Scope */}
                <div className="field">
                  <span className="field__label">Scope</span>
                  <div className="scope-pills">
                    {SCOPE_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        className={`scope-pill${form.scope === opt ? " is-active" : ""}`}
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            scope: prev.scope === opt ? "" : opt,
                          }))
                        }
                        disabled={status === "sending"}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="field">
                  <span className="field__label">Timeline</span>
                  <div className="scope-pills">
                    {TIMELINE_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        className={`scope-pill${form.timeline === opt ? " is-active" : ""}`}
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            timeline: prev.timeline === opt ? "" : opt,
                          }))
                        }
                        disabled={status === "sending"}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Error message */}
                {status === "error" && (
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 13,
                      color: "var(--muted)",
                    }}
                  >
                    Something went wrong.{" "}
                    <a
                      href="mailto:hello@johnnymodest.com"
                      className="amber-link"
                      style={{ fontWeight: 500 }}
                    >
                      Email me directly at hello@johnnymodest.com
                    </a>
                  </p>
                )}

                {/* Submit */}
                <div style={{ paddingTop: 8 }}>
                  <button
                    type="submit"
                    className="btn btn--amber"
                    style={{ width: "100%" }}
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending…" : "Send the brief →"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* "What I won't do" */}
      <section className="section section--tight">
        <div className="shell">
          <hr className="rule rule-thick" />
          <div style={{ paddingTop: "clamp(40px, 5vw, 64px)" }}>
            <p className="eyebrow">FOR CLARITY</p>
            <h2 style={{ maxWidth: "20ch", marginTop: 16 }}>
              What I won&rsquo;t do
            </h2>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "clamp(24px, 3vw, 40px) 0 0",
                display: "grid",
                gap: 16,
                maxWidth: "56ch",
              }}
            >
              <li
                style={{
                  fontSize: 18,
                  display: "flex",
                  gap: 14,
                  alignItems: "baseline",
                }}
              >
                <span style={{ color: "var(--muted)", flexShrink: 0 }}>
                  &mdash;
                </span>
                <span>Retainers with no defined outcome</span>
              </li>
              <li
                style={{
                  fontSize: 18,
                  display: "flex",
                  gap: 14,
                  alignItems: "baseline",
                }}
              >
                <span style={{ color: "var(--muted)", flexShrink: 0 }}>
                  &mdash;
                </span>
                <span>Equity-only arrangements</span>
              </li>
              <li
                style={{
                  fontSize: 18,
                  display: "flex",
                  gap: 14,
                  alignItems: "baseline",
                }}
              >
                <span style={{ color: "var(--muted)", flexShrink: 0 }}>
                  &mdash;
                </span>
                <span>NDA-before-conversation requests</span>
              </li>
              <li
                style={{
                  fontSize: 18,
                  display: "flex",
                  gap: 14,
                  alignItems: "baseline",
                }}
              >
                <span style={{ color: "var(--muted)", flexShrink: 0 }}>
                  &mdash;
                </span>
                <span>
                  Work that requires me to pretend I&rsquo;m more than one
                  person
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
