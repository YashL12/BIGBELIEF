"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { articles, categories, type Article } from "@/content/data";
import { Arrow, Icon } from "./Icon";

const fmtDate = (d: string) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

export function ArticleCard({ a, featured = false }: { a: Article; featured?: boolean }) {
  return (
    <article className={`card card-hover group flex h-full flex-col p-7 ${featured ? "md:p-10" : ""}`}>
      <div className="flex items-center gap-3 text-xs">
        <span className="ui-badge ui-info">{a.category}</span>
        {a.placeholder && <span className="ui-badge ui-mute">Draft placeholder</span>}
      </div>
      <h3 className={`mt-5 font-semibold tracking-tight text-[var(--navy-900)] ${featured ? "h2" : "text-xl leading-snug"}`}>
        <Link href={`/insights/${a.slug}`} className="after:absolute after:inset-0 relative">
          {a.title}
        </Link>
      </h3>
      <p className="mt-3 text-[0.95rem] text-[var(--ink-soft)]">{a.excerpt}</p>
      <div className="mt-auto flex items-center justify-between pt-6 text-sm text-[var(--ink-mute)]">
        <span>
          <time dateTime={a.date}>{fmtDate(a.date)}</time> · {a.readingTime}
        </span>
        <span className="inline-flex items-center gap-1.5 font-medium text-[var(--blue-600)]">
          Read <Arrow />
        </span>
      </div>
    </article>
  );
}

const PAGE_SIZE = 6;

export function InsightsExplorer() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return articles.filter((a) => (cat === "All" || a.category === cat) && (!s || (a.title + " " + a.excerpt).toLowerCase().includes(s)));
  }, [cat, q]);

  const featured = cat === "All" && !q ? filtered[0] : undefined;
  const rest = featured ? filtered.slice(1) : filtered;
  const pages = Math.max(1, Math.ceil(rest.length / PAGE_SIZE));
  const shown = rest.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={cat === c}
              onClick={() => {
                setCat(c);
                setPage(1);
              }}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                cat === c ? "border-[var(--navy-900)] bg-[var(--navy-900)] text-white" : "border-[var(--line-strong)] text-[var(--ink-soft)] hover:border-[var(--navy-900)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="relative block md:w-72">
          <span className="sr-only">Search articles</span>
          <Icon name="search" size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--ink-mute)]" />
          <input
            type="search"
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setPage(1);
            }}
            placeholder="Search articles"
            className="w-full rounded-lg border border-[var(--line-strong)] bg-white py-2.5 pl-10 pr-3 text-sm focus:border-[var(--blue-500)] focus:outline-none focus:ring-4 focus:ring-[var(--blue-500)]/15"
          />
        </label>
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        {filtered.length} article{filtered.length === 1 ? "" : "s"} found
      </p>

      {filtered.length === 0 ? (
        <p className="mt-12 rounded-xl border border-dashed border-[var(--line-strong)] p-10 text-center text-[var(--ink-soft)]">
          No articles match. Try another category or search term.
        </p>
      ) : (
        <div className="mt-10 space-y-6">
          {featured && <div className="relative"><ArticleCard a={featured} featured /></div>}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((a) => (
              <div key={a.slug} className="relative">
                <ArticleCard a={a} />
              </div>
            ))}
          </div>
          {pages > 1 && (
            <nav aria-label="Pagination" className="flex items-center justify-center gap-2 pt-4">
              {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
                <button key={p} type="button" aria-current={p === page ? "page" : undefined} onClick={() => setPage(p)} className={`h-10 w-10 rounded-md border text-sm font-medium ${p === page ? "border-[var(--navy-900)] bg-[var(--navy-900)] text-white" : "border-[var(--line-strong)]"}`}>
                  {p}
                </button>
              ))}
            </nav>
          )}
        </div>
      )}
    </div>
  );
}
