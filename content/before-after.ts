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
