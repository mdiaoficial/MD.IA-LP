import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MD.IA | O motor da sua clínica",
  description:
    "Construí a MD.IA para ser o motor da minha própria clínica. Hoje, dezenas de clínicas usam pra trazer mais leads qualificados, agendar mais consultas e devolver ao médico o controle da sua própria clínica.",
  metadataBase: new URL("https://mdia.com.br"),
  openGraph: {
    title: "MD.IA | O motor da sua clínica",
    description:
      "O ecossistema que devolve ao médico o controle da própria clínica. IA + automação para clínicas médicas.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
