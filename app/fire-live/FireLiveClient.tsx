"use client";
import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";

const C = {
  ink: "#F5F8FF",
  muted: "#8A9BB8",
  flameDeep: "#EA580C",
  flame: "#F97316",
  flameLite: "#FDBA74",
  gold: "#FBBF24",
  grid: "#1F2937",
};

const fmtMoney = (v: number): string => {
  if (v >= 1_000_000) return "$" + (v / 1_000_000).toFixed(v >= 10_000_000 ? 0 : 2) + "M";
  if (v >= 1_000) return "$" + Math.round(v / 1000) + "k";
  return "$" + Math.round(v);
};
const fmtFull = (v: number): string => "$" + Math.round(v).toLocaleString("en-US");

interface SliderProps {
  label: string;
  val: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
  display: string;
}

function Slider({ label, val, min, max, step, onChange, display }: SliderProps) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-sm text-gray-400 font-medium">{label}</span>
        <span className="text-base font-bold" style={{ color: C.ink, fontVariantNumeric: "tabular-nums" }}>{display}</span>
      </div>
      <input
        className="fp-slider"
        type="range"
        min={min}
        max={max}
        step={step}
        value={val}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

export default function FireLiveClient() {
  const [age, setAge] = useState(30);
  const [spending, setSpending] = useState(40000);
  const [savings, setSavings] = useState(20000);
  const [monthly, setMonthly] = useState(1500);
  const [ret, setRet] = useState(7);

  const [reveal, setReveal] = useState(1);
  const [playing, setPlaying] = useState(false);
  const raf = useRef<number | null>(null);

  const model = useMemo(() => {
    const fireNumber = spending * 25;
    const rm = Math.pow(1 + ret / 100, 1 / 12) - 1;
    const maxMonths = 50 * 12;
    let fireMonth: number | null = null;
    const series: number[] = [];
    for (let m = 0; m <= maxMonths; m++) {
      const nw =
        savings * Math.pow(1 + rm, m) +
        (rm > 0 ? monthly * ((Math.pow(1 + rm, m) - 1) / rm) : monthly * m);
      series.push(nw);
      if (fireMonth === null && nw >= fireNumber) fireMonth = m;
    }
    const reaches = fireMonth !== null;
    const endMonth = reaches ? (fireMonth as number) : maxMonths;
    const fireAge = reaches ? age + (fireMonth as number) / 12 : null;
    return { fireNumber, series, fireMonth, reaches, endMonth, fireAge };
  }, [age, spending, savings, monthly, ret]);

  useEffect(() => {
    if (raf.current) cancelAnimationFrame(raf.current);
    setPlaying(false);
    setReveal(1);
  }, [age, spending, savings, monthly, ret]);

  const play = () => {
    if (raf.current) cancelAnimationFrame(raf.current);
    setReveal(0);
    setPlaying(true);
    const dur = 3200;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 2);
      setReveal(eased);
      if (p < 1) raf.current = requestAnimationFrame(tick);
      else setPlaying(false);
    };
    raf.current = requestAnimationFrame(tick);
  };
  useEffect(() => () => { if (raf.current) cancelAnimationFrame(raf.current); }, []);

  const VB = { w: 820, h: 380, l: 68, r: 28, t: 28, b: 46 };
  const plotW = VB.w - VB.l - VB.r;
  const plotH = VB.h - VB.t - VB.b;
  const A0 = age;
  const A1 = age + model.endMonth / 12;
  const yMax = model.reaches
    ? model.fireNumber * 1.12
    : Math.max(model.series[model.endMonth] * 1.05, model.fireNumber * 1.12);

  const xPx = (a: number) => VB.l + ((a - A0) / Math.max(A1 - A0, 0.0001)) * plotW;
  const yPx = (v: number) => VB.t + plotH - (Math.min(v, yMax) / yMax) * plotH;

  const drawnMonths = Math.round(reveal * model.endMonth);
  const tipNw = model.series[drawnMonths] || 0;
  const tipAge = A0 + drawnMonths / 12;

  const linePath = useMemo(() => {
    let d = "";
    const step = Math.max(1, Math.round(model.endMonth / 240));
    for (let m = 0; m <= drawnMonths; m += step) {
      const a = A0 + m / 12;
      d += (m === 0 ? "M" : "L") + xPx(a).toFixed(1) + " " + yPx(model.series[m]).toFixed(1) + " ";
    }
    d += "L" + xPx(tipAge).toFixed(1) + " " + yPx(tipNw).toFixed(1);
    return d;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawnMonths, A0, A1, yMax, model]);

  const areaPath = linePath
    ? linePath + " L" + xPx(tipAge).toFixed(1) + " " + (VB.t + plotH).toFixed(1) + " L" + VB.l + " " + (VB.t + plotH).toFixed(1) + " Z"
    : "";

  const fireY = yPx(model.fireNumber);
  const crossedFire = model.reaches && drawnMonths >= (model.fireMonth as number);
  const done = reveal >= 1;
  const reachedGlow = done && model.reaches;

  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((f) => f * yMax);
  const span = A1 - A0;
  const xStep = span > 30 ? 10 : span > 15 ? 5 : 2;
  const xTicks: number[] = [];
  for (let a = Math.ceil(A0 / xStep) * xStep; a <= A1 + 0.01; a += xStep) xTicks.push(a);

  const flameScale = 0.9 + reveal * 0.4;

  return (
    <main className="min-h-screen bg-gray-900 text-white px-4 py-8">
      <style>{`
        .fp-slider{-webkit-appearance:none;appearance:none;width:100%;height:6px;border-radius:6px;
          background:linear-gradient(90deg,${C.flame},${C.flameLite});outline:none;}
        .fp-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:22px;height:22px;border-radius:50%;
          background:#fff;border:3px solid ${C.flame};cursor:pointer;box-shadow:0 2px 10px rgba(249,115,22,.5);transition:transform .1s;}
        .fp-slider::-webkit-slider-thumb:active{transform:scale(1.15);}
        .fp-slider::-moz-range-thumb{width:22px;height:22px;border-radius:50%;background:#fff;border:3px solid ${C.flame};cursor:pointer;}
        .fp-slider::-moz-range-track{height:6px;border-radius:6px;background:${C.flame};}
        @keyframes fpflick{0%,100%{transform:scale(1,1);opacity:1}50%{transform:scale(.94,1.06);opacity:.9}}
        @keyframes fprise{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        .fp-flame{animation:fpflick 1.5s ease-in-out infinite;transform-origin:center bottom;}
        .fp-readout{animation:fprise .5s ease;}
        @media (prefers-reduced-motion: reduce){.fp-flame{animation:none;}}
      `}</style>

      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-1">
          <svg width="34" height="40" viewBox="0 0 34 40" className="fp-flame" style={{ transform: "scale(" + flameScale + ")" }}>
            <defs>
              <linearGradient id="fpfl" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor={C.flameLite} />
                <stop offset="0.5" stopColor={C.flame} />
                <stop offset="1" stopColor={C.flameDeep} />
              </linearGradient>
            </defs>
            <path d="M17 2 C 22 12, 31 16, 28 27 C 26 35, 20 39, 17 39 C 14 39, 8 35, 6 27 C 4 18, 12 14, 17 2 Z" fill="url(#fpfl)" />
            <path d="M17 16 C 20 21, 23 24, 21 29 C 20 33, 18 35, 17 35 C 16 35, 14 33, 13 29 C 12 24, 15 21, 17 16 Z" fill={C.flameLite} opacity="0.85" />
          </svg>
          <div>
            <div className="text-xs font-bold tracking-widest text-orange-400">FIRE NUMBER - LIVE PROJECTION</div>
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight" style={{ fontVariantNumeric: "tabular-nums" }}>Watch yourself reach FIRE</h1>
          </div>
        </div>

        <div className="relative bg-gray-800 border border-gray-700 rounded-2xl mt-4 overflow-hidden" style={{ padding: "10px 8px 4px" }}>
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(60% 55% at 78% 22%, rgba(249,115,22," + (0.05 + reveal * 0.14) + "), transparent 70%)" }} />

          <div style={{ position: "absolute", top: 14, left: 14, zIndex: 3, background: "rgba(10,15,28,0.62)", backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)", borderRadius: 12, padding: "8px 14px" }}>
            {model.reaches ? (
              <div key={done ? "d" : "p"} className={reachedGlow ? "fp-readout" : ""}>
                <div className="text-xs font-semibold" style={{ color: C.muted }}>{done ? "Financially free at" : "Age"}</div>
                <div className="font-bold leading-none" style={{ fontSize: "clamp(34px,7vw,52px)", color: done ? C.gold : C.ink, fontVariantNumeric: "tabular-nums", textShadow: reachedGlow ? "0 0 24px rgba(251,191,36,.5)" : "none" }}>
                  {done ? Math.round(model.fireAge as number) : Math.floor(tipAge)}
                </div>
                <div className="text-sm font-semibold mt-0.5" style={{ color: C.flameLite, fontVariantNumeric: "tabular-nums" }}>
                  {done ? "in " + Math.round((model.fireAge as number) - age) + " years" : fmtMoney(tipNw)}
                </div>
              </div>
            ) : (
              <div>
                <div className="text-xs font-semibold" style={{ color: C.muted }}>Not free within 50 years</div>
                <div className="font-bold leading-tight mt-1" style={{ fontSize: "clamp(20px,4vw,26px)", color: C.ink, maxWidth: 220 }}>Try nudging savings up</div>
              </div>
            )}
          </div>

          <svg viewBox={"0 0 " + VB.w + " " + VB.h} width="100%" style={{ display: "block", position: "relative", zIndex: 2 }}>
            <defs>
              <linearGradient id="fparea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor={C.flame} stopOpacity="0.45" />
                <stop offset="1" stopColor={C.flame} stopOpacity="0" />
              </linearGradient>
              <filter id="fptip" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="5" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {yTicks.map((v, i) => (
              <g key={"y" + i}>
                <line x1={VB.l} y1={yPx(v)} x2={VB.w - VB.r} y2={yPx(v)} stroke={C.grid} strokeWidth="1" />
                <text x={VB.l - 10} y={yPx(v) + 4} textAnchor="end" fill={C.muted} fontSize="11">{fmtMoney(v)}</text>
              </g>
            ))}
            {xTicks.map((a, i) => (
              <text key={"x" + i} x={xPx(a)} y={VB.h - 20} textAnchor="middle" fill={C.muted} fontSize="11">{Math.round(a)}</text>
            ))}
            <text x={VB.l + plotW / 2} y={VB.h - 4} textAnchor="middle" fill={C.muted} fontSize="10" letterSpacing="1.5">YOUR AGE</text>

            <line x1={VB.l} y1={fireY} x2={VB.w - VB.r} y2={fireY} stroke={C.gold} strokeWidth="1.5" strokeDasharray="5 5" opacity="0.8" />
            <text x={VB.w - VB.r} y={fireY - 8} textAnchor="end" fill={C.gold} fontSize="12" fontWeight="600">FIRE number {fmtMoney(model.fireNumber)}</text>

            {areaPath ? <path d={areaPath} fill="url(#fparea)" /> : null}
            {linePath ? <path d={linePath} fill="none" stroke={C.flame} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /> : null}

            {crossedFire ? (
              <circle cx={xPx(model.fireAge as number)} cy={fireY} r="8" fill="none" stroke={C.gold} strokeWidth="2">
                {reachedGlow ? <animate attributeName="r" from="8" to="55" dur="1.1s" repeatCount="indefinite" /> : null}
                {reachedGlow ? <animate attributeName="opacity" from="0.9" to="0" dur="1.1s" repeatCount="indefinite" /> : null}
              </circle>
            ) : null}

            <g>
              <line x1={xPx(tipAge)} y1={yPx(tipNw)} x2={xPx(tipAge)} y2={VB.t + plotH} stroke={C.flame} strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
              <circle cx={xPx(tipAge)} cy={yPx(tipNw)} r={crossedFire ? 8 : 6} fill={crossedFire ? C.gold : C.flame} filter="url(#fptip)" />
            </g>
          </svg>
        </div>

        <div className="flex items-center gap-4 mt-4 flex-wrap">
          <button
            onClick={play}
            className="cursor-pointer border-none rounded-xl font-bold"
            style={{ color: "#ffffff", padding: "13px 22px", fontSize: 15, background: "linear-gradient(135deg," + C.flame + "," + C.flameDeep + ")", boxShadow: "0 8px 24px rgba(249,115,22,.35)" }}
          >
            {playing ? "Playing..." : done ? "Replay my path" : "Play my path"}
          </button>
          <div className="flex items-center gap-2.5">
            <span className="text-xs" style={{ color: C.muted }}>Real return</span>
            <div className="inline-flex bg-gray-800 border border-gray-700 rounded-lg" style={{ padding: 3 }}>
              {[5, 6, 7].map((r) => (
                <button
                  key={r}
                  onClick={() => setRet(r)}
                  className="border-none rounded-md cursor-pointer font-semibold text-sm"
                  style={{ padding: "6px 14px", color: ret === r ? "#ffffff" : C.muted, background: ret === r ? C.flame : "transparent" }}
                >
                  {r}%
                </button>
              ))}
            </div>
          </div>
          <span className="text-xs" style={{ color: C.muted }}>after inflation - in today's dollars</span>
        </div>

        <div className="grid gap-4 mt-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          <Slider label="Your age today" val={age} min={18} max={60} step={1} onChange={setAge} display={String(age)} />
          <Slider label="Yearly spending in retirement" val={spending} min={15000} max={150000} step={1000} onChange={setSpending} display={fmtFull(spending)} />
          <Slider label="Savings so far" val={savings} min={0} max={800000} step={5000} onChange={setSavings} display={fmtFull(savings)} />
          <Slider label="Added every month" val={monthly} min={0} max={8000} step={50} onChange={setMonthly} display={fmtFull(monthly)} />
        </div>

        <div className="mt-5 bg-gray-800 border border-gray-700 rounded-xl flex justify-between items-center flex-wrap gap-2.5" style={{ padding: "14px 18px" }}>
          <div>
            <div className="text-xs font-semibold" style={{ color: C.muted }}>Your FIRE number</div>
            <div className="font-bold" style={{ fontSize: 26, color: C.gold, fontVariantNumeric: "tabular-nums" }}>{fmtFull(model.fireNumber)}</div>
            <div className="text-xs" style={{ color: C.muted }}>yearly spending x 25 (the 4% rule)</div>
          </div>
          <div className="text-right">
            <div className="text-xs font-semibold" style={{ color: C.muted }}>On this pace</div>
            <div className="font-bold" style={{ fontSize: 26, color: model.reaches ? C.flame : C.muted, fontVariantNumeric: "tabular-nums" }}>
              {model.reaches ? "Free at " + Math.round(model.fireAge as number) : "50+ years"}
            </div>
            <div className="text-xs" style={{ color: C.muted }}>{model.reaches ? Math.round((model.fireAge as number) - age) + " years from now" : "not reached yet"}</div>
          </div>
        </div>

        <p className="text-xs text-center mt-3" style={{ color: C.muted }}>
          Estimates only. Real returns and spending vary year to year.
        </p>

        <div className="mt-8 grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          <Link href="/tools/fire-number" className="block bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-orange-400 transition-colors">
            <div className="font-semibold text-white">FIRE Number Calculator</div>
            <div className="text-sm mt-1" style={{ color: C.muted }}>The full breakdown: Lean, Regular, Fat and Barista FIRE.</div>
          </Link>
          <Link href="/tools/coast-fire" className="block bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-orange-400 transition-colors">
            <div className="font-semibold text-white">Coast FIRE Calculator</div>
            <div className="text-sm mt-1" style={{ color: C.muted }}>See when you can stop saving and let compounding finish the job.</div>
          </Link>
          <Link href="/tools/safe-withdrawal-rate" className="block bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-orange-400 transition-colors">
            <div className="font-semibold text-white">Safe Withdrawal Rate</div>
            <div className="text-sm mt-1" style={{ color: C.muted }}>Test how long your money lasts at different withdrawal rates.</div>
          </Link>
          <Link href="/tools/compound-interest" className="block bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-orange-400 transition-colors">
            <div className="font-semibold text-white">Compound Interest Calculator</div>
            <div className="text-sm mt-1" style={{ color: C.muted }}>Watch how your contributions and growth stack up over time.</div>
          </Link>
        </div>

        <section className="mt-10 text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-white mb-3">How your FIRE number works</h2>
          <p className="mb-3">
            Your FIRE number is the amount you need invested so that a safe withdrawal covers your spending for life.
            The common shortcut is 25 times your yearly retirement spending, which comes from the 4% rule: withdrawing
            about 4% of your portfolio each year has historically lasted 30 or more years across most market conditions.
          </p>
          <p className="mb-3">
            The chart above compounds your current savings and monthly contributions at a real return, after inflation,
            so every figure is shown in today's dollars. That matters, because a target that ignores inflation looks
            smaller than it really is. Slide the return between 5% and 7% to see how sensitive the timeline is.
          </p>
          <p>
            The age you see is an estimate, not a guarantee. Real returns vary year to year, and a poor sequence of
            returns early on can change the outcome. Treat it as a starting point, then run a more detailed version
            with the calculators above.
          </p>
        </section>
      </div>
    </main>
  );
}
