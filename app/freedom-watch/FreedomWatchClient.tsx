"use client";
import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";

const C = {
  page: "#070B14",
  caseOut: "#2C3648",
  bezel: "#0E1524",
  dial1: "#13223E",
  dial0: "#070B14",
  tickMinor: "#37425C",
  tickMajor: "#C9D4E8",
  orange: "#F97316",
  orangeLite: "#FDBA74",
  gold: "#FBBF24",
  silver: "#C9D4E8",
  ink: "#EAF1FF",
  muted: "#8A9BB8",
};

const fmtMoney = (v: number): string => {
  if (v >= 1_000_000) return "$" + (v / 1_000_000).toFixed(v >= 10_000_000 ? 1 : 2) + "M";
  if (v >= 1_000) return "$" + Math.round(v / 1000) + "k";
  return "$" + Math.round(v);
};
const fmtFull = (v: number): string => "$" + Math.round(v).toLocaleString("en-US");
const clamp = (x: number, a: number, b: number) => Math.max(a, Math.min(b, x));
const gaugeDeg = (frac: number) => -150 + clamp(frac, 0, 1) * 300;
const P = (cx: number, cy: number, r: number, deg: number): [number, number] => {
  const rad = (deg * Math.PI) / 180;
  return [cx + r * Math.sin(rad), cy - r * Math.cos(rad)];
};

interface SliderProps {
  label: string;
  val: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
  display: string;
}

function SliderRow({ label, val, min, max, step, onChange, display }: SliderProps) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 7 }}>
        <span style={{ fontSize: 12, color: C.muted, fontWeight: 500 }}>{label}</span>
        <span style={{ fontSize: 15, color: C.ink, fontWeight: 700, fontFamily: "Rajdhani, sans-serif", fontVariantNumeric: "tabular-nums" }}>{display}</span>
      </div>
      <input className="fw-slider" type="range" min={min} max={max} step={step} value={val} onChange={(e) => onChange(Number(e.target.value))} />
    </div>
  );
}

