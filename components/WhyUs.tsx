"use client";

import { m } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { iconMap } from "@/lib/icon-map";

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-mono text-sm font-bold text-[#4d7c0f] uppercase tracking-wide">
            {t.whyUs.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4 text-[#16140f]">
            {t.whyUs.heading}{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{t.whyUs.headingAccent}</span>
              <span className="absolute inset-x-0 bottom-1 h-[0.35em] bg-[#a3e635] -z-0" />
            </span>
          </h2>
          <p className="text-[#57534a] leading-7">{t.whyUs.description}</p>
        </m.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {t.whyUs.points.map((point, i) => {
            const Icon = iconMap[point.icon];
            return (
              <m.div
                key={point.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-outline rounded-2xl flex items-start gap-4 p-5"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#16140f] flex items-center justify-center text-[#a3e635]">
                  {Icon && <Icon size={18} />}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#16140f] mb-1">{point.title}</h3>
                  <p className="text-sm text-[#57534a] leading-6">{point.description}</p>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
