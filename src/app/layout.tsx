import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://finsion.ch"),
  title: {
    default: "Finsion – Ihre persönliche Versicherungsberatung",
    template: "%s | Finsion",
  },
  description:
    "Unverbindliche und kostenlose Versicherungsberatung in der Schweiz. Hinterlassen Sie Ihre Kontaktdaten – wir melden uns innert 7 Tagen.",
  openGraph: {
    title: "Finsion – Ihre persönliche Versicherungsberatung",
    description:
      "Unverbindliche und kostenlose Versicherungsberatung. Wir melden uns innert 7 Tagen.",
    locale: "de_CH",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de-CH" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-brand-900">
        {children}
      </body>
    </html>
  );
}
