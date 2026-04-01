import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const geist = Inter({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PropertyPMS — Zarządzanie wynajmem krótkoterminowym z AI",
  description:
    "AI do odpowiadania gościom, integracja z zamkami elektronicznymi i automatyczne zarządzanie sprzątaniem. Jeden system do obsługi Airbnb, Booking.com i VRBO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${geist.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
