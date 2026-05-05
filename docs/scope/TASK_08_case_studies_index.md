# TASK 08 — Case Studies index page

## Goal

Build the Case Studies listing page at `/case-studies`.

## Dependencies

- [TASK_03](./TASK_03_layout_shell.md) complete (layout shell exists)
- Read [DESIGN_TOKENS.md](./DESIGN_TOKENS.md) and [ARCHITECTURE.md](./ARCHITECTURE.md)

## File

`src/app/case-studies/page.tsx`

## Implementation

### Hero

Eyebrow: "CASE STUDIES · 4 ENGAGEMENTS"

```tsx
<h1>
  Selected work,
  <br />
  told <em>plainly.</em>
</h1>
```

Subhead: "Some clients are named. Some are NDA-bound and called 'Private Company.' The lessons are the same in either column."

### Index list

CSS: `.cs-list` / `.cs-row` — Grid per row: `80px 2fr 1fr 1fr 60px`

Define four cases inline in the page:

```ts
const cases = [
  {
    num: "01",
    title: "AI-powered geographic expansion",
    nda: true,
    client: "Private Company",
    domain: "Agriculture",
    year: "2024",
    slug: "ai-geographic-expansion",
  },
  {
    num: "02",
    title: "LLM-based spam detection at scale",
    nda: false,
    client: "Mailtrap",
    domain: "Developer Tools",
    year: "2023",
    slug: "llm-spam-detection",
  },
  {
    num: "03",
    title: "ML display optimization, +38% engagement",
    nda: false,
    client: "TrendMD",
    domain: "Academic Media",
    year: "2022",
    slug: "ml-display-optimization",
  },
  {
    num: "04",
    title: "Partnership pipeline rebuild",
    nda: true,
    client: "Private Company",
    domain: "B2B SaaS",
    year: "2021",
    slug: "partnership-pipeline",
  },
];
```

**NDA badge:** CSS `.cs-row__nda` — amber-light background, amber-dark border, amber-text color. Show on rows where `nda: true` (cases 01 and 04).

**Links:** Cases 02–04 link to `/case-studies/ai-geographic-expansion` as placeholder (the detail page only exists for case 01 in this batch). Case 01 links to `/case-studies/ai-geographic-expansion`.

**Hover:** amber-light background + padding shift (16px left/right).

## Acceptance criteria

- All four rows render with correct metadata
- NDA badge on rows 01 and 04
- Row hover: amber-light background + padding shift
- Sticky bar copy: "Want results like these? Let's talk."
