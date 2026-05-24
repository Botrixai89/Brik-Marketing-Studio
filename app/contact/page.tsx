import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a discovery call or send BRIK a message. Let's talk about your business goals.",
};

const ContactSection = dynamic(() =>
  import("@/sections/ContactSection").then((m) => m.ContactSection)
);

export default function ContactPage() {
  return <ContactSection />;
}
