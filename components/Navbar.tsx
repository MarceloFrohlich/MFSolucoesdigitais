"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage, type Lang } from "@/contexts/LanguageContext";
import { siteConfig } from "@/lib/site-config";

const langMeta: Record<Lang, { flag: string; label: string }> = {
  pt: { flag: "🇧🇷", label: "PT" },
  en: { flag: "🇺🇸", label: "EN" },
  es: { flag: "🇪🇸", label: "ES" },
};

const sectionIds = ["services", "how-it-works", "why-us", "portfolio", "faq", "contact"];

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [active, setActive] = useState("");

  const navLinks = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.how, href: "#how-it-works" },
    { label: t.nav.why, href: "#why-us" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.faq, href: "#faq" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLang = (l: Lang) => {
    setLang(l);
    setLangOpen(false);
  };

  return (
    <m.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#f5f1e6]/95 backdrop-blur-md border-b-[1.5px] border-[#16140f]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 py-3 flex items-center justify-between gap-4">
        <m.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer group shrink-0"
        >
          <span className="font-mono text-lg font-extrabold text-[#16140f] border-[1.5px] border-[#16140f] rounded-md px-1.5 py-0.5 bg-[#a3e635]">
            {siteConfig.logoMark}
          </span>
          <span className="hidden sm:block text-sm font-bold text-[#16140f] uppercase tracking-wide">
            {siteConfig.brandTag}
          </span>
        </m.button>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`relative px-3.5 py-2 text-sm font-semibold transition-colors rounded-full cursor-pointer ${
                active === link.href.slice(1) ? "text-[#16140f]" : "text-[#57534a] hover:text-[#16140f]"
              }`}
            >
              {active === link.href.slice(1) && (
                <span className="absolute inset-0 rounded-full bg-[#a3e635]/50 border-[1.5px] border-[#16140f] transition-opacity duration-200" />
              )}
              <span className="relative">{link.label}</span>
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2.5">
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border-[1.5px] border-[#16140f] bg-[#fbf9f2] text-sm text-[#16140f] hover:bg-[#a3e635] transition-all cursor-pointer font-semibold"
            >
              <span>{langMeta[lang].flag}</span>
              <span className="font-mono">{langMeta[lang].label}</span>
              <ChevronDown size={12} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {langOpen && (
                <m.div
                  initial={{ opacity: 0, y: -6, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-32 rounded-2xl border-[1.5px] border-[#16140f] bg-[#fbf9f2] shadow-[4px_4px_0_0_#16140f] overflow-hidden z-50"
                >
                  {(Object.keys(langMeta) as Lang[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => handleLang(l)}
                      className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors cursor-pointer font-semibold ${
                        lang === l ? "text-[#16140f] bg-[#a3e635]" : "text-[#57534a] hover:text-[#16140f] hover:bg-[#eee8d8]"
                      }`}
                    >
                      <span>{langMeta[l].flag}</span>
                      <span className="font-mono">{langMeta[l].label}</span>
                    </button>
                  ))}
                </m.div>
              )}
            </AnimatePresence>
          </div>

          <button onClick={() => handleNav("#contact")} className="btn-solid px-5 py-2.5 text-sm cursor-pointer">
            {t.nav.cta}
          </button>
        </div>

        <button
          className="lg:hidden text-[#16140f] transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#f5f1e6] border-t-[1.5px] border-[#16140f]"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`text-left px-3 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    active === link.href.slice(1) ? "text-[#16140f] bg-[#a3e635]/50" : "text-[#57534a] hover:text-[#16140f]"
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="flex gap-2 mt-2 pt-3 border-t-[1.5px] border-[#16140f]/20">
                {(Object.keys(langMeta) as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      handleLang(l);
                      setMobileOpen(false);
                    }}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full text-sm font-mono font-semibold border-[1.5px] transition-all ${
                      lang === l ? "border-[#16140f] bg-[#a3e635] text-[#16140f]" : "border-[#16140f]/30 text-[#57534a]"
                    }`}
                  >
                    {langMeta[l].flag} {langMeta[l].label}
                  </button>
                ))}
              </div>

              <button onClick={() => handleNav("#contact")} className="btn-solid mt-2 px-3 py-3 text-sm">
                {t.nav.cta}
              </button>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  );
}
