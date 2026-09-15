"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { track, getOrCreateSessionId } from "@/lib/track";

type Status = "idle" | "sending" | "sent" | "error" | "not_configured";

const emptyForm = { name: "", email: "", phone: "", service: "", message: "" };

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState(emptyForm);

  const serviceOptions = [...t.services.items.map((item) => item.title), t.contact.form.otherOption];
  const wpLink = whatsappLink(
    `Olá, meu nome é ___. Gostaria de falar sobre um projeto de ${t.services.items[0].title.toLowerCase()}.`
  );

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, sessionId: getOrCreateSessionId() }),
      });

      if (res.status === 503) {
        setStatus("not_configured");
        return;
      }
      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("sent");
      setForm(emptyForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="font-mono text-sm font-bold text-[#4d7c0f] uppercase tracking-wide">
            {t.contact.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4 text-[#16140f]">
            {t.contact.heading}{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{t.contact.headingAccent}</span>
              <span className="absolute inset-x-0 bottom-1 h-[0.35em] bg-[#a3e635] -z-0" />
            </span>
          </h2>
          <p className="text-[#57534a] leading-7">{t.contact.description}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Direct contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {wpLink ? (
              <a
                href={wpLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { location: "contact_card" })}
                className="card-outline rounded-2xl flex items-center gap-4 p-5"
              >
                <div className="w-11 h-11 rounded-xl bg-[#a3e635] border-[1.5px] border-[#16140f] flex items-center justify-center text-[#16140f]">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#57534a]">{t.contact.direct.whatsapp}</p>
                  <p className="text-[#16140f] font-bold">{t.hero.ctaPrimary}</p>
                </div>
              </a>
            ) : (
              <div className="rounded-2xl border-[1.5px] border-[#16140f]/30 bg-[#fbf9f2] flex items-center gap-4 p-5 opacity-60">
                <div className="w-11 h-11 rounded-xl bg-[#a3e635]/40 border-[1.5px] border-[#16140f]/30 flex items-center justify-center text-[#16140f]">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#57534a]">{t.contact.direct.whatsapp}</p>
                  <p className="text-[#16140f] font-bold">{t.contact.direct.whatsappNotConfigured}</p>
                </div>
              </div>
            )}

            <a
              href={`mailto:${siteConfig.email}`}
              onClick={() => track("email_click", { location: "contact_card" })}
              className="card-outline rounded-2xl flex items-center gap-4 p-5"
            >
              <div className="w-11 h-11 rounded-xl bg-[#16140f] flex items-center justify-center text-[#a3e635]">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-[#57534a]">{t.contact.direct.email}</p>
                <p className="text-[#16140f] font-bold break-all">{siteConfig.email}</p>
              </div>
            </a>

            <p className="text-xs text-[#57534a] px-1">{t.contact.direct.response}</p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 flex flex-col gap-4 rounded-2xl border-[1.5px] border-[#16140f] bg-[#fbf9f2] p-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#57534a] uppercase tracking-wide">{t.contact.form.name}</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  className="rounded-lg border-[1.5px] border-[#16140f]/30 bg-[#f5f1e6] px-3.5 py-2.5 text-sm text-[#16140f] outline-none focus:border-[#16140f] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#57534a] uppercase tracking-wide">{t.contact.form.email}</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  className="rounded-lg border-[1.5px] border-[#16140f]/30 bg-[#f5f1e6] px-3.5 py-2.5 text-sm text-[#16140f] outline-none focus:border-[#16140f] transition-colors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#57534a] uppercase tracking-wide">{t.contact.form.phone}</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  className="rounded-lg border-[1.5px] border-[#16140f]/30 bg-[#f5f1e6] px-3.5 py-2.5 text-sm text-[#16140f] outline-none focus:border-[#16140f] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#57534a] uppercase tracking-wide">{t.contact.form.service}</label>
                <select
                  value={form.service}
                  onChange={update("service")}
                  className="rounded-lg border-[1.5px] border-[#16140f]/30 bg-[#f5f1e6] px-3.5 py-2.5 text-sm text-[#16140f] outline-none focus:border-[#16140f] transition-colors"
                >
                  <option value="">{t.contact.form.servicePlaceholder}</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#57534a] uppercase tracking-wide">{t.contact.form.message}</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={update("message")}
                placeholder={t.contact.form.messagePlaceholder}
                className="rounded-lg border-[1.5px] border-[#16140f]/30 bg-[#f5f1e6] px-3.5 py-2.5 text-sm text-[#16140f] outline-none focus:border-[#16140f] transition-colors resize-none placeholder:text-[#57534a]/60"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-solid mt-2 px-6 py-3.5 text-sm cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send size={16} />
              {status === "sending" ? t.contact.form.sending : t.contact.form.submit}
            </button>

            {status === "sent" && <p className="text-sm text-[#4d7c0f] font-semibold text-center">{t.contact.form.success}</p>}
            {status === "error" && <p className="text-sm text-red-600 font-semibold text-center">{t.contact.form.error}</p>}
            {status === "not_configured" && (
              <p className="text-sm text-red-600 font-semibold text-center">{t.contact.form.notConfigured}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
