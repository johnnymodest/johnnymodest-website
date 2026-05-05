# TASK 06 — Home page: Services, Rate, Selected Work sections

## Goal

Build the Services, Rate, and Selected Work sections for the home page.

## Dependencies

- [TASK_02](./TASK_02_content_data_files.md) complete (content files exist)
- [TASK_03](./TASK_03_layout_shell.md) complete (layout shell exists)
- Read [DESIGN_TOKENS.md](./DESIGN_TOKENS.md) and [ARCHITECTURE.md](./ARCHITECTURE.md)

## Files

`src/components/sections/ServicesSection.tsx`, `src/components/sections/RateSection.tsx`, `src/components/sections/SelectedWorkSection.tsx`

---

## ServicesSection

CSS: `.services` / `.service` / `.service__num` / `.service__title` / `.service__body`

**Grid:** `80px 1fr 2fr 1fr` on desktop, `60px 1fr` on mobile. Data from `content/services.ts`.

**Section intro** above the service list:
- **Left eyebrow:** "THREE THINGS. NOT FOUR."
- **Right** (max-width 380px): "No bronze/silver/gold tiers. No packages. We talk about the actual problem and shape the engagement around it."

## RateSection

CSS: `.rate` / `.rate__grid` / `.rate__num`

**Full-bleed black background** (`--ink`), white text. Not constrained to `.shell`. Two-column grid.

**Left — number display:**
```tsx
<div className="rate__num">
  $<span>80</span>/hr
</div>
```
Font-size: `clamp(96px, 16vw, 220px)`, the `<span>` is amber-colored.

**Right — notes stack:**
- "From $80/hr. Shorter, more urgent engagements cost more."
- "Scope changes are welcome — they need dedicated time to be done right."
- "Two-week minimum. Most engagements run 6–14 weeks."

## SelectedWorkSection

CSS: `.cs-list` / `.cs-row` / `.cs-row__num` / `.cs-row__title` / `.cs-row__client`

**Grid per row:** `80px 2fr 1fr 1fr 60px`

**Two rows (cases 02 and 03 only):**
- 02: "LLM-based spam detection at scale" | MAILTRAP · DEVELOPER TOOLS | 2023
- 03: "ML display optimization, +38% engagement" | TRENDMD · ACADEMIC MEDIA | 2022

**Hover state:** `background: --amber-light; padding-left: 16px; padding-right: 16px`.

**Below list:** "See all case studies →" link to `/case-studies`.

## Acceptance criteria

- Service grid collapses correctly on mobile
- Rate section is full-bleed black, not constrained to `.shell`
- CS rows have correct hover transition
