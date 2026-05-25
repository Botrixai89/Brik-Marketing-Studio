"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useGsapContext } from "@/hooks/useGsapContext";
import {
  FOOTER_COMPANY,
  FOOTER_SERVICES,
  SITE,
  whatsappUrl,
} from "@/constants/site";
import { FaI, FaTwitter } from "react-icons/fa6";

export function Footer() {
  const year = new Date().getFullYear();

  useGsapContext(({ gsap }) => {
    gsap.from("footer [data-footer-item]", {
      y: 20,
      opacity: 0,
      stagger: 0.06,
      duration: 0.6,
      scrollTrigger: { trigger: "footer", start: "top 90%" },
    });
  }, []);

  return (
    <footer className="relative border-t border-border bg-footer-background-soft section-padding pb-8 pt-16 border-2 border-red-600">
      <div className="container-custom grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div data-footer-item>
          <Link href="/" aria-label="BRIK home">
            <Image
              src="/logo.png"
              alt="BRIK"
              width={180}
              height={60}
              className="h-14 w-auto object-contain"
            />
          </Link>
          <p className="mt-4 text-sm text-text-muted">{SITE.tagline}</p>
          <p className="mt-3 text-sm text-text-muted">
            {SITE.offices.join(" · ")}
          </p>
          <p className="mt-2 text-sm text-text-muted">
            <a href={`tel:${SITE.phone}`} className="hover:text-primary">
              {SITE.phoneDisplay}
            </a>
            {" · "}
            <a href={`mailto:${SITE.email}`} className="hover:text-primary">
              {SITE.email}
            </a>
          </p>
        </div>

        <div data-footer-item>
          <p className="text-xs font-semibold uppercase tracking-widest text-text">
            Services
          </p>
          <ul className="mt-4 space-y-2">
            {FOOTER_SERVICES.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-text-muted transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div data-footer-item>
          <p className="text-xs font-semibold uppercase tracking-widest text-text">
            Company
          </p>
          <ul className="mt-4 space-y-2">
            {FOOTER_COMPANY.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-text-muted transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div data-footer-item>
          <p className="text-xs font-semibold uppercase tracking-widest text-text">
            Connect
          </p>
          <ul className="mt-4 space-y-2 text-sm text-text-muted">
                      <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                <FaWhatsapp className="h-4 w-4 shrink-0" />
                <FaInstagram className="h-4 w-4 shrink-0" />
                <FaTwitter className="h-4 w-4 shrink-0" />
                
              </a>
            </li>
            <li>{SITE.domain}</li>
          </ul>
        </div>
      </div>

      <div className="container-custom mt-12 border-t border-border pt-8 text-center text-xs text-text-muted">
        <p>
          © {year} {SITE.name}. All rights reserved.
        </p>
        <p className="mt-2">
          Raipur · Dubai · Mumbai, India&apos;s growth partner for ambitious
          businesses.
        </p>
      </div>
    </footer>
  );
}
