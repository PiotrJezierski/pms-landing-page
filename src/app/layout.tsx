import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
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
      </body>
    </html>
  );
}
