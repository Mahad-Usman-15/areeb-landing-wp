export type FaqItem = { question: string; answer: string };

// Answers are drafted to match the site's tone — confirm they reflect your actual
// pricing/timeline/policies before publishing.
export const faqItems: FaqItem[] = [
  {
    question: "How much does this cost?",
    answer:
      "It depends on scope, but you always get a fixed price in writing before I start — no hourly surprises.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most sites take 1–3 weeks from kickoff to launch, depending on how much content you have ready.",
  },
  {
    question: "Do I need to know anything technical?",
    answer:
      "No. I build it in WordPress and show you how to edit it yourself after handoff.",
  },
  {
    question: "What if I don't like the design?",
    answer:
      "You'll see it before it goes live and get revisions — this isn't a take-it-or-leave-it handoff.",
  },
  {
    question: "Do you handle hosting/domain?",
    answer:
      "I can set it up on your existing host and domain, or point you to a simple option if you don't have one yet.",
  },
];
