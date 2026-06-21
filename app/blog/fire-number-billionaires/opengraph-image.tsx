import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "We Calculated the FIRE Number of 20 Billionaires — The Results Are Insane";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "60px 80px",
          justifyContent: "center",
        }}
      >
        <div style={{ fontSize: 18, color: "#94a3b8", marginBottom: 24, letterSpacing: 3, display: "flex" }}>
          FIREPATHTOOLS.COM
        </div>
        <div style={{ fontSize: 42, color: "#f8fafc", fontWeight: 600, marginBottom: 12, display: "flex" }}>
          Elon Musk's FIRE Number
        </div>
        <div style={{ fontSize: 80, color: "#38bdf8", fontWeight: 700, marginBottom: 40, display: "flex" }}>
          $1.4 Trillion
        </div>
        <div style={{ height: 1, background: "#334155", marginBottom: 40, display: "flex" }} />
        <div style={{ fontSize: 28, color: "#94a3b8", marginBottom: 8, display: "flex" }}>
          Yours?
        </div>
        <div style={{ fontSize: 56, color: "#f8fafc", fontWeight: 600, marginBottom: 24, display: "flex" }}>
          ~$1.4 Million
        </div>
        <div style={{ fontSize: 20, color: "#64748b", display: "flex" }}>
          Same formula. 25x your spending. The math doesn't care who you are.
        </div>
      </div>
    ),
    { ...size }
  );
}