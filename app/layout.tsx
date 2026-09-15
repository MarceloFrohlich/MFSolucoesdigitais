import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { siteConfig } from "@/lib/site-config";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="antialiased" suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
