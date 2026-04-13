"use client";

import { FadeIn } from "./FadeIn";

const integrations = [
  { emoji: "🏠", name: "Airbnb", status: "Connected" },
  { emoji: "🅱️", name: "Booking.com", status: "Connected" },
  { emoji: "🏡", name: "Vrbo", status: "Connected" },
  { emoji: "✈️", name: "Expedia", status: "Connected" },
  { emoji: "🔗", name: "Rentals United", status: "Hub" },
  { emoji: "🌍", name: "Google Vacation", status: "Connected" },
  { emoji: "💳", name: "Stripe", status: "Connected" },
  { emoji: "📝", name: "Notion", status: "Coming soon" },
  { emoji: "⚡", name: "Zapier", status: "Connected" },
  { emoji: "🔑", name: "Keycafe", status: "Connected" },
];

export function IntegrationsGrid() {
  return (
    <section id="integrations" className="py-[90px] px-[52px] max-md:px-5">
      <div className="max-w-[1280px] mx-auto">
        <FadeIn>
          <p className="eyebrow mb-3">Ecosystem</p>
          <h2 className="text-[32px] md:text-[42px] font-extrabold tracking-[-2px] text-white mb-10">Connects with everything you use.</h2>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {integrations.map((item, i) => (
            <FadeIn key={item.name} delay={i * 0.05}>
              <div
                className="rounded-[14px] p-4 text-center transition-all duration-200 hover:-translate-y-[3px] cursor-default group"
                style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
              >
                <span className="text-[22px] block mb-2">{item.emoji}</span>
                <p className="text-[11px] text-white/40 font-medium mb-2">{item.name}</p>
                <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${
                  item.status === "Hub" ? "bg-[#6366f1]/15 text-[#a5b4fc]" :
                  item.status === "Coming soon" ? "bg-white/5 text-white/25" :
                  "bg-[#34d399]/10 text-[#34d399]"
                }`}>
                  {item.status}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
