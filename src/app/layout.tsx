import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// TODO: Replace with production domain when ready
const SITE_URL = "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PropertyPMS — Zarządzanie wynajmem krótkoterminowym z AI",
    template: "%s — PropertyPMS",
  },
  description:
    "AI do odpowiadania gościom, integracja z zamkami elektronicznymi i automatyczne zarządzanie sprzątaniem. Jeden system do obsługi Airbnb, Booking.com i VRBO.",
  keywords: [
    "zarządzanie wynajmem", "PMS", "property management",
    "wynajem krótkoterminowy", "Airbnb", "Booking.com",
    "smart lock", "AI auto-reply", "automatyzacja wynajmu",
    "zarządzanie apartamentami", "PropertyPMS",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "PropertyPMS — Zarządzanie wynajmem krótkoterminowym z AI",
    description: "AI odpowiada gościom. Zamki otwierają się same. Sprzątanie planuje się automatycznie.",
    siteName: "PropertyPMS",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PropertyPMS — Zarządzanie wynajmem z AI",
    description: "AI odpowiada gościom. Smart lock. Auto-sprzątanie. Jeden system do Airbnb, Booking i VRBO.",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "PropertyPMS",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description: "AI-native zarządzanie wynajmem krótkoterminowym. Automatyczne odpowiedzi AI, smart lock, auto-sprzątanie.",
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "PLN",
                lowPrice: "0",
                offerCount: "3",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "500",
              },
            }),
          }}
        />
        {children}
        <CookieBanner />

        {/* ── Analytics ── */}
        {/* TODO: Replace GTM-XXXXXX with your GTM container ID and change false → true */}
        {false && (
          <>
            <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXX');` }} />
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX" height="0" width="0" style={{ display: "none", visibility: "hidden" }} /></noscript>
          </>
        )}

        {/* TODO: Replace G-XXXXXX with your GA4 measurement ID and change false → true */}
        {false && (
          <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX" />
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXX');` }} />
          </>
        )}

        {/* TODO: Replace XXXXXXXXXX with your Clarity project ID and change false → true */}
        {false && (
          <script dangerouslySetInnerHTML={{ __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","XXXXXXXXXX");` }} />
        )}
      </body>
    </html>
  );
}
