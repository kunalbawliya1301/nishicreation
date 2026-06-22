import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nishi Creation | Premium Sandblasting, Etching & Custom Engraving Studio",
  description: "Nishi Creation specializes in premium sandblasting, sand etching, and custom engraving services. We personalize mugs, wine glasses, trophies, corporate awards, and luxury gifting keepsakes with precision craftsmanship.",
  keywords: [
    "sandblasting",
    "sand etching",
    "custom engraving",
    "personalized mugs",
    "wine glass engraving",
    "glass trophies",
    "corporate awards",
    "metal plate engraving",
    "luxury corporate gifts",
    "custom gifting"
  ],
  authors: [{ name: "Nishi Creation" }],
  openGraph: {
    title: "Nishi Creation | Premium Custom Engraving & Personalization Studio",
    description: "Experience the art of permanence. Precision sandblasting, custom engraving, and luxury gifting tailored to your brand or keepake needs.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-dark text-cream font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
