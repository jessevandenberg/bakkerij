import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Het witte bolletje",
  description: "Bakkerij Het witte bolletje - Ambachtelijke banketbakkerij met de fijnste taarten en gebakjes",
  icons: {
    icon: '/icon-192x192.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#8B4513" />
      </head>
      <body
        className={`${playfair.variable} ${cormorant.variable} font-cormorant antialiased bg-cream-50`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
