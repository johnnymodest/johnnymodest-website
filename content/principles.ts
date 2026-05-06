export interface Principle {
  num: string;
  amber: boolean;
  heading: string;
  body: string;
}

export const principles: Principle[] = [
  {
    num: "01",
    amber: true,
    heading: "Ideas that stand on their own, explained plainly.",
    body: "We choose to rely on idea’s own strength, and are we are willing to let go of ideas that require buzzwords and hyperbole to stand. Function over form.",
  },
  {
    num: "02",
    amber: false,
    heading: "Transparency over ego.",
    body: "We believe in stating intentions or agenda clearly, and in acknkowledging mistakes made on either side of the conversation directly. We also believe setbacks and conflict are natural parts of any process, and need to be surfaced early, so they can be addressed.",
  },
];
