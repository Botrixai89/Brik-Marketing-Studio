import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the founders behind BRIK — a growth studio built on strategy, automation, and creative execution.",
};

const AboutSection = dynamic(() =>
  import("@/sections/AboutSection").then((m) => m.AboutSection)
);

export default function AboutPage() {
  return <AboutSection />;
}
