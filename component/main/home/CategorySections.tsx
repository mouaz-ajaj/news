import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Category, Post } from "@/types/post";


function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  }).format(new Date(value));
}

function CategoryBlock({
  category,
}: {
  category: Category;
}) {
  const images = [
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400&auto=format&fit=crop",
  ];

  const [lead, second, third] = category.posts;

  return (
    <div className="border-t border-[#e0bfbc]/40 pt-10">
      {/* Category Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="h-[3px] bg-[#73000c] w-8 rounded-full" />
          <h2 className="font-serif text-2xl font-bold text-[#1b1c1b]">
            {category.name}
          </h2>
        </div>
        <Link
          href={`/category/${category.slug}`}
          className="text-[11px] font-semibold uppercase tracking-widest text-[#59413f] hover:text-[#73000c] transition-colors flex items-center gap-1"
        >
          More {category.name}
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
        </Link>
      </div>

      {/* 3-column Layout: Lead + Two secondary */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Lead post */}
        {lead && (
          <Link
            href={"/show/" + (lead.ulid || lead.id)}
            className="md:col-span-6 group relative overflow-hidden rounded-xl shadow-md cursor-pointer"
          >
            <div className="relative h-64 md:h-80 w-full overflow-hidden shrink-0">
              <Image
                src={lead.images?.[0]||images[0]}
                alt={lead.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#111111]/95 via-[#111111]/45 to-[#111111]/10" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-5">
              <h3 className="relative font-serif text-lg md:text-xl font-bold text-white leading-snug group-hover:text-[#ffe1d1] transition-colors mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                {lead.title}
              </h3>
              <p className="text-white/85 leading-relaxed text-[13px] mb-3 line-clamp-2 drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]">
                {lead.description}
              </p>
                <div className="flex flex-wrap items-center gap-3 mt-3 pt-3 border-t border-white/30 text-[11px] font-semibold text-white/80 uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                        {lead.views.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/></svg>
                        {lead.likes}
                    </span>
                    <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 012 2h-2.5"/></svg>
                        {lead.dislikes}
                    </span>
                    <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                        {lead.comments_count}
                    </span>
                </div>
            </div>
          </Link>
        )}

        {/* Secondary posts */}
        <div className="md:col-span-6 flex flex-col gap-4">
          {[second, third].filter(Boolean).map((post:Post, idx) => (
            <Link
              key={idx}
              href={`/show/${post.ulid || post.id}`}
              className="group flex flex-col rounded-xl border border-[#e0bfbc]/25 bg-[#fdfcfb] hover:bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex-1"
            >
              <div className="relative h-32 shrink-0 overflow-hidden">
                <Image
                  src={images[idx + 1]}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1b1c1b]/30 to-transparent" />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h4 className="font-serif text-[14px] font-bold text-[#1b1c1b] leading-snug group-hover:text-[#73000c] transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-[12px] text-[#59413f]/70 leading-relaxed mt-1.5 line-clamp-2 flex-1">
                  {post.description}
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-3 pt-3 border-t border-[#e0bfbc]/25 text-[11px] font-semibold text-[#59413f]/55 uppercase tracking-wider">
                  <span>{formatDate(post.created_at||"2025-12-10")}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                    {post.views.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/></svg>
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 012 2h-2.5"/></svg>
                    {post.dislikes}
                  </span>
                  <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                        {lead.comments_count}
                    </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CategorySections({categories}: {categories: Category[]}) {
  return (
    <section className="mx-auto max-w-screen-2xl px-6 lg:px-10 py-12 space-y-12">
      {categories.map((category) => {
        return (
          <CategoryBlock key={category.slug} category={category} />
        );
      })}
    </section>
  );
}
