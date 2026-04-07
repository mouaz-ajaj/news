import { FALLBACK_AUTHOR_IMAGE } from "@/lib/data";
import ShareButton from "@/component/article/ShareButton";
import Image from "next/image";
import { PostHeader } from "@/types/post";
import ArticleMediaCarousel from "@/component/article/ArticleMediaCarousel";

export default function ArticleHeader({ header }: { header: PostHeader }) {
  const authorFirstName = header.author?.first_name ?? "Unknown";
  const authorLastName = header.author?.last_name ?? "";
  const authorName = `${authorFirstName} ${authorLastName}`.trim();
  const authorImage = header.author?.image || FALLBACK_AUTHOR_IMAGE;

  return (
    <>
      <section className="mx-auto mb-10 mt-28 max-w-6xl px-6 lg:px-8">
        <div className="mb-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-12 bg-[#73000c]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#73000c]">
              {header.category.name}
            </span>
          </div>
          <h1 className="max-w-4xl font-serif text-4xl font-bold leading-[1.15] tracking-tight text-[#1b1c1b] md:text-5xl lg:text-6xl">
            {header.title}
          </h1>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 border-y border-[#e0bfbc]/30 py-5">
          <div className="flex flex-wrap items-center gap-4 text-[#1b1c1b] md:gap-5">
            <div className="group flex cursor-pointer items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full border border-[#eae8e6] bg-[#efedec] shadow-sm transition-all duration-500 group-hover:border-[#73000c]">
                <Image
                  src={authorImage}
                  alt={authorName}
                  width={40}
                  height={40}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                />
              </div>
              <p className="font-serif text-[15px] font-bold transition-colors group-hover:text-[#73000c]">
                {authorName}
              </p>
            </div>

            <div className="hidden h-1 w-1 rounded-full bg-[#59413f]/40 sm:block" />
            <p className="text-[13px] font-semibold text-[#59413f]">{header.date}</p>
            <div className="hidden h-1 w-1 rounded-full bg-[#59413f]/40 sm:block" />

            <div
              className="group flex cursor-pointer items-center gap-1.5 text-[13px] font-semibold tracking-wider text-[#59413f] transition-colors hover:text-[#73000c]"
              title="Comments"
            >
              <svg
                className="h-4 w-4 text-[#59413f]/50 transition-colors group-hover:text-[#73000c]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>{header.commentsCount} Comments</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[#59413f] sm:gap-6">
            <div
              className="group flex cursor-pointer items-center gap-1.5 text-[13px] font-semibold tracking-wider transition-colors hover:text-[#73000c]"
              title="Views"
            >
              <svg
                className="h-4 w-4 text-[#59413f]/50 transition-colors group-hover:text-[#73000c]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <span>{header.viewsCount}</span>
            </div>

            <div className="flex items-center gap-4 sm:border-l sm:border-[#e0bfbc]/40 sm:pl-6">
              <button
                className="group flex items-center gap-1.5 text-[13px] font-semibold tracking-wider transition-colors hover:text-[#73000c]"
                title="Like"
              >
                <svg
                  className="h-4 w-4 text-[#59413f]/50 transition-colors group-active:scale-90 group-hover:text-[#73000c]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
                <span>{header.likesCount}</span>
              </button>
              <button
                className="group flex items-center gap-1.5 text-[13px] font-semibold tracking-wider transition-colors hover:text-[#1b1c1b]"
                title="Dislike"
              >
                <svg
                  className="h-4 w-4 text-[#59413f]/50 transition-colors group-active:scale-90 group-hover:text-[#1b1c1b]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                  />
                </svg>
                <span>{header.dislikesCount}</span>
              </button>
            </div>
            <ShareButton />
          </div>
        </div>
      </section>

      <ArticleMediaCarousel
        title={header.title}
        images={header.images}
        videos={header.videos}
      />
    </>
  );
}

