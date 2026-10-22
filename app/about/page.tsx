import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { CTA, PageHero, SectionHeading } from "@/components/Sections";
import { principles } from "@/content/data";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About BigBelief Solutions",
  description: "BigBelief Solutions is a technology-focused business that evolved from business experience at Lakhani Enterprise into software, automation and product engineering.",
  path: "/about",
});

const evolution = [
  { t: "Lakhani Enterprise", d: "A foundation of business experience and operational insight.", icon: "building" },
  { t: "Business experience", d: "Working with real business processes and their friction.", icon: "doc" },
  { t: "Technology focus", d: "A dedicated move toward software and digital solutions.", icon: "code" },
  { t: "BigBelief Solutions", d: "Business understanding and engineering brought together.", icon: "box" },
  { t: "Products & engineering", d: "Software, automation and products for real workflows.", icon: "gear" },
];

const how = [
  ["Listen", "Understand goals, processes and constraints."],
  ["Design", "Shape the solution with your team."],
  ["Engineer", "Build, test and validate."],
  ["Improve", "Measure, refine and support."],
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <PageHero eyebrow="About BigBelief" title="From business understanding to technology innovation." lead="BigBelief Solutions brings together practical business understanding and modern engineering to build useful software, automation and digital products." />

      <section className="section">
        <div className="container-bb">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5"><SectionHeading eyebrow="Our story" title="An evolution of experience and focus." /></div>
            <Reveal className="lg:col-span-7">
              <p className="lead">BigBelief Solutions is a technology-focused business built around a simple belief: useful technology starts with understanding the real problem.</p>
              <p className="mt-5 text-[var(--ink-soft)]">Our experience working with business processes, through the background associated with Lakhani Enterprise, shaped how we approach software: understand the workflow, identify the friction, design the right solution, and engineer technology that creates practical value.</p>
            </Reveal>
          </div>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-5">
            {evolution.map((e, i) => (
              <Reveal as="li" key={e.t} delay={i * 70} className="bg-white p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--surface-tint)] text-[var(--blue-600)]"><Icon name={e.icon} /></span>
                <h3 className="mt-5 font-semibold text-[var(--navy-900)]">{e.t}</h3>
                <p className="mt-1.5 text-sm text-[var(--ink-soft)]">{e.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-bb grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5"><SectionHeading eyebrow="Our philosophy" title="Technology first. Domain understanding built in." /></div>
          <Reveal className="lg:col-span-7">
            <p className="text-[var(--ink-soft)]">Technology is our primary identity. But we do not lose sight of real-world workflows, compliance requirements and the day-to-day challenges of the people using our software. That domain understanding, strongest today in CA firms and audit work, helps us build solutions that fit actual professional work.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-bb">
          <SectionHeading eyebrow="Our values" title="What guides the work." />
          <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <Reveal key={p.t} delay={i * 70} className="bg-white p-7">
                <dt className="text-lg font-semibold text-[var(--navy-900)]">{p.t}</dt>
                <dd className="mt-2 text-[0.95rem] text-[var(--ink-soft)]">{p.d}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-bb">
          <SectionHeading eyebrow="How we work" title="Close collaboration, practical delivery." />
          <ol className="mt-12 grid gap-4 md:grid-cols-4">
            {how.map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 70} className="card p-6">
                <span className="num text-xs font-semibold text-[var(--blue-500)]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-semibold text-[var(--navy-900)]">{t}</h3>
                <p className="mt-1.5 text-sm text-[var(--ink-soft)]">{d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container-bb">
          <SectionHeading eyebrow="Our team" title="The people behind the work." lead="Founder and team profiles will be added here." />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {["Founder / Leadership", "Engineering", "Product", "Design", "Domain / Business"].map((t) => (
              <li key={t} className="rounded-xl border border-dashed border-[var(--line-strong)] p-6 text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface-tint)] text-[var(--blue-600)]"><Icon name="users" /></span>
                <p className="mt-4 font-semibold text-[var(--navy-900)]">{t}</p>
                <p className="mt-1 text-xs text-[var(--ink-mute)]">Profile coming soon</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA title="Building something useful starts with understanding the problem." text="Tell us what you are trying to improve, automate or build." label="Start a Conversation" />
    </>
  );
}
