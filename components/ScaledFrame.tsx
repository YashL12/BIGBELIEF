"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Renders fixed-width product UI and scales it to fit its container.
 * Below `minScale` the preview becomes horizontally scrollable instead of
 * shrinking to unreadable text, so it stays usable on 360px phones.
 */
export function ScaledFrame({
  children,
  designWidth = 1040,
  minScale = 0.6,
  label = "Product preview",
}: {
  children: ReactNode;
  designWidth?: number;
  minScale?: number;
  label?: string;
}) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.6);
  const [h, setH] = useState<number | undefined>(undefined);

  useEffect(() => {
    const o = outer.current;
    const i = inner.current;
    if (!o || !i) return;
    const measure = () => {
      const s = Math.max(Math.min(o.clientWidth / designWidth, 1), minScale);
      setScale(s);
      setH(i.offsetHeight * s);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(o);
    ro.observe(i);
    return () => ro.disconnect();
  }, [designWidth, minScale]);

  const scrollable = scale <= minScale + 0.001;

  return (
    <div
      ref={outer}
      className="w-full"
      style={{ overflowX: scrollable ? "auto" : "hidden", height: h }}
      {...(scrollable ? { tabIndex: 0, role: "region", "aria-label": `${label} (scrollable)` } : { "aria-label": label })}
    >
      <div
        ref={inner}
        style={{
          width: designWidth,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}
