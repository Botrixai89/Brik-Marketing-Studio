"use client";

import dynamic from "next/dynamic";
import { useLenis } from "@/hooks/useLenis";

const CustomCursor = dynamic(
  () => import("@/components/ui/CustomCursor").then((m) => m.CustomCursor),
  { ssr: false }
);
const ScrollProgress = dynamic(
  () => import("@/components/ui/ScrollProgress").then((m) => m.ScrollProgress),
  { ssr: false }
);
const LoadingScreen = dynamic(
  () => import("@/components/ui/LoadingScreen").then((m) => m.LoadingScreen),
  { ssr: false }
);
const WhatsAppFloat = dynamic(
  () => import("@/components/ui/WhatsAppFloat").then((m) => m.WhatsAppFloat),
  { ssr: false }
);
const MouseGlow = dynamic(
  () => import("@/components/ui/MouseGlow").then((m) => m.MouseGlow),
  { ssr: false }
);

export function SiteProviders({ children }: { children: React.ReactNode }) {
  useLenis();

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <MouseGlow />
      <WhatsAppFloat />
      {children}
    </>
  );
}
