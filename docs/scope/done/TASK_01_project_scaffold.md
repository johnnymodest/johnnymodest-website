# TASK 01 — Project scaffold

## Goal

Verify or complete the Next.js 15 project scaffold. No UI output from this task.

## Dependencies

- None (this is the first task)
- Read [DESIGN_TOKENS.md](./DESIGN_TOKENS.md) and [ARCHITECTURE.md](./ARCHITECTURE.md) before starting

## Steps

### 1. Create Next.js app

```bash
npx create-next-app@latest . \
  --typescript --tailwind --app --src-dir --import-alias "@/*"
```

If the scaffold already exists, verify it matches this configuration.

### 2. Tailwind config — extend colors

Add to `tailwind.config.ts`:

```js
colors: {
  amber: { DEFAULT: '#EF9F27', text: '#412402', dark: '#854F0B', light: '#FAEEDA' },
  ink: { DEFAULT: '#0A0A0A', soft: '#1F1F1F' },
  paper: { DEFAULT: '#FFFFFF', warm: '#FAFAF8' },
  rule: '#E6E6E0',
  muted: '#6B6B66',
}
```

### 3. Load fonts in `src/app/layout.tsx`

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

Apply as CSS variables on `<html>`.

### 4. Port `globals.css`

Port the full `styles.css` from `docs/design/project/styles.css` into `src/app/globals.css`. Adapt class names to work alongside Tailwind.

### 5. Create directory structure

```
content/
  before-after.ts
  principles.ts
  services.ts
  case-studies/
    ai-geographic-expansion.mdx
docs/
  design/
```

Directories should exist but files are created in TASK_02.

## Acceptance criteria

- `npm run dev` starts without errors
- Space Grotesk and JetBrains Mono load on `/`
- Tailwind amber classes work: `bg-amber` renders `#EF9F27`
- All CSS custom properties available globally
