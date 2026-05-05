# TASK 10 — About page

## Goal

Build the About page at `/about`.

## Dependencies

- [TASK_03](./TASK_03_layout_shell.md) complete (layout shell exists)
- Read [DESIGN_TOKENS.md](./DESIGN_TOKENS.md) and [ARCHITECTURE.md](./ARCHITECTURE.md)

## File

`src/app/about/page.tsx`

## Implementation

### Hero

CSS: `.about-hero`

```tsx
<h1>
  You hire me because I'll see things your team can't see{" "}
  <em>from the inside.</em>
</h1>
```

### Body grid

CSS: `.about-grid` — `1fr 1fr`, collapses to `1fr` at ≤760px. Font-size 19px, line-height 1.6, max-width 44ch per paragraph.

**Left column:** Three paragraphs of body copy (design provides copy — read from design files or earlier spec).

**Right column:** "How I work, briefly." bold label + three paragraphs.

### Domains grid

CSS: `.domains` / `.domain` / `.domain__num` — `grid-template-columns: repeat(auto-fill, minmax(180px, 1fr))`. Border-top 2px solid ink, cells have right and bottom borders.

12 domains (inline in component):
```
01 Developer tools
02 B2B SaaS
03 Marketplaces
04 Academic media
05 Edtech
06 Fintech (consumer)
07 Agriculture
08 Email infrastructure
09 Logistics
10 Subscription products
11 Vertical AI
12 Internal platforms
```

**Note below grid** (`.muted`, small): "If your industry isn't on this list, that's not a disqualifier. Tell me about it — the cross-domain thing only works if there are new domains."

### CTA section

CSS: `.cta` / `.cta__title` / `.cta__row` — Full-bleed amber section.

**Title:** "Get a 30-minute no-agenda call."

**Two buttons:** "Send a brief →" (dark button) | "hello@johnnymodest.com" (ghost button)

## Acceptance criteria

- Two-column body collapses to single column at ≤760px
- Domain grid auto-fills correctly across all widths
- CTA section is full-bleed amber (not constrained to `.shell`)
- Sticky bar: "Convinced? Let's find out if we're a fit."
