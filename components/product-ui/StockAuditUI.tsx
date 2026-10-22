import { Avatar, Badge, Bars, Panel, Progress, SearchPill, Sidebar, Stat, TopBar, type Tone } from "./parts";

const nav = [
  { label: "Dashboard", icon: "layers" },
  { label: "Verification", icon: "check" },
  { label: "Exceptions", icon: "shield" },
  { label: "Reconciliation", icon: "link" },
  { label: "Reports", icon: "doc" },
  { label: "Settings", icon: "gear" },
];

type Row = { sku: string; item: string; loc: string; exp: number; cnt: number | null; status: string; tone: Tone };

const rows: Row[] = [
  { sku: "BRG-2041", item: "Ball bearing 6204", loc: "Rack A-03", exp: 480, cnt: 480, status: "Matched", tone: "ok" },
  { sku: "FST-1187", item: "Hex bolt M10 × 40", loc: "Rack A-07", exp: 1250, cnt: 1236, status: "Variance", tone: "bad" },
  { sku: "PKG-0310", item: "Carton, 5-ply 18 × 12", loc: "Bay B-01", exp: 640, cnt: 640, status: "Matched", tone: "ok" },
  { sku: "ELC-7715", item: "Contactor 25 A", loc: "Rack C-02", exp: 96, cnt: 91, status: "Under review", tone: "warn" },
  { sku: "LUB-0452", item: "Grease cartridge 400 g", loc: "Rack D-04", exp: 210, cnt: 214, status: "Variance", tone: "bad" },
  { sku: "SAF-3320", item: "Safety gloves, pair", loc: "Bay B-05", exp: 380, cnt: 380, status: "Matched", tone: "ok" },
  { sku: "HYD-6008", item: "Hydraulic hose ½ in", loc: "Rack C-09", exp: 58, cnt: null, status: "Pending count", tone: "mute" },
];

const fmt = (n: number) => n.toLocaleString("en-IN");
const variance = (r: Row) => (r.cnt === null ? "—" : r.cnt - r.exp === 0 ? "0" : `${r.cnt - r.exp > 0 ? "+" : "−"}${Math.abs(r.cnt - r.exp)}`);

