import Link from "next/link";

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div className="border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 py-8 text-center">
          <p className="text-gray-400 text-sm mb-3">Explore more free FIRE calculators</p>
          <Link
            href="/tools"
            style={{ color: "#ffffff" }}
            className="inline-block bg-orange-500 hover:bg-orange-600 font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            See all calculators
          </Link>
        </div>
      </div>
    </>
  );
}
