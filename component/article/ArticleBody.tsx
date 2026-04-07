import React from "react";
import { newsCategories } from "@/lib/data";
import Image from "next/image";

export default function ArticleBody({description}:{description?:string}) {
  return (
    <>
      <div className="headline-font border-l-4 border-[#73000c] py-2 pl-8 text-3xl italic leading-relaxed text-[#59413f]">
        {description}
      </div>

      {/* <div className="space-y-8 text-xl leading-[1.8] text-[#1b1c1b]">
        <p className="body-font">
          <span className="headline-font float-left mr-3 mt-2 text-7xl italic text-[#73000c]">
            I
          </span>
          n a landmark announcement that has sent shockwaves through the
          global scientific community, researchers at the Institute for
          Advanced Physics have unveiled a breakthrough in photovoltaic
          cell design. The new technology, dubbed Lumina-Core, utilizes
          a synthesized perovskite-silicon tandem structure that achieves
          unprecedented levels of energy conversion efficiency.
        </p>

        <p className="body-font">
          The implications of this discovery are vast. For decades, the
          primary hurdle to 100% renewable grid integration has been the
          cost-per-watt ratio compared to traditional fossil fuels. With
          the Lumina-Core implementation, the cost is projected to drop by
          nearly 65% over the next five years.
        </p>

        <div className="relative my-12">
          <div className="absolute -inset-4 -z-10 rounded-xl bg-[#f5f3f1]" />
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrdyUjoIyKuAz3LN_u7bZk6ybpjoU9EDln1nucYACFHApsDjxqhE5U_fkDd-GeTw096Y4KBxLBMNBAm4fjagnsqvA_ZL_7zQk7ryPD40Ey6uqMIYWIS4h3YhsFVjDbygsXXB-leUYRN3vd1VaJYveWuXrsrupEHuKGKjhqlXewxHTiFAKxITBENUGijLzmv_GQviVpjSEcpV-70QXkxKgiTq5XvJknK6xHSxAJKzEfFGr2V_Fpdj9-sLXKM1QDvA9Ts-K4yZ6U_sc"
            alt="Figure"
            width={800}
            height={500}
            className="mb-4 w-full rounded-lg"
          />
          <p className="text-sm uppercase tracking-widest text-[#59413f]">
            Fig 1.1 — The molecular alignment of Lumina-Core cells under
            UV exposure.
          </p>
        </div>

        <p className="body-font">
          Global policy leaders have already begun drafting updated
          environmental targets. In a closed-door session in San Francisco
          earlier this morning, industry giants pledged to accelerate
          their transition to solar and wind by a full decade. We are not
          just looking at cleaner air, says Dr. Emily Carter, we are
          looking at the total democratization of energy.
        </p>

        <p className="body-font">
          However, the transition is not without its challenges. The
          manufacturing of these advanced cells requires rare-earth
          minerals that are currently sourced in volatile regions. Supply
          chain resilience will become the next great geopolitical
          frontier as the world moves toward a green economy.
        </p>
      </div> */}

      <div className="border-t border-[#e0bfbc]/30 pt-12">
        <h4 className="mb-6 text-xs uppercase tracking-[0.2em] text-[#59413f]">
          Article Topics
        </h4>
        <div className="flex flex-wrap gap-3">
          {newsCategories.map((topic) => (
            <a
              key={topic.id}
              href="#"
              className="rounded-md bg-[#efedec] px-4 py-2 text-xs uppercase tracking-widest text-[#1b1c1b] transition-colors hover:bg-[#eae8e6]"
            >
              {topic.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
