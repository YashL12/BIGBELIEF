import { BrowserMockup, DemoNote } from "@/components/BrowserMockup";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { Check, CTA, PageHero, SectionHeading, WorkflowSteps } from "@/components/Sections";
import { StockAuditDetailUI, StockAuditReportUI, StockAuditUI } from "@/components/product-ui/StockAuditUI";
import { products } from "@/content/data";
import { site } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { Arrow } from "@/components/Icon";

const product = products[0];

export const metadata = pageMetadata({
  title: "Stock Audit Automation | BigBelief Solutions",
  description: "Modernizing stock verification and audit workflows: capture counts, reconcile variances, review exceptions and generate reports with a clear audit trail.",
  path: "/products/stock-audit-automation",
});

const capabilities = [
  "Dashboard of verification progress by location",
  "Expected versus counted quantity per SKU, with variance",
  "Exception handling with linked evidence",
  "Reconciliation notes and reviewer sign-off",
  "Audit trail of who changed what and when",
  "Reports generated from the verified data",
];

export default function StockAuditPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: product.name, path: "/products/stock-audit-automation" }]),
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: product.name,
            applicationCategory: "BusinessApplication",
            description: product.short,
            url: `${site.url}/products/stock-audit-automation`,
            publisher: { "@type": "Organization", name: site.name },
          },
        ]}
      />
      <PageHero eyebrow="Product · Stock Audit Automation" title="Modernizing stock verification and audit workflows." lead={product.short}>
        <Link href="/contact" className="btn btn-primary">{product.cta} <Arrow /></Link>
        <Link href="#workflow" className="btn btn-secondary">See the workflow</Link>
      </PageHero>

      <section className="section">
        <div className="container-bb">
          <Reveal>
            <BrowserMockup designWidth={1040} minScale={0.55} url="app.bigbeliefsolutions.com/verifications/warehouse-2" label="Stock Audit Automation dashboard">
              <StockAuditUI />
            </BrowserMockup>
            <DemoNote />
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-bb grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-4">The problem</p>
            <h2 className="h2">Spreadsheets, scattered evidence and retyped reports.</h2>
            <p className="lead mt-5">{product.problem}</p>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow mb-4">The digital workflow</p>
            <h2 className="h2">One record per item, with the evidence attached.</h2>
            <p className="lead mt-5">{product.solution}</p>
          </Reveal>
        </div>
      </section>

      <section id="workflow" className="section">
        <div className="container-bb">
          <SectionHeading eyebrow="Workflow" title="Capture. Verify. Reconcile. Review. Report." />
          <div className="mt-12"><WorkflowSteps steps={product.workflow} /></div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-bb">
          <SectionHeading eyebrow="Inside the product" title="Reconciliation with a clear trail." lead="Open a variance, see the book quantity against the count, link the evidence and send it to review." />
          <Reveal className="mt-12">
            <BrowserMockup designWidth={1040} minScale={0.55} url="app.bigbeliefsolutions.com/reconcile/FST-1187" label="Reconciliation and audit trail screen">
              <StockAuditDetailUI />
            </BrowserMockup>
          </Reveal>
          <Reveal className="mt-10">
            <BrowserMockup designWidth={1040} minScale={0.55} url="app.bigbeliefsolutions.com/reports" label="Reporting screen">
              <StockAuditReportUI />
            </BrowserMockup>
            <DemoNote />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-bb grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Capabilities" title="What the product covers." />
          </div>
          <ul className="space-y-4 lg:col-span-7">
            {capabilities.map((c) => <Check key={c}>{c}</Check>)}
          </ul>
        </div>
      </section>

      <CTA title="See it with your own workflow." text="Request a walkthrough and tell us how stock verification works in your organization today." label="Request a Demo" />
    </>
  );
}
