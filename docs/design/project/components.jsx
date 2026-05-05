/* JohnnyModest — shared components: Nav, StickyBar, Footer, Logo, BeforeAfter slider, AmberLink, helpers */

const { useState, useEffect, useRef, useCallback, useMemo } = React;

/* ---------- routing ---------- */
const useRoute = () => {
  const [route, setRoute] = useState(() => window.location.hash.replace(/^#\/?/, "") || "home");
  useEffect(() => {
    const onHash = () => {
      const r = window.location.hash.replace(/^#\/?/, "") || "home";
      setRoute(r);
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return [route, (r) => { window.location.hash = "/" + r; }];
};

const navTo = (e, r) => {
  if (e) e.preventDefault();
  window.location.hash = "/" + r;
};

/* ---------- logo ---------- */
function Monogram({ size = 36 }) {
  const s = size;
  return (
    <svg width={s} height={s} viewBox="0 0 36 36" aria-label="JM monogram" style={{ display: "block" }}>
      <line x1="3" y1="32" x2="33" y2="4" stroke="currentColor" strokeWidth="1.5" />
      <text x="6" y="14" fontFamily="var(--font-display)" fontSize="13" fontWeight="500" fill="currentColor" letterSpacing="-0.02em">J</text>
      <text x="20" y="30" fontFamily="var(--font-display)" fontSize="13" fontWeight="500" fill="currentColor" letterSpacing="-0.02em">M</text>
    </svg>
  );
}

function Logo({ onClick }) {
  return (
    <a href="#/home" className="nav__logo" onClick={(e) => { navTo(e, "home"); onClick && onClick(); }}>
      <Monogram size={36} />
      <span className="nav__wordmark">Johnny Modest</span>
    </a>
  );
}

/* ---------- nav ---------- */
function Nav({ route }) {
  const links = [
    ["work", "Case studies"],
    ["zero-nonsense", "Zero nonsense"],
    ["about", "About"],
    ["contact", "Contact"],
  ];
  return (
    <header className="nav">
      <div className="shell shell--wide nav__inner">
        <Logo />
        <nav className="nav__links">
          {links.map(([slug, label]) => (
            <a
              key={slug}
              href={"#/" + slug}
              className="nav__link amber-link"
              aria-current={route === slug || (slug === "work" && route.startsWith("case-")) ? "page" : undefined}
              onClick={(e) => navTo(e, slug)}
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--ux", ((e.clientX - r.left) / r.width * 100) + "%");
              }}
            >{label}</a>
          ))}
          <a href="#/contact" className="nav__cta" onClick={(e) => navTo(e, "contact")}>Start a conversation →</a>
        </nav>
      </div>
    </header>
  );
}

/* ---------- footer ---------- */
function Footer() {
  return (
    <footer className="foot">
      <div className="shell shell--wide">
        <div className="foot__grid">
          <div className="foot__brand">
            <Logo />
            <p>Senior product leadership for teams that need someone to see what they can't see from the inside. Based in Bucharest. Working globally.</p>
          </div>
          <div className="foot__col">
            <h5>Site</h5>
            <ul>
              <li><a className="amber-link" href="#/home" onClick={(e) => navTo(e, "home")}>Home</a></li>
              <li><a className="amber-link" href="#/zero-nonsense" onClick={(e) => navTo(e, "zero-nonsense")}>Zero nonsense</a></li>
              <li><a className="amber-link" href="#/work" onClick={(e) => navTo(e, "work")}>Case studies</a></li>
              <li><a className="amber-link" href="#/about" onClick={(e) => navTo(e, "about")}>About</a></li>
            </ul>
          </div>
          <div className="foot__col">
            <h5>Direct</h5>
            <ul>
              <li><a className="amber-link" href="mailto:hello@johnnymodest.com">hello@johnnymodest.com</a></li>
              <li><a className="amber-link" href="#/contact" onClick={(e) => navTo(e, "contact")}>Brief form</a></li>
              <li><a className="amber-link" href="https://linkedin.com" onClick={(e) => e.preventDefault()}>LinkedIn ↗</a></li>
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
          <span>© {new Date().getFullYear()} Johnny Modest Consultancy</span>
          <span>No packages. No theater. No buzzwords.</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- sticky CTA bar ---------- */
function StickyBar() {
  const [route] = useRoute();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => { setVisible(false); }, [route]);

  useEffect(() => {
    if (route === "contact" || dismissed) return;
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = h > 0 ? y / h : 0;
      setVisible(y > 600 && pct < 0.92);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [route, dismissed]);

  const messages = {
    home: ["Like the cut of this jib?", "Tell me what's stuck."],
    "zero-nonsense": ["Sound like your kind of operator?", "Let's talk."],
    work: ["Want to see if I can do this for you?", "Send a brief."],
    about: ["Familiar problem space?", "Get in touch."],
  };
  const msg = messages[route] || messages.home;
  if (route === "contact") return null;

  return (
    <div className={"sticky-bar" + (visible ? " is-visible" : "")}>
      <div className="sticky-bar__inner">
        <div className="sticky-bar__copy">
          <span className="dot" />
          <span><strong>{msg[0]}</strong> {msg[1]}</span>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <a href="#/contact" className="sticky-bar__cta" onClick={(e) => navTo(e, "contact")}>Hire Johnny →</a>
          <button className="sticky-bar__close" onClick={() => setDismissed(true)} aria-label="Dismiss">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- amber link helper ---------- */
function AmberLink({ children, ...props }) {
  return (
    <a
      {...props}
      className={"amber-link " + (props.className || "")}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--ux", ((e.clientX - r.left) / r.width * 100) + "%");
      }}
    >{children}</a>
  );
}

/* ---------- arrow icon ---------- */
function Arrow({ size = 18 }) {
  return (
    <svg className="btn__arrow" width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d="M3 9H15M15 9L9 3M15 9L9 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

/* ---------- before/after slider ---------- */
function BeforeAfter({ pairs, hint = "Drag to translate" }) {
  const [idx, setIdx] = useState(0);
  const [split, setSplit] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [touched, setTouched] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (touched || dragging) return;
    let raf;
    let t = 0;
    const step = () => {
      t += 0.012;
      const v = 50 + Math.sin(t) * 18;
      setSplit(v);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [touched, dragging]);

  const setFromX = useCallback((clientX) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const v = Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100));
    setSplit(v);
    setTouched(true);
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e) => setFromX(e.touches ? e.touches[0].clientX : e.clientX);
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [dragging, setFromX]);

  const cur = pairs[idx];

  const next = () => setIdx((i) => (i + 1) % pairs.length);
  const prev = () => setIdx((i) => (i - 1 + pairs.length) % pairs.length);

  return (
    <div>
      <div
        className="ba"
        ref={ref}
        style={{ "--split": split + "%" }}
        onMouseDown={(e) => { setDragging(true); setFromX(e.clientX); }}
        onTouchStart={(e) => { setDragging(true); setFromX(e.touches[0].clientX); }}
      >
        <div className="ba__panel ba__panel--before">
          <div className="ba__label">Before · Consulting-speak</div>
          <p className="ba__text">{cur.before}</p>
          <div className="ba__label" style={{ marginTop: "auto", opacity: 0.45 }}>{cur.tag}</div>
        </div>
        <div className="ba__panel ba__panel--after">
          <div className="ba__label">After · Plain English</div>
          <p className="ba__text">{cur.after}</p>
          <div className="ba__label" style={{ marginTop: "auto", opacity: 0.55 }}>{cur.tag}</div>
        </div>
        <div className="ba__handle" aria-label="Drag to reveal">
          <div className="ba__grip" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 6L3 12L9 18M15 6L21 12L15 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
            </svg>
          </div>
        </div>
      </div>
      <div className="ba__nav">
        <div className="ba__counter">
          {String(idx + 1).padStart(2, "0")} / {String(pairs.length).padStart(2, "0")} · {touched ? "Nice. Try the next one." : hint}
        </div>
        <div className="ba__arrows">
          <button className="ba__arrow" onClick={prev} aria-label="Previous">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L4 8L10 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" /></svg>
          </button>
          <button className="ba__arrow" onClick={next} aria-label="Next">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3L12 8L6 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { useRoute, navTo, Nav, Footer, StickyBar, Logo, Monogram, AmberLink, Arrow, BeforeAfter });
