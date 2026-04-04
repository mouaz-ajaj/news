import React from "react";
import ShareButton from "@/component/article/ShareButton";
import Image from "next/image";
export default function ArticleHeader() {
  return (
    <>
      <section className="mx-auto mb-10 mt-28 max-w-6xl px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px bg-[#73000c] w-12" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#73000c]">
              Technology
            </span>
          </div>
          <h1 className="font-serif max-w-4xl text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-[#1b1c1b]">
            Breaking News: Major Advances in Renewable Energy Technology Announced
          </h1>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 border-y border-[#e0bfbc]/30 py-5">
          {/* Left Side: Author, Date, Comments */}
          <div className="flex flex-wrap items-center gap-4 md:gap-5 text-[#1b1c1b]">
            {/* Author */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="h-10 w-10 overflow-hidden rounded-full border border-[#eae8e6] bg-[#efedec] shadow-sm transition-all duration-500 group-hover:border-[#73000c]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfMVs3HArlHL7y2rpt703cYEotcLe8CodkMfpTcOHlAYfkiYkDx2mFSZ5IlPF0ufNoJh9ewPG4qtslbY6azfLhXTV-Rp2BA0SsJ67kYw0HuGQ93vpVFCYsmvWcRnT15fW73GFmNEy9-sLx2nhdHSt8OEkPDHfEUjO-sSIGH-fAfxFygPSaEZWTC6CPBSZoO8QmD8s_BLBl-SlDX7reAfxbqAP_uZryGVrUQwHsBBD8UrWbsSzyWbNRDYbCIj5FBkaJ0G26sD7jlKQ"
                  alt="Author"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                />
              </div>
              <p className="font-serif text-[15px] font-bold group-hover:text-[#73000c] transition-colors">
                Dr. Emily Carter
              </p>
            </div>

            <div className="hidden sm:block h-1 w-1 rounded-full bg-[#59413f]/40" />

            {/* Date */}
            <p className="text-[13px] font-semibold text-[#59413f]">
              Sept 15, 2024
            </p>

            <div className="hidden sm:block h-1 w-1 rounded-full bg-[#59413f]/40" />

            {/* Comments */}
            <div className="flex items-center gap-1.5 text-[13px] font-semibold tracking-wider group cursor-pointer hover:text-[#73000c] text-[#59413f] transition-colors" title="Comments">
              <svg className="w-4 h-4 text-[#59413f]/50 group-hover:text-[#73000c] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              <span>856 Comments</span>
            </div>
          </div>

          {/* Right Side: Views, Likes, Dislikes, Share */}
          <div className="flex items-center gap-4 sm:gap-6 text-[#59413f]">
            <div className="flex items-center gap-1.5 text-[13px] font-semibold tracking-wider group cursor-pointer hover:text-[#73000c] transition-colors" title="Views">
              <svg className="w-4 h-4 text-[#59413f]/50 group-hover:text-[#73000c] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              <span>124.5K</span>
            </div>

            <div className="flex items-center gap-4 sm:border-l border-[#e0bfbc]/40 sm:pl-6">
              <button className="flex items-center gap-1.5 text-[13px] font-semibold tracking-wider group hover:text-[#73000c] transition-colors" title="Like">
                <svg className="w-4 h-4 text-[#59413f]/50 group-hover:text-[#73000c] transition-colors group-active:scale-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                <span>12.4K</span>
              </button>
              <button className="flex items-center gap-1.5 text-[13px] font-semibold tracking-wider group hover:text-[#1b1c1b] transition-colors" title="Dislike">
                <svg className="w-4 h-4 text-[#59413f]/50 group-hover:text-[#1b1c1b] transition-colors group-active:scale-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" /></svg>
                <span>243</span>
              </button>
            </div>
            <ShareButton />

          </div>
        </div>
      </section>

      <section className="mx-auto mb-20 max-w-7xl px-4">
        <div className="group relative h-[600px] md:h-[716px] w-full overflow-hidden rounded-xl shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1541888052-87002b1f80ec?q=80&w=2670&auto=format&fit=crop"
            alt="Renewable Energy Facility"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#1b1c1b]/80 via-transparent to-transparent opacity-80" />

          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <p className="max-w-xl text-sm md:text-base font-serif italic text-white/95 leading-relaxed">
              The future of grid-scale storage is here: New crystalline structures
              allowing for 40% more efficiency in solar absorption.
            </p>

            <div className="flex gap-3">
              <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/30 hover:scale-105 active:scale-95">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/30 hover:scale-105 active:scale-95">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
