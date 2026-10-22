import { Avatar, Badge, Bars, Panel, Progress, SearchPill, Sidebar, Stat, TopBar, type Tone } from "./parts";

const nav = [
  { label: "Dashboard", icon: "layers" },
  { label: "Engagements", icon: "folder" },
  { label: "Clients", icon: "users" },
  { label: "Workpapers", icon: "doc" },
  { label: "Evidence", icon: "link" },
  { label: "Tasks", icon: "check" },
  { label: "Reviews", icon: "shield" },
  { label: "Reports", icon: "chart" },
];

const engagements: { name: string; client: string; lead: string; pct: number; due: string; status: string; tone: Tone }[] = [
  { name: "Statutory audit FY 2025-26", client: "Alder Textiles Pvt Ltd", lead: "Priya M.", pct: 72, due: "15 Nov", status: "In progress", tone: "info" },
  { name: "Stock verification Q2", client: "Meridian Foods LLP", lead: "Imran A.", pct: 90, due: "10 Oct", status: "In review", tone: "warn" },
  { name: "Internal audit H1", client: "Kestrel Logistics Pvt Ltd", lead: "Neha S.", pct: 35, due: "30 Oct", status: "In progress", tone: "info" },
  { name: "Tax audit AY 2026-27", client: "Harbor Light Retail Pvt Ltd", lead: "Rahul K.", pct: 100, due: "30 Sep", status: "Completed", tone: "ok" },
  { name: "Limited review Q2", client: "Alder Textiles Pvt Ltd", lead: "Priya M.", pct: 10, due: "14 Nov", status: "Not started", tone: "mute" },
];

