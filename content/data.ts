// All marketing content lives here so products, industries, work and
// articles can later move to a CMS without touching components.

export type Product = {
  slug: string;
  name: string;
  short: string;
  overview: string;
  problem: string;
  solution: string;
  workflow: { step: string; text: string }[];
  cta: string;
  status?: string;
};

export const products: Product[] = [
  {
    slug: "stock-audit-automation",
    name: "Stock Audit Automation",
    short:
      "Technology for streamlining stock verification, reconciliation and audit reporting.",
    overview:
      "A digital workflow for physical stock verification: capture counts, compare them with book records, resolve variances and produce a reviewable report.",
    problem:
      "Stock verification often runs through spreadsheets, photographs on phones, handwritten count sheets and manual reconciliation. Evidence ends up scattered, and reporting means retyping.",
    solution:
      "One structured record per item and location. Counts, variances, exceptions and evidence live together, with a trail of who verified what and when.",
    workflow: [
      { step: "Capture", text: "Record counts by location, item or scan." },
      { step: "Verify", text: "Compare counts against expected quantities." },
      { step: "Reconcile", text: "Investigate variances and log exceptions." },
      { step: "Review", text: "Reviewer approves or sends back with comments." },
      { step: "Report", text: "Generate the verification report from the data." },
    ],
    cta: "Request a Demo",
  },
  {
    slug: "audit-management",
    name: "Audit Management Platform",
    short:
      "A digital platform for organizing audit engagements, evidence, workflow and reporting.",
    overview:
      "A workspace for running audit engagements: clients, tasks, workpapers, evidence, review and reporting in one place. Working product name: AuditNode.",
    problem:
      "Engagements are tracked across email, shared folders and spreadsheets. It is hard to see what is pending, who owns it and what is waiting for review.",
    solution:
      "Each engagement has a defined workflow, a task owner for every item, evidence attached to the work it supports, and a clear review queue.",
    workflow: [
      { step: "Plan", text: "Set up the engagement, team and tasks." },
      { step: "Collect", text: "Request and store evidence against tasks." },
      { step: "Perform", text: "Complete workpapers with linked evidence." },
      { step: "Review", text: "Move work through reviewer sign-off." },
      { step: "Report", text: "Compile outputs from reviewed work." },
    ],
    cta: "Explore the Platform",
    status: "AuditNode: coming soon",
  },
];

export type Capability = {
  id: string;
  n: string;
  name: string;
  what: string;
  solves: string;
  deliverables: string[];
  tech: string[];
};

export const capabilities: Capability[] = [
  {
    id: "software-engineering",
    n: "01",
    name: "Software Engineering",
    what: "Web applications, business platforms and internal systems built around how a team actually works.",
    solves: "Spreadsheets and disconnected tools that cannot enforce process, permissions or audit trails.",
    deliverables: ["Web applications", "Role-based workflows", "Admin and reporting screens"],
    tech: ["TypeScript", "React / Next.js", "Node.js", "PostgreSQL"],
  },
  {
    id: "ai-automation",
    n: "02",
    name: "AI & Automation",
    what: "Workflow automation and AI-assisted processing where it creates practical value.",
    solves: "Repetitive, rule-driven work: data entry, document handling, matching and reporting.",
    deliverables: ["Automated workflows", "Document processing pipelines", "Human-in-the-loop review steps"],
    tech: ["Python", "LLM APIs", "Queue-based workers"],
  },
  {
    id: "cloud-infrastructure",
    n: "03",
    name: "Cloud & Infrastructure",
    what: "Deployment, environments and the operational foundation that keeps software reliable.",
    solves: "Fragile hosting, manual releases and unclear environments.",
    deliverables: ["Deployment pipelines", "Development, staging and production environments", "Backups and monitoring"],
    tech: ["Docker", "CI/CD", "Managed cloud platforms"],
  },
  {
    id: "data-analytics",
    n: "04",
    name: "Data & Analytics",
    what: "Dashboards, reporting and data processing that make business information usable.",
    solves: "Information trapped in files and systems that nobody can query or trust.",
    deliverables: ["Operational dashboards", "Data models", "Scheduled reports"],
    tech: ["SQL", "Python", "Charting libraries"],
  },
  {
    id: "systems-integration",
    n: "05",
    name: "Systems Integration",
    what: "Connecting existing business systems, APIs and third-party tools without adding unnecessary complexity.",
    solves: "Double entry between systems and data that never quite matches.",
    deliverables: ["API integrations", "Data sync jobs", "Import and export tooling"],
    tech: ["REST APIs", "Webhooks", "CSV / Excel pipelines"],
  },
  {
    id: "product-engineering",
    n: "06",
    name: "Product Engineering",
    what: "From first build to refinement and maintenance, engineering software for long-term usefulness.",
    solves: "Software that launches once and then stops improving.",
    deliverables: ["Product design and prototyping", "Iterative releases", "Ongoing support"],
    tech: ["Design systems", "Automated testing", "Version control"],
  },
];

export type Industry = {
  slug: string;
  name: string;
  primary?: boolean;
  challenge: string;
  opportunity: string;
  solutions: string[];
};

