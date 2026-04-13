"use client";

import { useState } from "react";

const links = [
  { label: "Product", href: "#product" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Docs", href: "#" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        className="sticky top-0 z-[200] border-b"
        style={{
          background: "rgba(6,7,13,0.82)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          borderColor: "rgba(255,255,255,0.05)",
        }}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between px-[52px] py-4 max-md:px-5">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
              style={{ background: "linear-gradient(135deg, #6366f1, #a78bfa)" }}
            >
              P
            </div>
            <span className="text-[15px] font-bold tracking-[-0.4px] text-white">
              PMS Autopilot
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.38)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.38)")}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#cta"
            className="hidden md:block bg-white text-[#06070d] text-[13px] font-bold px-5 py-[9px] rounded-[20px] hover:opacity-90 transition-opacity"
          >
            Start free trial
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white/40 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[199] transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(6,7,13,0.95)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-xl font-semibold text-white/60 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setMobileOpen(false)}
            className="mt-4 bg-white text-[#06070d] text-sm font-bold px-8 py-3 rounded-[20px]"
          >
            Start free trial
          </a>
        </div>
      </div>
    </>
  );
}
