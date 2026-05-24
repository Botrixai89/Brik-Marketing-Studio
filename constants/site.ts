export const SITE = {
  name: "BRIK Marketing & Automation Studio",
  shortName: "BRIK",
  tagline: "Your business's growth partner from launch to scale.",
  email: "contact@brikmarketingautomation.com",
  altEmail: "brikmarketingstudio@gmail.com",
  phone: "9329796400",
  phoneDisplay: "+91 93297 96400",
  whatsapp: "919329796400",
  instagram: "@brikmarketingautomation",
  instagramAlt: "@brikmarketingstudio",
  linkedin: "BRIK Marketing Studio",
  domain: "brikmarketingautomation.com",
  offices: ["Raipur, Chhattisgarh", "Mumbai (August 2025)", "Dubai"],
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Book a Call", href: "/contact", cta: true },
] as const;

export const FOOTER_SERVICES = [
  { label: "Business Consultation", href: "/services" },
  { label: "Digital Marketing", href: "/services" },
  { label: "Performance Marketing", href: "/services" },
  { label: "AI Automation", href: "/services" },
  { label: "ERP Services", href: "/services" },
] as const;

export const FOOTER_COMPANY = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Book a Call", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
] as const;

export function whatsappUrl(message?: string) {
  const text = encodeURIComponent(
    message ??
      "Hi BRIK, I found your website and would like a free discovery call about my business."
  );
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}
