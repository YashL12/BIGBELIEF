import { ImageResponse } from "next/og";

export const alt = "BigBelief Solutions: Technology that solves real business problems.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #071a47 0%, #0b2566 60%, #0a49e8 140%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 34, fontWeight: 700 }}>
          <div style={{ display: "flex", width: 52, height: 52, borderRadius: 12, background: "#0b6bff", alignItems: "center", justifyContent: "center", fontSize: 32 }}>B</div>
          BigBelief Solutions
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>
            Technology that solves real business problems.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#b9c6e6" }}>Software · Automation · Digital products</div>
        </div>
      </div>
    ),
    size
  );
}
