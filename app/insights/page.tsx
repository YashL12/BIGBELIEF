import { InsightsExplorer } from "@/components/InsightsExplorer";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/Sections";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Technology & Automation Insights | BigBelief Solutions",
  description: "Articles on workflow automation, AI in business operations, audit technology and building structured business systems.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }])} />
      <PageHero eyebrow="Insights" title="Thinking on technology and business systems." lead="Practical writing on automation, AI, audit technology and the systems behind professional work." />
      <section className="section">
        <div className="container-bb">
          <InsightsExplorer />
          <p className="mt-10 text-sm text-[var(--ink-mute)]">Articles marked as draft placeholders show the planned structure; final copy is still to be written.</p>
        </div>
      </section>
    </>
  );
}
