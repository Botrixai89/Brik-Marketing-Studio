import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on marketing, AI automation, ERP, and business growth from the BRIK team.",
};

const BlogSection = dynamic(() =>
  import("@/sections/BlogSection").then((m) => m.BlogSection)
);

export default function BlogPage() {
  return <BlogSection />;
}
