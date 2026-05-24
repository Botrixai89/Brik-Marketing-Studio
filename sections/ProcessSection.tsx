"use client";

import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MagneticButton } from "@/components/ui/MagneticButton";

import { useGsapContext } from "@/hooks/useGsapContext";

const STEPS = [
  {
    title: "Discovery Call",
    description:
      "30-minute conversation. We ask about your business — not your marketing. We want to understand the problem before we suggest a solution.",
  },
  {
    title: "Business Consultation",
    description:
      "We document everything. Your USP, your customer, your competitors, your gaps. You receive a detailed PDF — not a proposal. A diagnosis.",
  },
  {
    title: "Strategy Architecture",
    description:
      "A 6–12 month strategy built specifically for your business. Channel selection, messaging, campaign structure, timelines. Everything documented.",
  },
  {
    title: "Execution",
    description:
      "Campaigns go live. Content is produced. Ads are running. Websites are built. Automations are set. All on the timeline we agreed.",
  },
  {
    title: "ROI Tracking",
    description:
      "Monthly reports showing revenue impact — not just reach and likes. Weekly optimization. Daily dashboard monitoring.",
  },
  {
    title: "Scale",
    description:
      "As your business grows, we grow with you. New channels, new automations, new markets. You never start over with a new agency.",
  },
];

export function ProcessSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGsapContext(({ gsap }) => {
    const track = trackRef.current;
    const line = lineRef.current;
    if (!track || !line) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth + 100),
        ease: "none",
        scrollTrigger: {
          trigger: "#process-pin",
          start: "top 90px",
          end: () => `+=${track.scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          pinnedContainer: "#process-pin",
        },
      });

      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "#process-pin",
            start: "top 60px",
            end: () => `+=${track.scrollWidth}`,
            scrub: 1,
          },
        }
      );
    });

    (gsap.utils.toArray("[data-step]") as Element[]).forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
    });
  }, []);

  return (
    <section id="process" className="relative bg-background section-padding">
      <div className="container-custom mb-12">
        <SectionLabel>The process</SectionLabel>
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Here is exactly what happens when you work with BRIK.
        </h2>
      </div>

      <div id="process-pin" className="relative overflow-hidden">
        <div className="absolute left-0 right-0 top-[4.5rem] z-0 hidden h-0.5 lg:block">
          <div
            ref={lineRef}
            className="h-full w-full origin-left scale-x-0 bg-accent"
          />
        </div>

        <div
          ref={trackRef}
          className="flex flex-col gap-6 px-4 lg:w-max lg:flex-row lg:gap-6 lg:px-[max(4vw,1.5rem)] lg:pb-8"
        >
          {STEPS.map((step, i) => (
            <article
              key={step.title}
              data-step
              className="card relative w-full p-8 lg:w-[min(340px,85vw)] lg:shrink-0"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-xl font-bold text-text">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="container-custom mt-8">
        <p className="text-lg font-semibold text-text">
          This is not a one-month retainer. This is a growth partnership.
        </p>
        <div className="mt-6">
          <MagneticButton href="/contact" variant="primary">
            Ready to start at Step 1? Book your discovery call.
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
