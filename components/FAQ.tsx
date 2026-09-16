"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 px-6 bg-[#eee8d8] border-y-[1.5px] border-[#16140f]/10">
      <div className="max-w-3xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-mono text-sm font-bold text-[#4d7c0f] uppercase tracking-wide">
            {t.faq.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 text-[#16140f]">
            {t.faq.heading}{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{t.faq.headingAccent}</span>
              <span className="absolute inset-x-0 bottom-1 h-[0.35em] bg-[#a3e635] -z-0" />
            </span>
          </h2>
        </m.div>

        <div className="flex flex-col gap-3">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <m.div
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border-[1.5px] border-[#16140f] bg-[#fbf9f2] overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#16140f]">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-[#16140f] transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-sm text-[#57534a] leading-6">{item.a}</p>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
