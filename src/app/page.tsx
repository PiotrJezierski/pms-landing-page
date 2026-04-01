"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import {
  Building2, Bot, Lock, SprayCan, ArrowRight, Star, Check,
  MessageCircle, DoorOpen, ClipboardList, BarChart3, Globe,
  Users, Sparkles, Menu, X, Play, ChevronRight, Mail,
  Zap, Shield, Clock, Home, Calendar, TrendingUp,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   SCROLLYTELLING INTRO — 5-phase cinematic sequence
   ═══════════════════════════════════════════════════════════ */

function useScrollProgress(totalHeight: number) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => setProgress(Math.min(window.scrollY / totalHeight, 1));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [totalHeight]);
  return progress;
}

function ScrollytellingIntro() {
  const [vh, setVh] = useState(800);
  const [seen, setSeen] = useState<boolean | null>(null); // null = loading

  useEffect(() => {
    setVh(window.innerHeight);
    setSeen(sessionStorage.getItem("intro_seen") === "1");
  }, []);

  // Deterministic pseudo-random for SSR consistency
  const seed = (i: number) => ((i * 9301 + 49297) % 233280) / 233280;

  const totalHeight = vh * 4;
  const progress = useScrollProgress(totalHeight);

  // ALL hooks must be called before any return — Rules of Hooks
  const particles = useMemo(() =>
    Array.from({ length: 35 }, (_, i) => ({
      left: `${seed(i) * 100}%`,
      top: `${30 + seed(i + 100) * 60}%`,
      size: 1 + seed(i + 200) * 2.5,
      delay: `${seed(i + 300) * 4}s`,
      duration: `${2 + seed(i + 400) * 3}s`,
    })), []);

  const buildings = useMemo(() =>
    Array.from({ length: 12 }, (_, i) => ({
      left: `${8 + i * 7.5}%`,
      width: `${3 + seed(i + 500) * 2.5}%`,
      height: `${15 + seed(i + 600) * 35}%`,
      glow: i % 3 === 0 || i === 5 || i === 9,
      delay: `${i * 0.1}s`,
    })), []);

  // Mark intro as seen once user scrolls past it
  useEffect(() => {
    if (progress >= 0.95 && !seen) {
      sessionStorage.setItem("intro_seen", "1");
    }
  }, [progress, seen]);

  // Phase boundaries
  const phase = progress < 0.2 ? 1 : progress < 0.4 ? 2 : progress < 0.6 ? 3 : progress < 0.8 ? 4 : 5;
  const phaseProgress = (p: number, start: number, end: number) => Math.max(0, Math.min(1, (p - start) / (end - start)));
  const p1 = phaseProgress(progress, 0, 0.2);
  const p2 = phaseProgress(progress, 0.2, 0.4);
  const p3 = phaseProgress(progress, 0.4, 0.6);
  const p4 = phaseProgress(progress, 0.6, 0.8);
  const p5 = phaseProgress(progress, 0.8, 1);

  // Loading state
  if (seen === null) {
    return <section className="h-screen" style={{ background: "var(--color-bg-dark)" }} />;
  }

  // If already seen, show only phase 5 (static)
  if (seen) {
    return (
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ background: "var(--color-bg-dark)" }}>
        <div className="absolute inset-0 flex items-end justify-center overflow-hidden pointer-events-none" style={{ perspective: "800px", opacity: 0.6 }}>
          <div className="w-[200%] h-[60%]" style={{ transform: "rotateX(65deg) translateZ(-200px) scale(1.5)", backgroundImage: "linear-gradient(rgba(99,102,241,0.13) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.13) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <div className="absolute w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)", top: "-10%", left: "40%", animation: "mesh-move 20s ease-in-out infinite" }} />
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(6,214,160,0.18) 0%, transparent 70%)", bottom: "0%", right: "35%", animation: "mesh-move 25s ease-in-out infinite reverse" }} />
        <div className="absolute bottom-0 left-0 right-0 h-[60%] flex items-end pointer-events-none">
          {buildings.map((b, i) => (
            <div key={i} className="absolute bottom-0 rounded-t-sm" style={{ left: b.left, width: b.width, height: b.height, background: b.glow ? "linear-gradient(180deg, rgba(99,102,241,0.6), rgba(99,102,241,0.15))" : "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))", boxShadow: b.glow ? "0 0 30px rgba(99,102,241,0.3)" : "none" }} />
          ))}
        </div>
        <h2 className="text-4xl md:text-7xl font-black tracking-tight text-white text-center relative z-10">
          Zbuduj imperium<br /><span className="gradient-text">wynajmu.</span>
        </h2>
      </section>
    );
  }

  return (
    <section className="relative" style={{ height: `${totalHeight + vh}px` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ background: "var(--color-bg-dark)" }}>

        {/* ── Perspective Grid (all phases) ── */}
        <div className="absolute inset-0 flex items-end justify-center overflow-hidden pointer-events-none"
          style={{
            perspective: "800px",
            opacity: phase <= 2 ? 1 - p2 * 0.5 : phase === 5 ? p5 * 0.6 : 0.3,
          }}>
          <div className="w-[200%] h-[60%]"
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

        {/* ── Gradient Orbs ── */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[600px] h-[600px] rounded-full blur-[180px] transition-all duration-1000"
            style={{
              background: `radial-gradient(circle, rgba(99,102,241,${0.15 + progress * 0.1}) 0%, transparent 70%)`,
              top: `${20 - progress * 30}%`,
              left: `${30 + progress * 10}%`,
              animation: "mesh-move 20s ease-in-out infinite",
            }}
          />
          <div className="absolute w-[500px] h-[500px] rounded-full blur-[150px] transition-all duration-1000"
            style={{
              background: `radial-gradient(circle, rgba(6,214,160,${0.1 + progress * 0.08}) 0%, transparent 70%)`,
              bottom: `${20 - progress * 20}%`,
              right: `${20 + progress * 15}%`,
              animation: "mesh-move 25s ease-in-out infinite reverse",
            }}
          />
        </div>

        {/* ── Phase 1: City Particles ── */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 1 - p2 }}>
          {particles.map((pt, i) => (
            <div key={i} className="absolute rounded-full bg-white"
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

        {/* ── Phase 1 Text: "Command the City." ── */}
        <div className="absolute inset-0 flex items-center justify-center z-10"
          style={{
            opacity: phase === 1 ? (p1 > 0.1 ? 1 - Math.max(0, (p1 - 0.7) / 0.3) : p1 / 0.1) : 0,
            transform: `translateY(${phase === 1 ? -p1 * 60 : -80}px)`,
            willChange: "transform, opacity",
          }}>
          <h2 className="text-5xl md:text-8xl font-black tracking-tight text-white text-center leading-none">
            Command<br /><span className="gradient-text">the City.</span>
          </h2>
        </div>

        {/* ── Phase 2: Glass Frames + "Wejdź do środka" ── */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          {/* Glass frame */}
          <div className="absolute border border-white/10 rounded-3xl transition-all duration-700"
            style={{
              width: phase >= 2 ? `${60 + p2 * 30}%` : "40%",
              height: phase >= 2 ? `${50 + p2 * 40}%` : "30%",
              opacity: phase === 2 ? p2 * 0.8 : phase === 3 ? 1 - p3 : 0,
              backdropFilter: phase === 2 ? `blur(${p2 * 4}px)` : "none",
              background: `rgba(255,255,255,${phase === 2 ? p2 * 0.03 : 0})`,
            }}
          />
          {/* Text */}
          <div style={{
            opacity: phase === 2 ? (p2 > 0.2 ? 1 - Math.max(0, (p2 - 0.7) / 0.3) : Math.min(1, (p2 - 0.1) / 0.2)) : 0,
            transform: `translateY(${phase === 2 ? (1 - p2) * 30 : 30}px) scale(${phase === 2 ? 0.95 + p2 * 0.05 : 0.95})`,
          }}>
            <h2 className="text-4xl md:text-7xl font-black tracking-tight text-white text-center">
              Wejdź<br /><span className="text-zinc-500">do środka.</span>
            </h2>
          </div>
        </div>

        {/* ── Phase 3: AI Sphere ── */}
        <div className="absolute inset-0 flex items-center justify-center z-10"
          style={{
            opacity: phase === 3 ? p3 : phase === 4 ? 1 - p4 * 0.3 : 0,
          }}>
          <div className="relative" style={{
            transform: phase === 4 ? `translateX(${-p4 * 35}vw) scale(${1 - p4 * 0.5})` : "none",
            transition: "transform 0.1s linear",
          }}>
            {/* Sphere */}
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-8 relative"
              style={{
                background: "radial-gradient(circle at 35% 35%, #818CF8, #6366F1 40%, #06D6A0 100%)",
                boxShadow: `0 0 ${60 + Math.sin(Date.now() / 1000) * 20}px rgba(99,102,241,0.4), 0 0 120px rgba(6,214,160,0.2)`,
                animation: "float 6s ease-in-out infinite",
              }}>
              {/* Orbiting dots */}
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    animation: `orbit ${3 + i}s linear infinite`,
                    animationDelay: `${i * 0.8}s`,
                    top: "50%", left: "50%",
                    transformOrigin: `${40 + i * 15}px 0`,
                    opacity: 0.6,
                  }}
                />
              ))}
            </div>
            <h2 className="text-3xl md:text-6xl font-black tracking-tight text-white text-center"
              style={{ opacity: phase === 3 ? Math.min(1, p3 / 0.3) : phase === 4 ? 1 - p4 : 0 }}>
              AI. Które zarządza<br /><span className="gradient-text">za Ciebie.</span>
            </h2>
          </div>
        </div>

        {/* ── Phase 4: Floating Action Cards ── */}
        <div className="absolute inset-0 flex items-center justify-end z-10 pr-[5%] md:pr-[10%]"
          style={{ opacity: phase === 4 ? p4 : phase === 5 ? 1 - p5 : 0 }}>
          <div className="flex flex-col gap-4 max-w-xs w-full">
            {[
              { icon: MessageCircle, color: "indigo", title: "AI Auto-Reply", detail: "Guest: What time is check-in?", sub: "AI: 3 PM. Parking at ul. Marszałkowska 12. ✓", delay: 0 },
              { icon: Lock, color: "emerald", title: "Smart Lock", detail: "Kod 4521 wysłany", sub: "Apt. Centrum · Aktywny", delay: 0.15 },
              { icon: SprayCan, color: "amber", title: "Auto-Cleaning", detail: "Sprzątanie · Apt. Centrum", sub: "W trakcie — 60%", delay: 0.3 },
            ].map((card, i) => (
              <div key={i} className="glass rounded-2xl p-4 transition-all"
                style={{
                  opacity: p4 > card.delay + 0.1 ? 1 : 0,
                  transform: `translateX(${p4 > card.delay + 0.1 ? 0 : 40}px)`,
                  transition: `all 0.5s ease-out ${card.delay}s`,
                }}>
                <div className="flex items-center gap-2.5 mb-2">
                  <card.icon className={`w-4 h-4 text-${card.color}-400`} />
                  <span className="text-xs font-semibold text-zinc-400">{card.title}</span>
                </div>
                <p className="text-sm font-medium text-white mb-0.5">{card.detail}</p>
                <p className="text-xs text-zinc-500">{card.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Phase 4 Text ── */}
        <div className="absolute bottom-20 left-0 right-0 text-center z-10"
          style={{
            opacity: phase === 4 ? Math.min(1, p4 / 0.3) * (1 - Math.max(0, (p4 - 0.8) / 0.2)) : 0,
          }}>
          <h2 className="text-2xl md:text-5xl font-black tracking-tight text-white">
            Wszystko dzieje się <span className="gradient-text">samo.</span>
          </h2>
        </div>

        {/* ── Phase 5: Empire / Buildings ── */}
        <div className="absolute inset-0 z-10" style={{ opacity: phase === 5 ? p5 : 0 }}>
          {/* Buildings */}
          <div className="absolute bottom-0 left-0 right-0 h-[60%] flex items-end pointer-events-none">
            {buildings.map((b, i) => (
              <div key={i} className="absolute bottom-0 rounded-t-sm transition-all"
                style={{
                  left: b.left,
                  width: b.width,
                  height: `calc(${b.height} * ${Math.min(1, p5 * 2)})`,
                  background: b.glow
                    ? "linear-gradient(180deg, rgba(99,102,241,0.6), rgba(99,102,241,0.15))"
                    : "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                  boxShadow: b.glow ? "0 0 30px rgba(99,102,241,0.3)" : "none",
                  transitionDelay: b.delay,
                  transitionDuration: "0.8s",
                }}
              />
            ))}
          </div>
          {/* Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl md:text-7xl font-black tracking-tight text-white text-center"
              style={{ opacity: Math.min(1, p5 / 0.3) }}>
              Zbuduj imperium<br /><span className="gradient-text">wynajmu.</span>
            </h2>
          </div>
        </div>

        {/* ── Scroll Indicator (only at start) ── */}
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2 z-20"
          style={{ opacity: Math.max(0, 1 - progress * 8) }}>
          <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-zinc-600">Scroll to explore</span>
          <div className="w-5 h-8 border border-zinc-700 rounded-full flex justify-center pt-1.5">
            <div className="w-0.5 h-2 bg-zinc-600 rounded-full animate-scroll-hint" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════════════════ */
function Navbar() {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 3.5);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
        <div className="glass mx-4 mt-3 rounded-2xl">
          <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-400 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-white" strokeWidth={2} />
              </div>
              <span className="text-[15px] font-semibold text-white tracking-tight">Property<span className="text-indigo-400">PMS</span></span>
            </a>
            <div className="hidden md:flex items-center gap-1">
              {[{ label: "Funkcje", href: "#funkcje" }, { label: "Cennik", href: "/pricing" }, { label: "Dla kogo", href: "#dla-kogo" }].map((item) => (
                <a key={item.label} href={item.href} className="px-3.5 py-1.5 text-[13px] font-medium text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-all">{item.label}</a>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-2">
              <a href="#" className="text-[13px] font-medium text-zinc-400 hover:text-white px-3 py-1.5 transition-colors">Zaloguj się</a>
              <a href="/pricing" className="text-[13px] font-semibold text-white bg-indigo-500 hover:bg-indigo-400 px-5 py-2 rounded-xl transition-all shadow-lg shadow-indigo-500/20">Zacznij za darmo</a>
            </div>
            <button className="md:hidden p-1.5 text-zinc-400" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-xl transition-all duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col items-center justify-center h-full gap-6 px-8">
          {[{ label: "Funkcje", href: "#funkcje" }, { label: "Cennik", href: "/pricing" }, { label: "Dla kogo", href: "#dla-kogo" }].map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="text-2xl font-semibold text-white hover:text-indigo-400 transition-colors">{item.label}</a>
          ))}
          <div className="flex flex-col gap-3 w-full mt-4">
            <a href="#" className="block text-center py-3 text-zinc-400 border border-zinc-700 rounded-xl">Zaloguj się</a>
            <a href="/pricing" className="block text-center py-3 bg-indigo-500 text-white font-semibold rounded-xl">Zacznij za darmo</a>
          </div>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO — value prop + CTA
   ═══════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="pt-24 md:pt-32 pb-12 px-6 section-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/15 rounded-full mb-8">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span className="text-xs font-semibold text-indigo-300 tracking-wide">AI-Native Property Management</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6">
          Zarządzanie wynajmem<br />krótkoterminowym.<br />
          <span className="gradient-text">Zautomatyzowane.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Goście obsługiwani. Zamki otwarte. Sprzątanie gotowe.<br className="hidden md:block" />
          <span className="text-white font-bold">A Ty tylko zarabiasz.</span>
        </p>
        <a href="/pricing" className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-white transition-colors mb-12">
          Poznaj platformę i cennik <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </a>
        {/* Social proof */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {["AK", "MW", "TJ", "PZ", "JN"].map((initials, i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-[#09090B] flex items-center justify-center text-[9px] font-bold text-white"
                style={{ background: `linear-gradient(135deg, hsl(${i * 60 + 230}, 60%, 55%), hsl(${i * 60 + 260}, 70%, 45%))` }}>
                {initials}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />)}
          </div>
          <span className="text-sm text-zinc-500">Zaufało 500+ zarządców lokali</span>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   3 USP CARDS
   ═══════════════════════════════════════════════════════════ */
function USPCards() {
  const cards = [
    {
      icon: Bot, color: "indigo", title: "AI Auto-Reply",
      desc: "Asystent AI odpowiada gościom w sekundy — 24/7, w wielu językach. Uczy się Twoich odpowiedzi.",
      visual: (
        <div className="mt-4 space-y-2">
          <div className="flex justify-end"><div className="bg-zinc-800 rounded-xl rounded-tr-sm px-3 py-2 text-[11px] text-zinc-300 max-w-[80%]">What time is check-in?<span className="block text-[8px] text-zinc-600 mt-0.5">Guest · 14:32</span></div></div>
          <div className="flex justify-start"><div className="bg-indigo-500/10 border border-indigo-500/15 rounded-xl rounded-tl-sm px-3 py-2 text-[11px] text-zinc-200 max-w-[80%]"><span className="text-[8px] text-indigo-400 font-semibold block mb-0.5">AI · &lt;1s</span>Check-in from 3 PM. Parking 2 min walk. Door code 1h before!</div></div>
        </div>
      ),
    },
    {
      icon: Lock, color: "emerald", title: "Smart Lock",
      desc: "Kody dostępu generują się automatycznie. Integracja z Yale, Nuki, Tedee. Zero kluczy.",
      visual: (
        <div className="mt-4 space-y-1.5">
          {[{ type: "GUEST", pin: "4521", status: "Aktywny", c: "emerald" }, { type: "CLEAN", pin: "9012", status: "Zaplan.", c: "amber" }].map((c) => (
            <div key={c.type} className="flex items-center justify-between p-2.5 bg-zinc-800/50 rounded-lg border border-white/[0.04]">
              <div className="flex items-center gap-2"><span className={`text-[8px] font-bold text-${c.c}-400 bg-${c.c}-400/10 px-1.5 py-0.5 rounded`}>{c.type}</span><span className="text-sm font-mono font-bold text-white">{c.pin}</span></div>
              <span className={`text-[8px] text-${c.c}-400`}>{c.status}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      icon: SprayCan, color: "amber", title: "Auto-Cleaning",
      desc: "Po check-oucie automatycznie tworzy się zlecenie. Ekipy dostają link z checklistą.",
      visual: (
        <div className="mt-4 space-y-1.5">
          {[{ name: "Apt. Centrum", s: "W trakcie", p: 60, c: "amber" }, { name: "Studio Morska", s: "Gotowe ✓", p: 100, c: "emerald" }].map((t) => (
            <div key={t.name} className="p-2.5 bg-zinc-800/50 rounded-lg border border-white/[0.04]">
              <div className="flex justify-between mb-1"><span className="text-[11px] font-semibold text-white">{t.name}</span><span className={`text-[8px] text-${t.c}-400`}>{t.s}</span></div>
              <div className="w-full h-1 bg-zinc-700 rounded-full"><div className={`h-full rounded-full ${t.p === 100 ? "bg-emerald-400" : "bg-amber-400"}`} style={{ width: `${t.p}%` }} /></div>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section id="funkcje" className="py-20 px-6 section-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-[0.2em] mb-3">Trzy filary</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Automatyzacja od A do Z
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div key={card.title} className="group p-6 bg-white/[0.03] border border-white/[0.06] rounded-2xl hover:bg-white/[0.05] hover:border-white/[0.1] transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl bg-${card.color}-500/10 flex items-center justify-center`}>
                  <card.icon className={`w-5 h-5 text-${card.color}-400`} />
                </div>
                <h3 className="text-lg font-bold text-white">{card.title}</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">{card.desc}</p>
              {card.visual}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SOCIAL PROOF — partners + live stats
   ═══════════════════════════════════════════════════════════ */
function useLiveCounter(baseTarget: number, intervalMs: number, duration: number = 2500) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [animDone, setAnimDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
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

function SocialProof() {
  const partners = ["Airbnb", "Booking.com", "VRBO", "Yale", "Nuki", "Tedee", "Rentals United"];

  return (
    <section className="pt-6 pb-16 px-6 section-dark border-b border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        {/* Partner logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-10">
          {partners.map((p) => (
            <span key={p} className="text-sm font-semibold text-zinc-600 hover:text-zinc-300 transition-colors cursor-default tracking-wide uppercase">{p}</span>
          ))}
        </div>

        {/* Live stats — rich cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { target: 12847, label: "Rezerwacji obsłużonych", sublabel: "przez PropertyPMS", icon: Calendar, interval: 5000, accent: "#6366F1", accentBg: "rgba(99,102,241,0.08)", bars: [4,6,5,7,8,7,9,11,10,12], trend: "+8%" },
            { target: 48293, label: "Wiadomości AI", sublabel: "odpowiedź w <1s", icon: MessageCircle, interval: 1000, accent: "#06D6A0", accentBg: "rgba(6,214,160,0.08)", bars: [6,8,9,10,12,14,15,16,18,20], trend: "+24%" },
            { target: 9412, label: "Auto Check-inów", sublabel: "bez klucza fizycznego", icon: DoorOpen, interval: 3000, accent: "#818CF8", accentBg: "rgba(129,140,248,0.08)", bars: [3,4,5,4,6,7,6,8,9,10], trend: "+15%" },
            { target: 6738, label: "Sprzątań zleconych", sublabel: "automatycznie po CO", icon: SprayCan, interval: 2500, accent: "#F59E0B", accentBg: "rgba(245,158,11,0.08)", bars: [2,3,4,3,5,4,6,7,6,8], trend: "+12%" },
          ].map((stat) => (
            <LiveStatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LiveStatCard({ target, label, sublabel, icon: Icon, interval, accent, accentBg, bars, trend }: {
  target: number; label: string; sublabel: string;
  icon: React.ComponentType<{ className?: string }>;
  interval: number; accent: string; accentBg: string;
  bars: number[]; trend: string;
}) {
  const { count, ref } = useLiveCounter(target, interval);
  const maxBar = Math.max(...bars);
  return (
    <div ref={ref} className="relative p-5 rounded-2xl border border-white/[0.07] overflow-hidden" style={{ background: accentBg }}>
      {/* Live dot */}
      <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: accent }} />
          <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: accent }} />
        </span>
        <span className="text-[9px] font-semibold uppercase tracking-wider" style={{ color: accent }}>Live</span>
      </div>

      {/* Icon + number */}
      <Icon className="w-5 h-5 mb-3" style={{ color: accent }} />
      <p className="text-3xl font-black tabular-nums text-white leading-none mb-0.5">
        {count.toLocaleString("pl-PL")}
      </p>
      <p className="text-[11px] font-semibold text-white/80 mb-0.5">{label}</p>
      <p className="text-[10px] text-zinc-500 mb-4">{sublabel}</p>

      {/* Mini bar chart */}
      <div className="flex items-end gap-[3px] h-8">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-sm transition-all" style={{
            height: `${(h / maxBar) * 100}%`,
            backgroundColor: i === bars.length - 1 ? accent : `${accent}55`,
          }} />
        ))}
      </div>

      {/* Trend */}
      <div className="flex items-center gap-1 mt-2">
        <TrendingUp className="w-3 h-3" style={{ color: accent }} />
        <span className="text-[10px] font-bold" style={{ color: accent }}>{trend} vs zeszły miesiąc</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   "DLA KOGO?"
   ═══════════════════════════════════════════════════════════ */
function ForWho() {
  const segments = [
    { title: "Właściciel 2-10 lokali", desc: "Zacznij automatyzować wynajem bez zmiany workflow. AI odpowiada na wiadomości, zamki wysyłają kody, a sprzątanie planuje się samo.", cta: "Zacznij za darmo", ctaHref: "/pricing", icon: Home, highlight: false },
    { title: "Property Manager 10-50 lokali", desc: "Dashboard z Gantt chartem, Customer 360 i portal sprzątaczek. Zarządzaj dziesiątkami lokali z jednego panelu.", cta: "Plan Professional", ctaHref: "/pricing", icon: Users, highlight: true },
    { title: "Firma zarządcza 50+ lokali", desc: "Custom API, white-label, SLA 99.9% i dedykowany opiekun. Enterprise skalowane pod Twoje potrzeby.", cta: "Umów rozmowę", ctaHref: "/pricing", icon: Building2, highlight: false },
  ];

  return (
    <section id="dla-kogo" className="py-24 px-6 section-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-indigo-500 uppercase tracking-[0.2em] mb-3">Dla kogo</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900">
            Rozwiązanie dla każdej skali
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {segments.map((seg) => (
            <div key={seg.title} className={`p-8 rounded-2xl transition-all ${seg.highlight ? "bg-indigo-500 text-white shadow-xl shadow-indigo-500/20 md:-translate-y-2" : "bg-white border border-zinc-200 text-zinc-900"}`}>
              <seg.icon className={`w-8 h-8 mb-4 ${seg.highlight ? "text-white/80" : "text-indigo-500"}`} />
              <h3 className={`text-xl font-bold mb-3 ${seg.highlight ? "text-white" : "text-zinc-900"}`}>{seg.title}</h3>
              <p className={`text-sm leading-relaxed mb-6 ${seg.highlight ? "text-indigo-100" : "text-zinc-500"}`}>{seg.desc}</p>
              <a href={seg.ctaHref} className={`inline-flex items-center gap-1.5 text-sm font-semibold ${seg.highlight ? "text-white underline underline-offset-4" : "text-indigo-500 hover:text-indigo-600"}`}>
                {seg.cta} <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PRODUCT PREVIEW — browser mockup
   ═══════════════════════════════════════════════════════════ */
function ProductPreview() {
  return (
    <section className="py-24 px-6 section-dark">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-[0.2em] mb-3">Produkt</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Wszystko w jednym panelu</h2>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto">Kalendarz Gantt, CRM gości, inbox z AI, smart lock i sprzątanie — jeden dashboard.</p>
        </div>

        {/* Browser mockup */}
        <div className="bg-zinc-900 rounded-2xl border border-white/[0.06] shadow-2xl overflow-hidden animate-float">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-zinc-950 border-b border-white/[0.04]">
            <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400/60" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" /><div className="w-2.5 h-2.5 rounded-full bg-green-400/60" /></div>
            <div className="flex-1 flex justify-center"><div className="px-4 py-0.5 bg-white/5 rounded-lg text-[10px] text-zinc-600">app.propertypms.com</div></div>
          </div>
          <div className="p-6">
            {/* KPI row */}
            <div className="grid grid-cols-4 gap-3 mb-5">
              {[{ label: "Check-ins dziś", v: "5", c: "indigo" }, { label: "Check-outs", v: "3", c: "emerald" }, { label: "Sprzątania", v: "4", c: "amber" }, { label: "Wolne lokale", v: "12", c: "violet" }].map((k) => (
                <div key={k.label} className="p-3 bg-white/[0.03] border border-white/[0.06] rounded-xl text-center">
                  <p className="text-[9px] text-zinc-500 mb-0.5">{k.label}</p>
                  <p className={`text-xl font-black text-${k.c}-400`}>{k.v}</p>
                </div>
              ))}
            </div>
            {/* Gantt chart */}
            <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl overflow-hidden">
              <div className="px-3 py-2 border-b border-white/[0.04]">
                <p className="text-xs font-semibold text-zinc-400">Rezerwacje — marzec 2026</p>
              </div>
              {[
                { name: "Apt. Centrum", bars: [{ left: "5%", width: "25%", c: "bg-indigo-500" }, { left: "55%", width: "30%", c: "bg-indigo-500" }] },
                { name: "Studio Morska", bars: [{ left: "15%", width: "35%", c: "bg-violet-500" }, { left: "65%", width: "20%", c: "bg-amber-500" }] },
                { name: "Penthouse", bars: [{ left: "0%", width: "20%", c: "bg-emerald-500" }] },
              ].map((row) => (
                <div key={row.name} className="flex border-b border-white/[0.03] last:border-0">
                  <div className="w-28 shrink-0 border-r border-white/[0.04] p-2.5 flex items-center"><span className="text-[10px] font-medium text-zinc-500 truncate">{row.name}</span></div>
                  <div className="flex-1 relative h-8">
                    {row.bars.map((bar, i) => (
                      <div key={i} className={`absolute top-1 bottom-1 ${bar.c} rounded-md flex items-center px-2`} style={{ left: bar.left, width: bar.width }}>
                        <span className="text-[7px] text-white font-bold truncate">Rezerwacja</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   TESTIMONIALS — infinite carousel
   ═══════════════════════════════════════════════════════════ */
const testimonials = [
  { name: "Marta Wiśniewska", role: "12 apartamentów, Kraków", text: "Od kiedy AI odpowiada gościom, nie budzę się o 3 w nocy na wiadomości z Booking. Dosłownie zmieniło mi życie.", rating: 5 },
  { name: "Tomasz Kamiński", role: "Property Manager, Warszawa", text: "30 lokali z jednego panelu. Smart lock i auto-sprzątanie zaoszczędziły mi etat jednego pracownika.", rating: 5 },
  { name: "Aleksandra Zielińska", role: "Host Airbnb, Gdańsk", text: "Guest portal eliminuje 90% pytań od gości. Kody do zamka wysyłają się same. Wreszcie mam weekendy wolne.", rating: 5 },
  { name: "Jakub Nowak", role: "8 lokali, Wrocław", text: "Przeszedłem z trzech arkuszy Excela na PropertyPMS. Sprzątaczki same widzą zlecenia, a ja widzę wszystko w Gancie.", rating: 5 },
  { name: "Karolina Dąbrowska", role: "CEO, StayPoland", text: "Enterprise plan z custom API pozwolił nam zintegrować system z naszym CRM. Onboarding trwał 2 dni.", rating: 5 },
  { name: "Piotr Mazur", role: "5 apartamentów, Zakopane", text: "AI odpowiada po polsku, angielsku i niemiecku — idealnie dla turystów. Odpowiedź w sekundy, nie godziny.", rating: 5 },
  { name: "Anna Kowalczyk", role: "Property Manager, Poznań", text: "Portal sprzątaczek to game changer. Bez instalacji, bez logowania — ekipa otwiera link i widzi listę zadań.", rating: 4 },
  { name: "Michał Wójcik", role: "22 lokale, Trójmiasto", text: "Emergency PIN uratował sytuację, gdy gość zgubił telefon. Zdalny dostęp przez aplikację w 10 sekund.", rating: 5 },
];

function Testimonials() {
  return (
    <section className="pt-14 pb-16 px-6 section-dark overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-[0.2em] mb-3">Opinie</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Co mówią zarządcy</h2>
        </div>
      </div>
      <div className="relative group">
        <div className="flex gap-4 animate-marquee-slow hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="shrink-0 w-[340px] p-5 bg-white/[0.03] border border-white/[0.06] rounded-2xl hover:bg-white/[0.05] transition-all">
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />)}
                {t.rating < 5 && <Star className="w-3.5 h-3.5 text-zinc-700" />}
              </div>
              <p className="text-[13px] text-zinc-300 leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
                  style={{ background: `linear-gradient(135deg, hsl(${i * 40 + 200}, 60%, 50%), hsl(${i * 40 + 240}, 70%, 40%))` }}>
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-[11px] text-zinc-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   CTA FINAL
   ═══════════════════════════════════════════════════════════ */
function FinalCTA() {
  return (
    <section className="py-24 px-6 section-dark">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-emerald-400 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-indigo-500/20">
          <Building2 className="w-8 h-8 text-white" strokeWidth={1.5} />
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
          Zainteresowany?
        </h2>
        <p className="text-lg text-zinc-400 mb-8 max-w-md mx-auto">
          Dowiedz się więcej o naszej platformie i planach cenowych.
        </p>
        <a href="/pricing" className="group inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
          Przejdź do cennika <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   FOOTER — expanded
   ═══════════════════════════════════════════════════════════ */
function Footer() {
  const columns = [
    { title: "Produkt", links: [{ label: "Funkcje", href: "#funkcje" }, { label: "Cennik", href: "/pricing" }, { label: "AI Auto-Reply", href: "#funkcje" }, { label: "Smart Lock", href: "#funkcje" }] },
    { title: "Firma", links: [{ label: "O nas", href: "#" }, { label: "Blog", href: "#" }, { label: "Kontakt", href: "#" }, { label: "Kariera", href: "#" }] },
    { title: "Zasoby", links: [{ label: "Dokumentacja", href: "#" }, { label: "API", href: "#" }, { label: "Status", href: "#" }, { label: "Changelog", href: "#" }] },
    { title: "Legal", links: [{ label: "Regulamin", href: "/regulamin" }, { label: "Prywatność", href: "/polityka-prywatnosci" }, { label: "Cookies", href: "#" }, { label: "RODO", href: "/polityka-prywatnosci" }] },
  ];

  return (
    <footer className="py-16 px-6 section-dark border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-400 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-white" strokeWidth={2} />
              </div>
              <span className="text-[15px] font-semibold text-white tracking-tight">Property<span className="text-indigo-400">PMS</span></span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed mb-4">AI-native zarządzanie wynajmem krótkoterminowym.</p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}><a href={link.href} className="text-sm text-zinc-500 hover:text-white transition-colors">{link.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">&copy; 2026 PropertyPMS sp. z o.o. Wszelkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-4 text-xs text-zinc-600">
            <a href="/regulamin" className="hover:text-zinc-300 transition-colors">Regulamin</a>
            <a href="/polityka-prywatnosci" className="hover:text-zinc-300 transition-colors">Prywatność</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <ScrollytellingIntro />
      <Hero />
      <SocialProof />
      <Testimonials />
      <ProductPreview />
      <USPCards />
      <FinalCTA />
      <Footer />
    </>
  );
}
