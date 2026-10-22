import { PageHero } from "./Sections";
import { site } from "@/content/site";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} lead="This is a draft placeholder. It must be reviewed and finalized by qualified legal counsel before the site is launched publicly." />
      <section className="section">
        <div className="container-bb max-w-3xl prose-bb">
          {children}
          <h2>Contact</h2>
          <p>Questions about this page can be sent to <a className="link-underline text-[var(--blue-600)]" href={`mailto:${site.email}`}>{site.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
