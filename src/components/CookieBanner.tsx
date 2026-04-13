"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie_consent")) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-5 animate-fade-in">
      <div className="max-w-4xl mx-auto glass rounded-2xl px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-[13px] text-zinc-400 leading-relaxed flex-1">
          Używamy plików cookies w celach analitycznych i usprawnienia działania strony.{" "}
          <a href="/polityka-prywatnosci" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">
            Polityka prywatności
          </a>
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={reject}
            className="text-[13px] font-medium text-zinc-500 hover:text-white px-4 py-2 rounded-xl border border-white/[0.06] hover:bg-white/[0.05] transition-all"
          >
            Odrzuć
          </button>
          <button
            onClick={accept}
            className="text-[13px] font-semibold text-white bg-indigo-500 hover:bg-indigo-400 px-5 py-2 rounded-xl transition-all shadow-lg shadow-indigo-500/20"
          >
            Akceptuj
          </button>
        </div>
      </div>
    </div>
  );
}
