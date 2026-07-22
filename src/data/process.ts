export type ProcessStep = { num: string; title: string; body: string };

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Quick chat",
    body: "Tell me what's wrong with your current site (or that you don't have one).",
  },
  {
    num: "02",
    title: "Proposal & timeline",
    body: "You get a fixed price and a delivery date, in writing, before anything starts.",
  },
  {
    num: "03",
    title: "Build",
    body: "I build it in WordPress, so you're never locked out of your own site.",
  },
  {
    num: "04",
    title: "Launch & handoff",
    body: "Site goes live, you get the keys, and I show you how to edit it yourself.",
  },
];
