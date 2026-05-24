"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MagneticButton } from "@/components/ui/MagneticButton";

const PLATFORMS = [
  {
    id: "zoho",
    name: "Zoho Suite",
    services: [
      "Zoho CRM · Zoho Books · Zoho Inventory · Zoho Desk",
      "Zoho People · Zoho Analytics · Zoho Campaigns · Zoho One",
      "Third-party integrations · Training · Ongoing support",
    ],
  },
  {
    id: "odoo",
    name: "Odoo ERP",
    services: [
      "Odoo CRM · Accounting & Finance · Inventory & Warehouse",
      "Manufacturing · HR & Payroll · E-commerce · POS",
      "Project Management · Custom modules · Migration · API integration",
    ],
  },
  {
    id: "custom",
    name: "Custom Solutions",
    services: [
      "Business process audit · Custom ERP consulting",
      "Custom dashboards · Data migration · Real-time reporting",
      "BI dashboards · Platform-agnostic process documentation",
    ],
  },
];

const ERP_INDUSTRIES = [
  "Manufacturing",
  "Retail",
  "Real Estate",
  "Hospitality",
  "Healthcare",
  "Trading",
  "Services",
];

export function ErpSection() {
  const [active, setActive] = useState("zoho");
  const platform = PLATFORMS.find((p) => p.id === active)!;

  return (
    <SectionWrapper id="erp" className="bg-background-soft">
      <div className="container-custom">
        <SectionLabel>ERP Services</SectionLabel>
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-text sm:text-4xl">
          When marketing works, operations must keep up. We build the systems
          that make that possible.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-text-muted">
          ERP and CRM systems are the backbone of a business that scales. We
          implement, customize, and integrate the right platform for your size,
          industry, and budget.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {PLATFORMS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(p.id)}
              className={`
                rounded-full px-5 py-2.5 text-sm font-semibold transition-all
                ${
                  active === p.id
                    ? "bg-primary text-white"
                    : "border border-border bg-surface text-text-muted hover:border-primary/40"
                }
              `}
            >
              {p.name}
            </button>
          ))}
        </div>

        <article className="card mt-6 p-8 lg:p-10">
          <h3 className="text-2xl font-bold text-text">{platform.name}</h3>
          <ul className="mt-6 space-y-3 text-text-muted">
            {platform.services.map((s) => (
              <li key={s} className="flex gap-2">
                <span className="text-primary">—</span>
                {s}
              </li>
            ))}
          </ul>
        </article>

        <p className="mt-6 text-sm font-medium text-primary">
          We start with a needs assessment before recommending any platform.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {ERP_INDUSTRIES.map((ind) => (
            <span
              key={ind}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-text-muted"
            >
              {ind}
            </span>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-text-muted">
          We start with a consultation — not a platform pitch. We recommend what
          fits your business, not what earns us the most commission.
        </p>

        <div className="mt-8">
          <MagneticButton href="/contact" variant="primary">
            Not sure if your business needs ERP? 30-minute free consultation.
          </MagneticButton>
        </div>
      </div>
    </SectionWrapper>
  );
}
