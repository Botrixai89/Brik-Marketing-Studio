"use client";

import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/constants/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message BRIK on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center
        rounded-full bg-[#25D366] text-white shadow-lg
        transition-transform duration-300 hover:scale-110
        md:bottom-8 md:right-8
      "
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2} />
    </a>
  );
}
