# TASK 02 — Content data files

## Goal

Create the typed content data files. No UI output from this task.

## Dependencies

- [TASK_01](./TASK_01_project_scaffold.md) complete (project scaffold exists)
- Read [DESIGN_TOKENS.md](./DESIGN_TOKENS.md) and [ARCHITECTURE.md](./ARCHITECTURE.md)

## Files to create

### `content/before-after.ts`

Define a `Pair` interface and export a `pairs` array:

```ts
export interface Pair {
  context: string;
  before: string;
  after: string;
}

export const pairs: Pair[] = [
  {
    context: "QUARTERLY REVIEW · Q2 RETRO",
    before:
      "Leveraging synergistic cross-functional alignment to holistically drive stakeholder value across the product ecosystem.",
    after:
      "We got the teams talking to each other. The product shipped on time.",
  },
  {
    context: "STRATEGY DECK · SLIDE 4",
    before:
      "Proactively orchestrating mission-critical deliverables through agile paradigms and best-in-class methodologies.",
    after: "We wrote down what we were actually trying to do. Then we did it.",
  },
  {
    context: "PRODUCT BRIEF · V6",
    before:
      "Ideating around the user journey to surface actionable insights that move the needle on core KPI metrics.",
    after:
      "We asked three customers what annoyed them most. Then we fixed that.",
  },
  {
    context: "ROADMAP REVIEW · Q3",
    before:
      "Ensuring stakeholder alignment across all verticals to synergize our go-to-market approach and maximise ROI.",
    after: "Everyone agreed on what we were building next. We built it.",
  },
  {
    context: "TEAM RETRO · SPRINT 22",
    before:
      "Fostering psychological safety to enable high-velocity iteration cycles within our cross-functional pod structure.",
    after:
      "We stopped having meetings about having meetings. Velocity doubled.",
  },
];
```

### `content/principles.ts`

Define a `Principle` interface and export a `principles` array:

```ts
export interface Principle {
  num: string;
  amber: boolean;
  heading: string;
  body: string;
}

export const principles: Principle[] = [
  {
    num: "01",
    amber: false,
    heading:
      "We are actively trying to return the business environment to truth and clarity.",
    body: "In a world where buzzwords and bombastic wording are routinely used instead of clear arguments, we choose to rely on an idea's own strength, and are willing to let go of ideas that cannot stand on their own.",
  },
  {
    num: "02",
    amber: true,
    heading:
      "We accept that conflict exists. Avoiding it at all costs is a recipe for failure.",
    body: "We believe in having uncomfortable conversations sooner rather than later.",
  },
  {
    num: "03",
    amber: false,
    heading:
      "Setbacks are part of everyday life. Point them out early and directly.",
    body: "We recognize that setbacks happen, and choose to surface them early — not manage them to death in a status update.",
  },
  {
    num: "04",
    amber: false,
    heading: "We believe in data-driven decisions and clear goals.",
    body: "Not adding an item to a list just because three is a good number to have.",
  },
  {
    num: "05",
    amber: true,
    heading:
      "Scope changes are welcome. They need dedicated time and resources to be done right.",
    body: "We adapt to your business needs. You respect that direction shifts take time and cost more — because doing them badly costs more still.",
  },
  {
    num: "06",
    amber: false,
    heading: "We reserve seriousness for the task at hand.",
    body: "The name, the amber, the occasional dry remark — all intentional. Confidence doesn't require performance.",
  },
];
```

### `content/services.ts`

Define a `Service` interface and export a `services` array:

```ts
export interface Service {
  num: string;
  title: string;
  body: string;
  meta: string;
}

export const services: Service[] = [
  {
    num: "01",
    title: "Product Strategy & GTM",
    body: "Direction, positioning, go-to-market. For teams that need to decide what to build and why.",
    meta: "Strategy · Positioning · GTM",
  },
  {
    num: "02",
    title: "Hands-on Product Leadership",
    body: "I parachute in, get embedded enough to understand the actual problem, recommend, ship, build the system to run without me, then exit.",
    meta: "Interim · Fractional · 6–14 weeks",
  },
  {
    num: "03",
    title: "Tooling & Workflow Setup",
    body: "Modern tools, no buzzwords. I'll help your team work faster without spending six months on an AI transformation programme.",
    meta: "Tooling · Workflow · Automation",
  },
];
```

## Acceptance criteria

- All three files compile with no TypeScript errors
- Types are explicit (each file exports its interface)
