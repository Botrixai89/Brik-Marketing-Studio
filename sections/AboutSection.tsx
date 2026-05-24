"use client";

import { MapPin } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const FOUNDERS = [
  {
    name: "Ayan Pradhan",
    role: "Co-Founder · Strategy · AI Automation · Business Systems",
    bio: "Ayan Pradhan leads the business consultation, automation, sales, and strategy side of BRIK. Over the past few years, he has worked with businesses across fashion, hospitality, education, real estate, technology, manufacturing, nutrition, and personal branding — helping them build systems that improve visibility, lead generation, operations, and growth. His focus lies in combining modern marketing with AI automation, ERP systems, performance marketing, and scalable business infrastructure.",
  },
  {
    name: "Anam Pradhan",
    role: "Co-Founder · Content · Production · Creative Operations",
    bio: "Anam Pradhan leads the creative execution and production side of BRIK. From content strategy and shoot direction to team coordination, brand storytelling, and social media execution — she ensures every brand is positioned creatively and consistently across platforms. Her strength lies in understanding audience psychology, content trends, visual storytelling, and creating content systems that help businesses stay relevant, visible, and engaging online.",
  },
];

export function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-background">
      <div className="container-custom">
        <SectionLabel>About</SectionLabel>
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
          We are building more than a marketing agency. We are building growth
          infrastructure for modern businesses.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-text-muted">
          BRIK Marketing & Automation Studio was built on one belief: businesses
          deserve systems, strategy, and execution that actually help them scale —
          not just content that looks good online.
        </p>

        <RevealOnScroll className="mt-16 space-y-16">
          {FOUNDERS.map((founder, i) => (
            <article
              key={founder.name}
              className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`
                  aspect-[4/5] max-h-[420px] rounded-2xl border border-border
                  bg-gradient-to-br from-primary/20 to-background-soft
                  transition-transform duration-500 hover:scale-[1.02]
                  ${i % 2 === 1 ? "lg:order-2" : ""}
                `}
                aria-hidden
              />
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="text-2xl font-bold text-text">{founder.name}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">
                  {founder.role}
                </p>
                <p className="mt-4 leading-relaxed text-text-muted">
                  {founder.bio}
                </p>
              </div>
            </article>
          ))}
        </RevealOnScroll>

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          <blockquote className="border-l-4 border-primary pl-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Mission
            </p>
            <p className="mt-3 text-lg leading-relaxed text-text">
              To help businesses build stronger digital foundations through
              strategy, content, advertising, automation, and scalable systems —
              all under one unified growth ecosystem.
            </p>
          </blockquote>
          <blockquote className="border-l-4 border-accent pl-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Vision
            </p>
            <p className="mt-3 text-lg leading-relaxed text-text">
              We aim to become the growth infrastructure partner for 500+
              businesses across India and the UAE by 2027 — helping businesses
              scale from launch stage to national and international growth.
            </p>
          </blockquote>
        </div>

        <div className="card mt-12 p-8">
          <p className="text-text-muted">
            BRIK operates through a distributed team of specialists across India
            — including strategists, designers, video editors, performance
            marketers, developers, AI automation engineers, ERP consultants, and
            production coordinators — all working together under one execution
            system.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-text-muted">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Headquartered in Raipur, Chhattisgarh.</span>
            <span>Mumbai office launching soon.</span>
          </div>
          <p className="mt-6 text-sm italic text-text-muted">
            We are transparent about being a young and growing agency. What is not
            young is our thinking, our execution systems, and the way we approach
            business growth.
          </p>
        </div>

        <div className="mt-10">
          <MagneticButton href="/#contact" variant="primary">
            Work directly with the founders — book a discovery call.
          </MagneticButton>
        </div>
      </div>
    </SectionWrapper>
  );
}
