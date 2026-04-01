import { Building2, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin — PropertyPMS",
  description: "Regulamin korzystania z platformy PropertyPMS.",
};

export default function Regulamin() {
  const lastUpdated = "24 marca 2026";

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900">
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-400 flex items-center justify-center">
              <Building2 className="w-4 h-4 text-white" strokeWidth={2} />
            </div>
            <span className="text-[15px] font-semibold tracking-tight">
              Property<span className="text-indigo-500">PMS</span>
            </span>
          </a>
          <a href="/" className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Strona główna
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-3">Dokument prawny</p>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 mb-3">Regulamin</h1>
        <p className="text-sm text-zinc-400 mb-12">Ostatnia aktualizacja: {lastUpdated}</p>

        <div className="prose prose-zinc max-w-none prose-headings:tracking-tight prose-headings:font-semibold prose-p:leading-relaxed prose-p:text-zinc-600 prose-li:text-zinc-600">
          <h2>§1. Postanowienia ogólne</h2>
          <ol>
            <li>Niniejszy Regulamin określa zasady korzystania z platformy PropertyPMS (dalej: „Platforma"), dostępnej pod adresem app.propertypms.com.</li>
            <li>Operatorem Platformy jest PropertyPMS sp. z o.o. z siedzibą w Warszawie, ul. Marszałkowska 1, 00-001 Warszawa, wpisana do rejestru przedsiębiorców KRS pod numerem 0000XXXXXX, NIP: XXXXXXXXXX, REGON: XXXXXXXXX (dalej: „Operator").</li>
            <li>Korzystanie z Platformy oznacza akceptację niniejszego Regulaminu.</li>
          </ol>

          <h2>§2. Definicje</h2>
          <ol>
            <li><strong>Użytkownik</strong> — osoba fizyczna, prawna lub jednostka organizacyjna korzystająca z Platformy.</li>
            <li><strong>Konto</strong> — indywidualne konto Użytkownika w Platformie, chronione loginem i hasłem.</li>
            <li><strong>Lokal</strong> — nieruchomość lub jej część dodana przez Użytkownika do Platformy w celu zarządzania wynajmem krótkoterminowym.</li>
            <li><strong>Subskrypcja</strong> — odpłatna usługa dostępu do funkcji Platformy, rozliczana per Lokal w cyklu miesięcznym lub rocznym.</li>
            <li><strong>Gość</strong> — osoba dokonująca rezerwacji Lokalu zarządzanego przez Użytkownika.</li>
          </ol>

          <h2>§3. Rejestracja i Konto</h2>
          <ol>
            <li>Rejestracja wymaga podania adresu e-mail oraz utworzenia hasła.</li>
            <li>Użytkownik zobowiązuje się do podania prawdziwych danych i ich aktualizacji.</li>
            <li>Użytkownik odpowiada za bezpieczeństwo danych logowania do Konta.</li>
            <li>Operator zastrzega sobie prawo do zawieszenia lub usunięcia Konta w przypadku naruszenia Regulaminu.</li>
          </ol>

          <h2>§4. Zakres usług</h2>
          <p>Platforma udostępnia następujące funkcje (w zależności od wybranego planu Subskrypcji):</p>
          <ol>
            <li><strong>AI Auto-Reply</strong> — automatyczne odpowiadanie na wiadomości Gości przy użyciu sztucznej inteligencji.</li>
            <li><strong>Smart Lock</strong> — integracja z zamkami elektronicznymi (Yale, Nuki, Tedee) i automatyczne generowanie kodów dostępu.</li>
            <li><strong>Zarządzanie sprzątaniem</strong> — automatyczne tworzenie zleceń sprzątania, portal dla ekip sprzątających, checklisty.</li>
            <li><strong>Dashboard</strong> — kalendarz Gantt rezerwacji, KPI, zarządzanie nieruchomościami.</li>
            <li><strong>Guest Portal</strong> — portal pre-check-in z dostępem przez magic link.</li>
            <li><strong>GDPR Identity Vault</strong> — szyfrowane przechowywanie dokumentów tożsamości Gości.</li>
          </ol>

          <h2>§5. Płatności i Subskrypcja</h2>
          <ol>
            <li>Subskrypcja jest rozliczana za każdy Lokal dodany do Platformy.</li>
            <li>Dostępne plany: Starter (bezpłatny, do 2 Lokali), Professional (49 zł/lokal/msc), Enterprise (indywidualnie).</li>
            <li>Plan Professional zawiera 14-dniowy bezpłatny okres próbny.</li>
            <li>Płatności realizowane są za pośrednictwem operatora płatności Stripe.</li>
            <li>Użytkownik może zrezygnować z Subskrypcji w dowolnym momencie. Dostęp do płatnych funkcji wygasa z końcem opłaconego okresu.</li>
          </ol>

          <h2>§6. Ochrona danych osobowych</h2>
          <ol>
            <li>Operator przetwarza dane osobowe zgodnie z RODO i Polityką Prywatności dostępną pod adresem <a href="/polityka-prywatnosci">/polityka-prywatnosci</a>.</li>
            <li>Dane dokumentów tożsamości Gości są szyfrowane przy użyciu dedykowanego klucza (VAULT_SECRET_KEY) i przechowywane w Identity Vault.</li>
            <li>Użytkownik jest administratorem danych osobowych Gości wprowadzonych do Platformy.</li>
          </ol>

          <h2>§7. Odpowiedzialność</h2>
          <ol>
            <li>Operator dokłada starań w celu zapewnienia ciągłości działania Platformy, jednak nie gwarantuje dostępności 100% (z wyjątkiem planu Enterprise z SLA 99.9%).</li>
            <li>Operator nie ponosi odpowiedzialności za treść odpowiedzi generowanych przez moduł AI Auto-Reply. Użytkownik powinien weryfikować automatyczne odpowiedzi.</li>
            <li>Operator nie odpowiada za awarie zamków elektronicznych wynikające z przyczyn leżących po stronie producentów urządzeń.</li>
          </ol>

          <h2>§8. Własność intelektualna</h2>
          <ol>
            <li>Platforma, jej kod źródłowy, interfejs, logo i dokumentacja stanowią własność intelektualną Operatora.</li>
            <li>Użytkownik nie nabywa praw do Platformy poza prawem do korzystania z niej w ramach Subskrypcji.</li>
          </ol>

          <h2>§9. Postanowienia końcowe</h2>
          <ol>
            <li>Operator zastrzega sobie prawo do zmiany Regulaminu. O zmianach Użytkownicy zostaną powiadomieni drogą e-mailową z 14-dniowym wyprzedzeniem.</li>
            <li>W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego.</li>
            <li>Wszelkie spory rozstrzygane będą przez sąd właściwy dla siedziby Operatora.</li>
            <li>Regulamin wchodzi w życie z dniem {lastUpdated}.</li>
          </ol>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white py-8 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between text-[13px] text-zinc-400">
          <span>&copy; 2026 PropertyPMS</span>
          <div className="flex gap-4">
            <a href="/regulamin" className="text-zinc-900 font-medium">Regulamin</a>
            <a href="/polityka-prywatnosci" className="hover:text-zinc-600 transition-colors">Polityka prywatności</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
