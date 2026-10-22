import { ContactForm } from "@/components/ContactForm";
import { CopyEmail } from "@/components/CopyEmail";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/Sections";
import { site } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact BigBelief Solutions",
  description: "Tell us what you are trying to improve, automate or build. Start a conversation with BigBelief Solutions.",
  path: "/contact",
});

const focus = [
  ["code", "Software & technology", "Custom software, modern platforms and technology solutions."],
  ["gear", "Automation", "Streamline processes and reduce manual effort."],
  ["box", "Business applications", "Applications that fit your business needs."],
  ["users", "CA-firm workflows", "Understand and support real professional workflows."],
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <PageHero eyebrow="Let's talk" title="Have a problem worth solving?" lead="Tell us what you are trying to improve, automate or build." />
      <section className="section">
        <div className="container-bb grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="h2">Technology. Automation. Business solutions.</h2>
            <p className="lead mt-5">We build software, automate workflows and create digital solutions for CA firms and professional services practices. Tell us about your goals and we will help you explore the right approach.</p>
            <ul className="mt-9 space-y-6">
              {focus.map(([i, t, d]) => (
                <li key={t} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--surface-tint)] text-[var(--blue-600)]"><Icon name={i} /></span>
                  <div><h3 className="font-semibold text-[var(--navy-900)]">{t}</h3><p className="text-sm text-[var(--ink-soft)]">{d}</p></div>
                </li>
              ))}
            </ul>
            <div className="mt-10 border-t border-[var(--line)] pt-8">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-mute)]">Email</h3>
              <div className="mt-2"><CopyEmail email={site.email} dark={false} /></div>
              <h3 className="mt-6 text-xs font-semibold uppercase tracking-wider text-[var(--ink-mute)]">Location</h3>
              <p className="mt-2 text-[var(--ink-soft)]">Operating remotely across India.</p>
            </div>
          </div>
          <div className="lg:col-span-7"><ContactForm /></div>
        </div>
      </section>
    </>
  );
}
