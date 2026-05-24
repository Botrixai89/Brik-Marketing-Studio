import dynamic from "next/dynamic";

const HeroSection = dynamic(() =>
  import("@/sections/HeroSection").then((m) => m.HeroSection)
);
const ProblemSection = dynamic(() =>
  import("@/sections/ProblemSection").then((m) => m.ProblemSection)
);
const PositioningSection = dynamic(() =>
  import("@/sections/PositioningSection").then((m) => m.PositioningSection)
);
const ServicesSection = dynamic(() =>
  import("@/sections/ServicesSection").then((m) => m.ServicesSection)
);
const ProcessSection = dynamic(() =>
  import("@/sections/ProcessSection").then((m) => m.ProcessSection)
);
const ClientsSection = dynamic(() =>
  import("@/sections/ClientsSection").then((m) => m.ClientsSection)
);
const AutomationSection = dynamic(() =>
  import("@/sections/AutomationSection").then((m) => m.AutomationSection)
);
const ErpSection = dynamic(() =>
  import("@/sections/ErpSection").then((m) => m.ErpSection)
);
const AboutSection = dynamic(() =>
  import("@/sections/AboutSection").then((m) => m.AboutSection)
);
const BlogSection = dynamic(() =>
  import("@/sections/BlogSection").then((m) => m.BlogSection)
);
const ContactSection = dynamic(() =>
  import("@/sections/ContactSection").then((m) => m.ContactSection)
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <PositioningSection />
      <ServicesSection />
      <ProcessSection />
      <ClientsSection />
      <AutomationSection />
      <ErpSection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
