export type ToolGroup = { label: string; tools: string[] };

export const techStackGroups: ToolGroup[] = [
  {
    label: "Build & Design",
    tools: ["WordPress", "WooCommerce", "Elementor", "Bricks Builder", "Figma"],
  },
  {
    label: "Performance & Security",
    tools: ["WP Rocket", "Wordfence", "UpdraftPlus", "Cloudflare"],
  },
  {
    label: "SEO & Growth",
    tools: ["Yoast SEO", "Rank Math", "Google Analytics", "Google Search Console"],
  },
  {
    label: "Forms & Ops",
    tools: ["WPForms", "Hostinger", "Git", "WP-CLI"],
  },
  {
    label: "AI Tools",
    tools: ["Claude Design", "Stitch"],
  },
];
