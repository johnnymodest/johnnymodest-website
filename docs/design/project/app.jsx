/* JohnnyModest — Tweaks panel + main App */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "font": "space",
  "amber": "balanced",
  "hero": "direct",
  "cursorUnderline": true,
  "stickyBar": true
}/*EDITMODE-END*/;

function App() {
  const [route] = useRoute();
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // global cursor-tracking link underline
  React.useEffect(() => {
    if (!tweaks.cursorUnderline) {
      document.documentElement.removeAttribute("data-cursor-link");
      return;
    }
    document.documentElement.setAttribute("data-cursor-link", "on");
  }, [tweaks.cursorUnderline]);

  // apply font
  React.useEffect(() => { document.documentElement.setAttribute("data-font", tweaks.font); }, [tweaks.font]);
  React.useEffect(() => { document.documentElement.setAttribute("data-amber", tweaks.amber); }, [tweaks.amber]);

  let page;
  if (route === "home" || route === "") page = <HomePage tweaks={tweaks} />;
  else if (route === "zero-nonsense") page = <ZeroNonsensePage />;
  else if (route === "work") page = <WorkPage />;
  else if (route === "case-geo") page = <CaseGeoPage />;
  else if (route.startsWith("case-")) page = <CasePlaceholderPage slug={route} />;
  else if (route === "about") page = <AboutPage />;
  else if (route === "contact") page = <ContactPage />;
  else page = <NotFoundPage />;

  const showFooter = !["work", "case-geo", "case-mailtrap", "case-trendmd", "case-partner", "about", "contact"].includes(route);

  return (
    <>
      <Nav route={route} />
      {page}
      {showFooter && <Footer />}
      {tweaks.stickyBar && <StickyBar />}
      <TweaksPanel title="Tweaks">
        <TweakSection title="Typography">
          <TweakRadio
            label="Font pairing"
            value={tweaks.font}
            onChange={(v) => setTweak("font", v)}
            options={[
              { value: "space", label: "Space Grotesk" },
              { value: "syne", label: "Syne / Inter" },
              { value: "dm", label: "DM Sans" },
              { value: "inter", label: "Inter" },
            ]}
          />
        </TweakSection>
        <TweakSection title="Amber treatment">
          <TweakRadio
            label="Hero accent intensity"
            value={tweaks.amber}
            onChange={(v) => setTweak("amber", v)}
            options={[
              { value: "loud", label: "Loud" },
              { value: "balanced", label: "Balanced" },
              { value: "quiet", label: "Quiet" },
            ]}
          />
        </TweakSection>
        <TweakSection title="Hero copy">
          <TweakRadio
            label="Headline direction"
            value={tweaks.hero}
            onChange={(v) => setTweak("hero", v)}
            options={[
              { value: "direct", label: "Direct" },
              { value: "dry", label: "Dry humor" },
              { value: "stark", label: "Stark statement" },
            ]}
          />
        </TweakSection>
        <TweakSection title="Interactions">
          <TweakToggle label="Cursor-tracking link underline" value={tweaks.cursorUnderline} onChange={(v) => setTweak("cursorUnderline", v)} />
          <TweakToggle label="Sticky 'hire Johnny' bar on scroll" value={tweaks.stickyBar} onChange={(v) => setTweak("stickyBar", v)} />
        </TweakSection>
        <TweakSection title="Quick jump">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            {[
              ["home", "Home"],
              ["zero-nonsense", "Manifesto"],
              ["work", "Work"],
              ["case-geo", "Case 01"],
              ["about", "About"],
              ["contact", "Contact"],
            ].map(([slug, label]) => (
              <TweakButton key={slug} onClick={() => navTo(null, slug)}>{label}</TweakButton>
            ))}
          </div>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
