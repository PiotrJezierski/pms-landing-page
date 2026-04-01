import { Building2, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Prywatności — PropertyPMS",
  description: "Polityka prywatności platformy PropertyPMS. Informacje o przetwarzaniu danych osobowych.",
};

export default function PolitykaPrywatnosci() {
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
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 mb-3">Polityka Prywatności</h1>
        <p className="text-sm text-zinc-400 mb-12">Ostatnia aktualizacja: {lastUpdated}</p>

        <div className="prose prose-zinc max-w-none prose-headings:tracking-tight prose-headings:font-semibold prose-p:leading-relaxed prose-p:text-zinc-600 prose-li:text-zinc-600">
          <h2>1. Administrator danych</h2>
          <p>
            Administratorem danych osobowych jest PropertyPMS sp. z o.o. z siedzibą w Warszawie,
            ul. Marszałkowska 1, 00-001 Warszawa (dalej: „Administrator"). Kontakt w sprawach
            ochrony danych: <strong>privacy@propertypms.com</strong>.
          </p>

          <h2>2. Jakie dane zbieramy</h2>
          <h3>2.1. Dane Użytkowników (zarządców lokali)</h3>
          <ul>
            <li>Adres e-mail i hasło (rejestracja)</li>
            <li>Imię, nazwisko, nazwa firmy (profil)</li>
            <li>Dane rozliczeniowe (NIP, adres — przetwarzane przez Stripe)</li>
            <li>Logi aktywności w Platformie (adresy IP, daty logowania)</li>
          </ul>

          <h3>2.2. Dane Gości (osób rezerwujących lokale)</h3>
          <ul>
            <li>Imię, nazwisko, adres e-mail, numer telefonu</li>
            <li>Narodowość (wymagana do raportów meldunkowych)</li>
            <li>Dane dokumentu tożsamości — przechowywane w szyfrowanym Identity Vault (typ dokumentu, zaszyfrowany numer, data ważności)</li>
            <li>Wiadomości z platform rezerwacyjnych (Airbnb, Booking.com) przetwarzane przez moduł AI</li>
          </ul>

          <h3>2.3. Dane techniczne</h3>
          <ul>
            <li>Adres IP, typ przeglądarki, system operacyjny</li>
            <li>Pliki cookies (patrz sekcja 7)</li>
            <li>Logi API i webhook (Rentals United, Smart Lock)</li>
          </ul>

          <h2>3. Cele przetwarzania danych</h2>
          <table>
            <thead>
              <tr>
                <th>Cel</th>
                <th>Podstawa prawna</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Świadczenie usług Platformy</td>
                <td>Art. 6 ust. 1 lit. b RODO (umowa)</td>
              </tr>
              <tr>
                <td>Generowanie odpowiedzi AI</td>
                <td>Art. 6 ust. 1 lit. b RODO (umowa)</td>
              </tr>
              <tr>
                <td>Przetwarzanie dokumentów tożsamości Gości</td>
                <td>Art. 6 ust. 1 lit. c RODO (obowiązek prawny — meldunki)</td>
              </tr>
              <tr>
                <td>Wysyłka kodów Smart Lock</td>
                <td>Art. 6 ust. 1 lit. b RODO (umowa)</td>
              </tr>
              <tr>
                <td>Rozliczenia i faktury</td>
                <td>Art. 6 ust. 1 lit. c RODO (obowiązek prawny)</td>
              </tr>
              <tr>
                <td>Marketing i komunikacja</td>
                <td>Art. 6 ust. 1 lit. a RODO (zgoda)</td>
              </tr>
              <tr>
                <td>Poprawa jakości usług i analityka</td>
                <td>Art. 6 ust. 1 lit. f RODO (uzasadniony interes)</td>
              </tr>
            </tbody>
          </table>

          <h2>4. Identity Vault — ochrona dokumentów Gości</h2>
          <p>
            Dane dokumentów tożsamości Gości (paszporty, dowody osobiste) są przechowywane
            w dedykowanym szyfrowanym module Identity Vault:
          </p>
          <ul>
            <li>Szyfrowanie symetryczne z użyciem dedykowanego klucza (VAULT_SECRET_KEY)</li>
            <li>Numery dokumentów przechowywane wyłącznie w formie zaszyfrowanej</li>
            <li>Dostęp ograniczony do Użytkownika zarządzającego danym Lokalem</li>
            <li>Automatyczne usuwanie danych po upływie okresu wymaganego prawem</li>
          </ul>

          <h2>5. Przetwarzanie danych przez AI</h2>
          <p>Moduł AI Auto-Reply przetwarza wiadomości Gości w celu generowania automatycznych odpowiedzi:</p>
          <ul>
            <li>Wiadomości są przekazywane do OpenAI API (model GPT-4o) w celu wygenerowania odpowiedzi</li>
            <li>OpenAI nie wykorzystuje danych do trenowania modeli (zgodnie z API Data Usage Policy)</li>
            <li>Wiadomości nie są przechowywane po stronie OpenAI dłużej niż 30 dni (retencja API)</li>
            <li>Użytkownik może wyłączyć moduł AI w ustawieniach Konta</li>
          </ul>

          <h2>6. Udostępnianie danych</h2>
          <p>Dane mogą być udostępniane następującym podmiotom:</p>
          <ul>
            <li><strong>Stripe</strong> — przetwarzanie płatności (dane rozliczeniowe)</li>
            <li><strong>Supabase / PostgreSQL</strong> — hosting bazy danych (dane Użytkowników i Gości)</li>
            <li><strong>OpenAI</strong> — przetwarzanie wiadomości AI (treść wiadomości)</li>
            <li><strong>Rentals United</strong> — synchronizacja rezerwacji (dane rezerwacji)</li>
            <li><strong>Yale / Nuki / Tedee</strong> — zarządzanie zamkami (kody dostępu)</li>
          </ul>
          <p>Dane nie są sprzedawane ani udostępniane podmiotom trzecim w celach marketingowych.</p>

          <h2>7. Pliki cookies</h2>
          <p>Platforma wykorzystuje następujące rodzaje plików cookies:</p>
          <ul>
            <li><strong>Niezbędne</strong> — uwierzytelnianie sesji (JWT token), preferencje językowe</li>
            <li><strong>Analityczne</strong> — Google Analytics 4, Microsoft Clarity (po wdrożeniu)</li>
            <li><strong>Marketingowe</strong> — Google Tag Manager (po wdrożeniu)</li>
          </ul>
          <p>Użytkownik może zarządzać cookies w ustawieniach przeglądarki.</p>

          <h2>8. Prawa użytkownika</h2>
          <p>Zgodnie z RODO, przysługują Ci następujące prawa:</p>
          <ul>
            <li><strong>Prawo dostępu</strong> — możesz żądać kopii swoich danych</li>
            <li><strong>Prawo do sprostowania</strong> — możesz poprawić nieprawidłowe dane</li>
            <li><strong>Prawo do usunięcia</strong> — możesz żądać usunięcia danych (&ldquo;prawo do bycia zapomnianym&rdquo;)</li>
            <li><strong>Prawo do ograniczenia przetwarzania</strong></li>
            <li><strong>Prawo do przenoszenia danych</strong> — możesz otrzymać dane w formacie CSV/JSON</li>
            <li><strong>Prawo do sprzeciwu</strong> — wobec przetwarzania na podstawie uzasadnionego interesu</li>
            <li><strong>Prawo do cofnięcia zgody</strong> — w dowolnym momencie</li>
          </ul>
          <p>W celu realizacji praw skontaktuj się z nami: <strong>privacy@propertypms.com</strong>.</p>

          <h2>9. Okres przechowywania danych</h2>
          <ul>
            <li>Dane Konta — przez okres korzystania z Platformy + 30 dni po usunięciu</li>
            <li>Dane rozliczeniowe — 5 lat (wymóg podatkowy)</li>
            <li>Dane dokumentów tożsamości Gości — zgodnie z wymogami prawa meldunkowego, max. 12 miesięcy</li>
            <li>Logi API — 90 dni</li>
            <li>Wiadomości AI — 12 miesięcy od daty rezerwacji</li>
          </ul>

          <h2>10. Bezpieczeństwo</h2>
          <ul>
            <li>Szyfrowanie TLS 1.3 (dane w tranzycie)</li>
            <li>Szyfrowanie AES-256 dla Identity Vault (dane w spoczynku)</li>
            <li>Haszowanie haseł algorytmem bcrypt</li>
            <li>Tokeny JWT z 7-dniowym terminem ważności</li>
            <li>Connection pooling i izolacja danych w PostgreSQL</li>
            <li>Regularne audyty bezpieczeństwa</li>
          </ul>

          <h2>11. Zmiany w Polityce Prywatności</h2>
          <p>
            O zmianach w Polityce Prywatności informujemy drogą e-mailową z 14-dniowym
            wyprzedzeniem. Aktualna wersja jest zawsze dostępna pod adresem
            <a href="/polityka-prywatnosci"> /polityka-prywatnosci</a>.
          </p>

          <h2>12. Kontakt</h2>
          <p>
            W sprawach dotyczących ochrony danych osobowych skontaktuj się z nami:<br />
            E-mail: <strong>privacy@propertypms.com</strong><br />
            Adres: PropertyPMS sp. z o.o., ul. Marszałkowska 1, 00-001 Warszawa<br />
            Masz prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (PUODO).
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white py-8 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between text-[13px] text-zinc-400">
          <span>&copy; 2026 PropertyPMS</span>
          <div className="flex gap-4">
            <a href="/regulamin" className="hover:text-zinc-600 transition-colors">Regulamin</a>
            <a href="/polityka-prywatnosci" className="text-zinc-900 font-medium">Polityka prywatności</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
