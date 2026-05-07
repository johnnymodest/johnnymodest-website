const domains = [
  "01 Developer tools",
  "02 B2B SaaS",
  "03 Marketplaces",
  "04 Academic media",
  "05 Edtech",
  "06 Fintech (consumer)",
  "07 Agriculture",
  "08 Email infrastructure",
  "09 Logistics",
  "10 Subscription products",
  "11 Vertical AI",
  "12 Internal platforms",
];

export default function DomainsSection() {
  return (
    <section className="section">
      <div className="shell">
        <h2>Domains I&rsquo;ve worked in</h2>

        <div className="domains">
          {domains.map((d) => {
            const [num, ...rest] = d.split(" ");
            return (
              <div key={num} className="domain">
                <span className="domain__num">{num}</span>
                {rest.join(" ")}
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
            If your industry isn't on this list, that's not a disqualifier. Tell
            me about it — I have enough experience to see patterns across
            domains.
          </p>
        </div>
      </div>
    </section>
  );
}
