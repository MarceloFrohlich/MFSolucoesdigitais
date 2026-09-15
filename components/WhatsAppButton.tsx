"use client";

import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "@/lib/site-config";
import { track } from "@/lib/track";

export default function WhatsAppButton() {
  const link = whatsappLink("Olá! Vim pelo site e gostaria de saber mais sobre os serviços.");

  if (!link) return null;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      onClick={() => track("whatsapp_click", { location: "floating_button" })}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#a3e635] text-[#16140f] border-[1.5px] border-[#16140f] flex items-center justify-center shadow-[3px_3px_0_0_#16140f] hover:-translate-y-0.5 transition-transform"
    >
      <FaWhatsapp size={26} />
    </a>
  );
}
