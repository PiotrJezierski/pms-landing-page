"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./FadeIn";

const tabs = [
  { id: "sync", icon: "⚡", label: "Sync" },
  { id: "pricing", icon: "🧠", label: "Pricing" },
  { id: "messaging", icon: "💬", label: "Messaging" },
  { id: "analytics", icon: "📊", label: "Analytics" },
];

function Check() {
  return <span className="text-[#6366f1] mr-2">✓</span>;
}

/* ── Sync Panel ── */
function SyncPanel() {
  const channels = [
    { name: "Airbnb", time: "2s ago" },
    { name: "Booking.com", time: "5s ago" },
    { name: "Vrbo", time: "8s ago" },
    { name: "Expedia", time: "12s ago" },
    { name: "Rentals United", time: "1s ago" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h3 className="text-[26px] md:text-[30px] font-extrabold tracking-[-1px] text-white mb-4">Real-time calendar sync across every platform.</h3>
        <p className="text-[14px] text-white/40 leading-relaxed mb-5">Two-way sync means a booking on Airbnb instantly blocks Booking.com. No double bookings. No manual updates.</p>
        <ul className="space-y-2 text-[14px] text-white/60">
          <li><Check />Airbnb, Booking.com, Vrbo, Expedia &amp; 9 more</li>
          <li><Check />Instant two-way sync — changes flow both ways</li>
          <li><Check />Conflict detection with automatic resolution</li>
          <li><Check />Rentals United as central hub</li>
        </ul>
      </div>
      <div className="rounded-[18px] p-4 overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-red-400/60" /><div className="w-2 h-2 rounded-full bg-yellow-400/60" /><div className="w-2 h-2 rounded-full bg-green-400/60" /></div>
            <span className="text-[12px] font-semibold text-white/50">Channel Sync</span>
          </div>
          <span className="flex items-center gap-1.5 text-[10px] font-semibold text-[#34d399] bg-[#34d399]/10 px-2 py-0.5 rounded-full">
            <span className="w-[5px] h-[5px] rounded-full bg-[#34d399] animate-pulse" />Live
          </span>
        </div>
        <div className="space-y-2">
          {channels.map((c) => (
            <div key={c.name} className="flex items-center justify-between p-2.5 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
              <span className="text-[12px] font-medium text-white/70">{c.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-white/25">synced {c.time}</span>
                <span className="w-[6px] h-[6px] rounded-full bg-[#34d399]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Pricing Panel ── */
function PricingPanel() {
  const days = [
    { label: "Mon", h: 40 }, { label: "Tue", h: 55 }, { label: "Wed", h: 50 },
    { label: "Thu", h: 65 }, { label: "Fri", h: 90, highlight: true }, { label: "Sat", h: 85 }, { label: "Sun", h: 60 },
  ];
  const properties = [
    { name: "Apt Mokotów", old: "320 zł", now: "389 zł", change: "+22%", up: true },
    { name: "Studio Wola", old: "280 zł", now: "259 zł", change: "-8%", up: false },
    { name: "Loft Praga", old: "350 zł", now: "410 zł", change: "+17%", up: true },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h3 className="text-[26px] md:text-[30px] font-extrabold tracking-[-1px] text-white mb-4">AI that prices smarter every night.</h3>
        <p className="text-[14px] text-white/40 leading-relaxed mb-5">Dynamic pricing analyzes demand, seasonality, and competitor rates to maximize your revenue automatically.</p>
        <ul className="space-y-2 text-[14px] text-white/60">
          <li><Check />Market-aware pricing updated daily</li>
          <li><Check />Competitor rate monitoring</li>
          <li><Check />Min/max price guardrails you control</li>
          <li><Check />Revenue uplift tracking per property</li>
        </ul>
      </div>
      <div className="rounded-[18px] p-4" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-[10px] text-white/30 tracking-[1px] uppercase">7-Day Forecast</span>
            <span className="text-[11px] text-[#34d399] font-semibold ml-2">+18% RevPAR</span>
          </div>
          <span className="text-[10px] font-semibold text-[#6366f1] bg-[#6366f1]/10 px-2 py-0.5 rounded-full">Optimized</span>
        </div>
        <div className="flex items-end gap-2 h-[100px] mb-4">
          {days.map((d) => (
            <div key={d.label} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full rounded-[4px]" style={{ height: `${d.h}%`, background: d.highlight ? "linear-gradient(to top, #6366f1, #a78bfa)" : "rgba(99,102,241,0.2)" }} />
              <span className="text-[9px] text-white/25">{d.label}</span>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {properties.map((p) => (
            <div key={p.name} className="flex items-center justify-between p-2 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
              <span className="text-[11px] font-medium text-white/60">{p.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-white/20 line-through">{p.old}</span>
                <span className={`text-[11px] font-bold ${p.up ? "text-[#34d399]" : "text-[#f87171]"}`}>{p.now}</span>
                <span className={`text-[9px] font-semibold ${p.up ? "text-[#34d399]" : "text-[#f87171]"}`}>{p.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Messaging Panel ── */
function MessagingPanel() {
  const conversations = [
    { name: "Sarah M.", msg: "What time is check-in?", badge: "🤖 AI replied in 45s", badgeColor: "bg-[#6366f1]/10 text-[#a5b4fc]" },
    { name: "Klaus B.", msg: "Is parking available?", badge: "🤖 AI replied", badgeColor: "bg-[#6366f1]/10 text-[#a5b4fc]" },
    { name: "Anna K.", msg: "Loved the apartment!", badge: "⭐ Review request sent", badgeColor: "bg-amber-500/10 text-amber-400" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h3 className="text-[26px] md:text-[30px] font-extrabold tracking-[-1px] text-white mb-4">AI guest comms. 24/7. Any language.</h3>
        <p className="text-[14px] text-white/40 leading-relaxed mb-5">AI reads, understands, and responds to guest messages across all platforms. You set the rules, AI does the talking.</p>
        <ul className="space-y-2 text-[14px] text-white/60">
          <li><Check />Auto-reply in 30+ languages</li>
          <li><Check />Custom tone and templates you control</li>
          <li><Check />Smart escalation for complex requests</li>
          <li><Check />Review request automation</li>
        </ul>
      </div>
      <div className="rounded-[18px] p-4" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-red-400/60" /><div className="w-2 h-2 rounded-full bg-yellow-400/60" /><div className="w-2 h-2 rounded-full bg-green-400/60" /></div>
          <span className="text-[12px] font-semibold text-white/50">AI Inbox</span>
        </div>
        <div className="space-y-2">
          {conversations.map((c) => (
            <div key={c.name} className="p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[12px] font-semibold text-white/80">{c.name}</span>
                <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${c.badgeColor}`}>{c.badge}</span>
              </div>
              <p className="text-[11px] text-white/30">{c.msg}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Analytics Panel ── */
function AnalyticsPanel() {
  const kpis = [
    { label: "Revenue", value: "18,420 zł", change: "+23%" },
    { label: "Occupancy", value: "87%", change: "+11pp" },
    { label: "RevPAR", value: "412 zł", change: "+18%" },
    { label: "ADR", value: "473 zł", change: "+9%" },
  ];
  const channels = [
    { name: "Airbnb", pct: 48, color: "#6366f1" },
    { name: "Booking", pct: 31, color: "#22d3ee" },
    { name: "Direct", pct: 14, color: "#a78bfa" },
    { name: "Other", pct: 7, color: "rgba(255,255,255,0.15)" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h3 className="text-[26px] md:text-[30px] font-extrabold tracking-[-1px] text-white mb-4">Every metric. One screen.</h3>
        <p className="text-[14px] text-white/40 leading-relaxed mb-5">Revenue, occupancy, RevPAR, ADR, channel split — all real-time. No spreadsheets.</p>
        <ul className="space-y-2 text-[14px] text-white/60">
          <li><Check />Real-time dashboard updates</li>
          <li><Check />Per-property and portfolio view</li>
          <li><Check />Channel performance breakdown</li>
          <li><Check />Export to CSV / PDF</li>
        </ul>
      </div>
      <div className="rounded-[18px] p-4" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {kpis.map((k) => (
            <div key={k.label} className="p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
              <p className="text-[9px] text-white/25 uppercase tracking-[1px]">{k.label}</p>
              <p className="text-[18px] font-extrabold text-white tracking-[-0.5px]">{k.value}</p>
              <p className="text-[10px] text-[#34d399] font-semibold">{k.change}</p>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-white/25 uppercase tracking-[1px] mb-2">Channel split</p>
        <div className="space-y-2">
          {channels.map((c) => (
            <div key={c.name} className="flex items-center gap-3">
              <span className="text-[11px] text-white/40 w-[60px]">{c.name}</span>
              <div className="flex-1 h-[6px] rounded-full" style={{ background: "rgba(255,255,255,0.05)" }}>
                <div className="h-full rounded-full" style={{ width: `${c.pct}%`, background: c.color }} />
              </div>
              <span className="text-[11px] font-semibold text-white/50 w-[30px] text-right">{c.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const panels: Record<string, () => JSX.Element> = {
  sync: SyncPanel,
  pricing: PricingPanel,
  messaging: MessagingPanel,
  analytics: AnalyticsPanel,
};

export function FeatureTabs() {
  const [active, setActive] = useState("sync");
  const Panel = panels[active];

  return (
    <section id="product" className="py-[90px] px-[52px] max-md:px-5">
      <div className="max-w-[1280px] mx-auto">
        <FadeIn>
          <p className="eyebrow mb-3">Deep dive</p>
          <h2 className="text-[32px] md:text-[42px] font-extrabold tracking-[-2px] text-white mb-10">Built for every part of the job.</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex rounded-[14px] overflow-hidden mb-10" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
            {tabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className="flex-1 py-3 text-[13px] font-semibold transition-colors"
                style={{
                  background: active === t.id ? "rgba(99,102,241,0.15)" : "transparent",
                  color: active === t.id ? "#a5b4fc" : "rgba(255,255,255,0.35)",
                  borderRight: i < tabs.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                {t.icon} {t.label}
              </button>
            ))}
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <Panel />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
