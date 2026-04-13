import { Building2 } from "lucide-react";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Produkt",
    links: [
      { label: "Funkcje", href: "#funkcje" },
      { label: "Cennik", href: "/pricing" },
      { label: "AI Auto-Reply", href: "#funkcje" },
      { label: "Smart Lock", href: "#funkcje" },
    ],
  },
  {
    title: "Firma",
    links: [
      { label: "O nas", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Kontakt", href: "#" },
      { label: "Kariera", href: "#" },
    ],
  },
  {
    title: "Zasoby",
    links: [
      { label: "Dokumentacja", href: "#" },
      { label: "API", href: "#" },
      { label: "Status", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Regulamin", href: "/regulamin" },
      { label: "Prywatnosc", href: "/polityka-prywatnosci" },
      { label: "Cookies", href: "#" },
      { label: "RODO", href: "/polityka-prywatnosci" },
    ],
  },
];

export function Footer({ variant = "full" }: { variant?: "full" | "minimal" }) {
  if (variant === "minimal") {
    return (
      <footer className="py-10 px-6 section-dark border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="/" className="text-white">
            <Logo size="small" />
          </a>
          <div className="flex items-center gap-5 text-[12px] text-zinc-500">
            <a href="/" className="hover:text-zinc-300 transition-colors">Strona glowna</a>
            <a href="/regulamin" className="hover:text-zinc-300 transition-colors">Regulamin</a>
            <a href="/polityka-prywatnosci" className="hover:text-zinc-300 transition-colors">Prywatnosc</a>
          </div>
          <p className="text-[12px] text-zinc-600">&copy; 2026 PropertyPMS sp. z o.o.</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="py-16 px-6 section-dark border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 text-white">
              <Logo />
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed mb-4">
              AI-native zarzadzanie wynajmem krotkoterminowym.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">
                {col.title}
              </p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-500 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            &copy; 2026 PropertyPMS sp. z o.o. Wszelkie prawa zastrzezone.
          </p>
          <div className="flex items-center gap-4 text-xs text-zinc-600">
            <a href="/regulamin" className="hover:text-zinc-300 transition-colors">Regulamin</a>
            <a href="/polityka-prywatnosci" className="hover:text-zinc-300 transition-colors">Prywatnosc</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
