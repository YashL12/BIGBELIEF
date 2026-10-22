import Link from "next/link";
import { BrowserMockup, DemoNote } from "@/components/BrowserMockup";
import { Arrow } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { Check, CTA, PageHero, SectionHeading, WorkflowSteps } from "@/components/Sections";
import { AuditMgmtUI, EvidenceUI, ReportingUI, ReviewUI } from "@/components/product-ui/AuditMgmtUI";
import { products } from "@/content/data";
import { site } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const product = products[1];

export const metadata = pageMetadata({
  title: "Audit Management Platform (AuditNode) | BigBelief Solutions",
  description: "A better way to manage complex audit workflows: engagements, tasks, workpapers, evidence, review and reporting in one structured platform.",
  path: "/products/audit-management",
});

const screens = [
  { title: "Evidence management", text: "Request evidence, see what has arrived and keep each file attached to the task it supports.", ui: <EvidenceUI />, url: "evidence" },
  { title: "Review workflow", text: "Move work through prepared, reviewed and approved, with comments tracked to resolution.", ui: <ReviewUI />, url: "reviews" },
  { title: "Reporting", text: "Status and pending-work reports generated from live engagement data.", ui: <ReportingUI />, url: "reports" },
];

export default function AuditManagementPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: product.name, path: "/products/audit-management" }]),
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "AuditNode",
            alternateName: product.name,
            applicationCategory: "BusinessApplication",
            description: product.short,
            url: `${site.url}/products/audit-management`,
            publisher: { "@type": "Organization", name: site.name },
          },
        ]}
      />
      <PageHero eyebrow="Product · Audit Management Platform" title="A better way to manage complex audit workflows." lead={product.short}>
        <Link href="/contact" className="btn btn-primary">{product.cta} <Arrow /></Link>
        <span className="ui-badge ui-mute self-center">{product.status}</span>
      </PageHero>

      <section className="section">
        <div className="container-bb">
          <Reveal>
            <BrowserMockup designWidth={1040} minScale={0.55} url="app.bigbeliefsolutions.com/dashboard" label="Audit Management Platform dashboard">
              <AuditMgmtUI />
            </BrowserMockup>
            <DemoNote />
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-bb grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-4">The problem</p>
            <h2 className="h2">Hard to see what is pending, and who owns it.</h2>
            <p className="lead mt-5">{product.problem}</p>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow mb-4">The platform</p>
            <h2 className="h2">One workspace for the whole engagement.</h2>
            <p className="lead mt-5">{product.solution}</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-bb">
          <SectionHeading eyebrow="Workflow" title="Plan. Collect. Perform. Review. Report." />
          <div className="mt-12"><WorkflowSteps steps={product.workflow} /></div>
        </div>
      </section>

      {screens.map((s, i) => (
        <section key={s.title} className={`section ${i % 2 === 0 ? "section-alt" : ""}`}>
          <div className="container-bb">
            <SectionHeading eyebrow="Inside the platform" title={s.title} lead={s.text} />
            <Reveal className="mt-10">
              <BrowserMockup designWidth={1040} minScale={0.55} url={`app.bigbeliefsolutions.com/${s.url}`} label={`${s.title} screen`}>
                {s.ui}
              </BrowserMockup>
              {i === screens.length - 1 && <DemoNote />}
            </Reveal>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="container-bb grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5"><SectionHeading eyebrow="Designed for" title="Firms running multiple engagements." /></div>
          <ul className="space-y-4 lg:col-span-7">
            {["Engagements, clients and tasks in one structure", "Evidence linked to workpapers rather than buried in email", "A review queue that shows what is waiting and for how long", "Reports compiled from reviewed work"].map((c) => <Check key={c}>{c}</Check>)}
          </ul>
        </div>
      </section>

      <CTA title="Interested in the platform?" text="AuditNode is in development. Tell us about your engagements and we will keep you informed." label="Explore the Platform" />
    </>
  );
}
