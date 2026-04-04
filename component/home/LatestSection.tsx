import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sidebarPosts, newsCategories } from "@/lib/data";
import { NewsPost } from "@/types";

function getCategoryName(id: number) {
  return newsCategories.find((c) => c.id === id)?.name ?? "News";
}


// latest 6 posts
const latestPosts = [...sidebarPosts]
  .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
  .slice(0, 6);

const IMAGES = [
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop&q=60",
];

/** Reusable stats row — dark variant for light backgrounds */
function StatsDark({ post }: { post: NewsPost }) {
  return (
    <div className="flex flex-wrap items-center gap-3 mt-3 pt-3 border-t border-[#e0bfbc]/30 text-[11px] font-semibold text-[#59413f]/50 uppercase tracking-wider">
      <span className="flex items-center gap-1">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
        {post.views.toLocaleString()}
      </span>
      <span className="flex items-center gap-1">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/></svg>
        {post.likes}
      </span>
      <span className="flex items-center gap-1">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"/></svg>
        {post.dislikes}
      </span>
      <span className="flex items-center gap-1">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
        {post.comments_count}
      </span>
    </div>
  );
}

export default function LatestSection() {
  const [lead, ...rest] = latestPosts;

  return (
    <section className="mx-auto max-w-screen-2xl px-6 lg:px-10 py-12">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px bg-[#73000c] w-10" />
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#73000c]">
          Latest
        </span>
        <div className="flex-1 h-px bg-[#e0bfbc]/40" />
        <Link
          href="/"
          className="text-[11px] font-semibold uppercase tracking-widest text-[#59413f] hover:text-[#73000c] transition-colors flex items-center gap-1"
        >
          View All
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Lead story */}
        <Link
          href="/show"
          className="lg:col-span-5 group relative rounded-2xl shadow-md cursor-pointer overflow-hidden"
        >
          {/* Image container — fills the card */}
          <Image
            src={IMAGES[0]}
            alt={lead.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Strong gradient so white text is always readable */}
          <div className="absolute inset-0 bg-linear-to-t from-[#1b1c1b] via-[#1b1c1b]/60 to-transparent" />

          {/* Text overlay */}
          <div className="relative z-10 flex flex-col justify-end h-full p-6 ">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fe9567] mb-2">
              {getCategoryName(lead.category_id)}
            </span>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-white leading-snug group-hover:text-[#fe9567] transition-colors mb-2">
              {lead.title}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-2">
              {lead.description}
            </p>
            <StatsDark post={lead} />
          </div>
        </Link>

        {/* Grid of smaller stories */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rest.map((post, idx) => (
            <Link
              key={post.id}
              href="/show"
              className="group flex flex-col rounded-xl border border-[#e0bfbc]/30 bg-[#fdfcfb] hover:bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="relative h-36 overflow-hidden shrink-0">
                <Image
                  src={IMAGES[(idx + 1) % IMAGES.length]}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1b1c1b]/50 to-transparent" />
                <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white bg-[#73000c] px-2 py-0.5 rounded-sm">
                  {getCategoryName(post.category_id)}
                </span>
              </div>

              <div className="p-4 flex flex-col flex-1">
                <h4 className="font-serif text-[15px] font-bold text-[#1b1c1b] leading-snug group-hover:text-[#73000c] transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-[13px] text-[#59413f]/70 leading-relaxed mt-1.5 line-clamp-2 flex-1">
                  {post.description}
                </p>
                <StatsDark post={post} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
