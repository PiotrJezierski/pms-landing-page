"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

interface NavLink {
  label: string;
  href: string;
}

export function Navbar({
  links,
  ctaLabel = "Zacznij za darmo",
  ctaHref = "/pricing",
  showThreshold,
}: {
  links: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  showThreshold?: number;
}) {
  const [visible, setVisible] = useState(!showThreshold);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!showThreshold) return;
    const threshold = showThreshold;
    const onScroll = () => setVisible(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [showThreshold]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          visible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="glass mx-4 mt-3 rounded-2xl">
          <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
            <a href="/" className="text-white">
              <Logo />
            </a>

            <div className="hidden md:flex items-center gap-1">
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3.5 py-1.5 text-[13px] font-medium text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-2">
              <a
                href="#"
                className="text-[13px] font-medium text-zinc-400 hover:text-white px-3 py-1.5 transition-colors"
              >
                Zaloguj sie
              </a>
              <a
                href={ctaHref}
                className="text-[13px] font-semibold text-white bg-indigo-500 hover:bg-indigo-400 px-5 py-2 rounded-xl transition-all shadow-lg shadow-indigo-500/20"
              >
                {ctaLabel}
              </a>
            </div>

            <button
              className="md:hidden p-1.5 text-zinc-400"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-xl transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 px-8">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-semibold text-white hover:text-indigo-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 w-full mt-4">
            <a
              href="#"
              className="block text-center py-3 text-zinc-400 border border-zinc-700 rounded-xl"
            >
              Zaloguj sie
            </a>
            <a
              href={ctaHref}
              className="block text-center py-3 bg-indigo-500 text-white font-semibold rounded-xl"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
