"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "./FadeIn";

function CountUp({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
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

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { target: 480, suffix: "", prefix: "", label: "properties managed", sub: "↑ growing daily" },
  { target: 1200000, suffix: " zł", prefix: "", label: "revenue processed", sub: "↑ this month", display: "1.2M zł" },
  { target: 87, suffix: "%", prefix: "", label: "avg occupancy", sub: "↑ +11pp vs manual" },
  { target: 45, suffix: "s", prefix: "", label: "avg guest reply", sub: "AI-powered" },
];

export function LiveNumbers() {
  return (
    <section
      className="py-[80px] px-[52px] max-md:px-5"
      style={{
        background: "rgba(255,255,255,0.015)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <FadeIn>
          <p className="eyebrow mb-3 text-center">Traction</p>
          <h2 className="text-[32px] md:text-[42px] font-extrabold tracking-[-2px] text-white mb-12 text-center">Numbers that speak.</h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <div className="text-center p-6 rounded-[16px]" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-[36px] md:text-[40px] font-extrabold tracking-[-1.5px] gradient-text mb-1">
                  {s.display ? s.display : <CountUp target={s.target} suffix={s.suffix} prefix={s.prefix} />}
                </p>
                <p className="text-[13px] text-white/40 font-medium mb-1">{s.label}</p>
                <p className="text-[11px] text-[#34d399]">{s.sub}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
