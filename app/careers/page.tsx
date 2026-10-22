import Link from "next/link";
import { Arrow, Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { Check, PageHero, SectionHeading } from "@/components/Sections";
import { principles } from "@/content/data";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Careers | BigBelief Solutions",
  description: "Build useful technology with BigBelief Solutions. No openings are currently listed, but we are always interested in meeting good people.",
  path: "/careers",
});

const disciplines = [
  ["code", "Engineering"],
  ["monitor", "Product"],
  ["pen", "Design"],
  ["users", "Business / Domain"],
];

export default function CareersPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Careers", path: "/careers" }])} />
      <PageHero eyebrow="Careers" title="Build useful technology." lead="We are building practical technology around real business problems. If you enjoy solving difficult problems and learning from real workflows, there may be a place for you here." />

      <section className="section">
        <div className="container-bb">
          <SectionHeading eyebrow="Open roles" title="No openings currently listed." lead="We are always glad to hear from good people. Send your profile and we will keep it on file for future opportunities." />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {disciplines.map(([i, t], k) => (
              <Reveal as="li" key={t} delay={k * 70} className="card p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--surface-tint)] text-[var(--blue-600)]"><Icon name={i} /></span>
                <h3 className="mt-5 font-semibold text-[var(--navy-900)]">{t}</h3>
                <p className="mt-1 text-sm text-[var(--ink-mute)]">No openings listed</p>
              </Reveal>
            ))}
          </ul>
          <Link href="/contact" className="btn btn-primary mt-10">Send your profile <Arrow /></Link>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-bb grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5"><SectionHeading eyebrow="Working with us" title="The kind of work you will do." /></div>
          <ul className="space-y-4 lg:col-span-7">
            {["Building business applications", "Designing automation workflows", "Working with data", "Learning from real professional workflows", "Engineering reliable systems"].map((c) => <Check key={c}>{c}</Check>)}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-bb">
          <SectionHeading eyebrow="Our values" title="What we value." />
          <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div key={p.t} className="bg-white p-7">
                <dt className="text-lg font-semibold text-[var(--navy-900)]">{p.t}</dt>
                <dd className="mt-2 text-[0.95rem] text-[var(--ink-soft)]">{p.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-bb">
          <SectionHeading eyebrow="Remote work" title="Work where good work happens." lead="BigBelief currently operates with a remote-first approach." />
        </div>
      </section>
    </>
  );
}
