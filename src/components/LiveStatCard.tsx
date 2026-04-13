"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp } from "lucide-react";

function useLiveCounter(
  baseTarget: number,
  intervalMs: number,
  duration: number = 2500,
) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [animDone, setAnimDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * baseTarget));
      if (progress < 1) requestAnimationFrame(step);
      else setAnimDone(true);
    };
    requestAnimationFrame(step);
  }, [started, baseTarget, duration]);

  useEffect(() => {
    if (!animDone) return;
    const id = setInterval(() => setCount((c) => c + 1), intervalMs);
    return () => clearInterval(id);
  }, [animDone, intervalMs]);

  return { count, ref };
}

export function LiveStatCard({
  target,
  label,
  sublabel,
  icon: Icon,
  interval,
  accent,
  accentBg,
  bars,
  trend,
}: {
  target: number;
  label: string;
  sublabel: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  interval: number;
  accent: string;
  accentBg: string;
  bars: number[];
  trend: string;
}) {
  const { count, ref } = useLiveCounter(target, interval);
  const maxBar = Math.max(...bars);

  return (
    <div
      ref={ref}
      className="relative p-5 rounded-2xl border border-white/[0.07] overflow-hidden"
      style={{ background: accentBg }}
    >
      <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ backgroundColor: accent }}
          />
          <span
            className="relative inline-flex rounded-full h-2 w-2"
            style={{ backgroundColor: accent }}
          />
        </span>
        <span
          className="text-[9px] font-semibold uppercase tracking-wider"
          style={{ color: accent }}
        >
          Live
        </span>
      </div>

      <Icon className="w-5 h-5 mb-3" style={{ color: accent }} />
      <p className="text-3xl font-black tabular-nums text-white leading-none mb-0.5">
        {count.toLocaleString("pl-PL")}
      </p>
      <p className="text-[11px] font-semibold text-white/80 mb-0.5">
        {label}
      </p>
      <p className="text-[10px] text-zinc-500 mb-4">{sublabel}</p>

      <div className="flex items-end gap-[3px] h-8">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm transition-all"
            style={{
              height: `${(h / maxBar) * 100}%`,
              backgroundColor:
                i === bars.length - 1 ? accent : `${accent}55`,
            }}
          />
        ))}
      </div>

      <div className="flex items-center gap-1 mt-2">
        <TrendingUp className="w-3 h-3" style={{ color: accent }} />
        <span
          className="text-[10px] font-bold"
          style={{ color: accent }}
        >
          {trend} vs zeszly miesiac
        </span>
      </div>
    </div>
  );
}
