# DESIGN TOKENS

Authoritative visual values from `docs/design/project/styles.css`. Use these as Tailwind config extensions and CSS custom properties. Do not hardcode hex values in components.

## Colors

```css
--amber: #ef9f27        /* primary accent */
--amber-text: #412402   /* text on amber backgrounds */
--amber-dark: #854f0b   /* hover states, borders on amber */
--amber-light: #faeeda  /* light amber fills */
--ink: #0a0a0a          /* primary text */
--ink-soft: #1f1f1f
--paper: #ffffff
--paper-warm: #fafaf8
--rule: #e6e6e0         /* borders and dividers */
--muted: #6b6b66        /* secondary text */
```

### Tailwind config extension

```js
colors: {
  amber: { DEFAULT: '#EF9F27', text: '#412402', dark: '#854F0B', light: '#FAEEDA' },
  ink: { DEFAULT: '#0A0A0A', soft: '#1F1F1F' },
  paper: { DEFAULT: '#FFFFFF', warm: '#FAFAF8' },
  rule: '#E6E6E0',
  muted: '#6B6B66',
}
```

## Typography

| Token     | Value                           | Weight | Letter-spacing | Line-height |
| --------- | ------------------------------- | ------ | -------------- | ----------- |
| h1        | `clamp(48px, 8.6vw, 132px)`    | 500    | -0.02em        | 1.02        |
| h2        | `clamp(36px, 5.4vw, 78px)`     | —      | —              | —           |
| h3        | `clamp(24px, 2.6vw, 38px)`     | —      | -0.015em       | —           |
| h4        | `clamp(18px, 1.4vw, 22px)`     | —      | -0.01em        | —           |
| .lead     | `clamp(20px, 1.6vw, 24px)`     | —      | —              | 1.45         |
| .eyebrow  | 11px                            | —      | 0.14em         | —            |

- .lead max-width: 38ch
- .eyebrow: font-mono, uppercase, color --muted

## Fonts

```ts
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
});
```

- `--font-display`: "Space Grotesk"
- `--font-body`: "Space Grotesk"
- `--font-mono`: "JetBrains Mono"

Apply as CSS variables on `<html>` via `layout.tsx`.

## Spacing

```css
--max: 1280px;                    /* max content width */
--gutter: clamp(20px, 4vw, 56px); /* page gutters */

.section:       padding clamp(72px, 9vw, 140px) 0
.section--tight: padding clamp(40px, 5vw, 72px) 0
```

## Shell

The `.shell` class constrains content to `--max` width with `--gutter` padding. All page sections live inside `.shell` unless otherwise noted (rate section, amber principles, CTA sections are full-bleed).

## Amber highlight pattern

`<em>` tag with `font-style: normal`, amber background (`--amber`), `--amber-text` color, `padding: 0 0.18em`. Used in headlines for emphasis words.
