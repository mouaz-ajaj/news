import React from "react";
import ArticleHeader from "@/component/article/ArticleHeader";
import ArticleBody from "@/component/article/ArticleBody";
import CommentsSection from "@/component/article/CommentsSection";
import Sidebar from "@/component/article/Sidebar";
import RelatedArticles from "@/component/article/RelatedArticles";
import { getSinglePost } from "@/services/singlePostService";
import { Comments, PostHeader } from "@/types/post";
export default async function ArticlePage() {
    const post = await getSinglePost({ ulid: "01KNHC5S5VW99SJEJFTG835J82" });
    const header=post?.header as PostHeader
    const comments=post?.comments as Comments 
  return (
    <div className="min-h-screen bg-[#fbf9f7] text-[#1b1c1b] selection:bg-[#fe9567] selection:text-[#752d04]">
      <style>
        {`
          .editorial-gradient {
            background: linear-gradient(135deg, #73000c 0%, #98461e 100%);
          }

          .glass-nav {
            background: rgba(251, 249, 247, 0.8);
            backdrop-filter: blur(20px);
          }

          .masthead-rule {
            height: 4px;
            width: 40px;
            background: linear-gradient(to right, #73000c, #fe9567);
          }

          .headline-font {
            font-family: "Georgia", "Times New Roman", serif;
          }

          .body-font {
            font-family: Arial, Helvetica, sans-serif;
          }
        `}
      </style>
      <main className="pb-20 pt-32">
        <ArticleHeader header={header} />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-8 lg:grid-cols-12">
          <article className="space-y-10 lg:col-span-8">
            <ArticleBody description={post?.description} />
            <CommentsSection comments={comments || []} />
          </article>

          <Sidebar />
        </div>

        <RelatedArticles />
      </main>
    </div>
  );
}