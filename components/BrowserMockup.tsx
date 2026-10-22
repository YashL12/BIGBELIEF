import type { ReactNode } from "react";
import { ScaledFrame } from "./ScaledFrame";

/** Browser chrome around product UI. `url` is illustrative, not a live link. */
export function BrowserMockup({
  children,
  url = "app.bigbeliefsolutions.com",
  designWidth = 1040,
  minScale = 0.6,
  label,
  className = "",
}: {
  children: ReactNode;
  url?: string;
  designWidth?: number;
  minScale?: number;
  label?: string;
  className?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-[14px] border border-[var(--line-strong)] bg-white shadow-[var(--shadow-lg)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-[var(--line)] bg-[#f4f7fc] px-3.5 py-2.5" aria-hidden="true">
        <span className="flex gap-1.5">
          <i className="h-2.5 w-2.5 rounded-full bg-[#d5dcec]" />
          <i className="h-2.5 w-2.5 rounded-full bg-[#d5dcec]" />
          <i className="h-2.5 w-2.5 rounded-full bg-[#d5dcec]" />
        </span>
        <span className="mx-auto w-full max-w-[320px] truncate rounded-md border border-[var(--line)] bg-white px-3 py-1 text-center text-[11px] text-[var(--ink-mute)]">
          {url}
        </span>
        <span className="w-10" />
      </div>
      <ScaledFrame designWidth={designWidth} minScale={minScale} label={label}>
        <div className="ui">{children}</div>
      </ScaledFrame>
    </figure>
  );
}

export function DemoNote({ children = "Illustrative interface with demo data." }: { children?: ReactNode }) {
  return <p className="mt-3 text-xs text-[var(--ink-mute)]">{children}</p>;
}
