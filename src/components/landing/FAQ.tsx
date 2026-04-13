"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./FadeIn";

const faqs = [
  {
    q: "How long does setup take?",
    a: "Under 2 minutes. Connect your channels with OAuth — no iCal imports, no manual mapping. Our onboarding wizard handles everything.",
  },
  {
    q: "Will it work with my current Rentals United account?",
    a: "Yes. We're an official Rentals United partner. Your existing RU account connects natively — all properties, rates, and availability sync instantly.",
  },
  {
    q: "What happens if there's a double booking?",
    a: "Our conflict detection runs every 30 seconds. If a rare overlap occurs, we auto-block the conflicting dates and notify you immediately with resolution options.",
  },
  {
    q: "Can I control what the AI says to guests?",
    a: "Absolutely. You set the tone, templates, and rules. The AI follows your guidelines — you approve or override any response before it's sent, or let it run fully autonomous.",
  },
  {
    q: "Is there a setup fee or contract?",
    a: "No setup fees, no contracts. Month-to-month. Cancel anytime from your dashboard in 30 seconds. We keep it simple.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-[90px] px-[52px] max-md:px-5">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <FadeIn>
          <p className="eyebrow mb-3">FAQ</p>
          <h2 className="text-[32px] md:text-[42px] font-extrabold tracking-[-2px] text-white mb-4">Common questions.</h2>
          <p className="text-[15px] text-white/40 leading-relaxed max-w-[320px]">
            Can&apos;t find what you need? Reach out at hello@pmsautopilot.com
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-[14px] overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left transition-colors hover:bg-white/[0.02]"
                >
                  <span className="text-[14px] font-semibold text-white/80 pr-4">{faq.q}</span>
                  <span
                    className="text-[18px] text-white/30 shrink-0 transition-transform duration-300"
                    style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-4 text-[14px] text-white/40 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