export function AuditMgmtUI() {
  return (
    <div className="flex bg-[#f5f8fe]" style={{ minHeight: 560 }}>
      <Sidebar brand="AuditNode" items={nav} active="Dashboard" />
      <div className="min-w-0 flex-1">
        <TopBar crumbs={["Dashboard"]} right={<SearchPill text="Search engagements" />} />
        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[15px] font-semibold text-[#071a47]">Engagement overview</h3>
              <p className="mt-0.5 text-[10px] text-[#66749a]">Today, 3 Oct 2026</p>
            </div>
            <span className="rounded-md bg-[#0b6bff] px-3 py-1.5 text-[11px] font-semibold text-white">New engagement</span>
          </div>

          <div className="grid grid-cols-4 gap-3">
            <Stat label="Active engagements" value="4" sub="1 completed this month" />
            <Stat label="Open tasks" value="38" sub="across all engagements" />
            <Stat label="In review queue" value="6" tone="warn" sub="oldest waiting 2 days" />
            <Stat label="Due by 31 Oct" value="2" sub="Stock verification, Internal audit" />
          </div>

          <Panel title="Engagements" action={<span className="text-[10px] text-[#66749a]">5 total</span>}>
            <table className="ui-table w-full">
              <thead>
                <tr>
                  <th>Engagement</th>
                  <th>Client</th>
                  <th>Lead</th>
                  <th style={{ width: 130 }}>Progress</th>
                  <th>Due</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {engagements.map((e) => (
                  <tr key={e.name + e.client}>
                    <td className="font-medium text-[#0b2566]">{e.name}</td>
                    <td className="text-[#3d4a6b]">{e.client}</td>
                    <td>
                      <span className="flex items-center gap-1.5">
                        <Avatar initials={e.lead.split(" ").map((w) => w[0]).join("")} hue={e.lead.length % 4} />
                        {e.lead}
                      </span>
                    </td>
                    <td>
                      <span className="flex items-center gap-2">
                        <Progress pct={e.pct} tone={e.pct === 100 ? "ok" : "info"} />
                        <span className="num w-7 text-right text-[10px] text-[#66749a]">{e.pct}%</span>
                      </span>
                    </td>
                    <td className="num text-[#3d4a6b]">{e.due}</td>
                    <td>
                      <Badge tone={e.tone}>{e.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Panel>

          <div className="grid grid-cols-2 gap-3">
            <Panel title="Review queue">
              <ul className="divide-y divide-[#eef2f9] text-[11px]">
                {[
                  ["Inventory valuation workpaper", "Meridian Foods LLP", "Waiting 2 days"],
                  ["Vendor confirmations summary", "Alder Textiles Pvt Ltd", "Waiting 1 day"],
                  ["Cut-off testing", "Meridian Foods LLP", "Waiting today"],
                ].map(([t, c, w]) => (
                  <li key={t} className="flex items-center justify-between px-3 py-2">
                    <span>
                      <span className="block font-medium text-[#0b2566]">{t}</span>
                      <span className="text-[10px] text-[#66749a]">{c}</span>
                    </span>
                    <span className="text-[10px] text-[#66749a]">{w}</span>
                  </li>
                ))}
              </ul>
            </Panel>
            <Panel title="Recent activity">
              <ul className="space-y-2.5 p-3 text-[10.5px]">
                {[
                  ["Evidence uploaded: Bank confirmation.pdf", "Neha S.", "09:40", 1],
                  ["Task completed: Fixed asset additions", "Priya M.", "09:12", 0],
                  ["Review comment added on Cut-off testing", "Rahul K.", "Yesterday", 2],
                ].map(([t, w, when, hue]) => (
                  <li key={t as string} className="flex items-start gap-2">
                    <Avatar initials={(w as string).split(" ").map((x) => x[0]).join("")} hue={hue as number} />
                    <span>
                      <span className="block text-[#1c2a4d]">{t}</span>
                      <span className="text-[9.5px] text-[#66749a]">{w} · {when}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EvidenceUI() {
  const files: { f: string; task: string; by: string; s: string; tone: Tone }[] = [
    { f: "Bank confirmation.pdf", task: "Cash and bank balances", by: "Neha S.", s: "Received", tone: "ok" },
    { f: "Debtors ageing Sep-26.xlsx", task: "Trade receivables", by: "Client", s: "Received", tone: "ok" },
    { f: "Purchase invoices sample.zip", task: "Purchases testing", by: "Client", s: "Needs clarification", tone: "warn" },
    { f: "Stock count sheets", task: "Inventory existence", by: "—", s: "Requested", tone: "mute" },
  ];
  return (
    <div className="flex bg-[#f5f8fe]" style={{ minHeight: 400 }}>
      <Sidebar brand="AuditNode" items={nav} active="Evidence" />
      <div className="min-w-0 flex-1">
        <TopBar crumbs={["Engagements", "Statutory audit FY 2025-26", "Evidence"]} />
        <div className="p-4">
          <Panel title="Evidence register" action={<span className="rounded-md border border-[var(--line-strong)] px-2 py-1 text-[10px] font-semibold text-[#0b2566]">Request evidence</span>}>
            <table className="ui-table w-full">
              <thead>
                <tr><th>File</th><th>Linked task</th><th>Provided by</th><th>Status</th></tr>
              </thead>
              <tbody>
                {files.map((r) => (
                  <tr key={r.f}>
                    <td className="font-medium text-[#0b2566]">{r.f}</td>
                    <td className="text-[#3d4a6b]">{r.task}</td>
                    <td className="text-[#3d4a6b]">{r.by}</td>
                    <td><Badge tone={r.tone}>{r.s}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Panel>
        </div>
      </div>
    </div>
  );
}

export function ReviewUI() {
  const stages = [
    ["Prepared", "Priya M.", true],
    ["Reviewed", "Rahul K.", true],
    ["Approved", "Partner", false],
  ] as const;
  return (
    <div className="flex bg-[#f5f8fe]" style={{ minHeight: 400 }}>
      <Sidebar brand="AuditNode" items={nav} active="Reviews" />
      <div className="min-w-0 flex-1">
        <TopBar crumbs={["Reviews", "Inventory valuation workpaper"]} />
        <div className="grid grid-cols-5 gap-3 p-4">
          <Panel title="Review status" className="col-span-2">
            <ol className="space-y-3 p-3">
              {stages.map(([s, who, done], i) => (
                <li key={s} className="flex items-center gap-2.5 text-[11px]">
                  <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold ${done ? "bg-[#0f8a5f] text-white" : "border border-[var(--line-strong)] text-[#66749a]"}`}>
                    {done ? "✓" : i + 1}
                  </span>
                  <span>
                    <span className="block font-medium text-[#0b2566]">{s}</span>
                    <span className="text-[10px] text-[#66749a]">{who}{done ? " · signed off" : " · pending"}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Panel>
          <Panel title="Review comments" className="col-span-3" action={<Badge tone="warn">2 open</Badge>}>
            <ul className="divide-y divide-[#eef2f9] text-[11px]">
              {[
                ["Confirm net realisable value basis for slow-moving items.", "Rahul K.", "Open", "warn"],
                ["Attach supplier price list used for sample 14.", "Rahul K.", "Open", "warn"],
                ["Reconcile opening balance to prior-year file.", "Rahul K.", "Resolved", "ok"],
              ].map(([t, w, s, tone]) => (
                <li key={t} className="flex items-start justify-between gap-3 px-3 py-2.5">
                  <span>
                    <span className="block text-[#1c2a4d]">{t}</span>
                    <span className="text-[10px] text-[#66749a]">{w}</span>
                  </span>
                  <Badge tone={tone as Tone}>{s}</Badge>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  );
}

export function ReportingUI() {
  return (
    <div className="flex bg-[#f5f8fe]" style={{ minHeight: 400 }}>
      <Sidebar brand="AuditNode" items={nav} active="Reports" />
      <div className="min-w-0 flex-1">
        <TopBar crumbs={["Reports", "Engagement status"]} />
        <div className="grid grid-cols-3 gap-3 p-4">
          <Panel title="Tasks completed by week" className="col-span-2">
            <Bars data={[6, 9, 8, 12, 11]} labels={["W1", "W2", "W3", "W4", "W5"]} height={110} />
            <p className="border-t border-[var(--line)] px-3 py-2 text-[10px] text-[#66749a]">Sample data, Statutory audit FY 2025-26. Total: 46 tasks.</p>
          </Panel>
          <Panel title="Output reports">
            <ul className="space-y-2 p-3 text-[11px]">
              {["Engagement status", "Pending evidence", "Open review points", "Time and ownership"].map((t) => (
                <li key={t} className="flex items-center justify-between rounded-md border border-[var(--line)] px-2.5 py-1.5">
                  {t}
                  <span className="text-[10px] text-[#0a49e8]">Export</span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  );
}
