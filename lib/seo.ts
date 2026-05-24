import type { Metadata } from "next";
import { SITE } from "@/constants/site";

const baseUrl = `https://${SITE.domain}`;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${SITE.name} | India's Growth Partner`,
    template: `%s | ${SITE.shortName}`,
  },
  description:
    "BRIK consults, strategizes, executes, automates, and tracks growth for businesses across India and UAE. Marketing, AI automation, ERP, and performance — under one roof.",
  keywords: [
    "marketing agency Raipur",
    "digital marketing agency India",
    "AI automation agency India",
    "business automation consulting India",
    "performance marketing agency",
    "full service marketing agency",
    "WhatsApp automation for business",
    "Zoho CRM implementation India",
    "Odoo ERP setup India",
  ],
  authors: [{ name: "BRIK Marketing & Automation" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    siteName: SITE.name,
    title: `${SITE.name} | Growth Partner for Ambitious Businesses`,
    description:
      "More than an agency — a full-stack growth platform. Strategy, marketing, automation, and ERP under one roof.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description:
      "India's growth partner for businesses that want more than posts and ads.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  email: SITE.email,
  telephone: `+${SITE.whatsapp}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Raipur",
    addressRegion: "Chhattisgarh",
    addressCountry: "IN",
  },
  sameAs: [
    `https://instagram.com/${SITE.instagram.replace("@", "")}`,
    "https://www.linkedin.com/company/brik-marketing-studio",
  ],
  description: defaultMetadata.description,
};
