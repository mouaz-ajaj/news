"use client";
import { useState } from "react";
import { Category } from "@/types/post";

function formatCompactDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export default function Sidebar({categories}: {categories:Category[]}) {
  const [selectedCategorySlug, setSelectedCategorySlug] = useState(categories[0].slug);

  const selectedCategory =
    categories.find((category) => category.slug === selectedCategorySlug) ??
    categories[0];

  const posts = selectedCategory.posts

  return (
    <aside className="space-y-10 lg:col-span-4 lg:self-start">
      <section className="rounded-[28px] border border-[#e0bfbc]/40 bg-white/70 p-6 shadow-[0_20px_60px_-40px_rgba(27,28,27,0.35)] backdrop-blur-sm sm:p-7">
        <div className="mb-6">
          <div className="masthead-rule mb-4" />
          <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[#73000c]">
            Browse Sections
          </p>
          <h4 className="headline-font text-3xl italic text-[#1b1c1b]">
            More from {selectedCategory.name}
          </h4>
        </div>

        <div className="mb-8 flex flex-wrap gap-2.5">
          {categories.map((category) => {
            const isActive = category.slug === selectedCategory.slug;

            return (
              <button
                key={category.slug}
                type="button"
                onClick={() => setSelectedCategorySlug(category.slug)}
                className={`rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                  isActive
                    ? "border-[#73000c] bg-[#73000c] text-white shadow-lg shadow-[#73000c]/20"
                    : "border-[#e0bfbc]/60 bg-[#fbf9f7] text-[#59413f] hover:border-[#73000c] hover:text-[#73000c]"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        <div className="space-y-5">
          {posts.map((post, index) => (
            <article
              key={post.id}
              className="group rounded-2xl border border-[#e0bfbc]/35 bg-[#fbf9f7] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#73000c]/35 hover:shadow-[0_18px_45px_-30px_rgba(115,0,12,0.45)]"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#73000c]">
                  {selectedCategory.name}
                </span>
                <span className="text-[11px] text-[#59413f]">
                  {formatCompactDate(post.created_at||"2026-4-4")}
                </span>
              </div>

              <h5 className="headline-font mb-3 text-[1.45rem] leading-tight text-[#1b1c1b] transition-colors group-hover:text-[#73000c]">
                {post.title}
              </h5>

              <p className="mb-5 text-sm leading-7 text-[#59413f]">
                {post.description}
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#e0bfbc]/35 pt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#59413f]">
                <span>{post.views} views</span>
                <span>{post.likes} likes</span>
                <span>{post.comments_count} comments</span>
              </div>

              {index < posts.length - 1 ? (
                <div className="mt-5 h-px bg-gradient-to-r from-[#73000c]/20 via-[#e0bfbc]/50 to-transparent" />
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </aside>
  );
}
