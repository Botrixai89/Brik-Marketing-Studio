import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "See how BRIK has helped 50+ businesses across India grow with strategy, marketing, automation, and ERP.",
};

const ClientsSection = dynamic(() =>
  import("@/sections/ClientsSection").then((m) => m.ClientsSection)
);

export default function WorkPage() {
  return <ClientsSection />;
}
