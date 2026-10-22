import type { SVGProps } from "react";

const paths: Record<string, string> = {
  code: "M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14",
  gear: "M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 13a7.6 7.6 0 000-2l2-1.5-2-3.5-2.3.9a7.6 7.6 0 00-1.7-1L15 3h-4l-.4 2.4a7.6 7.6 0 00-1.7 1l-2.3-.9-2 3.5 2 1.5a7.6 7.6 0 000 2l-2 1.5 2 3.5 2.3-.9a7.6 7.6 0 001.7 1L11 21h4l.4-2.4a7.6 7.6 0 001.7-1l2.3.9 2-3.5-2-1.5z",
  box: "M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zM12 12l8-4.5M12 12v9M12 12L4 7.5",
  users: "M9 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM2.5 20a6.5 6.5 0 0113 0M16 4.5a3.5 3.5 0 010 6.5M18 14.5a6.5 6.5 0 013.5 5.5",
  cloud: "M7 18a4.5 4.5 0 01-.5-9A6 6 0 0118 10a4 4 0 010 8H7z",
  db: "M12 8c4.4 0 8-1.3 8-3s-3.6-3-8-3-8 1.3-8 3 3.6 3 8 3zM4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  doc: "M7 3h7l5 5v13H7V3zM14 3v5h5M10 13h6M10 17h6",
  shield: "M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3zM8.5 12l2.5 2.5L16 9.5",
  search: "M11 18a7 7 0 100-14 7 7 0 000 14zM20 20l-4-4",
  pen: "M4 20l4.5-1 10-10a2.1 2.1 0 00-3-3l-10 10L4 20zM14 7l3 3",
  chart: "M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6",
  bulb: "M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z",
  link: "M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3A4 4 0 0011 18.7l1-1",
  trend: "M3 17l6-6 4 4 8-8M15 7h6v6",
  check: "M5 12.5l4.5 4.5L19 7.5",
  arrow: "M5 12h14M13 6l6 6-6 6",
  mail: "M4 6h16v12H4V6zM4 7l8 6 8-6",
  pin: "M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.800 12 21 12 21zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6L6 18",
  layers: "M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5",
  monitor: "M3 5h18v11H3V5zM8 20h8M12 16v4",
  folder: "M3 6h6l2 2h10v11H3V6z",
  store: "M4 9l1.5-5h13L20 9M4 9v11h16V9M4 9h16M9 20v-6h6v6",
  truck: "M3 6h11v10H3V6zM14 10h4l3 3v3h-7M7.500 19a1.500 1.500 0 100-3 1.500 1.500 0 000 3zM17.500 19a1.500 1.500 0 100-3 1.500 1.500 0 000 3z",
  factory: "M3 20V9l6 3V9l6 3V5h3v15H3z",
  bank: "M3 10l9-6 9 6M5 10v8M9.500 10v8M14.500 10v8M19 10v8M3 20h18",
  building: "M5 21V4h10v17M15 9h4v12M8 8h4M8 12h4M8 16h4M3 21h18",
};

export function Icon({ name, size = 20, ...rest }: { name: keyof typeof paths | string; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path d={paths[name] ?? paths.box} />
    </svg>
  );
}

export function IconTile({ name, size = 22 }: { name: string; size?: number }) {
  return (
    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[var(--surface-tint)] text-[var(--blue-600)]">
      <Icon name={name} size={size} />
    </span>
  );
}

export function Arrow() {
  return <Icon name="arrow" size={16} className="arrow" />;
}
