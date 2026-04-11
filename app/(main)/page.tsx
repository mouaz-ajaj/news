import HeroSection from "@/component/main/home/HeroSection";
import TrendingSection from "@/component/main/home/TrendingSection";
import LatestSection from "@/component/main/home/LatestSection";
import CategorySections from "@/component/main/home/CategorySections";
import NewsletterSection from "@/component/main/home/NewsletterSection";
import type { Metadata } from "next";
import { getHomePosts } from "@/services/homeService";
import { getCategories } from "@/services/categoryService";

export const metadata: Metadata = {
  title: "The Grand Editorial — Curated World News",
  description:
    "Your premium source for world news, politics, science, business, and culture. Deeply reported, beautifully presented.",
};

export default async function Home() {
  const homePosts = await getHomePosts();
  const categories = await getCategories();
  return (
    <div className="min-h-screen bg-[#fbf9f7] text-[#1b1c1b] selection:bg-[#fe9567] selection:text-[#752d04]">
      <style>{`
        .editorial-gradient {
          background: linear-gradient(135deg, #73000c 0%, #98461e 100%);
        }
        .glass-nav {
          background: rgba(251, 249, 247, 0.85);
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
      `}</style>

      <main>
        {/* Hero: Featured Story + secondary cards */}
        <HeroSection featuredPosts={homePosts.featuredPosts} />

        {/* Thin divider */}
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">
          <div className="h-px bg-linear-to-r from-transparent via-[#e0bfbc]/50 to-transparent" />
        </div>

        {/* Most Viewed + Most Liked ranked lists */}
        <TrendingSection
          mostViewed={homePosts.mostViewedPosts}
          mostLiked={homePosts.mostLikedPosts}
        />

        <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">
          <div className="h-px bg-linear-to-r from-transparent via-[#e0bfbc]/50 to-transparent" />
        </div>

        {/* Latest News */}
        <LatestSection latestPosts={homePosts.latestPosts} />

        {/* Newsletter Banner */}
        <NewsletterSection />

        {/* Per-Category sections */}
        <CategorySections categories={categories}/>
      </main>

    </div>
  );
}
