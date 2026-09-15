"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="relative py-24 px-6 bg-[#eee8d8] border-y-[1.5px] border-[#16140f]/10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-mono text-sm font-bold text-[#4d7c0f] uppercase tracking-wide">
            {t.howItWorks.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4 text-[#16140f]">
            {t.howItWorks.heading}{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{t.howItWorks.headingAccent}</span>
              <span className="absolute inset-x-0 bottom-1 h-[0.35em] bg-[#a3e635] -z-0" />
            </span>
          </h2>
          <p className="text-[#57534a] leading-7">{t.howItWorks.description}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.howItWorks.steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-outline rounded-2xl bg-[#fbf9f2] p-6"
            >
              <span className="font-mono text-3xl font-extrabold text-[#16140f]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-bold text-[#16140f] mt-3 mb-2">{step.title}</h3>
              <p className="text-sm text-[#57534a] leading-6">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
