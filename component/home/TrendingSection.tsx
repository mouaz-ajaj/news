import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sidebarPosts, newsCategories } from "@/lib/data";

function getCategoryName(id: number) {
  return newsCategories.find((c) => c.id === id)?.name ?? "News";
}

const mostViewed = [...sidebarPosts].sort((a, b) => b.views - a.views).slice(0, 5);
const mostLiked = [...sidebarPosts].sort((a, b) => b.likes - a.likes).slice(0, 5);

const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop",
];

function PostRankItem({
  post,
  rank,
}: {
  post: (typeof sidebarPosts)[0];
  rank: number;
}) {
  return (
    <Link
      href="/show"
      className="group flex items-center gap-4 py-4 border-b border-[#e0bfbc]/25 last:border-0 hover:bg-[#fbf9f7]/50 -mx-4 px-4 rounded-lg transition-colors duration-200"
    >
      <span className="font-serif text-4xl font-bold text-[#e0bfbc] group-hover:text-[#73000c]/30 transition-colors leading-none min-w-8 text-center">
        {String(rank).padStart(2, "0")}
      </span>
      <div className="flex-1 min-w-0">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#73000c]">
          {getCategoryName(post.category_id)}
        </span>
        <h4 className="font-serif text-[15px] font-bold text-[#1b1c1b] leading-snug mt-0.5 group-hover:text-[#73000c] transition-colors line-clamp-1">
          {post.title}
        </h4>
        <p className="text-[12px] text-[#59413f]/60 leading-relaxed mt-0.5 line-clamp-1">
          {post.description}
        </p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-[11px] font-semibold text-[#59413f]/55 uppercase tracking-wider">
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            {post.views.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/></svg>
            {post.likes.toLocaleString()}
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
      </div>
      <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={CARD_IMAGES[rank - 1]}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </Link>
  );
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="h-px bg-[#73000c] w-8" />
      <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#73000c]">
        {label}
      </span>
      <div className="flex-1 h-px bg-[#e0bfbc]/40" />
    </div>
  );
}

export default function TrendingSection() {
  return (
    <section className="mx-auto max-w-screen-2xl px-6 lg:px-10 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Most Viewed */}
        <div className="bg-white/60 rounded-2xl border border-[#e0bfbc]/30 p-6 shadow-sm">
          <SectionHeader label="Most Viewed" />
          <div>
            {mostViewed.map((post, i) => (
              <PostRankItem key={post.id} post={post} rank={i + 1} />
            ))}
          </div>
        </div>

        {/* Most Liked */}
        <div className="bg-white/60 rounded-2xl border border-[#e0bfbc]/30 p-6 shadow-sm">
          <SectionHeader label="Most Liked" />
          <div>
            {mostLiked.map((post, i) => (
              <PostRankItem key={post.id} post={post} rank={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
