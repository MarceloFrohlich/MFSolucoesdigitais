"use client";

import { m } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { iconMap } from "@/lib/icon-map";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-mono text-sm font-bold text-[#4d7c0f] uppercase tracking-wide">
            {t.services.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4 text-[#16140f]">
            {t.services.heading}{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{t.services.headingAccent}</span>
              <span className="absolute inset-x-0 bottom-1 h-[0.35em] bg-[#a3e635] -z-0" />
            </span>
          </h2>
          <p className="text-[#57534a] leading-7">{t.services.description}</p>
        </m.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <m.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-outline rounded-2xl p-6 flex flex-col gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#a3e635] border-[1.5px] border-[#16140f] flex items-center justify-center text-[#16140f]">
                  {Icon && <Icon size={20} />}
                </div>
                <h3 className="text-lg font-bold text-[#16140f]">{item.title}</h3>
                <p className="text-sm text-[#57534a] leading-6">{item.description}</p>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
