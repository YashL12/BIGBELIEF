import Link from "next/link";
import { BrowserMockup, DemoNote } from "@/components/BrowserMockup";
import { Arrow } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { CTA, PageHero } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { AuditMgmtUI } from "@/components/product-ui/AuditMgmtUI";
import { StockAuditUI } from "@/components/product-ui/StockAuditUI";
import { products } from "@/content/data";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Products | BigBelief Solutions",
  description: "Software products built for real work: Stock Audit Automation and the Audit Management Platform, designed around audit and professional-services workflows.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }])} />
      <PageHero eyebrow="Products" title="Software products built for real work." lead="Each product starts from a real workflow and is designed with the people who run it." />

      {products.map((p, i) => (
        <section key={p.slug} className={`section ${i % 2 === 0 ? "" : "section-alt"}`} aria-labelledby={`${p.slug}-h`}>
          <div className="container-bb">
            <div className="grid gap-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-4">
                <p className="eyebrow mb-4">Flagship product {i + 1}</p>
                <h2 id={`${p.slug}-h`} className="h2">{p.name}</h2>
                {p.status && <p className="mt-3"><span className="ui-badge ui-mute">{p.status}</span></p>}
                <p className="lead mt-5">{p.overview}</p>
                <dl className="mt-8 space-y-6">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-mute)]">The problem</dt>
                    <dd className="mt-1.5 text-[var(--ink-soft)]">{p.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-mute)]">The solution</dt>
                    <dd className="mt-1.5 text-[var(--ink-soft)]">{p.solution}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-mute)]">Key workflow</dt>
                    <dd className="mt-1.5 font-medium text-[var(--navy-900)]">{p.workflow.map((w) => w.step).join(" → ")}</dd>
                  </div>
                </dl>
                <Link href={`/products/${p.slug}`} className="btn btn-primary mt-9">Explore Product <Arrow /></Link>
              </Reveal>
              <Reveal delay={120} className="lg:col-span-8">
                <BrowserMockup designWidth={1040} minScale={0.55} url={`app.bigbeliefsolutions.com/${p.slug}`} label={`${p.name} interface preview`}>
                  {p.slug === "stock-audit-automation" ? <StockAuditUI /> : <AuditMgmtUI />}
                </BrowserMockup>
                <DemoNote />
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <CTA title="Not sure which fits?" text="Tell us about your workflow and we will say honestly whether we can help." />
    </>
  );
}
