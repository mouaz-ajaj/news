import React from "react";
import { relatedCards } from "@/lib/data";
import Image from "next/image";

export default function RelatedArticles() {
  return (
    <section className="mx-auto mt-32 max-w-7xl px-8">
      <div className="mb-12 flex items-center gap-4">
        <div className="h-[1px] flex-1 bg-[#e0bfbc]/30" />
        <h2 className="headline-font px-8 text-4xl italic">More to Read</h2>
        <div className="h-[1px] flex-1 bg-[#e0bfbc]/30" />
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {relatedCards.map((card) => (
          <div key={card.title} className="group cursor-pointer">
            <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <p className="mb-3 text-xs uppercase tracking-widest text-[#73000c]">
              {card.category}
            </p>
            <h4 className="headline-font text-2xl leading-tight transition-colors group-hover:text-[#73000c]">
              {card.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
