"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  BLOG_CATEGORIES,
  BLOG_POSTS,
  type BlogCategory,
} from "@/constants/blog";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function BlogSection() {
  const [category, setCategory] = useState<BlogCategory>("All");
  const filtered =
    category === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === category);
  const featured = filtered.find((p) => p.featured) ?? filtered[0];
  const rest = filtered.filter((p) => p.slug !== featured?.slug);

  return (
    <SectionWrapper id="blog" className="bg-background-soft">
      <div className="container-custom">
        <SectionLabel>Blog</SectionLabel>
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Marketing insights that actually help your business. No fluff.
        </h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`
                rounded-full px-4 py-2 text-sm font-medium transition-all
                ${
                  category === cat
                    ? "bg-primary text-white"
                    : "border border-border text-text-muted hover:border-primary/40"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {featured && (
          <article className="card group mt-10 grid gap-6 p-8 lg:grid-cols-2 lg:p-10">
            <div>
              <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                {featured.category}
              </span>
              <h3 className="mt-4 text-2xl font-bold text-text group-hover:text-primary">
                {featured.title}
              </h3>
              <p className="mt-3 text-text-muted">{featured.excerpt}</p>
              <p className="mt-4 text-sm text-text-muted">{featured.readTime} read</p>
            </div>
            <div className="flex items-end justify-end">
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Read article <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </article>
        )}

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <article
              key={post.slug}
              className="card group p-6 transition-all hover:-translate-y-1 hover:border-primary/30"
            >
              <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-semibold text-primary">
                {post.category}
              </span>
              <h3 className="mt-3 font-bold text-text group-hover:text-primary">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-text-muted">
                {post.excerpt}
              </p>
              <p className="mt-4 text-xs text-text-muted">{post.readTime}</p>
            </article>
          ))}
        </div>

        <form
          className="mt-12 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Your email"
            aria-label="Email for newsletter"
            className="flex-1 rounded-full border border-border bg-surface px-5 py-3 text-sm outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#071018]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}
