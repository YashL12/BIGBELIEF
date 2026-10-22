import { Icon } from "../Icon";
import { Badge, Bars, Panel, Stat } from "./parts";

/** Generic BigBelief software environment for the homepage hero: analytics, workflow, data, activity, reports, automation. */
export function HeroDashboard() {
  return (
    <div className="bg-[#f5f8fe] p-4" style={{ minHeight: 440 }}>
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h3 className="text-[15px] font-semibold text-[#071a47]">Operations overview</h3>
          <p className="text-[10px] text-[#66749a]">Sample workspace · demo data</p>
        </div>
        <Badge tone="ok">All workflows running</Badge>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Stat label="Records processed" value="12,480" sub="this month" />
        <Stat label="Auto-validated" value="9,861" tone="ok" sub="79% of records" />
        <Stat label="Needs review" value="214" tone="warn" sub="assigned to 6 reviewers" />
      </div>

      <div className="mt-3 grid grid-cols-5 gap-3">
        <Panel title="Throughput by week" className="col-span-3">
          <Bars data={[52, 61, 58, 74, 69, 88]} labels={["W1", "W2", "W3", "W4", "W5", "W6"]} height={100} />
        </Panel>
        <Panel title="Workflow" className="col-span-2">
          <ol className="space-y-2.5 p-3 text-[11px]">
            {[
              ["Ingest", "check"],
              ["Validate", "shield"],
              ["Review", "users"],
              ["Report", "doc"],
            ].map(([t, i], idx) => (
              <li key={t} className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#e5eeff] text-[#0a49e8]">
                  <Icon name={i} size={12} />
                </span>
                <span className="flex-1 font-medium text-[#0b2566]">{t}</span>
                <span className="text-[10px] text-[#66749a]">{idx < 3 ? "Automated" : "Scheduled"}</span>
              </li>
            ))}
          </ol>
        </Panel>
      </div>

      <div className="mt-3 grid grid-cols-5 gap-3">
        <Panel title="Recent activity" className="col-span-3">
          <ul className="divide-y divide-[#eef2f9] text-[11px]">
            {[
              ["Reconciliation job completed", "2 min ago", "ok"],
              ["Document batch ingested (48 files)", "18 min ago", "info"],
              ["3 records flagged for review", "1 hr ago", "warn"],
            ].map(([t, w, tone]) => (
              <li key={t} className="flex items-center justify-between px-3 py-2">
                <span>{t}</span>
                <span className="text-[10px] text-[#66749a]">{w}</span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Reports" className="col-span-2">
          <ul className="space-y-1.5 p-3 text-[11px]">
            {["Weekly summary", "Exceptions schedule"].map((r) => (
              <li key={r} className="flex items-center justify-between rounded-md border border-[var(--line)] px-2.5 py-1.5">
                {r}
                <span className="text-[10px] text-[#0a49e8]">PDF</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
