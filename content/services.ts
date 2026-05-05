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
