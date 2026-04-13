const platforms = [
  "Airbnb", "Booking.com", "Vrbo", "Rentals United", "Expedia", "Google Vacation",
  "HomeAway", "Stripe", "Zapier", "Keycafe", "Guesty Import", "Lodgify Import",
];

export function Ticker() {
  const items = [...platforms, ...platforms];
  return (
    <div
      className="overflow-hidden py-[13px]"
      style={{
        background: "rgba(255,255,255,0.025)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="flex gap-[56px] animate-marquee w-max">
        {items.map((p, i) => (
          <span key={i} className="flex items-center gap-2 shrink-0">
            <span className="w-[5px] h-[5px] rounded-full bg-[#6366f1]" />
            <span className="text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>{p}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
