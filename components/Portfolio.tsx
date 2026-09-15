"use client";

import { motion } from "framer-motion";
import { Building2, Smartphone, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Portfolio() {
  const { t } = useLanguage();
  const featured = t.portfolio.items.find((item) => item.featured);
  const rest = t.portfolio.items.filter((item) => !item.featured);

  return (
    <section id="portfolio" className="relative py-24 px-6 bg-[#eee8d8] border-y-[1.5px] border-[#16140f]/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-6"
        >
          <span className="font-mono text-sm font-bold text-[#4d7c0f] uppercase tracking-wide">
            {t.portfolio.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4 text-[#16140f]">
            {t.portfolio.heading}{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{t.portfolio.headingAccent}</span>
              <span className="absolute inset-x-0 bottom-1 h-[0.35em] bg-[#a3e635] -z-0" />
            </span>
          </h2>
          <p className="text-[#57534a] leading-7">{t.portfolio.description}</p>
        </motion.div>

        <p className="text-center text-xs text-[#57534a]/80 italic mb-10">{t.portfolio.note}</p>

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border-[1.5px] border-[#16140f] bg-[#16140f] text-[#f5f1e6] p-8 sm:p-10 mb-8 overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-[#a3e635]/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-10 w-64 h-64 rounded-full bg-[#a3e635]/10 blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8">
              <div className="flex-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono border-[1.5px] border-[#a3e635] bg-[#a3e635] text-[#16140f] mb-4">
                  <Sparkles size={13} />
                  {featured.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">{featured.name}</h3>
                <p className="text-sm sm:text-base text-[#c9c6ba] leading-7 mb-5 max-w-2xl">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featured.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-mono border-[1.5px] border-[#a3e635]/40 text-[#a3e635]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex sm:flex-row lg:flex-col gap-4 shrink-0">
                <div className="flex items-center gap-3 rounded-2xl border-[1.5px] border-[#f5f1e6]/15 bg-[#f5f1e6]/5 px-5 py-4">
                  <Building2 size={22} className="text-[#a3e635] shrink-0" />
                  <span className="text-sm font-semibold">{t.portfolio.featuredWebLabel}</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border-[1.5px] border-[#f5f1e6]/15 bg-[#f5f1e6]/5 px-5 py-4">
                  <Smartphone size={22} className="text-[#a3e635] shrink-0" />
                  <span className="text-sm font-semibold">{t.portfolio.featuredAppLabel}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid sm:grid-cols-2 gap-6">
          {rest.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-outline rounded-2xl bg-[#fbf9f2] p-6"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold font-mono border-[1.5px] border-[#16140f] bg-[#a3e635] text-[#16140f] mb-4">
                {item.tag}
              </span>
              <h3 className="text-lg font-bold text-[#16140f] mb-2">{item.name}</h3>
              <p className="text-sm text-[#57534a] leading-6 mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
