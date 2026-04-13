"use client";

import { useEffect, useState, useMemo } from "react";

const seed = (i: number) => ((i * 9301 + 49297) % 233280) / 233280;

function useScrollProgress(totalHeight: number) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () =>
      setProgress(Math.min(window.scrollY / totalHeight, 1));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [totalHeight]);
  return progress;
}

export function ScrollytellingIntro() {
  const [vh, setVh] = useState(800);
  const [seen, setSeen] = useState<boolean | null>(null);

  useEffect(() => {
    setVh(window.innerHeight);
    setSeen(sessionStorage.getItem("intro_seen") === "1");
  }, []);

  const totalHeight = vh * 4;
  const progress = useScrollProgress(totalHeight);

  const particles = useMemo(
    () =>
      Array.from({ length: 35 }, (_, i) => ({
        left: `${seed(i) * 100}%`,
        top: `${30 + seed(i + 100) * 60}%`,
        size: 1 + seed(i + 200) * 2.5,
        delay: `${seed(i + 300) * 4}s`,
        duration: `${2 + seed(i + 400) * 3}s`,
      })),
    [],
  );

  const buildings = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        left: `${8 + i * 7.5}%`,
        width: `${3 + seed(i + 500) * 2.5}%`,
        height: `${15 + seed(i + 600) * 35}%`,
        glow: i % 3 === 0 || i === 5 || i === 9,
        delay: `${i * 0.1}s`,
      })),
    [],
  );

  useEffect(() => {
    if (progress >= 0.95 && !seen) {
      sessionStorage.setItem("intro_seen", "1");
    }
  }, [progress, seen]);

  const phase =
    progress < 0.2
      ? 1
      : progress < 0.4
        ? 2
        : progress < 0.6
          ? 3
          : progress < 0.8
            ? 4
            : 5;

  const phaseProgress = (p: number, start: number, end: number) =>
    Math.max(0, Math.min(1, (p - start) / (end - start)));
  const p1 = phaseProgress(progress, 0, 0.2);
  const p2 = phaseProgress(progress, 0.2, 0.4);
  const p3 = phaseProgress(progress, 0.4, 0.6);
  const p4 = phaseProgress(progress, 0.6, 0.8);
  const p5 = phaseProgress(progress, 0.8, 1);

  if (seen === null) {
    return (
      <section
        className="h-screen"
        style={{ background: "var(--color-bg-dark)" }}
      />
    );
  }

  // Buildings renderer used in both static and animated modes
  const renderBuildings = (heightMultiplier: number = 1) =>
    buildings.map((b, i) => (
      <div
        key={i}
        className="absolute bottom-0 rounded-t-md"
        style={{
          left: b.left,
          width: b.width,
          height:
            heightMultiplier === 1
              ? b.height
              : `calc(${b.height} * ${heightMultiplier})`,
          background: b.glow
            ? "linear-gradient(180deg, #818CF8 0%, #6366F1 40%, rgba(99,102,241,0.2) 100%)"
            : "linear-gradient(180deg, rgba(148,163,184,0.12) 0%, rgba(255,255,255,0.03) 100%)",
          boxShadow: b.glow
            ? "0 0 40px rgba(99,102,241,0.5), 0 0 80px rgba(99,102,241,0.2), inset 0 1px 0 rgba(255,255,255,0.2)"
            : "inset 0 1px 0 rgba(255,255,255,0.05)",
          border: b.glow
            ? "1px solid rgba(129,140,248,0.4)"
            : "1px solid rgba(255,255,255,0.06)",
          transitionDelay: b.delay,
          transitionDuration: "0.8s",
        }}
      />
    ));

  // Gradient orbs
  const renderOrbs = (opacity1: number = 0.25, opacity2: number = 0.18) => (
    <>
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(99,102,241,${opacity1}) 0%, transparent 70%)`,
          top: "-10%",
          left: "40%",
          animation: "mesh-move 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(6,214,160,${opacity2}) 0%, transparent 70%)`,
          bottom: "0%",
          right: "35%",
          animation: "mesh-move 25s ease-in-out infinite reverse",
        }}
      />
    </>
  );

  // Grid renderer
  const renderGrid = (opacity: number) => (
    <div
      className="absolute inset-0 flex items-end justify-center overflow-hidden pointer-events-none"
      style={{ perspective: "800px", opacity }}
    >
      <div
        className="w-[200%] h-[60%]"
        style={{
          transform: `rotateX(65deg) translateZ(${progress * -200}px) scale(${1 + progress * 0.5})`,
          backgroundImage: `
            linear-gradient(rgba(99,102,241,${0.08 + progress * 0.05}) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,${0.08 + progress * 0.05}) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          willChange: "transform",
        }}
      />
    </div>
  );

  if (seen) {
    return (
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "var(--color-bg-dark)" }}
      >
        <div
          className="absolute inset-0 flex items-end justify-center overflow-hidden pointer-events-none"
          style={{ perspective: "800px", opacity: 0.6 }}
        >
          <div
            className="w-[200%] h-[60%]"
            style={{
              transform: "rotateX(65deg) translateZ(-200px) scale(1.5)",
              backgroundImage:
                "linear-gradient(rgba(99,102,241,0.13) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.13) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        {renderOrbs()}
        <div className="absolute bottom-0 left-0 right-0 h-[60%] flex items-end pointer-events-none">
          {renderBuildings()}
        </div>
        <h2 className="text-4xl md:text-7xl font-black tracking-tight text-white text-center relative z-10">
          Zbuduj imperium
          <br />
          <span className="gradient-text">wynajmu.</span>
        </h2>
      </section>
    );
  }

  return (
    <section className="relative" style={{ height: `${totalHeight + vh}px` }}>
      <div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ background: "var(--color-bg-dark)" }}
      >
        {/* Perspective Grid */}
        {renderGrid(
          phase <= 2
            ? 1 - p2 * 0.5
            : phase === 5
              ? p5 * 0.6
              : 0.3,
        )}

        {/* Gradient Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-[600px] h-[600px] rounded-full blur-[180px] transition-all duration-1000"
            style={{
              background: `radial-gradient(circle, rgba(99,102,241,${0.15 + progress * 0.1}) 0%, transparent 70%)`,
              top: `${20 - progress * 30}%`,
              left: `${30 + progress * 10}%`,
              animation: "mesh-move 20s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-[150px] transition-all duration-1000"
            style={{
              background: `radial-gradient(circle, rgba(6,214,160,${0.1 + progress * 0.08}) 0%, transparent 70%)`,
              bottom: `${20 - progress * 20}%`,
              right: `${20 + progress * 15}%`,
              animation: "mesh-move 25s ease-in-out infinite reverse",
            }}
          />
        </div>

        {/* Phase 1: Particles */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: 1 - p2 }}
        >
          {particles.map((pt, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                left: pt.left,
                top: pt.top,
                width: pt.size,
                height: pt.size,
                animation: `twinkle ${pt.duration} ease-in-out ${pt.delay} infinite`,
                opacity: p1 > 0.2 ? 1 : 0,
                transition: "opacity 0.5s",
              }}
            />
          ))}
        </div>

        {/* Phase 1 Text */}
        <div
          className="absolute inset-0 flex items-center justify-center z-10"
          style={{
            opacity:
              phase === 1
                ? p1 > 0.1
                  ? 1 - Math.max(0, (p1 - 0.7) / 0.3)
                  : p1 / 0.1
                : 0,
            transform: `translateY(${phase === 1 ? -p1 * 60 : -80}px)`,
            willChange: "transform, opacity",
          }}
        >
          <h2 className="text-5xl md:text-8xl font-black tracking-tight text-white text-center leading-none">
            Command
            <br />
            <span className="gradient-text">the Properties.</span>
          </h2>
        </div>

        {/* Phase 2: Glass Frame */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div
            className="absolute border border-white/10 rounded-3xl transition-all duration-700"
            style={{
              width: phase >= 2 ? `${60 + p2 * 30}%` : "40%",
              height: phase >= 2 ? `${50 + p2 * 40}%` : "30%",
              opacity:
                phase === 2 ? p2 * 0.8 : phase === 3 ? 1 - p3 : 0,
              backdropFilter:
                phase === 2 ? `blur(${p2 * 4}px)` : "none",
              background: `rgba(255,255,255,${phase === 2 ? p2 * 0.03 : 0})`,
            }}
          />
          <div
            style={{
              opacity:
                phase === 2
                  ? p2 > 0.2
                    ? 1 - Math.max(0, (p2 - 0.7) / 0.3)
                    : Math.min(1, (p2 - 0.1) / 0.2)
                  : 0,
              transform: `translateY(${phase === 2 ? (1 - p2) * 30 : 30}px) scale(${phase === 2 ? 0.95 + p2 * 0.05 : 0.95})`,
            }}
          >
            <h2 className="text-4xl md:text-7xl font-black tracking-tight text-white text-center">
              Wejdz
              <br />
              <span className="text-zinc-500">do srodka.</span>
            </h2>
          </div>
        </div>

        {/* Phase 3: AI Sphere */}
        <div
          className="absolute inset-0 flex items-center justify-center z-10"
          style={{
            opacity:
              phase === 3 ? p3 : phase === 4 ? Math.max(0, 1 - p4 * 4) : 0,
            pointerEvents: "none",
          }}
        >
          <div className="relative">
            <div
              className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-8 relative"
              style={{
                background:
                  "radial-gradient(circle at 35% 35%, #818CF8, #6366F1 40%, #06D6A0 100%)",
                boxShadow:
                  "0 0 60px rgba(99,102,241,0.4), 0 0 120px rgba(6,214,160,0.2)",
                animation: "float 6s ease-in-out infinite",
              }}
            >
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    animation: `orbit ${3 + i}s linear infinite`,
                    animationDelay: `${i * 0.8}s`,
                    top: "50%",
                    left: "50%",
                    transformOrigin: `${40 + i * 15}px 0`,
                    opacity: 0.6,
                  }}
                />
              ))}
            </div>
            <h2
              className="text-3xl md:text-6xl font-black tracking-tight text-white text-center"
              style={{ opacity: phase === 3 ? Math.min(1, p3 / 0.3) : 0 }}
            >
              AI. Ktore zarzadza
              <br />
              <span className="gradient-text">za Ciebie.</span>
            </h2>
          </div>
        </div>

        {/* Phase 4: Text only */}
        <div
          className="absolute inset-0 flex items-center justify-center z-10"
          style={{
            opacity:
              phase === 4 ? p4 : phase === 5 ? 1 - p5 * 2 : 0,
            pointerEvents: "none",
          }}
        >
          <h2
            className="text-3xl md:text-6xl font-black tracking-tight text-white text-center px-6"
            style={{
              opacity:
                Math.min(1, p4 * 2) *
                (1 - Math.max(0, (p4 - 0.85) / 0.15)),
            }}
          >
            Wszystko dzieje sie
            <br />
            <span className="gradient-text">samo.</span>
          </h2>
        </div>

        {/* Phase 5: Buildings */}
        <div
          className="absolute inset-0 z-10"
          style={{ opacity: phase === 5 ? p5 : 0 }}
        >
          <div className="absolute bottom-0 left-0 right-0 h-[60%] flex items-end pointer-events-none">
            {renderBuildings(Math.min(1, p5 * 2))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2
              className="text-4xl md:text-7xl font-black tracking-tight text-white text-center"
              style={{ opacity: Math.min(1, p5 / 0.3) }}
            >
              Zbuduj imperium
              <br />
              <span className="gradient-text">wynajmu.</span>
            </h2>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2 z-20"
          style={{ opacity: Math.max(0, 1 - progress * 8) }}
        >
          <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-zinc-600">
            Scroll to explore
          </span>
          <div className="w-5 h-8 border border-zinc-700 rounded-full flex justify-center pt-1.5">
            <div className="w-0.5 h-2 bg-zinc-600 rounded-full animate-scroll-hint" />
          </div>
        </div>
      </div>
    </section>
  );
}