export default function FreedomWatchClient() {
  const [age, setAge] = useState(30);
  const [spending, setSpending] = useState(40000);
  const [savings, setSavings] = useState(20000);
  const [monthly, setMonthly] = useState(1500);
  const [ret, setRet] = useState(5);

  const [t, setT] = useState(1);
  const [winding, setWinding] = useState(false);
  const raf = useRef<number | null>(null);

  const m = useMemo(() => {
    const fireNumber = spending * 25;
    const rm = Math.pow(1 + ret / 100, 1 / 12) - 1;
    let fireMonth: number | null = null;
    for (let mo = 0; mo <= 600; mo++) {
      const nw = savings * Math.pow(1 + rm, mo) + (rm > 0 ? monthly * ((Math.pow(1 + rm, mo) - 1) / rm) : monthly * mo);
      if (nw >= fireNumber) { fireMonth = mo; break; }
    }
    const reaches = fireMonth !== null;
    const fireAge = reaches ? age + (fireMonth as number) / 12 : null;
    const yearsLeft = reaches ? (fireAge as number) - age : null;
    const progress = clamp(savings / fireNumber, 0, 1);
    return { fireNumber, reaches, fireAge, yearsLeft, progress };
  }, [age, spending, savings, monthly, ret]);

  const windUp = () => {
    if (raf.current) cancelAnimationFrame(raf.current);
    setWinding(true);
    setT(0);
    const dur = 1900;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setT(eased);
      if (p < 1) raf.current = requestAnimationFrame(tick);
      else { setT(1); setWinding(false); }
    };
    raf.current = requestAnimationFrame(tick);
  };
  useEffect(() => { windUp(); return () => { if (raf.current) cancelAnimationFrame(raf.current); }; }, []);

  const CX = 210, CY = 210;
  const trans = winding ? "none" : "transform 0.8s cubic-bezier(0.34,1.4,0.64,1)";

  const ageFrac = m.reaches ? ((m.fireAge as number) - 30) / 40 : 1;
  const ylFrac = m.reaches ? clamp((m.yearsLeft as number) / 40, 0, 1) : 1;
  const fnFrac = clamp(m.fireNumber / 3_000_000, 0, 1);

  const ageVal = m.reaches ? String(Math.round((m.fireAge as number) * t)) : "--";
  const ylVal = m.reaches ? String(Math.round((m.yearsLeft as number) * t)) : "--";
  const fnVal = fmtMoney(m.fireNumber * t);
  const progFrac = m.progress * t;

  const ringR = 198;
  const ringLen = 2 * Math.PI * ringR;
  const ringArc = 0.82;
  const ringOffset = ringLen * (1 - ringArc * progFrac);

  interface DialProps {
    cx: number; cy: number; r: number; frac: number; value: string; label: string; valueColor: string; big?: boolean;
  }
  const Dial = ({ cx, cy, r, frac, value, label, valueColor, big }: DialProps) => {
    const ticks: React.ReactNode[] = [];
    for (let i = 0; i <= 10; i++) {
      const d = -150 + i * 30;
      const [x1, y1] = P(cx, cy, r * 0.82, d);
      const [x2, y2] = P(cx, cy, r * 0.98, d);
      ticks.push(<line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={i % 5 === 0 ? C.tickMajor : C.tickMinor} strokeWidth={i % 5 === 0 ? 2 : 1} />);
    }
    return (
      <g>
        <circle cx={cx} cy={cy} r={r} fill="rgba(0,0,0,0.35)" stroke="#243049" strokeWidth="1.5" />
        {ticks}
        <text x={cx} y={cy - r * 0.32} textAnchor="middle" fill={C.muted} fontSize={big ? 11 : 9} letterSpacing="1.5" fontFamily="Rajdhani, sans-serif" fontWeight="600">{label}</text>
        <text x={cx} y={cy + r * 0.28} textAnchor="middle" fill={valueColor} fontSize={big ? 46 : 30} fontFamily="Rajdhani, sans-serif" fontWeight="700" style={{ fontVariantNumeric: "tabular-nums" }}>{value}</text>
        <g style={{ transition: trans }} transform={"rotate(" + gaugeDeg(frac * t) + " " + cx + " " + cy + ")"}>
          <line x1={cx} y1={cy - r * 0.58} x2={cx} y2={cy - r * 0.99} stroke={C.orange} strokeWidth="4.5" strokeLinecap="round" />
          <line x1={cx} y1={cy - r * 0.70} x2={cx} y2={cy - r * 0.99} stroke={C.orangeLite} strokeWidth="2" strokeLinecap="round" />
          <circle cx={cx} cy={cy - r * 0.99} r="4" fill="#ffffff" />
        </g>
      </g>
    );
  };

  return (
    <main style={{ background: C.page, minHeight: "100vh", padding: "clamp(12px,3vw,26px)", fontFamily: "'Inter',system-ui,sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        .fw-wrap{max-width:520px;margin:0 auto;color:${C.ink};}
        .fw-slider{-webkit-appearance:none;appearance:none;width:100%;height:5px;border-radius:5px;background:linear-gradient(90deg,${C.orange},${C.orangeLite});outline:none;}
        .fw-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#fff;border:3px solid ${C.orange};cursor:pointer;box-shadow:0 2px 8px rgba(249,115,22,.5);}
        .fw-slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#fff;border:3px solid ${C.orange};cursor:pointer;}
        .fw-btn{cursor:pointer;border:none;border-radius:11px;padding:12px 22px;font-weight:700;font-size:14px;letter-spacing:1px;background:linear-gradient(135deg,${C.orange},#EA580C);box-shadow:0 8px 22px rgba(249,115,22,.35);font-family:'Rajdhani',sans-serif;}
        .fw-seg{display:inline-flex;background:#0E1524;border:1px solid #243049;border-radius:9px;padding:3px;}
        .fw-seg button{border:none;background:none;color:${C.muted};padding:5px 13px;border-radius:6px;cursor:pointer;font-weight:600;font-size:13px;font-family:'Rajdhani',sans-serif;}
        .fw-link{display:block;background:#0E1524;border:1px solid #243049;border-radius:12px;padding:14px 16px;transition:border-color .15s;}
        .fw-link:hover{border-color:${C.orange};}
        @media(prefers-reduced-motion:reduce){.fw-btn{transition:none;}}
      `}</style>

      <div className="fw-wrap">
        <div style={{ textAlign: "center", marginBottom: 6 }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: C.orange, fontWeight: 700, fontFamily: "Rajdhani, sans-serif" }}>THE FREEDOM WATCH</div>
        </div>

        <svg viewBox="0 0 420 420" width="100%" style={{ display: "block", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.6))" }}>
          <defs>
            <radialGradient id="fwdial" cx="0.5" cy="0.42" r="0.65">
              <stop offset="0" stopColor={C.dial1} />
              <stop offset="1" stopColor={C.dial0} />
            </radialGradient>
            <linearGradient id="fwcase" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={C.caseOut} />
              <stop offset="1" stopColor="#0E1420" />
            </linearGradient>
            <linearGradient id="fwring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={C.orangeLite} />
              <stop offset="1" stopColor={C.orange} />
            </linearGradient>
          </defs>

          <circle cx={CX} cy={CY} r="205" fill="url(#fwcase)" />
          <circle cx={CX} cy={CY} r="192" fill={C.bezel} />
          <circle cx={CX} cy={CY} r="182" fill="url(#fwdial)" stroke="#1B2740" strokeWidth="1.5" />

          <circle cx={CX} cy={CY} r={ringR} fill="none" stroke="#141C2E" strokeWidth="5"
            strokeDasharray={ringLen * ringArc + " " + ringLen} transform={"rotate(" + (90 + (1 - ringArc) * 180) + " " + CX + " " + CY + ")"} strokeLinecap="round" />
          <circle cx={CX} cy={CY} r={ringR} fill="none" stroke="url(#fwring)" strokeWidth="5"
            strokeDasharray={ringLen + ""} strokeDashoffset={ringOffset}
            transform={"rotate(" + (90 + (1 - ringArc) * 180) + " " + CX + " " + CY + ")"} strokeLinecap="round"
            style={{ transition: winding ? "none" : "stroke-dashoffset 0.8s ease" }} />

          <path d="M210 38 C 213 45, 219 47, 217 54 C 216 59, 212 61, 210 61 C 208 61, 204 59, 203 54 C 201 48, 207 45, 210 38 Z" fill={C.orange} />
          <text x={CX} y={72} textAnchor="middle" fill={C.silver} fontSize="13" letterSpacing="4" fontFamily="Rajdhani, sans-serif" fontWeight="700">FIREPATH</text>

          <Dial cx={210} cy={150} r={56} frac={ageFrac} value={ageVal} label="FREE AT AGE" valueColor={C.gold} big />
          <Dial cx={210} cy={276} r={50} frac={m.progress} value={Math.round(m.progress * t * 100) + "%"} label="PROGRESS" valueColor={C.orange} />

          <circle cx={CX} cy={210} r="6" fill={C.orange} />
          <text x={CX} y={370} textAnchor="middle" fill={C.muted} fontSize="10" letterSpacing="2.5" fontFamily="Rajdhani, sans-serif" fontWeight="600">
            {m.reaches ? "IN TODAY'S DOLLARS" : "NOT ON TRACK IN 50 YRS"}
          </text>
        </svg>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: 10, flexWrap: "wrap" }}>
          <button className="fw-btn" style={{ color: "#ffffff" }} onClick={windUp}>WIND UP</button>
          <div className="fw-seg">
            {[5, 6, 7].map((r) => (
              <button key={r} onClick={() => setRet(r)} style={{ color: ret === r ? "#ffffff" : C.muted, background: ret === r ? C.orange : "transparent" }}>{r}%</button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 20px", marginTop: 20 }}>
          <SliderRow label="Your age today" val={age} min={18} max={60} step={1} onChange={setAge} display={String(age)} />
          <SliderRow label="Yearly spending" val={spending} min={15000} max={150000} step={1000} onChange={setSpending} display={fmtFull(spending)} />
          <SliderRow label="Savings so far" val={savings} min={0} max={800000} step={5000} onChange={setSavings} display={fmtFull(savings)} />
          <SliderRow label="Added monthly" val={monthly} min={0} max={8000} step={50} onChange={setMonthly} display={fmtFull(monthly)} />
        </div>

        <div style={{ fontSize: 13, color: C.orange, marginTop: 20, textAlign: "center", fontFamily: "Rajdhani, sans-serif", letterSpacing: 1, fontWeight: 700 }}>{m.reaches ? ("TARGET " + fmtMoney(m.fireNumber) + " - IN TODAY'S DOLLARS") : ""}</div><div style={{ fontSize: 11, color: C.muted, marginTop: 16, textAlign: "center" }}>
          Estimates only. Wind it up to watch the hands settle on your freedom age.
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginTop: 26 }}>
          <Link href="/fire-live" className="fw-link">
            <div style={{ fontWeight: 600, color: C.ink }}>Watch yourself reach FIRE</div>
            <div style={{ fontSize: 13, color: C.muted, marginTop: 4 }}>See your net worth climb to your FIRE number, year by year.</div>
          </Link>
          <Link href="/tools/fire-number" className="fw-link">
            <div style={{ fontWeight: 600, color: C.ink }}>FIRE Number Calculator</div>
            <div style={{ fontSize: 13, color: C.muted, marginTop: 4 }}>The full breakdown: Lean, Regular, Fat and Barista FIRE.</div>
          </Link>
          <Link href="/tools/coast-fire" className="fw-link">
            <div style={{ fontWeight: 600, color: C.ink }}>Coast FIRE Calculator</div>
            <div style={{ fontSize: 13, color: C.muted, marginTop: 4 }}>Find out when you can stop saving and let compounding finish.</div>
          </Link>
        </div>

        <section style={{ marginTop: 34, color: "#C6D0E0", lineHeight: 1.7 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: C.ink, marginBottom: 12, fontFamily: "Rajdhani, sans-serif", letterSpacing: 0.5 }}>What the Freedom Watch shows</h2>
          <p style={{ marginBottom: 12 }}>
            The main dial reads the age you could reach financial independence: the point where 25 times your yearly spending
            is invested, so a safe 4% withdrawal covers your life. The two lower dials show how many years that is from today
            and the FIRE number you are aiming for.
          </p>
          <p style={{ marginBottom: 12 }}>
            Every figure is projected at a real return, after inflation, and shown in today's dollars. That keeps the target
            honest, because a number that ignores inflation always looks smaller than it really is. Move the return between
            We default to 5%, the long-run real return of world equities; try 6% or 7% to see how much the timeline shifts.
          </p>
          <p>
            The age is an estimate, not a promise. Real returns vary year to year, and a rough patch early in retirement can
            change the result. Use it as a starting point, then dig into the detail with the calculators above.
          </p>
        </section>
      </div>
    </main>
  );
}
