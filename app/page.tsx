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
const ProcessSection = dynamic(() =>
  import("@/sections/ProcessSection").then((m) => m.ProcessSection)
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <PositioningSection />
      <ProcessSection />
    </>
  );
}
