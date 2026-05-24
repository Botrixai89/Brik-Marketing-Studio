import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  Megaphone,
  MonitorSmartphone,
  Users,
} from "lucide-react";

export type ServicePillar = {
  id: string;
  title: string;
  icon: LucideIcon;
  highlights: string[];
  fullList: string[];
};

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: "consultation",
    title: "Business Consultation",
    icon: Users,
    highlights: [
      "Discovery calls & business audits",
      "Brand positioning & competitor research",
      "Growth strategy & funnel planning",
    ],
    fullList: [
      "Discovery calls",
      "Business audits",
      "Brand positioning",
      "Competitor research",
      "Growth strategy",
      "Funnel planning",
      "Long-term scaling roadmaps",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Creative",
    icon: Megaphone,
    highlights: [
      "Social media & content strategy",
      "Branding, design & video production",
      "Instagram · LinkedIn · YouTube",
    ],
    fullList: [
      "Social media management",
      "Content strategy",
      "Graphic design",
      "Branding & rebranding",
      "Logo design",
      "Reels & video production",
      "Product shoots",
      "AI-generated creatives",
      "Instagram · LinkedIn · Facebook · YouTube marketing",
    ],
  },
  {
    id: "web-seo",
    title: "Web, App & SEO",
    icon: MonitorSmartphone,
    highlights: [
      "Website design & development",
      "UI/UX & landing pages",
      "Google SEO & conversion optimization",
    ],
    fullList: [
      "Website design & development",
      "Website redesign",
      "UI/UX",
      "Landing pages",
      "App development",
      "E-commerce solutions",
      "Google SEO",
      "Local SEO",
      "Conversion optimization",
    ],
  },
  {
    id: "performance",
    title: "Performance & Advertising",
    icon: BarChart3,
    highlights: [
      "Meta · Google · LinkedIn Ads",
      "Lead generation & ROI tracking",
      "Billboards · PR · influencer marketing",
    ],
    fullList: [
      "Meta Ads",
      "Google Ads",
      "LinkedIn Ads",
      "Lead generation",
      "ROI tracking",
      "Billboard advertising",
      "Brochures & print campaigns",
      "Influencer marketing",
      "PR & event marketing",
      "Personal branding",
    ],
  },
  {
    id: "automation-erp",
    title: "AI Automation & ERP",
    icon: Bot,
    highlights: [
      "WhatsApp automation & AI chatbots",
      "CRM & workflow automation",
      "Zoho · Odoo · custom ERP",
    ],
    fullList: [
      "WhatsApp automation",
      "AI chatbots",
      "CRM systems",
      "Workflow automation",
      "Zoho · Odoo · Custom ERP",
      "Voice agents",
      "Email & lead automation",
      "Dashboard systems",
      "API integrations",
    ],
  },
];
