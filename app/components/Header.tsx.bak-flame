"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
            <path d="M12 2c1.5 3.5-1 5-1 7 0 1.1.9 2 2 2s2-.9 2-2c2 3 4.2 3 6.5 0 3.6-2.9 6.5-6.5 6.5S5 19.1 5 15.5C5 10.5 9.5 7.5 12 2z" fill="#f97316" />
            <path d="M12 12c.8 1.8-.5 2.6-.5 3.6 0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6c.9 1.1 1.3 2.1 1.3 3.1 0 1.8-1.5 3.3-3.3 3.3s-3.3-1.5-3.3-3.3c0-2.5 1.8-4.5 2.6-6.7z" fill="#fdba74" />
          </svg>
          <span className="font-bold text-white group-hover:text-orange-400 transition-colors">FirePath Tools</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-5 text-sm">
          <Link href="/tools" className="text-gray-300 hover:text-orange-400 transition-colors">Calculators</Link>
          <Link href="/blog" className="text-gray-300 hover:text-orange-400 transition-colors">Blog</Link>
          <Link href="/fire-live" className="text-gray-300 hover:text-orange-400 transition-colors">Live</Link>
          <Link href="/global-fire-map" className="text-gray-300 hover:text-orange-400 transition-colors">FIRE Map</Link>
        </nav>

        <button onClick={() => setOpen(!open)} className="sm:hidden flex flex-col gap-1.5 p-2" aria-label="Menu" aria-expanded={open}>
          <span className="block w-5 h-0.5 bg-gray-300"></span>
          <span className="block w-5 h-0.5 bg-gray-300"></span>
          <span className="block w-5 h-0.5 bg-gray-300"></span>
        </button>
      </div>

      {open && (
        <nav className="sm:hidden border-t border-slate-800 bg-gray-950">
          <Link href="/tools" onClick={() => setOpen(false)} className="block px-4 py-3 text-gray-300 hover:text-orange-400 border-b border-slate-800">Calculators</Link>
          <Link href="/blog" onClick={() => setOpen(false)} className="block px-4 py-3 text-gray-300 hover:text-orange-400 border-b border-slate-800">Blog</Link>
          <Link href="/fire-live" onClick={() => setOpen(false)} className="block px-4 py-3 text-gray-300 hover:text-orange-400 border-b border-slate-800">Live</Link>
          <Link href="/global-fire-map" onClick={() => setOpen(false)} className="block px-4 py-3 text-gray-300 hover:text-orange-400">FIRE Map</Link>
        </nav>
      )}
    </header>
  );
}