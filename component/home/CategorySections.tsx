import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sidebarPosts, newsCategories } from "@/lib/data";
import { NewsCategory, NewsPost } from "@/types";

const CATEGORY_IMAGES: Record<number, string[]> = {
  1: [
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400&auto=format&fit=crop",
  ],
  2: [
    "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop",
  ],
  3: [
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&auto=format&fit=crop",
  ],
  4: [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&auto=format&fit=crop",
  ],
  5: [
    "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&auto=format&fit=crop",
  ],
  6: [
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400&auto=format&fit=crop",
  ],
  7: [
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&auto=format&fit=crop",
  ],
  8: [
    "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&auto=format&fit=crop",
  ],
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  }).format(new Date(value));
}

function CategoryBlock({
  category,
  posts,
}: {
  category: NewsCategory;
  posts: NewsPost[];
}) {
  const images = CATEGORY_IMAGES[category.id] ?? [
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400&auto=format&fit=crop",
  ];

  const [lead, second, third] = posts;

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
            href="/show"
            className="md:col-span-6 group relative overflow-hidden rounded-xl shadow-md cursor-pointer"
          >
            <div className="relative h-64 md:h-80 w-full overflow-hidden shrink-0">
              <Image
                src={images[0]}
                alt={lead.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1b1c1b]/90 via-[#1b1c1b]/30 to-transparent" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-5">
              <h3 className="relative font-serif text-lg md:text-xl font-bold text-[#1b1c1b] leading-snug group-hover:text-[#73000c] transition-colors mb-2">
                {lead.title}
              </h3>
              <p className="text-[#59413f]/70 leading-relaxed text-[13px] mb-3 line-clamp-2">
                {lead.description}
              </p>
                <div className="flex flex-wrap items-center gap-3 mt-3 pt-3 border-t border-[#e0bfbc]/30 text-[11px] font-semibold text-[#59413f]/50 uppercase tracking-wider">
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
          {[second, third].filter(Boolean).map((post, idx) => (
            <Link
              key={post.id}
              href="/show"
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
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#e0bfbc]/25 text-[11px] font-semibold text-[#59413f]/50 uppercase tracking-wider">
                  <span>{formatDate(post.created_at)}</span>
                  <span>·</span>
                  <span>{post.views.toLocaleString()} views</span>
                  <span>·</span>
                  <span>{post.likes} ♥</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CategorySections() {
  return (
    <section className="mx-auto max-w-screen-2xl px-6 lg:px-10 py-12 space-y-12">
      {newsCategories.map((category) => {
        const posts = sidebarPosts
          .filter((p) => p.category_id === category.id)
          .slice(0, 3);
        if (posts.length === 0) return null;
        return (
          <CategoryBlock key={category.id} category={category} posts={posts} />
        );
      })}
    </section>
  );
}
