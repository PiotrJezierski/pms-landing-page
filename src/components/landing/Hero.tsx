"use client";

import { FadeIn } from "./FadeIn";
import { PhoneMockup } from "./PhoneMockup";
import { useEffect, useRef, useState } from "react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min((now - start) / 1400, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setCount(Math.floor(eased * target));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 640 }}>
      {/* Background orbs */}
      <div className="absolute w-[480px] h-[480px] rounded-full blur-[80px] pointer-events-none animate-float-slow" style={{ background: "rgba(99,102,241,0.28)", top: "-10%", left: "-5%" }} />
      <div className="absolute w-[360px] h-[360px] rounded-full blur-[80px] pointer-events-none" style={{ background: "rgba(34,211,238,0.16)", top: "30%", right: "0%" }} />
      <div className="absolute w-[300px] h-[300px] rounded-full blur-[80px] pointer-events-none" style={{ background: "rgba(167,139,250,0.15)", top: "50%", left: "40%" }} />

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-[52px] py-[60px] pb-[80px] max-md:px-5 max-md:py-10">
        {/* Left — text */}
        <div>
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-[7px] px-[14px] py-[5px] rounded-[20px] mb-6" style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.22)" }}>
              <span className="w-[6px] h-[6px] rounded-full bg-[#6366f1] animate-pulse-dot" />
              <span className="text-[11px] font-medium text-[#a5b4fc]">Official Rentals United Partner · 2026</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.13}>
            <h1 className="text-[40px] lg:text-[60px] font-extrabold leading-[1.01] tracking-[-2.5px] text-white mb-5">
              The PMS that works<br />while <span className="gradient-text">you sleep.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.26}>
            <p className="text-[16px] leading-[1.7] max-w-[380px] mb-7" style={{ color: "rgba(255,255,255,0.4)" }}>
              Sync every booking platform, auto-price every night, and let AI handle guests — from 2 properties to 200.
            </p>
          </FadeIn>

          <FadeIn delay={0.39}>
            <div className="flex flex-wrap items-center gap-[14px] mb-7">
              <a href="#cta" className="bg-white text-[#06070d] text-[13px] font-bold px-[26px] py-[13px] rounded-[24px] hover:opacity-90 transition-opacity">
                Start free trial →
              </a>
              <button className="flex items-center gap-2.5 text-[13px] font-medium text-white/50 hover:text-white/80 transition-colors">
                <span className="w-[30px] h-[30px] rounded-full border flex items-center justify-center" style={{ borderColor: "rgba(255,255,255,0.18)" }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="white"><polygon points="2,0 10,5 2,10" /></svg>
                </span>
                Watch 2-min demo
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={0.51}>
            <div className="flex flex-wrap gap-8 pt-7" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              {[
                { value: 23, suffix: "%", prefix: "+", label: "avg revenue lift" },
                { value: 12, suffix: "+", prefix: "", label: "channels synced" },
                { value: 480, suffix: "", prefix: "", label: "properties managed" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-[30px] font-extrabold tracking-[-1px] text-white">
                    {s.prefix}<CountUp target={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-[12px] text-white/30">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right — phone mockup (hidden on mobile) */}
        <div className="hidden lg:flex justify-center">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
