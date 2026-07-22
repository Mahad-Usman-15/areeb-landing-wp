export type CaseStudy = {
  tag: string;
  name: string;
  problem: string;
  built: string;
  result: string;
  url: string;
  image: string;
};

export const caseStudies: CaseStudy[] = [
  {
    tag: "Executive / Leadership Coaching",
    name: "Anna Lougari",
    problem: "Six scattered service lines with no unified, premium home.",
    built: "One cohesive coaching brand site.",
    result: "A credible home for high-ticket leads.",
    url: "https://annalougari.com",
    image: "/case-studies/annalougari.png",
  },
  {
    tag: "Pre-Launch Business Coaching",
    name: "Soulful Success",
    problem: "Needed a professional application funnel before even owning a domain.",
    built: "A staging site ready to launch a high-ticket mastermind.",
    result: "Launched before the brand had a domain.",
    url: "https://blueviolet-dinosaur-894808.hostingersite.com",
    image: "/case-studies/soulful-success.png",
  },
  {
    tag: "Web / Digital Marketing Agency",
    name: "Gracode Studio",
    problem: "An agency whose own site wasn't selling its own design/dev capability.",
    built: "A site that showcases their services with transparent pricing.",
    result: "The agency's #1 sales tool.",
    url: "https://www.gracodestudio.com",
    image: "/case-studies/gracode.png",
  },
  {
    tag: "Local Lawn Care",
    name: "Fine Line Lawncare",
    problem: "Word-of-mouth only, no online booking or trust-building.",
    built: "A booking-first site with an instant estimate CTA.",
    result: "Estimate requests, day one.",
    url: "https://finelinelawncaresvc.com",
    image: "/case-studies/fine-line.png",
  },
  {
    tag: "Press-On Nails, E-commerce",
    name: "Polished & Posh Boutique",
    problem: "A niche brand competing against Amazon, Etsy and salons on price.",
    built: "A curated storefront with an email/VIP funnel.",
    result: "Competing on identity, not price.",
    url: "https://polishedposhboutique.com",
    image: "/case-studies/polished-posh.png",
  },
  {
    tag: "B2B Staffing, Insurance",
    name: "Stafyx Solutions",
    problem: "Agency owners buried in admin, no lead-gen site.",
    built: "A conversion-focused site with a clear 4-step process.",
    result: "A site that sells the pitch for them.",
    url: "https://stafyx.solutions",
    image: "/case-studies/stafyx.png",
  },
];
