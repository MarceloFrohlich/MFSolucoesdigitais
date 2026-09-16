"use client";

import { m } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import PlusDecor from "@/components/PlusDecor";
import HeroBackground from "@/components/HeroBackground";

export default function Hero() {
  const { t } = useLanguage();
  const sequence = t.hero.typewriter.flatMap((s) => [s, 1800]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative overflow-hidden grid-bg pt-32 pb-16 px-6">
      <HeroBackground />
      <PlusDecor />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <m.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-[1.5px] border-[#16140f] bg-[#fbf9f2] text-sm font-semibold mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#a3e635] border border-[#16140f]" />
          <span>{t.hero.badge}</span>
        </m.div>

        <m.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-5 text-[#16140f]"
        >
          {t.hero.titleLine1}
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">{t.hero.titleLine2}</span>
            <span className="absolute inset-x-0 bottom-1 h-[0.4em] bg-[#a3e635] -z-0 -rotate-1" />
          </span>
        </m.h1>

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-lg sm:text-xl text-[#57534a] font-mono mb-7 h-8"
        >
          <span className="text-[#4d7c0f]">{">"} </span>
          <TypeAnimation
            key={sequence.join("")}
            sequence={sequence}
            speed={50}
            deletionSpeed={70}
            repeat={Infinity}
            className="text-[#16140f] font-semibold"
          />
          <span className="animate-blink-cursor text-[#4d7c0f] ml-0.5">_</span>
        </m.div>

        <m.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="text-[#57534a] text-base sm:text-lg max-w-2xl mx-auto leading-7 mb-3"
        >
          {t.hero.subtitle}
        </m.p>

        <m.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.62 }}
          className="text-[#16140f] text-sm font-bold mb-10"
        >
          {t.hero.trust}
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-20"
        >
          <button onClick={() => scrollTo("contact")} className="btn-solid px-7 py-3.5 text-sm cursor-pointer">
            {t.hero.ctaPrimary}
            <ArrowRight size={15} />
          </button>

          <button onClick={() => scrollTo("services")} className="btn-outline px-7 py-3.5 text-sm cursor-pointer">
            {t.hero.ctaSecondary}
            <ArrowDown size={15} />
          </button>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
        >
          {t.hero.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`rounded-2xl border-[1.5px] border-[#16140f] p-4 sm:p-5 text-left ${
                i % 2 === 0 ? "bg-[#fbf9f2]" : "bg-[#a3e635]"
              }`}
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-[#16140f]">{stat.value}</p>
              <p className="text-xs sm:text-sm text-[#57534a] mt-1 leading-snug">{stat.label}</p>
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
