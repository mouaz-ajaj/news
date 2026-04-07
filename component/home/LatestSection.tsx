import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/types/post";
import {IMAGES} from "@/lib/data"

function StatsDark({ post }: { post: Post }) {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-[#e0bfbc]/30 pt-3 text-[11px] font-semibold uppercase tracking-wider text-[#59413f]/50">
      <span className="flex items-center gap-1">
        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
        {post.views.toLocaleString()}
      </span>
      <span className="flex items-center gap-1">
        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/></svg>
        {post.likes}
      </span>
      <span className="flex items-center gap-1">
        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"/></svg>
        {post.dislikes}
      </span>
      <span className="flex items-center gap-1">
        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
        {post.comments_count}
      </span>
    </div>
  );
}

export default function LatestSection({ latestPosts }: { latestPosts: Post[] }) {
  const [lead, ...rest] = latestPosts.slice(0, 7);
  if (!lead) return null;

  const leadImage = lead.images?.[0] || IMAGES[0];
  const leadHref = lead.ulid ? `/show?ulid=${lead.ulid}` : "/show";

  return (
    <section className="mx-auto max-w-screen-2xl px-6 py-12 lg:px-10">
      <div className="mb-8 flex items-center gap-4">
        <div className="h-px w-10 bg-[#73000c]" />
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#73000c]">
          Latest
        </span>
        <div className="h-px flex-1 bg-[#e0bfbc]/40" />
        <Link
          href="/"
          className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-[#59413f] transition-colors hover:text-[#73000c]"
        >
          View All
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <Link
          href={leadHref}
          className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-md lg:col-span-5"
        >
          <Image
            src={leadImage}
            alt={lead.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#1b1c1b] via-[#1b1c1b]/60 to-transparent" />

          <div className="relative z-10 flex h-full flex-col justify-end p-6">
            <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#fe9567]">
              {lead.category?.name ?? "News"}
            </span>
            <h3 className="mb-2 font-serif text-xl font-bold leading-snug text-white transition-colors group-hover:text-[#fe9567] md:text-2xl">
              {lead.title}
            </h3>
            <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-white/70">
              {lead.description}
            </p>
            <StatsDark post={lead} />
          </div>
        </Link>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
          {rest.map((post, idx) => {
            const postHref = post.ulid ? `/show?ulid=${post.ulid}` : "/show";
            const postImage = post.images?.[0] || IMAGES[(idx + 1) % IMAGES.length];

            return (
              <Link
                key={post.id}
                href={postHref}
                className="group flex flex-col overflow-hidden rounded-xl border border-[#e0bfbc]/30 bg-[#fdfcfb] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
              >
                <div className="relative h-36 shrink-0 overflow-hidden">
                  <Image
                    src={postImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#1b1c1b]/50 to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-sm bg-[#73000c] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                    {post.category?.name ?? "News"}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h4 className="line-clamp-2 font-serif text-[15px] font-bold leading-snug text-[#1b1c1b] transition-colors group-hover:text-[#73000c]">
                    {post.title}
                  </h4>
                  <p className="mt-1.5 line-clamp-2 flex-1 text-[13px] leading-relaxed text-[#59413f]/70">
                    {post.description}
                  </p>
                  <StatsDark post={post} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

