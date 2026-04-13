"use client";

import { motion } from "framer-motion";

const bookings = [
  { name: "Apt Mokotów", dates: "Apr 18–22", price: "1,240 zł", color: "#6366f1" },
  { name: "Studio Wola", dates: "Apr 19–23", price: "960 zł", color: "#22d3ee" },
  { name: "Loft Praga", dates: "Apr 20–24", price: "1,080 zł", color: "#a78bfa" },
];

const sparkline = [3, 5, 4, 7, 6, 8, 7, 9, 8, 11, 10, 14];

function Badge({ children, className, delay, direction = 1 }: { children: React.ReactNode; className: string; delay: number; direction?: number }) {
  return (
    <motion.div
      className={`absolute bg-white rounded-[14px] px-3 py-2.5 shadow-[0_10px_38px_rgba(0,0,0,0.55)] z-20 ${className}`}
      initial={{ opacity: 0, x: direction * 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, type: "spring", stiffness: 120, damping: 18 }}
    >
      {children}
    </motion.div>
  );
}

export function PhoneMockup() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Glow under phone */}
      <div
        className="absolute bottom-[-20px] w-[180px] h-[55px] blur-[22px]"
        style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.5), transparent 70%)" }}
      />

      <motion.div
        className="relative"
        style={{ perspective: "1100px" }}
        initial={{ opacity: 0, y: 70, scale: 0.88 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 80, damping: 20 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
          style={{ transform: "rotateY(-18deg) rotateX(5deg)" }}
        >
          {/* Phone body */}
          <div
            className="relative w-[222px] h-[452px] rounded-[44px] overflow-hidden animate-glow-pulse"
            style={{
              background: "linear-gradient(155deg, #1c1c1e, #0d0d10)",
              border: "1px solid rgba(255,255,255,0.13)",
            }}
          >
            {/* Left shine */}
            <div className="absolute left-0 top-[10%] bottom-[10%] w-[2px]" style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.15), transparent)" }} />

            {/* Screen */}
            <div className="absolute inset-[10px_8px] rounded-[36px] overflow-hidden" style={{ background: "#06070d" }}>
              {/* Scan line */}
              <div className="absolute left-0 right-0 h-[1.5px] animate-scan-line z-10" style={{ background: "linear-gradient(90deg, transparent, #6366f1, transparent)" }} />

              <div className="p-3.5 pt-2">
                {/* Status bar */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <span className="text-[9px] font-semibold text-white/60">9:41</span>
                  <div className="w-[60px] h-[18px] bg-white/10 rounded-full" />
                  <div className="flex items-center gap-0.5">
                    <div className="w-[14px] h-[7px] rounded-sm border border-white/30" />
                  </div>
                </div>

                {/* Greeting */}
                <p className="text-[9px] text-white/40 mb-0.5">Good morning, Ignacy 👋</p>
                <p className="text-[14px] font-bold text-white mb-3 tracking-[-0.5px]">Your Portfolio</p>

                {/* Revenue card */}
                <div className="rounded-[12px] p-3 mb-3" style={{ background: "linear-gradient(135deg, #6366f1, #4f46e5)" }}>
                  <p className="text-[7px] font-semibold text-white/50 tracking-[1.5px] uppercase mb-1">This month</p>
                  <p className="text-[18px] font-extrabold text-white tracking-[-0.5px]">18,420 zł</p>
                  <p className="text-[8px] text-emerald-300 font-semibold mt-0.5">↑ +23% vs last month</p>
                  {/* Sparkline */}
                  <div className="flex items-end gap-[2px] h-[18px] mt-2">
                    {sparkline.map((v, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-[1px]"
                        style={{
                          height: `${(v / 14) * 100}%`,
                          background: i === sparkline.length - 1 ? "#a5b4fc" : "rgba(165,180,252,0.22)",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-1.5 mb-3">
                  {[
                    { label: "Occupancy", value: "87%" },
                    { label: "Properties", value: "12" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-[8px] p-2" style={{ background: "rgba(255,255,255,0.04)" }}>
                      <p className="text-[7px] text-white/30">{s.label}</p>
                      <p className="text-[13px] font-bold text-white">{s.value}</p>
                    </div>
                  ))}
                </div>

                {/* Bookings list */}
                <p className="text-[8px] text-white/30 font-semibold tracking-[1px] uppercase mb-1.5">Live bookings</p>
                <div className="space-y-1">
                  {bookings.map((b) => (
                    <div key={b.name} className="flex items-center gap-2 p-1.5 rounded-[6px]" style={{ background: "rgba(255,255,255,0.03)" }}>
                      <div className="w-[5px] h-[5px] rounded-full shrink-0" style={{ background: b.color }} />
                      <div className="flex-1 min-w-0">
                        <p className="text-[8px] font-semibold text-white truncate">{b.name}</p>
                        <p className="text-[7px] text-white/30">{b.dates}</p>
                      </div>
                      <span className="text-[8px] font-bold text-white/70">{b.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating badges */}
      <Badge className="top-[52px] right-[-8px] w-[148px]" delay={1.4} direction={1}>
        <p className="text-[9px] text-gray-400 font-medium">📅 NEW BOOKING</p>
        <p className="text-[12px] font-bold text-[#111]">Airbnb · Apt Warsaw</p>
        <p className="text-[11px] text-[#6366f1] font-medium">Apr 18–22 · 4 nights</p>
      </Badge>

      <Badge className="bottom-[90px] right-[-8px] w-[156px]" delay={1.9} direction={1}>
        <p className="text-[9px] text-gray-400 font-medium">💰 REVENUE ALERT</p>
        <p className="text-[12px] font-bold text-[#111]">Price auto-adjusted</p>
        <p className="text-[11px] text-[#059669] font-medium">+340 zł this weekend</p>
      </Badge>

      <Badge className="top-[200px] left-[-8px] w-[146px]" delay={2.3} direction={-1}>
        <p className="text-[9px] text-gray-400 font-medium">⭐ REVIEW</p>
        <p className="text-[12px] font-bold text-[#111]">5.0 · &apos;Perfect stay&apos;</p>
        <p className="text-[11px] text-[#888] font-medium">AI replied instantly</p>
      </Badge>
    </div>
  );
}
