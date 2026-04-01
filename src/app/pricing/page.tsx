"use client";

import { useEffect, useRef, useState } from "react";
import {
  Building2, ArrowLeft, Check, X, Star, ChevronDown,
  Bot, Lock, SprayCan, Calendar, MessageCircle, DoorOpen,
  BarChart3, Globe, Users, Shield, Zap, Smartphone,
  Bell, CreditCard, FileText, Map, Clock, TrendingUp,
  Layers, Radio, Wifi, Database, RefreshCw, Mail,
  FlaskConical,
} from "lucide-react";

/* ─── NAVBAR ─── */
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-400 flex items-center justify-center">
            <Building2 className="w-4 h-4 text-white" strokeWidth={2} />
          </div>
          <span className="text-[15px] font-semibold text-white tracking-tight">
            Property<span className="text-indigo-400">PMS</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-1 text-[13px]">
          {[{ label: "Funkcje", href: "#funkcje" }, { label: "Cennik", href: "#cennik" }, { label: "FAQ", href: "#faq" }].map((item) => (
            <a key={item.label} href={item.href} className="px-3.5 py-1.5 font-medium text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-all">{item.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="/" className="hidden md:flex items-center gap-1 text-[13px] text-zinc-500 hover:text-zinc-300 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Strona główna
          </a>
          <a href="#cennik" className="text-[13px] font-semibold text-white bg-indigo-500 hover:bg-indigo-400 px-5 py-2 rounded-xl transition-all shadow-lg shadow-indigo-500/20">
            Zacznij za darmo
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="pt-20 pb-12 px-6 section-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-600/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-3xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold text-emerald-300">14 dni za darmo · Bez karty kredytowej</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.08] mb-5">
          Jeden system.<br />
          <span className="gradient-text">Nieograniczone możliwości.</span>
        </h1>
        <p className="text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed mb-8">
          Od odpowiedzi AI przez smart lock po portal sprzątaczek — PropertyPMS automatyzuje każdy aspekt zarządzania wynajmem. <strong className="text-white">Od 49 zł za lokal miesięcznie.</strong>
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#cennik" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-xl shadow-indigo-500/20 text-sm">
            Wypróbuj 14 dni za darmo →
          </a>
          <a href="#funkcje" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-zinc-400 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 font-medium px-8 py-3.5 rounded-xl transition-all text-sm">
            Zobacz wszystkie funkcje
          </a>
        </div>
        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-[11px] text-zinc-500 font-medium">
          {["✓ Bez karty kredytowej", "✓ Konfiguracja w 5 minut", "✓ Wsparcie po polsku", "✓ Anuluj w każdej chwili"].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FEATURES GRID ─── */
const features: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  plan: "starter" | "pro" | "enterprise";
  status: "live" | "dev";
  tag?: string;
}[] = [
  // LIVE
  { icon: Bot, title: "AI Auto-Reply 24/7", desc: "Automatyczne odpowiedzi na wiadomości gości. Wielojęzyczne, spersonalizowane, natychmiastowe.", plan: "pro", status: "live" },
  { icon: Lock, title: "Smart Lock", desc: "Integracja z Yale, Nuki, Tedee. Kody generują się automatycznie po potwierdzeniu rezerwacji.", plan: "pro", status: "live" },
  { icon: SprayCan, title: "Auto-Cleaning", desc: "Po check-oucie system tworzy zlecenie sprzątania. Ekipy dostają link z checklistą bez instalacji.", plan: "pro", status: "live" },
  { icon: Calendar, title: "Kalendarz Gantt", desc: "Widok wszystkich rezerwacji na osi czasu. Drag & drop, filtrowanie, eksport.", plan: "starter", status: "live" },
  { icon: MessageCircle, title: "Unified Inbox", desc: "Wiadomości z Airbnb, Booking.com i innych platform w jednym miejscu z AI draftem.", plan: "pro", status: "live" },
  { icon: Globe, title: "Guest Portal", desc: "Self-service check-in przez magic link. Regulamin, instrukcja domu, AI concierge.", plan: "pro", status: "live" },
  { icon: Shield, title: "GDPR Identity Vault", desc: "Szyfrowane przechowywanie dokumentów tożsamości gości zgodnie z wymogami meldunkowymi.", plan: "pro", status: "live" },
  { icon: BarChart3, title: "Analityka & Raporty", desc: "RevPAR, obłożenie, przychody, czas odpowiedzi AI — w czasie rzeczywistym.", plan: "pro", status: "live" },
  { icon: Users, title: "Customer 360", desc: "Profil gościa z historią, LTV, tagami VIP/Loyal i notatkami dla całego zespołu.", plan: "pro", status: "live" },
  { icon: Smartphone, title: "Aplikacja mobilna", desc: "Dashboard, rezerwacje, chat z gośćmi — wszystko z telefonu. iOS i Android.", plan: "pro", status: "live" },
  { icon: DoorOpen, title: "Emergency PIN", desc: "Zapasowy kod dostępu dla awaryjnych sytuacji. Zdalne zarządzanie przez aplikację.", plan: "pro", status: "live" },
  { icon: Bell, title: "Smart Notifications", desc: "Powiadomienia push o check-inach, check-outach, wiadomościach i zleceniach sprzątania.", plan: "starter", status: "live" },
  // IN DEVELOPMENT
  { icon: TrendingUp, title: "AI Dynamic Pricing", desc: "Automatyczne sugestie cen na podstawie obłożenia, sezonowości i konkurencji.", plan: "pro", status: "dev", tag: "Q3 2026" },
  { icon: CreditCard, title: "Billing & Faktury", desc: "Wystawianie faktur, automatyczne płatności od gości, rozliczenia z ekipami.", plan: "pro", status: "dev", tag: "Q3 2026" },
  { icon: Map, title: "Multi-Property Map", desc: "Widok mapy z wszystkimi lokalami, statusami i alertami w jednym miejscu.", plan: "enterprise", status: "dev", tag: "Q4 2026" },
  { icon: Layers, title: "Channel Manager", desc: "Synchronizacja dostępności i cen w czasie rzeczywistym między Airbnb, Booking i VRBO.", plan: "pro", status: "dev", tag: "Q4 2026" },
  { icon: Radio, title: "IoT Dashboard", desc: "Monitoring czujników temperatury, wilgotności, hałasu i energii w lokalach.", plan: "enterprise", status: "dev", tag: "2027" },
  { icon: Database, title: "Custom Reports Builder", desc: "Tworzenie własnych raportów i dashboardów. Eksport do Excel, PDF, BI tools.", plan: "enterprise", status: "dev", tag: "Q4 2026" },
  { icon: RefreshCw, title: "Auto-Restocking", desc: "Automatyczne zlecenia uzupełnienia środków czystości i materiałów eksploatacyjnych.", plan: "pro", status: "dev", tag: "Q3 2026" },
  { icon: Mail, title: "Email Marketing", desc: "Kampanie do powracających gości, programy lojalnościowe i automatyczne follow-upy.", plan: "pro", status: "dev", tag: "Q4 2026" },
  { icon: FileText, title: "Digital Contracts", desc: "Elektroniczne podpisywanie umów najmu i regulaminów przez gości przed check-inem.", plan: "pro", status: "dev", tag: "Q3 2026" },
  { icon: Clock, title: "Predictive Maintenance", desc: "AI przewiduje potrzeby serwisowe na podstawie historii i wzorców użytkowania.", plan: "enterprise", status: "dev", tag: "2027" },
];

function FeaturesGrid() {
  const [showDev, setShowDev] = useState(false);
  const live = features.filter((f) => f.status === "live");
  const dev = features.filter((f) => f.status === "dev");

  return (
    <section id="funkcje" className="py-20 px-6 section-dark border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-[0.2em] mb-3">Funkcje</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Wszystko czego potrzebujesz — <span className="gradient-text">już teraz.</span>
          </h2>
          <p className="text-base text-zinc-500 max-w-lg mx-auto">12 funkcji dostępnych od razu. Plus pipeline przyszłych funkcji, które zmieniają zarządzanie wynajmem.</p>
        </div>

        {/* Live features */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-sm font-bold text-emerald-400">Dostępne teraz</span>
            </div>
            <div className="h-px flex-1 bg-white/[0.06]" />
            <span className="text-xs text-zinc-600">{live.length} funkcji</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {live.map((f) => (
              <div key={f.title} className="group p-5 bg-white/[0.03] border border-white/[0.06] rounded-2xl hover:bg-white/[0.05] hover:border-indigo-500/20 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${f.plan === "starter" ? "bg-zinc-700 text-zinc-300" : f.plan === "pro" ? "bg-indigo-500/15 text-indigo-300" : "bg-violet-500/15 text-violet-300"}`}>
                    {f.plan === "starter" ? "Starter" : f.plan === "pro" ? "Pro" : "Enterprise"}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">{f.title}</h3>
                <p className="text-[12px] text-zinc-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* In Development */}
        <div>
          <button onClick={() => setShowDev(!showDev)} className="w-full flex items-center gap-3 mb-5 group">
            <div className="flex items-center gap-2">
              <FlaskConical className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-bold text-amber-400">W rozwoju</span>
            </div>
            <div className="h-px flex-1 bg-white/[0.06]" />
            <span className="text-xs text-zinc-600 mr-1">{dev.length} nadchodzących funkcji</span>
            <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform group-hover:text-zinc-300 ${showDev ? "rotate-180" : ""}`} />
          </button>

          {showDev && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {dev.map((f) => (
                <div key={f.title} className="relative p-5 bg-white/[0.015] border border-white/[0.04] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-zinc-950/50 backdrop-blur-[1px]" />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center opacity-50">
                        <f.icon className="w-5 h-5 text-zinc-400" />
                      </div>
                      <div className="flex items-center gap-1.5">
                        {f.tag && <span className="text-[9px] font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">{f.tag}</span>}
                        <span className="text-[9px] font-bold text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded-full uppercase tracking-wider">In dev</span>
                      </div>
                    </div>
                    <h3 className="text-sm font-bold text-zinc-500 mb-1.5">{f.title}</h3>
                    <p className="text-[12px] text-zinc-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!showDev && (
            <button onClick={() => setShowDev(true)} className="w-full py-3 text-[13px] text-zinc-500 hover:text-zinc-300 transition-colors flex items-center justify-center gap-2">
              <span>Pokaż {dev.length} nadchodzących funkcji</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── COMPARISON TABLE ─── */
const comparisonRows = [
  { category: "Rezerwacje", features: [
    { name: "Kalendarz Gantt", starter: true, pro: true, enterprise: true },
    { name: "Synchronizacja kanałów (Airbnb/Booking)", starter: false, pro: true, enterprise: true },
    { name: "Multi-platform inbox", starter: false, pro: true, enterprise: true },
  ]},
  { category: "AI & Automatyzacja", features: [
    { name: "AI Auto-Reply 24/7", starter: false, pro: true, enterprise: true },
    { name: "Wielojęzyczne odpowiedzi", starter: false, pro: true, enterprise: true },
    { name: "AI Dynamic Pricing", starter: false, pro: false, enterprise: true, soon: true },
  ]},
  { category: "Goście", features: [
    { name: "Guest Portal + magic link", starter: false, pro: true, enterprise: true },
    { name: "GDPR Identity Vault", starter: false, pro: true, enterprise: true },
    { name: "Customer 360 (historia, LTV)", starter: false, pro: true, enterprise: true },
    { name: "Digital Contracts", starter: false, pro: false, enterprise: true, soon: true },
  ]},
  { category: "Smart Lock", features: [
    { name: "Integracja Yale / Nuki / Tedee", starter: false, pro: true, enterprise: true },
    { name: "Auto-kody po potwierdzeniu", starter: false, pro: true, enterprise: true },
    { name: "Emergency PIN", starter: false, pro: true, enterprise: true },
  ]},
  { category: "Sprzątanie", features: [
    { name: "Auto-zlecenia po check-oucie", starter: false, pro: true, enterprise: true },
    { name: "Portal dla ekip (link, checklista)", starter: false, pro: true, enterprise: true },
    { name: "Auto-Restocking", starter: false, pro: false, enterprise: true, soon: true },
  ]},
  { category: "Analityka", features: [
    { name: "Podstawowe raporty", starter: true, pro: true, enterprise: true },
    { name: "RevPAR, obłożenie, przychody live", starter: false, pro: true, enterprise: true },
    { name: "Custom Reports Builder", starter: false, pro: false, enterprise: true, soon: true },
  ]},
  { category: "Enterprise", features: [
    { name: "Custom integracje API", starter: false, pro: false, enterprise: true },
    { name: "Dedykowany opiekun klienta", starter: false, pro: false, enterprise: true },
    { name: "SLA 99.9%", starter: false, pro: false, enterprise: true },
    { name: "White-label", starter: false, pro: false, enterprise: true },
    { name: "Onboarding zespołu", starter: false, pro: false, enterprise: true },
  ]},
];

function ComparisonTable() {
  return (
    <section className="py-20 px-6 section-dark border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">Porównaj plany</h2>
          <p className="text-base text-zinc-500">Szczegółowe zestawienie funkcji dla każdego planu.</p>
        </div>

        <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-4 bg-white/[0.03] border-b border-white/[0.06]">
            <div className="p-4" />
            {[
              { name: "Starter", price: "0 zł", sub: "do 2 lokali", highlight: false },
              { name: "Professional", price: "49 zł", sub: "/lokal/msc", highlight: true },
              { name: "Enterprise", price: "Custom", sub: "indywidualnie", highlight: false },
            ].map((p) => (
              <div key={p.name} className={`p-4 text-center ${p.highlight ? "bg-indigo-500/10 border-l border-r border-indigo-500/20" : ""}`}>
                <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-1">{p.name}</p>
                <p className={`text-xl font-black ${p.highlight ? "text-white" : "text-zinc-300"}`}>{p.price}</p>
                <p className="text-[10px] text-zinc-600">{p.sub}</p>
              </div>
            ))}
          </div>

          {/* Rows */}
          {comparisonRows.map((cat) => (
            <div key={cat.category}>
              <div className="grid grid-cols-4 bg-white/[0.015] border-b border-white/[0.04]">
                <div className="col-span-4 px-4 py-2">
                  <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">{cat.category}</span>
                </div>
              </div>
              {cat.features.map((row) => (
                <div key={row.name} className="grid grid-cols-4 border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                  <div className="px-4 py-3 flex items-center gap-2">
                    <span className="text-[12px] text-zinc-400">{row.name}</span>
                    {row.soon && <span className="text-[8px] font-bold text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded-full">Wkrótce</span>}
                  </div>
                  {[row.starter, row.pro, row.enterprise].map((v, i) => (
                    <div key={i} className={`px-4 py-3 flex items-center justify-center ${i === 1 ? "bg-indigo-500/5 border-l border-r border-indigo-500/10" : ""}`}>
                      {v ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <X className="w-3.5 h-3.5 text-zinc-700" />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRICING CARDS ─── */
function Pricing() {
  return (
    <section id="cennik" className="py-20 px-6 section-light border-t border-zinc-200">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-indigo-500 uppercase tracking-[0.2em] mb-3">Cennik</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">Prosta cena. Zero niespodzianek.</h2>
          <p className="text-base text-zinc-500 max-w-md mx-auto">Płacisz za aktywne lokale. Nie za użytkowników, nie za funkcje — za lokale.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-12">
          {[
            {
              name: "Starter", price: "0 zł", period: "", desc: "Do 2 lokali. Na start.",
              features: ["2 lokale", "Kalendarz Gantt", "Podstawowe raporty", "Powiadomienia push", "Wsparcie e-mail"],
              notIncluded: ["AI Auto-Reply", "Smart Lock", "Auto-sprzątanie", "Guest Portal"],
              cta: "Zacznij bezpłatnie", highlight: false, ctaStyle: "bg-zinc-100 text-zinc-700 hover:bg-zinc-200",
            },
            {
              name: "Professional", price: "49 zł", period: "/lokal/msc", desc: "Pełna automatyzacja. Nieograniczone lokale.",
              features: [
                "Nieograniczone lokale",
                "AI Auto-Reply 24/7",
                "Smart Lock (Yale/Nuki/Tedee)",
                "Auto-sprzątanie + portal ekip",
                "Guest Portal + magic link",
                "GDPR Identity Vault",
                "Customer 360",
                "Analityka live (RevPAR, obłożenie)",
                "Aplikacja mobilna",
                "Emergency PIN",
                "Wsparcie priorytetowe",
              ],
              notIncluded: [],
              cta: "Wypróbuj 14 dni za darmo", highlight: true, ctaStyle: "bg-indigo-500 text-white hover:bg-indigo-400 shadow-xl shadow-indigo-500/20",
            },
            {
              name: "Enterprise", price: "Custom", period: "", desc: "Duże portfolio. Dedykowane wsparcie.",
              features: ["Wszystko z Professional", "Dedykowany opiekun", "Custom integracje API", "SLA 99.9%", "Onboarding zespołu", "White-label", "AI Dynamic Pricing (soon)"],
              notIncluded: [],
              cta: "Umów rozmowę", highlight: false, ctaStyle: "bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-700",
            },
          ].map((plan) => (
            <div key={plan.name} className={`rounded-2xl p-7 transition-all relative ${plan.highlight ? "bg-white ring-2 ring-indigo-500 shadow-2xl shadow-indigo-500/15 md:-translate-y-3" : "bg-white border border-zinc-200"}`}>
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                  Najpopularniejszy ⚡
                </div>
              )}
              <div className="mb-5">
                <h3 className="text-base font-bold text-zinc-900 mb-0.5">{plan.name}</h3>
                <p className="text-xs text-zinc-500 mb-4">{plan.desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-zinc-900">{plan.price}</span>
                  <span className="text-sm text-zinc-400">{plan.period}</span>
                </div>
              </div>

              <a href="#" className={`block text-center font-bold text-sm py-3 rounded-xl transition-all mb-6 ${plan.ctaStyle}`}>
                {plan.cta}
              </a>

              <ul className="space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[12px] text-zinc-700">
                    <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${plan.highlight ? "text-indigo-500" : "text-emerald-500"}`} />
                    {f}
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[12px] text-zinc-400">
                    <X className="w-3.5 h-3.5 shrink-0 mt-0.5 text-zinc-300" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Money-back guarantee */}
        <div className="text-center p-6 bg-zinc-50 border border-zinc-200 rounded-2xl max-w-lg mx-auto">
          <p className="text-2xl mb-2">🛡️</p>
          <p className="text-sm font-bold text-zinc-900 mb-1">14-dniowa gwarancja zwrotu pieniędzy</p>
          <p className="text-[12px] text-zinc-500">Jeśli w ciągu 14 dni nie będziesz zadowolony, zwrócimy pełną kwotę. Bez pytań.</p>
        </div>
      </div>
    </section>
  );
}

/* ─── ROI CALCULATOR ─── */
function ROISection() {
  const [properties, setProperties] = useState(5);
  const hoursPerMonth = properties * 4;
  const moneySaved = properties * 49;
  const hourlyRate = 80;
  const timeSaved = hoursPerMonth * hourlyRate;

  return (
    <section className="py-20 px-6 section-dark border-t border-white/[0.04]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-[0.2em] mb-3">Kalkulator ROI</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">Ile zaoszczędzisz?</h2>
          <p className="text-base text-zinc-500">Przeciągnij suwak i sprawdź zwrot z inwestycji.</p>
        </div>

        <div className="p-8 bg-white/[0.03] border border-white/[0.06] rounded-2xl">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-zinc-300">Liczba lokali</label>
              <span className="text-2xl font-black text-white">{properties}</span>
            </div>
            <input
              type="range" min={1} max={50} value={properties}
              onChange={(e) => setProperties(Number(e.target.value))}
              className="w-full accent-indigo-500"
            />
            <div className="flex justify-between text-[10px] text-zinc-600 mt-1">
              <span>1 lokal</span><span>50 lokali</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "Koszt PropertyPMS", value: `${moneySaved} zł/msc`, sub: `${properties} × 49 zł`, color: "text-indigo-400" },
              { label: "Oszczędność czasu", value: `${hoursPerMonth}h/msc`, sub: `~${timeSaved.toLocaleString("pl-PL")} zł wartości`, color: "text-emerald-400" },
              { label: "ROI", value: `${Math.round(((timeSaved - moneySaved) / moneySaved) * 100)}%`, sub: "zwrot z inwestycji", color: "text-amber-400" },
            ].map((item) => (
              <div key={item.label} className="p-4 bg-white/[0.03] border border-white/[0.06] rounded-xl text-center">
                <p className="text-[10px] text-zinc-600 mb-1 uppercase tracking-wider">{item.label}</p>
                <p className={`text-2xl font-black ${item.color} mb-0.5`}>{item.value}</p>
                <p className="text-[10px] text-zinc-600">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
const testimonials = [
  { name: "Marta Wiśniewska", role: "12 apartamentów, Kraków", text: "Od kiedy AI odpowiada gościom, nie budzę się o 3 w nocy na wiadomości z Booking. Dosłownie zmieniło mi życie.", rating: 5 },
  { name: "Tomasz Kamiński", role: "Property Manager, Warszawa", text: "30 lokali z jednego panelu. Smart lock i auto-sprzątanie zaoszczędziły mi etat jednego pracownika.", rating: 5 },
  { name: "Aleksandra Zielińska", role: "Host Airbnb, Gdańsk", text: "Guest portal eliminuje 90% pytań od gości. Kody do zamka wysyłają się same. Wreszcie mam weekendy wolne.", rating: 5 },
  { name: "Jakub Nowak", role: "8 lokali, Wrocław", text: "Przeszedłem z trzech arkuszy Excela. Sprzątaczki same widzą zlecenia, a ja widzę wszystko w Gancie.", rating: 5 },
  { name: "Karolina Dąbrowska", role: "CEO, StayPoland", text: "Enterprise plan z custom API pozwolił nam zintegrować system z naszym CRM. Onboarding trwał 2 dni.", rating: 5 },
  { name: "Piotr Mazur", role: "5 apartamentów, Zakopane", text: "AI odpowiada po polsku, angielsku i niemiecku — idealnie dla turystów. Odpowiedź w sekundy.", rating: 5 },
];

function Testimonials() {
  return (
    <section className="py-16 px-6 section-dark border-t border-white/[0.04] overflow-hidden">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
        </div>
        <p className="text-sm text-zinc-400">Co mówią zarządcy korzystający z PropertyPMS</p>
      </div>
      <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused]">
        {[...testimonials, ...testimonials].map((t, i) => (
          <div key={i} className="shrink-0 w-[300px] p-5 bg-white/[0.03] border border-white/[0.06] rounded-2xl">
            <div className="flex gap-0.5 mb-3">
              {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-3 h-3 text-amber-400 fill-amber-400" />)}
            </div>
            <p className="text-[12px] text-zinc-300 leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
            <div>
              <p className="text-sm font-semibold text-white">{t.name}</p>
              <p className="text-[11px] text-zinc-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
const faqs = [
  { q: "Czy mogę zacząć bez karty kredytowej?", a: "Tak. Plan Starter jest bezpłatny na zawsze dla do 2 lokali. Plan Professional ma 14-dniowy trial bez podawania karty." },
  { q: "Jak działa rozliczenie per lokal?", a: "Płacisz 49 zł miesięcznie za każdy aktywny lokal w Platformie. Możesz dodawać i usuwać lokale w dowolnym momencie." },
  { q: "Jakie zamki obsługujecie?", a: "Aktualnie integrujemy się z Yale, Nuki i Tedee. W planach kolejne marki — śledź roadmapę w dashboardzie." },
  { q: "Czy AI Auto-Reply mówi po angielsku?", a: "Tak. AI odpowiada w języku gościa — polskim, angielskim, niemieckim, francuskim i 20+ innych językach." },
  { q: "Co z RODO i danymi gości?", a: "Dane dokumentów tożsamości są szyfrowane w Identity Vault (AES-256). Jesteś administratorem danych. Szczegóły w Polityce Prywatności." },
  { q: "Mogę importować dane z obecnego systemu?", a: "Tak. Oferujemy import z Excel, Google Sheets oraz migrację z popularnych PMS-ów. Nasz zespół pomaga w onboardingu." },
  { q: "Czy mogę anulować w każdej chwili?", a: "Tak. Brak umów na czas określony. Anulowanie zajmuje 30 sekund w ustawieniach konta." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-20 px-6 section-light border-t border-zinc-200">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-3">Często zadawane pytania</h2>
          <p className="text-base text-zinc-500">Nie znalazłeś odpowiedzi? Napisz do nas — odpiszemy w ciągu godziny.</p>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-zinc-200 rounded-xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left hover:bg-zinc-50 transition-colors">
                <span className="text-sm font-semibold text-zinc-900">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-zinc-400 shrink-0 ml-4 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-4 pb-4 text-sm text-zinc-600 leading-relaxed">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─── */
function FinalCTA() {
  return (
    <section className="py-24 px-6 section-dark border-t border-white/[0.04]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
          Zacznij dziś.<br /><span className="gradient-text">Pierwszych 14 dni gratis.</span>
        </h2>
        <p className="text-lg text-zinc-400 mb-8 max-w-md mx-auto">Bez karty kredytowej. Bez zobowiązań. Konfiguracja w 5 minut.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-zinc-900 font-bold px-8 py-4 rounded-xl hover:bg-zinc-100 transition-all shadow-xl text-[15px]">
            Wypróbuj za darmo →
          </a>
          <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-zinc-400 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 font-medium px-8 py-4 rounded-xl transition-all text-[15px]">
            Umów demo
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="py-10 px-6 section-dark border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-400 flex items-center justify-center">
            <Building2 className="w-3.5 h-3.5 text-white" strokeWidth={2} />
          </div>
          <span className="text-[14px] font-semibold text-white tracking-tight">Property<span className="text-indigo-400">PMS</span></span>
        </a>
        <div className="flex items-center gap-5 text-[12px] text-zinc-500">
          <a href="/" className="hover:text-zinc-300 transition-colors">Strona główna</a>
          <a href="/regulamin" className="hover:text-zinc-300 transition-colors">Regulamin</a>
          <a href="/polityka-prywatnosci" className="hover:text-zinc-300 transition-colors">Prywatność</a>
        </div>
        <p className="text-[12px] text-zinc-600">&copy; 2026 PropertyPMS sp. z o.o.</p>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function PricingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesGrid />
      <ComparisonTable />
      <Pricing />
      <ROISection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
