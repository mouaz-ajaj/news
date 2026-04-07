import React from "react";
import Image from "next/image";
import { Comments,Comment } from "@/types/post";
import { FALLBACK_AUTHOR_IMAGE } from "@/lib/data";
export default function CommentsSection({comments}:{comments: Comments}) {
  return (
    <section className="mt-20 border-t-2 border-[#73000c]/10 pt-20">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h3 className="headline-font mb-2 text-4xl italic">
            Reflections
          </h3>
          <p className="text-sm text-[#59413f]">
            {comments.comments_count} Comments
          </p>
        </div>

        <button className="editorial-gradient rounded-md px-8 py-4 text-xs uppercase tracking-[0.2em] text-white shadow-lg shadow-[#73000c]/20 transition-opacity hover:opacity-90">
          Post a Comment
        </button>
      </div>

      <div className="space-y-12">
        {comments.comments.map((comment:Comment) => (
          <div key={comment.id} className="flex items-start gap-6">
            <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-[#dbdad8]">
              <Image
                src={comment.user.image || FALLBACK_AUTHOR_IMAGE}
                alt={`${comment.user.first_name} ${comment.user.last_name}`}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1 rounded-xl bg-[#f5f3f1] p-8">
              <div className="mb-4 flex justify-between">
                <h5 className="headline-font text-lg">
                  {comment.user.first_name} {comment.user.last_name}
                </h5>
                <span className="text-xs uppercase tracking-widest text-[#59413f]">
                  {comment.created_at}
                </span>
              </div>
              <p className="leading-relaxed text-[#59413f]">
                {comment.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
