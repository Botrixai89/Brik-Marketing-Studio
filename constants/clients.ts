export type ClientShowcase = {
  name: string;
  industry: string;
  services: string[];
  description?: string;
};

export const CLIENT_NAMES = [
  "Shubhkamna Design Studio",
  "DNA Nutrascience",
  "Moonlight Musings",
  "T-Series StageWorks Academy",
  "Vaelo AI",
  "Samriddhi Palace",
  "Mahajan Travels",
  "Salika Marketing",
  "GD Goenka School",
  "BotrixAI",
  "Khatri Automations",
  "Orion World",
  "House of Surfaces",
  "Sky Ventures",
  "The Holiday Gallery",
  "Vinny Art",
  "VH Associates",
  "Prithvi Developers",
] as const;

export const FEATURED_CLIENTS: ClientShowcase[] = [
  {
    name: "Shubhkamna Design Studio",
    industry: "Fashion Retail",
    services: [
      "Instagram growth",
      "Meta Ads",
      "Influencer marketing",
      "Offline campaigns",
    ],
    description: "Scaled visibility and offline-to-online demand across fashion retail.",
  },
  {
    name: "DNA Nutrascience",
    industry: "Nutrition Brand",
    services: ["Website", "Amazon listings", "Product launch strategy"],
    description: "Full-funnel launch support from site to marketplace listings.",
  },
  {
    name: "Moonlight Musings",
    industry: "Personal Brand",
    services: ["LinkedIn growth", "Social media", "AI chatbot systems"],
    description: "Personal brand systems with automated lead capture.",
  },
  {
    name: "T-Series StageWorks Academy",
    industry: "Education",
    services: ["Billboards", "SEO", "WhatsApp automation"],
    description: "Multi-channel education marketing with automated inquiries.",
  },
  {
    name: "Mahajan Travels",
    industry: "Travel & Tourism",
    services: ["Website", "SEO", "Social media content"],
    description: "Digital presence built for discovery and booking intent.",
  },
  {
    name: "BotrixAI",
    industry: "Technology",
    services: ["Brand strategy", "Web", "Performance marketing"],
    description: "Tech brand positioning with conversion-focused web presence.",
  },
];

export const INDUSTRIES_SERVED = [
  "Fashion",
  "Nutrition",
  "Education",
  "Hospitality",
  "Real Estate",
  "Travel",
  "Technology",
  "Mental Health",
  "Manufacturing",
  "Personal Branding",
  "Construction",
  "Architecture",
  "Automation",
  "Healthcare",
] as const;

export const SHOWCASE_STATS = [
  { value: 50, suffix: "+", label: "Clients Served" },
  { value: 1, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "", label: "Core Service Pillars" },
  { value: 0, suffix: "", label: "India", display: "India" },
] as const;
