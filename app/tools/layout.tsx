"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isToolsIndex = pathname === "/tools";

  return (
    <>
      {children}
      {!isToolsIndex && (
        <div className="border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-4 py-8 text-center">
            <p className="text-gray-400 text-sm mb-3">Explore more free FIRE calculators</p>
            <Link
              href="/tools"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              See all calculators
            </Link>
          </div>
        </div>
      )}
    </>
  );
}