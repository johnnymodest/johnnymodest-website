# ARCHITECTURE

Project-wide decisions, component tree, content layer, and implementation rules for johnnymodest.com as a Next.js 15 app.

## Directory structure

```
src/
  app/
    page.tsx                    ← Home (composes section components)
    zero-nonsense/page.tsx
    case-studies/page.tsx
    case-studies/[slug]/page.tsx
    about/page.tsx
    contact/page.tsx
    layout.tsx                  ← Root layout: Nav + Footer + StickyBar
    globals.css                 ← Port of docs/design/project/styles.css
  components/
    Nav.tsx
    Footer.tsx
    StickyBar.tsx               ← sticky bottom bar
    BeforeAfterSlider.tsx       ← drag-to-reveal slider
    CursorUnderline.tsx         ← amber link underline effect on hover
    AmberBlock.tsx              ← reusable <em>-wrapped amber highlight
    sections/
      HeroSection.tsx
      SliderSection.tsx
      ServicesSection.tsx
      RateSection.tsx
      SelectedWorkSection.tsx
      CtaSection.tsx
content/
  before-after.ts
  principles.ts
  services.ts
  case-studies/
    ai-geographic-expansion.mdx
docs/
  design/
    project/                    ← Design source files — read before coding
```

## Component philosophy

Each CSS block in `styles.css` maps to a React component. Pages are thin composers — never put more than one section's worth of markup in a page file.

## Content layer

| Content              | File                         | Why                                   |
| -------------------- | ---------------------------- | ------------------------------------- |
| Case studies         | `content/case-studies/*.mdx` | Long-form, written like documents     |
| Before/after pairs   | `content/before-after.ts`    | Structured, typed, short              |
| Manifesto principles | `content/principles.ts`      | Structured, typed                     |
| Services             | `content/services.ts`        | Typed data, reused in multiple places |
| Domain list          | Inline in About component    | Static, never changes                 |
| Nav links            | Inline in Nav                | Static                                |

## MDX components and frontmatter

Case study pages use a component/frontmatter pattern: data lives in YAML frontmatter, and the MDX body places `<Metrics />` and `<PullQuote />` tags where they should appear in the narrative flow.

### How it works

1. **Frontmatter owns the data.** Metrics arrays, pull quotes, and CTA copy are all YAML fields at the top of each `.mdx` file. The `yaml` package parses them into typed objects.

2. **Components accept optional props.** `Metrics` takes an `items` prop, `PullQuote` takes a `text` prop. When called with no props, they fall back to the frontmatter data. When called with props, the props win.

3. **MDXRemote receives wrapper components** that merge frontmatter defaults with any inline props:

```tsx
components={{
  Metrics: (props: { items?: MetricItem[] }) => {
    const items = props.items ?? fm.metrics;
    return items ? <Metrics items={items} /> : null;
  },
  PullQuote: (props: { text?: string }) => {
    const text = props.text ?? fm.pullQuote;
    return text ? <PullQuote text={text} /> : null;
  },
}}
```

### Usage in MDX

```mdx
<!-- Uses frontmatter defaults (most common) -->
<Metrics />
<PullQuote />

<!-- Override with inline data (for multiple instances) -->
<Metrics items={[{value: "90%", label: "adoption"}]} />
<PullQuote text="A custom quote" />
```

### Frontmatter schema

```yaml
metrics:
  - value: "~90%"
    label: "of active users tried an AI feature"
  - value: "~60%"
    label: "became regular AI feature users"
pullQuote: "The system continues to run without my involvement."
cta:
  eyebrow: "If this sounds familiar"
  title: "Bring me a problem your team has been circling."
  primaryLabel: "Send a brief"
  primaryHref: "/contact"
  secondaryLabel: "More case studies"
  secondaryHref: "/case-studies"
```

`metrics` and `pullQuote` are rendered at the positions of the `<Metrics />` and `<PullQuote />` tags in the MDX body. `cta` is rendered by the page template after the body content. All fields are optional — omit `cta` to hide the CTA banner, omit `pullQuote` to skip it.

### Adding a new MDX component

1. Create the component in `src/components/` (takes typed props, renders design CSS classes)
2. Add the field to the `Frontmatter` interface in `page.tsx`
3. Add a wrapper to the `MDXRemote` `components` map that merges frontmatter defaults with inline props
4. Use the tag in `.mdx` files

## globals.css

Port the full `styles.css` from `docs/design/project/styles.css` into `src/app/globals.css`. The prototype's CSS is production-quality — adapt class names to work alongside Tailwind rather than rewriting.

## Task dependencies

```
01 → 02 → 03 → [04, 05, 06, 07, 08, 09, 10, 11] (parallelisable once shell is in place)
                                                    → [12, 13, 14, 15] (polish)
```

Tasks 01–03 must be complete before page work begins. Tasks 04–11 can run in parallel once the shell is in place. Tasks 12–15 are polish.

## Global implementation notes

1. **Read the design files first.** Everything is in `docs/design/project/`. Start with `styles.css`. Read all JSX files before writing any component. The CSS is production-quality — port it to `globals.css` rather than rewriting.

2. **Match the visual output, not the prototype structure.** The prototype is a single-page React SPA. The target is Next.js App Router with proper routing. Don't copy the internal structure.

3. **Content is final.** All copy in the task files is production-ready. Do not invent placeholder text or substitute different wording.

4. **NDA cases.** Cases 01 and 04 are "Private Company" — do not add company names or identifying details.

5. **No precise figures in case studies.** The agriculture case study uses qualitative framing ("majority adoption", "new revenue") because precise figures are NDA-constrained. Do not substitute numbers.

6. **No Tweaks panel.** The prototype has a design exploration panel. Do not implement it in production.

7. **Task order:** 01–03 first, then 04–11 can be parallelised. 12–15 are polish.

8. **Ask before inventing.** If anything is ambiguous, ask before implementing.

## Formspree

Store endpoint in `NEXT_PUBLIC_FORMSPREE_URL` in `.env.local`. Used by the contact form (TASK_11).
