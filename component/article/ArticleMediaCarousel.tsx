"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const FALLBACK_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBrdyUjoIyKuAz3LN_u7bZk6ybpjoU9EDln1nucYACFHApsDjxqhE5U_fkDd-GeTw096Y4KBxLBMNBAm4fjagnsqvA_ZL_7zQk7ryPD40Ey6uqMIYWIS4h3YhsFVjDbygsXXB-leUYRN3vd1VaJYveWuXrsrupEHuKGKjhqlXewxHTiFAKxITBENUGijLzmv_GQviVpjSEcpV-70QXkxKgiTq5XvJknK6xHSxAJKzEfFGr2V_Fpdj9-sLXKM1QDvA9Ts-K4yZ6U_sc";

type MediaItem = {
  type: "image" | "video";
  url: string;
  embedUrl?: string;
};

function getYoutubeEmbedUrl(url: string): string | null {
  const youtubeShort = /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?&/]+)/i;
  const youtubeLong =
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^?&/]+)/i;
  const youtubeEmbed =
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^?&/]+)/i;

  const shortMatch = url.match(youtubeShort);
  if (shortMatch?.[1]) return `https://www.youtube.com/embed/${shortMatch[1]}`;

  const longMatch = url.match(youtubeLong);
  if (longMatch?.[1]) return `https://www.youtube.com/embed/${longMatch[1]}`;

  const embedMatch = url.match(youtubeEmbed);
  if (embedMatch?.[1]) return `https://www.youtube.com/embed/${embedMatch[1]}`;

  return null;
}

export default function ArticleMediaCarousel({
  title,
  images,
  videos,
}: {
  title: string;
  images?: string[];
  videos?: string[];
}) {
  const mediaItems = useMemo<MediaItem[]>(() => {
    const imageItems = (images ?? [])
      .filter(Boolean)
      .map((url) => ({ type: "image" as const, url }));

    const videoItems = (videos ?? [])
      .filter(Boolean)
      .map((url) => ({
        type: "video" as const,
        url,
        embedUrl: getYoutubeEmbedUrl(url) ?? undefined,
      }));

    const merged = [...imageItems, ...videoItems];
    if (merged.length > 0) return merged;

    return [{ type: "image", url: FALLBACK_HERO_IMAGE }];
  }, [images, videos]);

  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const safeMediaIndex = currentMediaIndex % mediaItems.length;
  const currentMedia = mediaItems[safeMediaIndex];
  const canSlide = mediaItems.length > 1;

  function showPrevMedia() {
    if (!canSlide) return;
    setCurrentMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  }

  function showNextMedia() {
    if (!canSlide) return;
    setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
  }

  return (
    <section className="mx-auto mb-20 max-w-7xl px-4">
      <div className="group relative h-[600px] w-full overflow-hidden rounded-xl shadow-2xl md:h-[716px]">
        {currentMedia.type === "image" ? (
          <Image
            src={currentMedia.url}
            alt={title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        ) : currentMedia.embedUrl ? (
          <iframe
            src={currentMedia.embedUrl}
            title={title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            src={currentMedia.url}
            className="h-full w-full object-cover"
            controls
            playsInline
          />
        )}

        <div className="absolute inset-0 bg-linear-to-t from-[#1b1c1b]/80 via-transparent to-transparent opacity-80" />

        <div className="absolute bottom-6 left-6 right-6 flex flex-col items-start justify-between gap-6 md:bottom-10 md:left-10 md:right-10 md:flex-row md:items-end">
          <p className="max-w-xl font-serif text-2xl italic leading-relaxed text-white/95 md:text-3xl">
            {title}
          </p>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={showPrevMedia}
              disabled={!canSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/30 active:scale-95 disabled:opacity-40 disabled:hover:scale-100"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              type="button"
              onClick={showNextMedia}
              disabled={!canSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/30 active:scale-95 disabled:opacity-40 disabled:hover:scale-100"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div className="absolute left-6 top-6 rounded-full bg-black/45 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
          {safeMediaIndex + 1}/{mediaItems.length} {currentMedia.type}
        </div>
      </div>
    </section>
  );
}

