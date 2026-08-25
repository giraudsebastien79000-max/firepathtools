import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800 py-8 text-center text-sm text-gray-500">
      <nav aria-label="Footer">
        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="underline underline-offset-4 transition-colors hover:text-gray-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <p className="mt-5 px-6">
        &copy; {new Date().getFullYear()} FirePath Tools. Free financial independence
        calculators.
      </p>

      <p className="mt-1 px-6">
        For informational purposes only. Not financial advice.
      </p>
    </footer>
  );
}
