"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#16140f] text-[#f5f1e6] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <span className="font-mono text-lg font-extrabold text-[#16140f] bg-[#a3e635] border-[1.5px] border-[#a3e635] rounded-md px-1.5 py-0.5">
            {siteConfig.logoMark}
          </span>
          <p className="text-sm text-[#c9c6ba] mt-2">{t.footer.tagline}</p>
        </div>
        <div className="flex flex-col sm:items-end gap-2">
          <Link href="/politica-de-privacidade" className="text-xs text-[#c9c6ba] hover:text-[#a3e635] transition-colors underline">
            Política de Privacidade
          </Link>
          <p className="text-xs text-[#8a877c]">
            © {year} {siteConfig.brandName}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
