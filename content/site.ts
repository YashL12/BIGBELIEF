export const site = {
  name: "BigBelief Solutions",
  tagline: "Technology that solves real business problems.",
  description:
    "BigBelief Solutions builds software, automation and digital products for businesses that need technology to do real work, with particular domain understanding of CA firms, audit workflows and professional services.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bigbeliefsolutions.com",
  email: "hello@bigbeliefsolutions.com",
  // Supply these later; the UI hides any link that is empty.
  social: {
    linkedin: "",
    github: "",
    whatsapp: "",
  },
};

export const nav = [
  { label: "Products", href: "/products" },
  { label: "Technology", href: "/technology" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export const footerNav = {
  Products: [
    { label: "Stock Audit Automation", href: "/products/stock-audit-automation" },
    { label: "Audit Management Platform", href: "/products/audit-management" },
  ],
  Technology: [
    { label: "Software Engineering", href: "/technology#software-engineering" },
    { label: "AI & Automation", href: "/technology#ai-automation" },
    { label: "Cloud & Infrastructure", href: "/technology#cloud-infrastructure" },
    { label: "Data & Analytics", href: "/technology#data-analytics" },
  ],
  Company: [
    { label: "Industries", href: "/industries" },
    { label: "Selected work", href: "/work" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
};
