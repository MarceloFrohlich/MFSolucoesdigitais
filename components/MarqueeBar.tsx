"use client";

import { useLanguage } from "@/contexts/LanguageContext";

type MarqueeBarProps = {
  variant?: "accent" | "ink";
};

export default function MarqueeBar({ variant = "accent" }: MarqueeBarProps) {
  const { t } = useLanguage();
  const text = t.nav.cta;
  const items = Array.from({ length: 8 });

  return (
    <div
      className={`overflow-hidden border-y-[1.5px] border-[#16140f] py-3 ${
        variant === "accent" ? "bg-[#a3e635] text-[#16140f]" : "bg-[#16140f] text-[#f5f1e6]"
      }`}
    >
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <div className="marquee-content" key={dup}>
            {items.map((_, i) => (
              <span key={i} className="flex items-center gap-2.5 text-sm font-bold font-mono uppercase tracking-wide">
                {text}
                <span aria-hidden="true">→</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
