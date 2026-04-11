import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/lib/data";
import {  newsCategories } from "@/lib/data";
import { Post } from "@/types/post";
function getCategoryName(id: number) {
  return newsCategories.find((c) => c.id === id)?.name ?? "News";
}


const todayDate = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
}).format(new Date());


function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export default function HeroSection({featuredPosts}:{featuredPosts:Post[]}) {
  const featuredPost = featuredPosts?.[0]||newsCategories[0];
  const secondaryPosts = featuredPosts?.slice(1, 4);
  const featuredHref = `/show/${featuredPost.ulid || featuredPost.id}`;
  return (
    <section className="mx-auto max-w-screen-2xl px-6 lg:px-10 pt-32 pb-12">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px bg-[#73000c] w-10" />
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#73000c]">
          Featured
        </span>
        <div className="flex-1 h-px bg-[#e0bfbc]/40" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#59413f]/60">
          {todayDate}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Hero Main Card */}
        <div className="lg:col-span-8 group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer">
          <div className="relative h-[520px] md:h-[600px] overflow-hidden">
            <Image
              src={featuredPost.images?.[0]|| IMAGES[0]}
              alt={featuredPost.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#1b1c1b]/90 via-[#1b1c1b]/30 to-transparent" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] bg-[#73000c] text-white">
                Category
              </span>
            
            </div>

            <h2 className="font-serif text-2xl md:text-4xl font-bold text-white leading-tight mb-4 max-w-2xl group-hover:text-[#fe9567] transition-colors duration-300">
              {featuredPost.title}
            </h2>

            <div className="hidden md:block mb-6 max-w-xl">
              <p className="text-white/75 text-sm leading-relaxed line-clamp-2">
                {featuredPost.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-white/60 text-[12px] font-semibold uppercase tracking-wider border-t border-white/10 pt-5">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                {featuredPost.views?.toLocaleString()}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/></svg>
                {featuredPost.likes?.toLocaleString()}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"/></svg>
                {featuredPost.dislikes}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                {featuredPost.comments_count}
              </span>
              <Link
                href={featuredHref}
                className="ml-auto flex items-center gap-2 px-4 py-2 rounded-sm bg-white/10 hover:bg-[#73000c] text-white text-[11px] uppercase tracking-widest transition-colors duration-300 border border-white/20"
              >
                Read Story
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Secondary Cards Column */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {secondaryPosts?.map((post, idx) => (
            <Link
              key={post.id}
              href={`/show/${post.ulid || post.id}`}
              className="group flex gap-4 rounded-xl border border-[#e0bfbc]/30 bg-white/60 hover:bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex-1"
            >
              <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={post.images?.[0]||IMAGES[(idx + 1) % IMAGES.length]}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1b1c1b]/40 to-transparent" />
              </div>

              <div className="flex flex-col justify-between min-w-0">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#73000c]">
                    Category
                  </span>
                  <h3 className="font-serif text-[15px] font-bold text-[#1b1c1b] leading-snug mt-1 group-hover:text-[#73000c] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[12px] text-[#59413f]/65 leading-relaxed mt-1 line-clamp-1">
                    {post.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold text-[#59413f]/55 uppercase tracking-wider mt-2">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                    {post.views?.toLocaleString()}
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
