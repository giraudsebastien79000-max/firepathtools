import Link from "next/link";

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
              <path
                d="M12 2c1.5 3.5-1 5-1 7 0 1.1.9 2 2 2s2-.9 2-2c2 2 3 4.2 3 6.5 0 3.6-2.9 6.5-6.5 6.5S5 19.1 5 15.5C5 10.5 9.5 7.5 12 2z"
                fill="#f97316"
              />
              <path
                d="M12 12c.8 1.8-.5 2.6-.5 3.6 0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6c.9 1.1 1.3 2.1 1.3 3.1 0 1.8-1.5 3.3-3.3 3.3s-3.3-1.5-3.3-3.3c0-2.5 1.8-4.5 2.6-6.7z"
                fill="#fdba74"
              />
            </svg>
            <span className="font-bold text-white group-hover:text-orange-400 transition-colors">
              FirePath Tools
            </span>
          </Link>
          <nav className="flex items-center gap-5 text-sm">
            <Link href="/tools" className="text-gray-300 hover:text-orange-400 transition-colors">
              Calculators
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-orange-400 transition-colors">
              Blog
            </Link>
            <Link
              href="/global-fire-map"
              className="hidden sm:inline text-gray-300 hover:text-orange-400 transition-colors"
            >
              FIRE Map
            </Link>
          </nav>
        </div>
      </header>
      {children}
      <div className="bg-gray-950 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 py-8 text-center">
          <p className="text-gray-400 text-sm mb-3">Explore more free FIRE calculators</p>
          <Link
            href="/tools"
            style={{ color: "#ffffff" }} className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            See all calculators
          </Link>
        </div>
      </div>
    </>
  );
}
