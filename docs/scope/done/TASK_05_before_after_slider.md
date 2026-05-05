# TASK 05 — Home page: Before/After Slider

## Goal

Build the drag-to-reveal before/after slider section for the home page.

## Dependencies

- [TASK_02](./TASK_02_content_data_files.md) complete (`content/before-after.ts` exists)
- [TASK_03](./TASK_03_layout_shell.md) complete (layout shell exists)
- Read [DESIGN_TOKENS.md](./DESIGN_TOKENS.md) and [ARCHITECTURE.md](./ARCHITECTURE.md)

## Files

`src/components/BeforeAfterSlider.tsx`, `src/components/sections/SliderSection.tsx`

## Implementation

CSS classes: `.ba` / `.ba__panel` / `.ba__panel--before` / `.ba__panel--after` / `.ba__handle` / `.ba__grip` / `.ba__nav` / `.ba__counter` / `.ba__arrows`

### Core mechanism

The slider uses `clip-path: inset(0 0 0 var(--split, 50%))` on the after panel. The `--split` CSS custom property is updated on drag via JS:

```tsx
const [split, setSplit] = useState(50); // percent
sliderEl.style.setProperty("--split", `${split}%`);
```

### Handle

The handle (`.ba__handle`) is a 2px vertical line at `left: var(--split, 50%)`. The grip (`.ba__grip`) is a 56×56px black square centered on the handle with `<>` icon.

### Panel layering

The after panel is `position: absolute; inset: 0` — full overlay, clipped by `clip-path`. After panel background is `--amber` with `--amber-text` text.

### Data

Content from `content/before-after.ts`. Import the `pairs` array.

### Navigation

Prev/next arrows cycle the current pair index. Counter shows "01 / 05 · Drag to translate". Arrows are disabled at boundaries (first/last pair).

### Auto-pulse

On mount, animate `--split` gently back and forth until first user interaction. Use `requestAnimationFrame`. Stop on `mousedown` or `touchstart`.

### Section heading

```tsx
<h2>
  Drag the divider.
  <br />
  Watch the fluff dissolve.
</h2>
```

## Acceptance criteria

- Drag works on mouse and touch
- Clip-path reveals after panel correctly
- Pair cycling works with arrows
- Auto-pulse stops on first interaction
- After panel is full amber with amber-text text
