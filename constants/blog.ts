export type BlogCategory =
  | "All"
  | "Performance Marketing"
  | "AI Automation"
  | "Business Growth"
  | "Industry Guides";

export type BlogPost = {
  slug: string;
  category: Exclude<BlogCategory, "All">;
  title: string;
  excerpt: string;
  readTime: string;
  featured?: boolean;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "meta-ads-by-industry",
    category: "Performance Marketing",
    title: "How Meta Ads work for different industries",
    excerpt:
      "Why the same budget performs differently in real estate, hospitality, and D2C — and what to fix first.",
    readTime: "8 min",
    featured: true,
  },
  {
    slug: "google-ads-losing-money",
    category: "Performance Marketing",
    title: "Why your Google Ads are losing money",
    excerpt:
      "The tracking gaps and landing page mistakes we see on almost every audit.",
    readTime: "6 min",
  },
  {
    slug: "whatsapp-automation-guide",
    category: "AI Automation",
    title: "How to automate your WhatsApp business",
    excerpt:
      "Lead qualification, booking confirmations, and follow-ups that run 24/7.",
    readTime: "7 min",
  },
  {
    slug: "ai-agents-operations",
    category: "AI Automation",
    title: "What AI agents can do for your operations",
    excerpt:
      "From support bots to internal workflows — where automation pays off first.",
    readTime: "9 min",
  },
  {
    slug: "agency-vs-in-house",
    category: "Business Growth",
    title: "When to hire a marketing agency vs build in-house",
    excerpt:
      "A founder's framework for deciding what to own internally and what to partner on.",
    readTime: "5 min",
  },
  {
    slug: "real-estate-performance-marketing",
    category: "Industry Guides",
    title: "Performance marketing for real estate",
    excerpt:
      "Lead gen, nurturing, and offline-to-online attribution for developers.",
    readTime: "10 min",
  },
];

export const BLOG_CATEGORIES: BlogCategory[] = [
  "All",
  "Performance Marketing",
  "AI Automation",
  "Business Growth",
  "Industry Guides",
];
