"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ComponentType } from "react";
import {
  Briefcase,
  FileText,
  Home,
  Layers,
  Menu,
  Moon,
  Phone,
  Sun,
  Users,
  X,
} from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  cta?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/#services", icon: Layers },
  { label: "Our Work", href: "/#work", icon: Briefcase },
  { label: "About", href: "/#about", icon: Users },
  { label: "Blog", href: "/#blog", icon: FileText },
  { label: "Book a Call", href: "/#contact", icon: Phone, cta: true },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  const links = NAV_ITEMS.filter((item) => !item.cta);
  const cta = NAV_ITEMS.find((item) => item.cta)!;
  const CtaIcon = cta.icon;

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <nav
        aria-label="Main navigation"
        className={`
          w-full border-b transition-all duration-300
          backdrop-blur-xl backdrop-saturate-150
          ${
            scrolled
              ? "border-white/10 bg-[#0b384d]/75 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
              : "border-white/[0.06] bg-[#071018]/55"
          }
        `}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
          <Link href="/" className="shrink-0" aria-label="BRIK — home">
            <Image
              src="/logo.png"
              alt="BRIK Marketing & Automation"
              width={500}
              height={500}
              priority
              className="block h-10 w-auto object-contain"
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex" role="list">
            {links.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  role="listitem"
                  className={`
                    relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200
                    ${
                      active
                        ? "text-white"
                        : "text-white/55 hover:bg-white/[0.06] hover:text-white/90"
                    }
                  `}
                >
                  {item.label}
                  {active && (
                    <span
                      aria-hidden
                      className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-primary"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={cta.href}
              className="
                inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2
                text-sm font-semibold text-[#071018]
                shadow-[0_0_24px_rgba(226,254,4,0.2)]
                transition-all duration-200 hover:brightness-105
              "
            >
              <CtaIcon className="h-4 w-4" strokeWidth={2} />
              {cta.label}
            </Link>

            {mounted ? (
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                className="
                  flex h-9 w-9 items-center justify-center rounded-full
                  border border-white/10 bg-white/[0.06] text-white/50
                  transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white
                "
              >
                {dark ? (
                  <Sun className="h-4 w-4" strokeWidth={2} />
                ) : (
                  <Moon className="h-4 w-4" strokeWidth={2} />
                )}
              </button>
            ) : (
              <span className="h-9 w-9 rounded-full border border-white/10" aria-hidden />
            )}
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            {mounted ? (
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/50"
              >
                {dark ? (
                  <Sun className="h-4 w-4" strokeWidth={2} />
                ) : (
                  <Moon className="h-4 w-4" strokeWidth={2} />
                )}
              </button>
            ) : (
              <span className="h-9 w-9 rounded-full border border-white/10" aria-hidden />
            )}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70"
            >
              {open ? (
                <X className="h-4 w-4" strokeWidth={2} />
              ) : (
                <Menu className="h-4 w-4" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="
            w-full border-b border-white/10 bg-[#071018]/90 px-5 py-4
            backdrop-blur-xl backdrop-saturate-150 sm:px-8 lg:hidden
          "
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((item) => {
              const active = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`
                    flex items-center gap-3 rounded-xl px-3 py-3 text-[15px] font-medium
                    transition-colors
                    ${
                      active
                        ? "bg-white/[0.08] text-white"
                        : "text-white/60 hover:bg-white/[0.04] hover:text-white/90"
                    }
                  `}
                >
                  <Icon
                    className={`h-4 w-4 ${active ? "text-primary" : "text-white/35"}`}
                    strokeWidth={2}
                  />
                  {item.label}
                </Link>
              );
            })}
            <div className="my-2 h-px bg-white/[0.08]" />
            <Link
              href={cta.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-accent py-3 text-sm font-semibold text-[#071018]"
            >
              <CtaIcon className="h-4 w-4" strokeWidth={2} />
              {cta.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
