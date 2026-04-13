import { Star } from "lucide-react";

const testimonials = [
  { name: "Marta Wisniewska", role: "12 apartamentow, Krakow", text: "Od kiedy AI odpowiada gosciom, nie budze sie o 3 w nocy na wiadomosci z Booking. Doslownie zmienilo mi zycie.", rating: 5 },
  { name: "Tomasz Kaminski", role: "Property Manager, Warszawa", text: "30 lokali z jednego panelu. Smart lock i auto-sprzatanie zaoszczedzily mi etat jednego pracownika.", rating: 5 },
  { name: "Aleksandra Zielinska", role: "Host Airbnb, Gdansk", text: "Guest portal eliminuje 90% pytan od gosci. Kody do zamka wysylaja sie same. Wreszcie mam weekendy wolne.", rating: 5 },
  { name: "Jakub Nowak", role: "8 lokali, Wroclaw", text: "Przeszedlem z trzech arkuszy Excela na PropertyPMS. Sprzataczki same widza zlecenia, a ja widze wszystko w Gancie.", rating: 5 },
  { name: "Karolina Dabrowska", role: "CEO, StayPoland", text: "Enterprise plan z custom API pozwolil nam zintegrowac system z naszym CRM. Onboarding trwal 2 dni.", rating: 5 },
  { name: "Piotr Mazur", role: "5 apartamentow, Zakopane", text: "AI odpowiada po polsku, angielsku i niemiecku — idealnie dla turystow. Odpowiedz w sekundy, nie godziny.", rating: 5 },
  { name: "Anna Kowalczyk", role: "Property Manager, Poznan", text: "Portal sprzataczek to game changer. Bez instalacji, bez logowania — ekipa otwiera link i widzi liste zadan.", rating: 4 },
  { name: "Michal Wojcik", role: "22 lokale, Trojmiasto", text: "Emergency PIN uratowal sytuacje, gdy gosc zgubil telefon. Zdalny dostep przez aplikacje w 10 sekund.", rating: 5 },
];

export function Testimonials({
  title = "Co mowia zarzadcy",
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="pt-14 pb-16 px-6 section-dark overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-[0.2em] mb-3">
            Opinie
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm text-zinc-400 mt-2">{subtitle}</p>
          )}
        </div>
      </div>
      <div className="relative group">
        <div className="flex gap-4 animate-marquee-slow hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="shrink-0 w-[340px] p-5 bg-white/[0.03] border border-white/[0.06] rounded-2xl hover:bg-white/[0.05] transition-all"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }, (_, j) => (
                  <Star
                    key={j}
                    className={`w-3.5 h-3.5 ${
                      j < t.rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-zinc-700"
                    }`}
                  />
                ))}
              </div>
              <p className="text-[13px] text-zinc-300 leading-relaxed mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
                  style={{
                    background: `linear-gradient(135deg, hsl(${i * 40 + 200}, 60%, 50%), hsl(${i * 40 + 240}, 70%, 40%))`,
                  }}
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
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
