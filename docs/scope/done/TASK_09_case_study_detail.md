# TASK 09 — Case Study detail page

## Goal

Build the case study detail page at `/case-studies/[slug]` and the content file for the first case study.

## Dependencies

- [TASK_03](./TASK_03_layout_shell.md) complete (layout shell exists)
- Read [DESIGN_TOKENS.md](./DESIGN_TOKENS.md) and [ARCHITECTURE.md](./ARCHITECTURE.md)

## Files

`src/app/case-studies/[slug]/page.tsx`, `content/case-studies/ai-geographic-expansion.mdx`

## Implementation

### Page layout

CSS: `.cs-hero` / `.cs-body` / `.cs-body__nav` / `.cs-body__content`

**Two-column body:** `220px 1fr`, gap `clamp(40px, 6vw, 100px)`. Left sidebar: `position: sticky; top: 100px`. Collapses to single column at ≤760px (sidebar goes static).

### Hero

CSS: `.cs-hero` / `.cs-hero__crumb` / `.cs-hero__title` / `.cs-hero__meta`

- **Crumb:** "← Case studies" link back to `/case-studies`
- **Title:** `.cs-hero__title`, max-width 18ch
- **Meta grid** (4 columns, `.cs-hero__meta` as `<dl>`):
  - Client: Private Company
  - Domain: Agriculture
  - Year: 2024
  - Status: NDA · Anonymised

### Sidebar nav

CSS: `.cs-body__nav` — Numbered jump links: Overview | The problem | The approach | The outcome | What I'd do differently

Highlight active section on scroll via `IntersectionObserver`.

### MDX content

Install `@next/mdx` or `next-mdx-remote`. Create `content/case-studies/ai-geographic-expansion.mdx` with frontmatter:

```yaml
---
title: AI-powered geographic expansion
client: Private Company
domain: Agriculture
year: 2024
nda: true
slug: ai-geographic-expansion
---
```

Content sections (use `## ` headings that match sidebar nav anchors):

**Overview metrics** — CSS: `.metrics` / `.metric` / `.metric__num` / `.metric__label`. Grid: `repeat(3, 1fr)`:
- "Majority adoption" — new-market users within 90 days
- "Zero additional marketing spend"
- "New revenue" — from previously untouched markets

**Pull quote** (CSS `.cs-pull`, amber left border): "The system continues to run without my involvement."

**The problem** — An agricultural technology company needed to expand into new geographic markets but had no way to match their product to local conditions — soil types, climate zones, crop varieties — without expensive manual research per region.

**The approach:**
- Mapped the data problem: what do we know, what do we need to infer?
- Built an AI pipeline matching product capabilities to geographic and agronomic data
- Designed the user flow so farmers got relevant recommendations without understanding the model
- Phased rollout: two new markets first to validate, then scaled
- Instrumented everything: adoption rate, recommendation acceptance, session depth

**The outcome** — Majority of new-market users adopted the AI-recommended approach within 90 days. Revenue from previously untouched markets materialized without additional marketing spend.

**What I'd do differently** — Started instrumentation too late. Had adoption data but limited insight into why specific recommendations were accepted or rejected in the first weeks. Wire analytics before launch.

## Acceptance criteria

- Sticky sidebar highlights active section on scroll
- Metrics grid renders correctly (3-column desktop, 1-column mobile)
- MDX renders with `.cs-section` prose styles
- Pull quote has amber left border
