"use client";

import { FadeIn } from "./FadeIn";

const rows = [
  { feature: "AI Dynamic Pricing", us: "✓ Included", guesty: "+ €99/mo", hostaway: "+ €79/mo", lodgify: "✗ None" },
  { feature: "Rentals United Native", us: "✓ Yes", guesty: "✓ Yes", hostaway: "Partial", lodgify: "✗ No" },
  { feature: "AI Guest Messaging", us: "✓ Built-in", guesty: "Add-on", hostaway: "Add-on", lodgify: "✗ No" },
  { feature: "Setup time", us: "< 2 min", guesty: "~3 days", hostaway: "~2 days", lodgify: "~4 days" },
  { feature: "Pricing (20 props)", us: "1,997 zł/mo", guesty: "~€450/mo", hostaway: "~€350/mo", lodgify: "~€290/mo" },
  { feature: "Free trial", us: "14 days", guesty: "Demo only", hostaway: "14 days", lodgify: "14 days" },
];

function CellStyle({ value }: { value: string }) {
  if (value.startsWith("✓")) return <span className="text-[#34d399] text-[13px]">{value}</span>;
  if (value.startsWith("✗")) return <span className="text-white/20 text-[13px]">{value}</span>;
  return <span className="text-white/50 text-[13px]">{value}</span>;
}

export function ComparisonTable() {
  return (
    <section id="pricing" className="py-[90px] px-[52px] max-md:px-5">
      <div className="max-w-[1280px] mx-auto">
        <FadeIn>
          <p className="eyebrow mb-3">vs. Competition</p>
          <h2 className="text-[32px] md:text-[42px] font-extrabold tracking-[-2px] text-white mb-10">Why operators switch to us.</h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="rounded-[18px] overflow-x-auto" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            <table className="w-full min-w-[700px]">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <th className="text-left p-4 text-[12px] font-semibold text-white/30 uppercase tracking-[1px]">Feature</th>
                  <th className="p-4 text-[12px] font-semibold text-[#a5b4fc] uppercase tracking-[1px]">PMS Autopilot</th>
                  <th className="p-4 text-[12px] font-semibold text-white/30 uppercase tracking-[1px]">Guesty</th>
                  <th className="p-4 text-[12px] font-semibold text-white/30 uppercase tracking-[1px]">Hostaway</th>
                  <th className="p-4 text-[12px] font-semibold text-white/30 uppercase tracking-[1px]">Lodgify</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.feature} style={{ background: i % 2 === 1 ? "rgba(99,102,241,0.06)" : "transparent", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <td className="p-4 text-[13px] font-medium text-white/60">{r.feature}</td>
                    <td className="p-4 text-center font-semibold"><CellStyle value={r.us} /></td>
                    <td className="p-4 text-center"><CellStyle value={r.guesty} /></td>
                    <td className="p-4 text-center"><CellStyle value={r.hostaway} /></td>
                    <td className="p-4 text-center"><CellStyle value={r.lodgify} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
