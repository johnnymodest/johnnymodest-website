# TASK 11 — Contact page

## Goal

Build the Contact page at `/contact` with the brief form and Formspree integration.

## Dependencies

- [TASK_03](./TASK_03_layout_shell.md) complete (layout shell exists — StickyBar must be hidden on this route)
- Read [DESIGN_TOKENS.md](./DESIGN_TOKENS.md) and [ARCHITECTURE.md](./ARCHITECTURE.md)

## File

`src/app/contact/page.tsx`

## Implementation

Note: Sticky bar must be hidden on this page.

### Hero (amber full-bleed)

CSS: `.cta` / `.cta__title`

> "If something's stuck, let's talk about it."

Two CTAs: "Send a brief →" | "hello@johnnymodest.com"

### Contact grid

CSS: `.contact-grid` — `1fr 1.2fr`, collapses to `1fr` at ≤880px.

### Left column — contact info

CSS: `.contact-info`

- **EMAIL:** hello@johnnymodest.com
- **RESPONSE:** Within 2 business days
- **FORMAT:** No pitch decks needed
- **BASED:** Bucharest, EU timezone

### Right column — brief form

CSS: `.form` / `.field` / `.field__label` / `.field__input` / `.field__textarea` / `.scope-pills` / `.scope-pill` / `.scope-pill.is-active`

**Fields:**

1. Name + Email (`.field--row`, two-column)
2. Company / context (text input)
3. What's stuck (textarea, min-height 100px)
4. **Scope** (single-select pills): "One conversation" | "Short (2–4 weeks)" | "Full (6–14 weeks)" | "Not sure yet"
5. **Timeline** (single-select pills): "Immediately" | "Next month" | "Next quarter" | "Just exploring"
6. Submit: "Send the brief →" — full-width amber button

Active pill: `.is-active` class adds amber background.

### Formspree integration

Store endpoint in `NEXT_PUBLIC_FORMSPREE_URL` in `.env.local`. Wire form submission:
- **On success:** Replace form with:
  > "Got it. I'll read this and reply within two business days."
  > "No automated response. No sales sequence. Just me."
- **On error:** "Something went wrong. Email me directly at hello@johnnymodest.com"

### What I won't do

Below the form. Eyebrow: "FOR CLARITY"
- Retainers with no defined outcome
- Equity-only arrangements
- NDA-before-conversation requests
- Work that requires me to pretend I'm more than one person

## Acceptance criteria

- Form submits to Formspree (test with a real submission)
- Scope and timeline pills are single-select
- Success state renders after submit
- Sticky bar hidden on this page
