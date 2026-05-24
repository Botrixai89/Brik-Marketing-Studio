import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore BRIK's five service pillars — digital marketing, web & SEO, performance advertising, AI automation, and ERP implementation.",
};

const ServicesSection = dynamic(() =>
  import("@/sections/ServicesSection").then((m) => m.ServicesSection)
);
const AutomationSection = dynamic(() =>
  import("@/sections/AutomationSection").then((m) => m.AutomationSection)
);
const ErpSection = dynamic(() =>
  import("@/sections/ErpSection").then((m) => m.ErpSection)
);

export default function ServicesPage() {
  return (
    <>
      <ServicesSection />
      <AutomationSection />
      <ErpSection />
    </>
  );
}
