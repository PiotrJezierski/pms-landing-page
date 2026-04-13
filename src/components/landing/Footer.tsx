const columns = [
  {
    title: "Product",
    links: ["Features", "Integrations", "Pricing", "Changelog", "API Docs"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
  {
    title: "Legal",
    links: [
      { label: "Regulamin", href: "/regulamin" },
      { label: "Prywatność", href: "/polityka-prywatnosci" },
      { label: "Cookies", href: "/polityka-prywatnosci" },
      { label: "RODO", href: "/polityka-prywatnosci" },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-[1280px] mx-auto px-[52px] pt-12 pb-9 max-md:px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md flex items-center justify-center text-white text-[10px] font-bold" style={{ background: "linear-gradient(135deg, #6366f1, #a78bfa)" }}>P</div>
              <span className="text-[14px] font-bold text-white tracking-[-0.3px]">PMS Autopilot</span>
            </div>
            <p className="text-[12px] text-white/25 leading-relaxed max-w-[200px]">
              The property management system that works while you sleep.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-semibold text-white/40 uppercase tracking-[1.5px] mb-3">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => {
                  const label = typeof link === "string" ? link : link.label;
                  const href = typeof link === "string" ? "#" : link.href;
                  return (
                    <li key={label}>
                      <a href={href} className="text-[13px] text-white/25 hover:text-white/60 transition-colors">{label}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-[52px] py-5 max-md:px-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/20">© 2026 PMS Autopilot · Funzy sp. z o.o. · Warsaw, Poland</p>
          <div className="flex items-center gap-4">
            {["LinkedIn", "Twitter/X", "YouTube"].map((s) => (
              <a key={s} href="#" className="text-[12px] text-white/20 hover:text-white/50 transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
