import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { ArchitectureDiagram, Check, CTA, PageHero, ProcessTimeline, SectionHeading } from "@/components/Sections";
import { capabilities, stack } from "@/content/data";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Technology & Software Engineering | BigBelief Solutions",
  description: "Software engineering, AI and automation, cloud, data and analytics, systems integration and product engineering for business systems built around real workflows.",
  path: "/technology",
});

const how = [
  { t: "Understand", d: "Analyse requirements, processes and constraints." },
  { t: "Design", d: "Shape the solution architecture and plan." },
  { t: "Engineer", d: "Build, test and ensure quality." },
  { t: "Integrate", d: "Connect with systems, data and tools." },
  { t: "Improve", d: "Monitor, refine and support over time." },
];

export default function TechnologyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Technology", path: "/technology" }])} />
      <PageHero eyebrow="Technology · Engineering · Automation" title="We engineer solutions, not just software screens." lead="From business applications to automation, data and cloud systems, we build practical technology around the way your teams actually work." />

      <section className="section">
        <div className="container-bb grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Architecture" title="Every solution has the same layers." lead="We design each layer deliberately so the interface stays simple while the system underneath stays reliable." />
          </div>
          <div className="lg:col-span-7"><ArchitectureDiagram layers={stack} /></div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-bb">
          <SectionHeading eyebrow="Capabilities" title="Six areas. One integrated approach." />
          <div className="mt-14 space-y-6">
            {capabilities.map((c, i) => (
              <Reveal key={c.id} delay={(i % 2) * 60}>
                <article id={c.id} className="card grid gap-8 p-7 md:p-9 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <span className="num text-sm font-semibold text-[var(--blue-500)]">{c.n}</span>
                    <h3 className="h2 mt-2">{c.name}</h3>
                    <p className="mt-4 text-[var(--ink-soft)]">{c.what}</p>
                  </div>
                  <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-mute)]">Problem it solves</h4>
                      <p className="mt-2 text-[0.95rem] text-[var(--ink-soft)]">{c.solves}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-mute)]">Typical deliverables</h4>
                      <ul className="mt-2 space-y-2 text-[0.95rem]">{c.deliverables.map((d) => <Check key={d}>{d}</Check>)}</ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-mute)]">Relevant technologies</h4>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {c.tech.map((t) => <li key={t} className="rounded-md border border-[var(--line)] bg-[var(--surface-alt)] px-2.5 py-1 font-mono text-xs text-[var(--ink-soft)]">{t}</li>)}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-bb">
          <SectionHeading eyebrow="How we work" title="A structured, collaborative process." />
          <div className="mt-12"><ProcessTimeline steps={how} /></div>
        </div>
      </section>

      <CTA title="Have a workflow worth improving?" text="Let's understand the problem first." />
    </>
  );
}