export const industries: Industry[] = [
  {
    slug: "professional-services",
    name: "Professional Services",
    primary: true,
    challenge:
      "Engagements involve many clients, documents and reviewers, and the process often lives in email and spreadsheets.",
    opportunity:
      "Structured workflows, evidence management and review queues that fit how firms already work.",
    solutions: ["Audit management", "Stock verification", "Client document workflows"],
  },
  {
    slug: "retail-distribution",
    name: "Retail & Distribution",
    challenge: "Stock, reconciliation and financial visibility spread across locations and systems.",
    opportunity: "Verification and reconciliation tooling connected to existing inventory data.",
    solutions: ["Stock verification", "Reconciliation dashboards", "Inventory reporting"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    challenge: "Process steps and inventory movements tracked manually, with delayed reporting.",
    opportunity: "Process automation and data capture that feeds reliable operational reporting.",
    solutions: ["Process automation", "Inventory tracking", "Operational dashboards"],
  },
  {
    slug: "logistics",
    name: "Logistics",
    challenge: "Tracking and reconciliation across complex supply chains and many handoffs.",
    opportunity: "Shared records and automated checks across the chain of custody.",
    solutions: ["Shipment tracking views", "Reconciliation workflows", "Exception reporting"],
  },
  {
    slug: "finance-business-services",
    name: "Finance & Business Services",
    challenge: "Rule-heavy, document-heavy processes where accuracy and traceability matter.",
    opportunity: "Automated checks, structured records and clear audit trails.",
    solutions: ["Document processing", "Workflow automation", "Reporting systems"],
  },
  {
    slug: "smes-enterprises",
    name: "SMEs & Enterprises",
    challenge: "Teams running critical processes on tools that were never designed for them.",
    opportunity: "Right-sized custom software that replaces workarounds with a system.",
    solutions: ["Custom business applications", "Internal tools", "Systems integration"],
  },
];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Technology" | "Automation" | "AI" | "Audit Technology" | "Business Systems";
  readingTime: string;
  date: string;
  placeholder: boolean;
  body: { h?: string; p: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "workflow-automation-needs-process-understanding",
    title: "Why workflow automation fails without process understanding",
    excerpt:
      "Automating a process you have not mapped only makes the confusion faster. Where to start before writing any code.",
    category: "Automation",
    readingTime: "5 min read",
    date: "2026-10-01",
    placeholder: true,
    body: [
      {
        p: [
          "Placeholder article. Final copy to be written and reviewed before publication.",
          "Automation tends to fail for a simple reason: the process being automated was never fully understood. Exceptions, handoffs and informal checks are invisible until the software meets real work.",
        ],
      },
      {
        h: "Start with the workflow, not the tool",
        p: ["Map who does what, with which inputs, and where decisions are made. Only then decide what should be automated."],
      },
    ],
  },
  {
    slug: "designing-software-for-complex-audit-workflows",
    title: "Designing software for complex audit workflows",
    excerpt:
      "Audit work combines evidence, judgement and review. Software has to respect all three.",
    category: "Audit Technology",
    readingTime: "6 min read",
    date: "2026-09-24",
    placeholder: true,
    body: [
      {
        p: [
          "Placeholder article. Final copy to be written and reviewed before publication.",
          "Good audit software keeps evidence attached to the work it supports and makes review status obvious at every step.",
        ],
      },
    ],
  },
  {
    slug: "from-spreadsheets-to-structured-business-systems",
    title: "From spreadsheets to structured business systems",
    excerpt:
      "Spreadsheets are a fine start. Here is how to recognize when a process has outgrown them.",
    category: "Business Systems",
    readingTime: "4 min read",
    date: "2026-09-15",
    placeholder: true,
    body: [
      {
        p: [
          "Placeholder article. Final copy to be written and reviewed before publication.",
          "The signals are usually the same: version confusion, manual copying between files, and no reliable record of who changed what.",
        ],
      },
    ],
  },
  {
    slug: "where-ai-actually-helps-business-operations",
    title: "Where AI actually helps business operations",
    excerpt:
      "A practical view of the tasks where AI assistance is useful, and where a simple rule is better.",
    category: "AI",
    readingTime: "5 min read",
    date: "2026-09-08",
    placeholder: true,
    body: [
      {
        p: [
          "Placeholder article. Final copy to be written and reviewed before publication.",
          "AI is most useful on messy, unstructured inputs with a human reviewing the output. It is rarely the right tool for rules you can write down.",
        ],
      },
    ],
  },
];

export const categories = ["All", "Technology", "Automation", "AI", "Audit Technology", "Business Systems"] as const;

export const principles = [
  { t: "Technology First", d: "We build with modern engineering practices, clean architecture and software that can be maintained." },
  { t: "Domain Understanding", d: "We learn the workflow, regulations and constraints of the people who will use the system." },
  { t: "Product Thinking", d: "We focus on the real problem and the outcome, not a list of features." },
  { t: "Practical Innovation", d: "We use new tools when they help, and keep things simple when they do not." },
];

export const process = [
  { t: "Problem", d: "Identify the real business friction." },
  { t: "Understand", d: "Study workflows, people and constraints." },
  { t: "Design", d: "Shape a practical, scalable solution." },
  { t: "Engineer", d: "Build with clean architecture." },
  { t: "Automate", d: "Remove manual, repetitive work." },
  { t: "Measure", d: "Track results and keep improving." },
];

export const stack = [
  { t: "User", d: "Teams, reviewers, clients" },
  { t: "Frontend", d: "Web and mobile interfaces" },
  { t: "Application layer", d: "Business logic, workflows, permissions" },
  { t: "APIs & services", d: "Integrations and internal services" },
  { t: "Data", d: "Structured records, documents, audit trail" },
  { t: "Automation & intelligence", d: "Rules, jobs and AI-assisted steps" },
];
