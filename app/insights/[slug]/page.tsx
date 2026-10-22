import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { CTA } from "@/components/Sections";
import { articles } from "@/content/data";
import { site } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) return {};
  const meta = pageMetadata({ title: `${a.title} | BigBelief Solutions`, description: a.excerpt, path: `/insights/${a.slug}`, type: "article" });
  // Placeholder drafts stay out of search results until real copy is published.
  return a.placeholder ? { ...meta, robots: { index: false, follow: true } } : meta;
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }, { name: a.title, path: `/insights/${a.slug}` }]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title,
            description: a.excerpt,
            datePublished: a.date,
            author: { "@type": "Organization", name: site.name },
            publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}/logo.png` } },
            mainEntityOfPage: `${site.url}/insights/${a.slug}`,
          },
        ]}
      />
      <article>
        <header className="border-b border-[var(--line)] bg-[var(--surface-alt)]">
          <div className="container-bb max-w-4xl py-16 md:py-24">
            <Link href="/insights" className="link-underline text-sm font-medium text-[var(--blue-600)]">← All insights</Link>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="ui-badge ui-info">{a.category}</span>
              {a.placeholder && <span className="ui-badge ui-mute">Draft placeholder</span>}
            </div>
            <h1 className="h1 mt-5">{a.title}</h1>
            <p className="lead mt-5">{a.excerpt}</p>
            <p className="mt-6 text-sm text-[var(--ink-mute)]">
              <time dateTime={a.date}>{new Date(a.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</time> · {a.readingTime}
            </p>
          </div>
        </header>
        <div className="container-bb max-w-3xl py-14 prose-bb">
          {a.body.map((s, i) => (
            <section key={i}>
              {s.h && <h2>{s.h}</h2>}
              {s.p.map((p, j) => <p key={j}>{p}</p>)}
            </section>
          ))}
          <Link href="/products" className="btn btn-secondary mt-8">See our products <Arrow /></Link>
        </div>
      </article>
      <CTA />
    </>
  );
}
