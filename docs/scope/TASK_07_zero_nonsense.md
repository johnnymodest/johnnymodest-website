# TASK 07 — Zero Nonsense page

## Goal

Build the Zero Nonsense (manifesto) page at `/zero-nonsense`.

## Dependencies

- [TASK_02](./TASK_02_content_data_files.md) complete (`content/principles.ts` exists)
- [TASK_03](./TASK_03_layout_shell.md) complete (layout shell exists)
- Read [DESIGN_TOKENS.md](./DESIGN_TOKENS.md) and [ARCHITECTURE.md](./ARCHITECTURE.md)

## File

`src/app/zero-nonsense/page.tsx`

## Implementation

### Hero

CSS: `.manifesto-hero` — Padding: `clamp(120px, 18vh, 200px) 0 clamp(80px, 10vw, 140px)`.

Eyebrow above heading: "THE MANIFESTO · SIX PRINCIPLES · SCROLL ON"

```tsx
<h1>
  Zero <em>Nonsense.</em>
</h1>
```

Subhead: "What we believe, in plain language. If you read these and nod, we'll probably get along."

### Principles

CSS: `.principle` / `.principle__num` / `.principle__text` / `.principle__caption` / `.principle--amber`

Data from `content/principles.ts`. Map over `principles` array.

**Scroll reveal:** Each principle starts with `opacity: 0; transform: translateY(40px)` and transitions to `opacity: 1; transform: translateY(0)` when `is-revealed` class is added. Use `IntersectionObserver` with `threshold: 0.2`. Transition: `opacity 700ms ease, transform 700ms cubic-bezier(.2,.7,.2,1)`.

**Amber principles:** For principles where `amber: true`, add `.principle--amber` class. This applies full-bleed amber via negative margins: `margin: 0 calc(var(--gutter) * -1); padding-left/right: var(--gutter)`. The component needs to break out of the `.shell` container — use the negative margin technique.

**Principle number label:**
```tsx
<p className="principle__num">
  Principle <span>{num}</span> / 06
</p>
```

### Footnote

After the six principles:

```tsx
<h2>We also believe a <em>little bit of humor</em> is nice.</h2>
<p className="principle__caption">That one isn't a principle. It's just true.</p>
```

The `<em>` uses amber color via `.principle__text em` rule (color `--amber-dark`).

## Acceptance criteria

- Scroll-reveal fires once per principle as it enters viewport
- Amber principles break out to full width correctly
- Sticky bar copy: "Sound like your kind of operator? Let's talk."
