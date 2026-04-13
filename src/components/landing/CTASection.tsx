"use client";

import { FadeIn } from "./FadeIn";

export function CTASection() {
  return (
    <section id="cta" className="px-[52px] mb-[80px] max-md:px-5">
      <FadeIn>
        <div
          className="relative rounded-[24px] px-[60px] py-[80px] text-center overflow-hidden max-md:px-6 max-md:py-12"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(167,139,250,0.08), rgba(34,211,238,0.06))",
            border: "1px solid rgba(99,102,241,0.2)",
          }}
        >
          {/* Radial glow */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(99,102,241,0.14), transparent 70%)" }} />

          <div className="relative z-10">
            <h2 className="text-[36px] md:text-[52px] font-extrabold tracking-[-2px] text-white mb-4 leading-[1.1]">
              Your rentals.<br /><span className="gradient-text">On autopilot.</span>
            </h2>
            <p className="text-[16px] text-white/40 mb-8 max-w-[420px] mx-auto">
              14 days free. No credit card. No setup fees. Cancel anytime.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <a href="#" className="bg-white text-[#06070d] text-[14px] font-bold px-8 py-3.5 rounded-[24px] hover:opacity-90 transition-opacity">
                Start free trial →
              </a>
              <a href="#" className="text-[14px] font-medium text-white/40 hover:text-white/70 px-6 py-3.5 rounded-[24px] transition-colors" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                Book a demo
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-white/25">
              <span>🔒 SOC2 compliant</span>
              <span>⚡ 99.9% uptime</span>
              <span>🇪🇺 GDPR / RODO ready</span>
              <span>🏆 Rentals United certified</span>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
