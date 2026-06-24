"use client";
import { useState } from "react";

export default function FireNumberWidgetClient() {
  const [annualSpend, setAnnualSpend] = useState(40000);
  const [withdrawalRate, setWithdrawalRate] = useState(4);

  const fireNumber = annualSpend / (withdrawalRate / 100);

  const formatNumber = (n: number) => {
    if (n >= 1000000) return "$" + (n / 1000000).toFixed(2) + "M";
    if (n >= 1000) return "$" + (n / 1000).toFixed(0) + "k";
    return "$" + n.toFixed(0);
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#030712", color: "#f3f4f6", padding: "24px", borderRadius: "16px", maxWidth: "400px", margin: "0 auto", border: "1px solid #1f2937" }}>
      <div style={{ marginBottom: "20px" }}>
        <div style={{ fontSize: "11px", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>FIRE Number Calculator</div>
        <div style={{ fontSize: "22px", fontWeight: "700", color: "#ffffff" }}>How much do you need to retire?</div>
      </div>
      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", fontSize: "13px", color: "#9ca3af", marginBottom: "6px" }}>Annual spending ($)</label>
        <input type="number" value={annualSpend} onChange={e => setAnnualSpend(Number(e.target.value))} style={{ width: "100%", background: "#111827", border: "1px solid #374151", borderRadius: "8px", padding: "10px 14px", color: "#ffffff", fontSize: "15px", boxSizing: "border-box" }} />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", fontSize: "13px", color: "#9ca3af", marginBottom: "6px" }}>Withdrawal rate: {withdrawalRate}%</label>
        <input type="range" min="3" max="6" step="0.1" value={withdrawalRate} onChange={e => setWithdrawalRate(Number(e.target.value))} style={{ width: "100%", accentColor: "#f97316" }} />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#6b7280" }}>
          <span>3% (conservative)</span>
          <span>6% (aggressive)</span>
        </div>
      </div>
      <div style={{ background: "#111827", borderRadius: "12px", padding: "20px", textAlign: "center", marginBottom: "16px", border: "1px solid #1f2937" }}>
        <div style={{ fontSize: "13px", color: "#9ca3af", marginBottom: "4px" }}>Your FIRE Number</div>
        <div style={{ fontSize: "42px", fontWeight: "800", color: "#f97316" }}>{formatNumber(fireNumber)}</div>
        <div style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px" }}>{withdrawalRate}% rule applied to ${annualSpend.toLocaleString()}/year</div>
      </div>
      <div style={{ textAlign: "center", paddingTop: "12px", borderTop: "1px solid #1f2937" }}>
        <a href="https://firepathtools.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", color: "#f97316", textDecoration: "none" }}>More free FIRE calculators at firepathtools.com</a>
      </div>
    </div>
  );
}