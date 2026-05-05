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
