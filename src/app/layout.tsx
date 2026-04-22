import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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

const siteUrl = "https://mdia.com.br";

export const metadata: Metadata = {
  title: "MD.IA | O motor da sua clínica",
  description:
    "Construí a MD.IA para ser o motor da minha própria clínica. Hoje, dezenas de clínicas usam pra trazer mais leads qualificados, agendar mais consultas e devolver ao médico o controle da sua própria clínica.",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "MD.IA | O motor da sua clínica",
    description:
      "O ecossistema que devolve ao médico o controle da própria clínica. IA + automação para clínicas médicas.",
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "MD.IA",
  },
  twitter: {
    card: "summary_large_image",
    title: "MD.IA | O motor da sua clínica",
    description:
      "O ecossistema que devolve ao médico o controle da própria clínica.",
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MD.IA",
  url: siteUrl,
  logo: `${siteUrl}/logo/logo_mdia.png`,
  founder: {
    "@type": "Person",
    name: "Dr. Daniel Dorta",
    jobTitle: "Médico e Arquiteto de IA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "contato@mdia.com.br",
    availableLanguage: ["Portuguese"],
  },
  description:
    "Ecossistema de IA e automação para clínicas médicas. Meta Business Partner e Google Partner.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
