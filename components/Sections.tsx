import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow, Icon, IconTile } from "./Icon";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <Tag className={Tag === "h1" ? "h1" : "h2"}>{title}</Tag>
      {lead && <p className="lead mt-5">{lead}</p>}
    </Reveal>
  );
}

/** Page opener used on inner pages. */
export function PageHero({ eyebrow, title, lead, children }: { eyebrow: string; title: ReactNode; lead: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--line)] bg-[var(--surface-alt)]">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-bb relative pt-16 pb-14 md:pt-24 md:pb-20">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="h1 max-w-4xl">{title}</h1>
        <p className="lead mt-6 max-w-2xl">{lead}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function CTA({
  title = "Have a problem worth solving?",
  text = "Tell us what you are trying to improve, automate or build.",
  label = "Start a Conversation",
  href = "/contact",
}: {
  title?: string;
  text?: string;
  label?: string;
  href?: string;
}) {
  return (
    <section className="section-dark on-dark relative overflow-hidden">
      <div className="container-bb relative py-20 md:py-28">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-4">Let&apos;s talk</p>
          <h2 className="display">{title}</h2>
          <p className="lead mt-6 max-w-xl">{text}</p>
          <div className="mt-9">
            <Link href={href} className="btn btn-primary">
              {label} <Arrow />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Layered architecture visual: each layer is a labelled row. */
export function ArchitectureDiagram({ layers }: { layers: { t: string; d: string }[] }) {
  return (
    <ol className="relative space-y-3" aria-label="System architecture layers">
      {layers.map((l, i) => (
        <Reveal as="li" key={l.t} delay={i * 70} className="relative">
          <div className="flex items-center gap-4 rounded-xl border border-[var(--line)] bg-white px-5 py-4 shadow-[var(--shadow-sm)]">
            <span className="num flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[var(--navy-900)] text-xs font-semibold text-white">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <div className="font-semibold text-[var(--navy-900)]">{l.t}</div>
              <div className="text-sm text-[var(--ink-soft)]">{l.d}</div>
            </div>
          </div>
          {i < layers.length - 1 && (
            <span className="absolute left-9 top-full z-10 h-3 w-px bg-[var(--line-strong)]" aria-hidden="true" />
          )}
        </Reveal>
      ))}
    </ol>
  );
}

export function ProcessTimeline({ steps }: { steps: { t: string; d: string }[] }) {
  return (
    <ol className="grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-6">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.t} delay={i * 80} className="bg-white p-6">
          <span className="num text-xs font-semibold text-[var(--blue-500)]">{String(i + 1).padStart(2, "0")}</span>
          <div className="mt-6 h-0.5 w-full overflow-hidden rounded bg-[var(--line)]" aria-hidden="true">
            <span className="block h-full bg-[var(--blue-500)]" style={{ width: `${((i + 1) / steps.length) * 100}%` }} />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-[var(--navy-900)]">{s.t}</h3>
          <p className="mt-1.5 text-sm text-[var(--ink-soft)]">{s.d}</p>
        </Reveal>
      ))}
    </ol>
  );
}

export function WorkflowSteps({ steps }: { steps: { step: string; text: string }[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-5">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.step} delay={i * 70} className="relative rounded-xl border border-[var(--line)] bg-white p-5">
          <span className="num text-xs font-semibold text-[var(--blue-500)]">Step {i + 1}</span>
          <h3 className="mt-2 font-semibold text-[var(--navy-900)]">{s.step}</h3>
          <p className="mt-1 text-sm text-[var(--ink-soft)]">{s.text}</p>
        </Reveal>
      ))}
    </ol>
  );
}

export function IndustryCard({ name, icon, challenge, opportunity, solutions, primary }: { name: string; icon: string; challenge: string; opportunity: string; solutions: string[]; primary?: boolean }) {
  return (
    <article className={`card card-hover h-full p-7 ${primary ? "border-[var(--blue-500)]/40 bg-[var(--surface-alt)]" : ""}`}>
      <div className="flex items-start justify-between gap-4">
        <IconTile name={icon} />
        {primary && <span className="ui-badge ui-info">Core vertical</span>}
      </div>
      <h3 className="h3 mt-5">{name}</h3>
      <dl className="mt-4 space-y-4 text-[0.95rem]">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-mute)]">Workflow challenge</dt>
          <dd className="mt-1 text-[var(--ink-soft)]">{challenge}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-mute)]">Technology opportunity</dt>
          <dd className="mt-1 text-[var(--ink-soft)]">{opportunity}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-mute)]">Possible solutions</dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {solutions.map((s) => (
              <span key={s} className="rounded-full border border-[var(--line)] bg-white px-3 py-1 text-xs text-[var(--ink-soft)]">
                {s}
              </span>
            ))}
          </dd>
        </div>
      </dl>
    </article>
  );
}

export const industryIcons: Record<string, string> = {
  "professional-services": "building",
  "retail-distribution": "store",
  manufacturing: "factory",
  logistics: "truck",
  "finance-business-services": "bank",
  "smes-enterprises": "layers",
};

export function Check({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--surface-tint)] text-[var(--blue-600)]">
        <Icon name="check" size={13} />
      </span>
      <span className="text-[var(--ink-soft)]">{children}</span>
    </li>
  );
}
