import type { ReactNode } from "react";
import { Icon } from "../Icon";

export type Tone = "ok" | "warn" | "bad" | "info" | "mute";

export function Badge({ tone, children }: { tone: Tone; children: ReactNode }) {
  return <span className={`ui-badge ui-${tone}`}>{children}</span>;
}

export function Stat({ label, value, sub, tone }: { label: string; value: string; sub?: string; tone?: Tone }) {
  const color = tone === "bad" ? "#a11f26" : tone === "ok" ? "#0b6f4c" : tone === "warn" ? "#96500a" : "#0b2566";
  return (
    <div className="rounded-lg border border-[var(--line)] bg-white p-3">
      <div className="text-[10px] font-medium text-[#5a6a91]">{label}</div>
      <div className="num mt-1 text-[22px] font-semibold leading-none" style={{ color }}>
        {value}
      </div>
      {sub && <div className="mt-1.5 text-[10px] text-[#66749a]">{sub}</div>}
    </div>
  );
}

export function Panel({ title, action, children, className = "" }: { title: string; action?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section className={`rounded-lg border border-[var(--line)] bg-white ${className}`}>
      <header className="flex items-center justify-between border-b border-[var(--line)] px-3 py-2.5">
        <h4 className="text-[11px] font-semibold text-[#0b2566]">{title}</h4>
        {action}
      </header>
      {children}
    </section>
  );
}

export function TopBar({ crumbs, right }: { crumbs: string[]; right?: ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b border-[var(--line)] bg-white px-4 py-2.5">
      <nav aria-hidden="true" className="flex items-center gap-1.5 text-[11px] text-[#66749a]">
        {crumbs.map((c, i) => (
          <span key={c} className="flex items-center gap-1.5">
            {i > 0 && <span>/</span>}
            <span className={i === crumbs.length - 1 ? "font-semibold text-[#0b2566]" : ""}>{c}</span>
          </span>
        ))}
      </nav>
      <div className="flex items-center gap-2.5">
        {right}
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e5eeff] text-[9px] font-semibold text-[#0a49e8]">RK</span>
      </div>
    </div>
  );
}

export function SearchPill({ text }: { text: string }) {
  return (
    <span className="flex w-44 items-center gap-1.5 rounded-md border border-[var(--line)] bg-[#f7f9fd] px-2 py-1 text-[10px] text-[#8090b3]">
      <Icon name="search" size={11} /> {text}
    </span>
  );
}

export function Sidebar({ items, active, brand }: { items: { label: string; icon: string }[]; active: string; brand: string }) {
  return (
    <aside className="flex w-[168px] shrink-0 flex-col bg-[#071a47] p-3 text-[#b9c6e6]">
      <div className="mb-4 flex items-center gap-2 px-1.5 pt-1 text-[12px] font-semibold text-white">
        <span className="flex h-5 w-5 items-center justify-center rounded bg-[#0b6bff] text-[10px]">B</span>
        {brand}
      </div>
      <ul className="space-y-0.5">
        {items.map((it) => (
          <li
            key={it.label}
            className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] ${
              it.label === active ? "bg-[#12338a] font-semibold text-white" : "hover:bg-white/5"
            }`}
          >
            <Icon name={it.icon} size={13} />
            {it.label}
          </li>
        ))}
      </ul>
      <div className="mt-auto rounded-md bg-white/5 p-2 text-[10px] leading-snug text-[#93a3cc]">Demo workspace · sample data</div>
    </aside>
  );
}

/** Animated bar chart. Values are percentages of the tallest bar. */
export function Bars({ data, height = 96, labels }: { data: number[]; height?: number; labels?: string[] }) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-2 px-3 pb-2 pt-3" style={{ height: height + 28 }} role="img" aria-label="Bar chart of sample values">
      {data.map((v, i) => (
        <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
          <div className="bar w-full rounded-t-[3px] bg-gradient-to-b from-[#0b6bff] to-[#12b8ff]" style={{ height: (v / max) * height, ["--d" as string]: `${i * 70}ms` }} />
          {labels && <span className="text-[9px] text-[#66749a]">{labels[i]}</span>}
        </div>
      ))}
    </div>
  );
}

export function Progress({ pct, tone = "info" }: { pct: number; tone?: Tone }) {
  const bg = tone === "ok" ? "#0f8a5f" : tone === "warn" ? "#d98310" : tone === "bad" ? "#c0262d" : "#0b6bff";
  return (
    <span className="inline-block h-1.5 w-full overflow-hidden rounded bg-[#e8eef9]" aria-hidden="true">
      <span className="block h-full rounded" style={{ width: `${pct}%`, background: bg }} />
    </span>
  );
}

export function Avatar({ initials, hue = 0 }: { initials: string; hue?: number }) {
  const bgs = ["#e5eeff", "#e3f6ee", "#fdf0dc", "#efe8ff"];
  const fgs = ["#0a49e8", "#0b6f4c", "#96500a", "#5b2fc2"];
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full text-[8px] font-semibold" style={{ background: bgs[hue % 4], color: fgs[hue % 4] }}>
      {initials}
    </span>
  );
}
