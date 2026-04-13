import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

// TODO: Replace with production domain when ready
const SITE_URL = "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PMS Autopilot — The PMS that works while you sleep",
    template: "%s — PMS Autopilot",
  },
  description:
    "Sync every booking platform, auto-price every night, and let AI handle guests — from 2 properties to 200. Official Rentals United Partner.",
  keywords: [
    "PMS", "property management system", "vacation rental",
    "Airbnb", "Booking.com", "Rentals United", "channel manager",
    "AI pricing", "dynamic pricing", "short-term rental",
    "PMS Autopilot", "automatyzacja wynajmu",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: "PMS Autopilot — The PMS that works while you sleep",
    description: "Sync every booking platform, auto-price every night, and let AI handle guests.",
    siteName: "PMS Autopilot",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PMS Autopilot — The PMS that works while you sleep",
    description: "Sync bookings. Auto-price. AI guest messaging. From 2 to 200 properties.",
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#06070d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable} antialiased`}>
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
              name: "PMS Autopilot",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description: "AI-native property management system. Auto-sync channels, dynamic pricing, AI guest messaging.",
              offers: { "@type": "AggregateOffer", priceCurrency: "PLN", lowPrice: "0", offerCount: "3" },
              aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "480" },
            }),
          }}
        />
        {children}
        <CookieBanner />

        {/* TODO: Replace GTM-XXXXXX and change false → true */}
        {false && (
          <>
            <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXX');` }} />
          </>
        )}
        {false && (
          <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX" />
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXX');` }} />
          </>
        )}
        {false && (
          <script dangerouslySetInnerHTML={{ __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","XXXXXXXXXX");` }} />
        )}
      </body>
    </html>
  );
}
