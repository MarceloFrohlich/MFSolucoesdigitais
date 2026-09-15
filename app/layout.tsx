import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { siteConfig } from "@/lib/site-config";
import Analytics from "@/components/Analytics";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: "Marcelo Frohlich — Soluções Digitais para Empresas",
  description:
    "Desenvolvimento de sistemas personalizados, sites institucionais, aplicativos e integrações sob medida para empresas e profissionais.",
  keywords: [
    "desenvolvimento de sistemas",
    "sistema de gestão personalizado",
    "site institucional",
    "desenvolvimento de aplicativos",
    "integração de sistemas",
    "integração de APIs",
    "soluções digitais",
    "desenvolvedor full stack",
  ],
  authors: [{ name: "Marcelo Frohlich" }],
  openGraph: {
    title: "Marcelo Frohlich — Soluções Digitais para Empresas",
    description:
      "Sistemas, sites, aplicativos e integrações sob medida para resolver problemas reais de empresas e profissionais.",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.brandName,
  alternateName: "MF Soluções Digitais",
  url: siteConfig.domain,
  email: siteConfig.email,
  ...(siteConfig.whatsappNumber ? { telephone: `+${siteConfig.whatsappNumber}` } : {}),
  areaServed: "BR",
  description:
    "Desenvolvimento de sistemas personalizados, sites institucionais, aplicativos e integrações sob medida para empresas e profissionais.",
  sameAs: [siteConfig.linkedin, siteConfig.github],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