/** Dashboard + SKU table. */
export function StockAuditUI() {
  return (
    <div className="flex bg-[#f5f8fe]" style={{ minHeight: 560 }}>
      <Sidebar brand="Stock Audit" items={nav} active="Dashboard" />
      <div className="min-w-0 flex-1">
        <TopBar crumbs={["Verifications", "Warehouse 2 · Q3 count"]} right={<SearchPill text="Search SKU or item" />} />
        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[15px] font-semibold text-[#071a47]">Warehouse 2 · Q3 physical count</h3>
              <p className="mt-0.5 text-[10px] text-[#66749a]">Count date 30 Sep 2026 · 5 verifiers · Book stock as per ledger</p>
            </div>
            <Badge tone="info">In progress</Badge>
          </div>

          <div className="grid grid-cols-4 gap-3">
            <Stat label="Items in scope" value="412" sub="across 5 location groups" />
            <Stat label="Matched" value="356" tone="ok" sub="count equals book" />
            <Stat label="Variances" value="9" tone="bad" sub="2 under review" />
            <Stat label="Pending count" value="47" tone="warn" sub="counted: 89%" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Panel title="Count progress by location" className="col-span-1">
              <ul className="space-y-2.5 p-3">
                {[
                  ["Rack A", 100],
                  ["Bay B", 96],
                  ["Rack C", 82],
                  ["Rack D", 91],
                  ["Rack E", 64],
                ].map(([l, p]) => (
                  <li key={l} className="grid grid-cols-[48px_1fr_32px] items-center gap-2 text-[10px]">
                    <span className="text-[#3d4a6b]">{l}</span>
                    <Progress pct={p as number} tone={(p as number) === 100 ? "ok" : "info"} />
                    <span className="num text-right text-[#66749a]">{p}%</span>
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel
              title="Item verification"
              className="col-span-2"
              action={<span className="text-[10px] text-[#66749a]">Showing 7 of 412</span>}
            >
              <table className="ui-table w-full">
                <thead>
                  <tr>
                    <th>SKU</th>
                    <th>Item</th>
                    <th>Location</th>
                    <th className="text-right">Expected</th>
                    <th className="text-right">Counted</th>
                    <th className="text-right">Variance</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.sku}>
                      <td className="font-mono text-[10px] text-[#0a49e8]">{r.sku}</td>
                      <td>{r.item}</td>
                      <td className="text-[#66749a]">{r.loc}</td>
                      <td className="num text-right">{fmt(r.exp)}</td>
                      <td className="num text-right">{r.cnt === null ? "—" : fmt(r.cnt)}</td>
                      <td className={`num text-right font-semibold ${r.tone === "bad" || r.tone === "warn" ? "text-[#a11f26]" : ""}`}>{variance(r)}</td>
                      <td>
                        <Badge tone={r.tone}>{r.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Exceptions, reconciliation and audit trail. */
export function StockAuditDetailUI() {
  return (
    <div className="flex bg-[#f5f8fe]" style={{ minHeight: 520 }}>
      <Sidebar brand="Stock Audit" items={nav} active="Reconciliation" />
      <div className="min-w-0 flex-1">
        <TopBar crumbs={["Verifications", "Warehouse 2 · Q3 count", "FST-1187"]} />
        <div className="grid grid-cols-5 gap-3 p-4">
          <div className="col-span-3 space-y-3">
            <Panel title="Reconcile FST-1187 · Hex bolt M10 × 40" action={<Badge tone="bad">Variance</Badge>}>
              <div className="grid grid-cols-3 gap-3 p-3">
                <Stat label="Book quantity" value="1,250" />
                <Stat label="Counted" value="1,236" />
                <Stat label="Variance" value="−14" tone="bad" sub="1.1% of book quantity" />
              </div>
              <div className="border-t border-[var(--line)] p-3">
                <div className="mb-2 text-[10px] font-semibold text-[#5a6a91]">Possible explanations</div>
                <ul className="space-y-1.5 text-[11px]">
                  {[
                    ["Unposted issue slip IS-4471 (12 pcs)", "Linked"],
                    ["Damaged stock not written off (2 pcs)", "To confirm"],
                  ].map(([t, s]) => (
                    <li key={t} className="flex items-center justify-between rounded-md border border-[var(--line)] px-2.5 py-1.5">
                      <span>{t}</span>
                      <Badge tone={s === "Linked" ? "ok" : "warn"}>{s}</Badge>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex gap-2">
                  <span className="rounded-md bg-[#0b6bff] px-3 py-1.5 text-[11px] font-semibold text-white">Submit for review</span>
                  <span className="rounded-md border border-[var(--line-strong)] px-3 py-1.5 text-[11px] font-semibold text-[#0b2566]">Add note</span>
                </div>
              </div>
            </Panel>
          </div>

          <div className="col-span-2 space-y-3">
            <Panel title="Evidence">
              <ul className="space-y-1.5 p-3 text-[11px]">
                {["Count sheet A-07.pdf", "Photo · Rack A-07.jpg", "IS-4471 issue slip.pdf"].map((f) => (
                  <li key={f} className="flex items-center justify-between rounded-md border border-[var(--line)] px-2.5 py-1.5">
                    <span>{f}</span>
                    <span className="text-[10px] text-[#66749a]">Attached</span>
                  </li>
                ))}
              </ul>
            </Panel>
            <Panel title="Audit trail">
              <ol className="space-y-2.5 p-3 text-[10.5px]">
                {[
                  ["Count recorded: 1,236", "Neha S.", "30 Sep, 11:42", 1],
                  ["Variance flagged automatically", "System", "30 Sep, 11:42", 3],
                  ["Slip IS-4471 linked", "Imran A.", "30 Sep, 14:05", 0],
                  ["Sent to reviewer", "Imran A.", "30 Sep, 14:12", 0],
                ].map(([t, who, when, hue]) => (
                  <li key={t as string} className="flex items-start gap-2">
                    <Avatar initials={(who as string).split(" ").map((w) => w[0]).join("").slice(0, 2)} hue={hue as number} />
                    <div>
                      <div className="text-[#1c2a4d]">{t}</div>
                      <div className="text-[9.5px] text-[#66749a]">{who} · {when}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Report preview. */
export function StockAuditReportUI() {
  return (
    <div className="flex bg-[#f5f8fe]" style={{ minHeight: 420 }}>
      <Sidebar brand="Stock Audit" items={nav} active="Reports" />
      <div className="min-w-0 flex-1">
        <TopBar crumbs={["Reports", "Verification summary"]} />
        <div className="grid grid-cols-3 gap-3 p-4">
          <Panel title="Variance by location group" className="col-span-2">
            <Bars data={[1, 4, 2, 1, 1]} labels={["Rack A", "Bay B", "Rack C", "Rack D", "Rack E"]} height={110} />
            <p className="border-t border-[var(--line)] px-3 py-2 text-[10px] text-[#66749a]">Count of items with a variance. Total: 9.</p>
          </Panel>
          <Panel title="Report contents">
            <ul className="space-y-2 p-3 text-[11px]">
              {["Scope and method", "Summary of results", "Variance schedule", "Exceptions and resolutions", "Evidence index"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#e3f6ee] text-[#0b6f4c]">✓</span>
                  {t}
                </li>
              ))}
              <li className="pt-1 text-[10px] text-[#66749a]">Export as PDF or Excel</li>
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  );
}
