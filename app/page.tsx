import Link from "next/link";
import { BrowserMockup, DemoNote } from "@/components/BrowserMockup";
import { Arrow, IconTile } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { ArchitectureDiagram, CTA, IndustryCard, ProcessTimeline, SectionHeading, industryIcons } from "@/components/Sections";
import { ArticleCard } from "@/components/InsightsExplorer";
import { HeroDashboard } from "@/components/product-ui/HeroDashboard";
import { AuditMgmtUI } from "@/components/product-ui/AuditMgmtUI";
import { StockAuditUI } from "@/components/product-ui/StockAuditUI";
import { articles, industries, principles, process, products, stack } from "@/content/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "BigBelief Solutions | Technology That Solves Real Business Problems",
  description:
    "BigBelief Solutions builds software, automation and digital products that turn complex business workflows into simpler, smarter systems. Products for audit and professional services.",
  path: "/",
});

const pillars = [
  { icon: "code", t: "Software Engineering", d: "Design and engineering for modern business systems.", href: "/technology#software-engineering" },
  { icon: "gear", t: "Automation & Intelligence", d: "Turn repetitive workflows into structured, intelligent processes.", href: "/technology#ai-automation" },
  { icon: "box", t: "Domain-Specific Products", d: "Software shaped around the realities of the people who use it.", href: "/products" },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-[var(--surface-alt)]">
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container-bb relative pt-14 pb-16 md:pt-20 md:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-5">Software · Automation · Digital products</p>
                <h1 className="display">Technology that solves real business problems.</h1>
                <p className="lead mt-6 max-w-lg">
                  We build software, automation and digital products that turn complex business workflows into simpler, smarter systems.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href="/products" className="btn btn-primary">Explore Products <Arrow /></Link>
                  <Link href="/contact" className="btn btn-secondary">Work With Us</Link>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={150}>
                <div className="float-slow">
                  <BrowserMockup url="app.bigbeliefsolutions.com/overview" label="BigBelief software dashboard preview" designWidth={760} minScale={0.52}>
                    <HeroDashboard />
                  </BrowserMockup>
                </div>
                <DemoNote />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Company value */}
      <section className="section">
        <div className="container-bb">
          <SectionHeading eyebrow="What we do" title="Technology. Products. Expertise." />
          <div className="mt-14 grid gap-x-12 gap-y-10 border-t border-[var(--line)] pt-10 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={i * 90}>
                <IconTile name={p.icon} />
                <h3 className="h3 mt-5">{p.t}</h3>
                <p className="mt-2 text-[var(--ink-soft)]">{p.d}</p>
                <Link href={p.href} className="link-underline mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--blue-600)]">
                  Learn more <Arrow />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Products */}
      <section className="section section-alt">
        <div className="container-bb">
          <SectionHeading eyebrow="Products" title="Products built around real business problems." lead="Two flagship products, designed with an understanding of audit and professional-services workflows." />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <article className="card card-hover h-full overflow-hidden">
                  <div className="border-b border-[var(--line)] bg-[var(--surface-tint)] p-4 pb-0 md:p-6 md:pb-0">
                    <BrowserMockup className="rounded-b-none border-b-0 shadow-none" designWidth={1040} minScale={0.45} url={`app.bigbeliefsolutions.com/${p.slug}`} label={`${p.name} interface preview`}>
                      {p.slug === "stock-audit-automation" ? <StockAuditUI /> : <AuditMgmtUI />}
                    </BrowserMockup>
                  </div>
                  <div className="p-7">
                    <h3 className="h3">{p.name}</h3>
                    <p className="mt-2 text-[var(--ink-soft)]">{p.short}</p>
                    <Link href={`/products/${p.slug}`} className="btn btn-secondary btn-sm mt-5">Explore Product <Arrow /></Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <DemoNote>Interfaces shown use demo data.</DemoNote>
        </div>
      </section>

      {/* 4. Technology */}
      <section className="section">
        <div className="container-bb grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Technology" title="We engineer the system behind the solution." lead="A good interface sits on well-structured data, clear business logic and reliable integrations. That is where we spend our time." />
            <Link href="/technology" className="btn btn-secondary mt-8">See our capabilities <Arrow /></Link>
          </div>
          <div className="lg:col-span-7">
            <ArchitectureDiagram layers={stack} />
          </div>
        </div>
      </section>

      {/* 5. Why BigBelief */}
      <section className="section section-alt">
        <div className="container-bb">
          <SectionHeading eyebrow="Why BigBelief" title="Built from problems, not assumptions." />
          <dl className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <Reveal key={p.t} delay={i * 80} className="bg-white p-7">
                <dt className="text-lg font-semibold text-[var(--navy-900)]">{p.t}</dt>
                <dd className="mt-2 text-[0.95rem] text-[var(--ink-soft)]">{p.d}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* 6. How we think */}
      <section className="section">
        <div className="container-bb">
          <SectionHeading eyebrow="How we think" title="From problem to measurable improvement." />
          <div className="mt-12"><ProcessTimeline steps={process} /></div>
        </div>
      </section>

      {/* 7. Industries */}
      <section className="section section-alt">
        <div className="container-bb">
          <SectionHeading eyebrow="Industries" title="Technology with domain understanding." lead="Professional services is where our domain depth is strongest. The same engineering applies wherever complex workflows exist." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 3) * 80}>
                <IndustryCard {...ind} icon={industryIcons[ind.slug]} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Selected work */}
      <section className="section">
        <div className="container-bb">
          <SectionHeading eyebrow="Selected work" title="Real work, described plainly." />
          <Reveal className="mt-12">
            <article className="card grid gap-8 p-7 md:grid-cols-12 md:p-10">
              <div className="md:col-span-5">
                <span className="ui-badge ui-info">Product build</span>
                <h3 className="h2 mt-5">AuditNode</h3>
                <p className="mt-4 text-[var(--ink-soft)]">A platform for organizing audit engagements, evidence, review and reporting. In development.</p>
                <Link href="/work" className="btn btn-secondary mt-7">Read the case study <Arrow /></Link>
              </div>
              <dl className="grid gap-6 sm:grid-cols-2 md:col-span-7">
                {[
                  ["Challenge", "Engagements tracked across email, folders and spreadsheets."],
                  ["Approach", "Start from the audit workflow, then design the data model and screens around it."],
                  ["Technology", "Web application with role-based access, evidence storage and reporting."],
                  ["Outcome", "To be reported once the platform is in use. We do not publish results we cannot evidence."],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-mute)]">{k}</dt>
                    <dd className="mt-1.5 text-[var(--ink-soft)]">{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>
        </div>
      </section>

      {/* 9. Insights */}
      <section className="section section-alt">
        <div className="container-bb">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Insights" title="Thinking on technology and business systems." />
            <Link href="/insights" className="btn btn-secondary">All insights <Arrow /></Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {articles.map((a, i) => (
              <Reveal key={a.slug} delay={i * 70} className="relative">
                <ArticleCard a={a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <CTA />
    </>
  );
}
