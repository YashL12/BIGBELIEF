import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { CTA, PageHero } from "@/components/Sections";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Case Studies & Selected Work | BigBelief Solutions",
  description: "Selected work from BigBelief Solutions, starting with AuditNode, an audit management platform.",
  path: "/work",
});

const cases = [
  {
    name: "AuditNode",
    tag: "Product build · In development",
    problem: "Audit engagements tracked across email, shared folders and spreadsheets, with no single view of pending work, owners or review status.",
    approach: "We started from the audit workflow itself, then designed the data model, roles and screens around engagements, tasks, evidence and review.",
    solution: "A web platform where each engagement has defined tasks, evidence linked to the work it supports, a review queue and reports generated from the data.",
    technology: ["TypeScript", "React / Next.js", "PostgreSQL", "Role-based access"],
    result: "Outcomes will be published here once the platform is in use. We do not publish results we cannot evidence.",
  },
];

export default function WorkPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Selected work", path: "/work" }])} />
      <PageHero eyebrow="Work" title="Selected work." lead="Real projects described plainly. More will be added as engagements and products reach the point where we can share them accurately." />
      <section className="section">
        <div className="container-bb space-y-8">
          {cases.map((c) => (
            <Reveal key={c.name}>
              <article className="card p-7 md:p-10">
                <span className="ui-badge ui-info">{c.tag}</span>
                <h2 className="h2 mt-5">{c.name}</h2>
                <dl className="mt-8 grid gap-8 md:grid-cols-2">
                  {([["Challenge", c.problem], ["Approach", c.approach], ["Solution", c.solution], ["Outcome", c.result]] as const).map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-mute)]">{k}</dt>
                      <dd className="mt-2 text-[var(--ink-soft)]">{v}</dd>
                    </div>
                  ))}
                  <div className="md:col-span-2">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-mute)]">Technology</dt>
                    <dd className="mt-3 flex flex-wrap gap-2">
                      {c.technology.map((t) => <span key={t} className="rounded-md border border-[var(--line)] bg-[var(--surface-alt)] px-2.5 py-1 font-mono text-xs text-[var(--ink-soft)]">{t}</span>)}
                    </dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CTA title="Have a project in mind?" text="Tell us what you are trying to improve, automate or build." />
    </>
  );
}
