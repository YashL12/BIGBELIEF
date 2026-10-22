import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { CTA, IndustryCard, PageHero, SectionHeading, ProcessTimeline, industryIcons } from "@/components/Sections";
import { industries } from "@/content/data";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Industries | BigBelief Solutions",
  description: "Technology shaped by the context it operates in: professional services, retail and distribution, manufacturing, logistics, finance and business services, SMEs and enterprises.",
  path: "/industries",
});

const approach = [
  { t: "Understand", d: "We study your workflows, processes and requirements." },
  { t: "Design", d: "We create the right solution for your needs." },
  { t: "Build", d: "We develop, test and iterate with your team." },
  { t: "Support", d: "We help with adoption and long-term success." },
];

export default function IndustriesPage() {
  const [primary, ...others] = industries;
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }])} />
      <PageHero eyebrow="Industries" title="Technology shaped by the context in which it operates." lead="Our domain understanding is deepest in professional services and audit. The engineering approach carries to any industry with complex, rule-driven workflows." />

      <section className="section">
        <div className="container-bb">
          <Reveal><IndustryCard {...primary} icon={industryIcons[primary.slug]} /></Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {others.map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 3) * 80}><IndustryCard {...ind} icon={industryIcons[ind.slug]} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-bb">
          <SectionHeading eyebrow="Approach" title="We understand the problem before we decide the technology." />
          <div className="mt-12"><ProcessTimeline steps={approach} /></div>
        </div>
      </section>

      <CTA title="Working in one of these areas?" text="Tell us how work gets done today. We will tell you where technology can help." />
    </>
  );
}
