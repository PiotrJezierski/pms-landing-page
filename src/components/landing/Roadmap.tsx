"use client";

import { FadeIn } from "./FadeIn";

const items = [
  { quarter: "Q1 2026", status: "SHIPPED", title: "Core PMS + Channel Sync", dotStyle: "bg-[#34d399]", textColor: "text-[#34d399]" },
  { quarter: "Q2 2026", status: "IN PROGRESS", title: "AI Messaging + Mobile App", dotStyle: "bg-[#6366f1] animate-pulse-dot", textColor: "text-[#a5b4fc]" },
  { quarter: "Q3 2026", status: "PLANNED", title: "Competitor Benchmarking", dotStyle: "border-2 border-white/20 bg-transparent", textColor: "text-white/30" },
  { quarter: "Q4 2026", status: "PLANNED", title: "Owner Portal & White-label", dotStyle: "border-2 border-white/20 bg-transparent", textColor: "text-white/30" },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-[90px] px-[52px] max-md:px-5">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <FadeIn>
          <p className="eyebrow mb-3">Roadmap</p>
          <h2 className="text-[32px] md:text-[42px] font-extrabold tracking-[-2px] text-white mb-4">What&apos;s next.</h2>
          <p className="text-[15px] text-white/40 leading-relaxed max-w-[360px]">
            We ship fast and listen to operators. Here&apos;s what&apos;s coming — and what&apos;s already live.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-[2px]" style={{ background: "linear-gradient(to bottom, #6366f1, #22d3ee, transparent)" }} />

            <div className="space-y-8">
              {items.map((item) => (
                <div key={item.quarter} className="relative">
                  {/* Dot */}
                  <div className={`absolute left-[-25px] top-[6px] w-[14px] h-[14px] rounded-full ${item.dotStyle}`} />
                  <p className="text-[11px] font-semibold tracking-[1px] uppercase mb-1">
                    <span className="text-white/40">{item.quarter}</span>
                    <span className={`ml-2 ${item.textColor}`}>{item.status}</span>
                  </p>
                  <p className="text-[16px] font-semibold text-white/70">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
