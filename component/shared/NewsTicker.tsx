import React from "react";
import { headlines } from "@/lib/data";

export default function NewsTicker() {
  return (
    <div className="w-full flex items-center bg-[#1b1c1b] border-b border-white/10 text-white z-[60] h-10 overflow-hidden">
      {/* "Live" Indicator block */}
      <div className="relative z-10 flex items-center h-full px-4 md:px-6 bg-[#1b1c1b] font-serif text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#fe9567] shrink-0 border-r border-white/5">
        <span className="relative flex h-2 w-2 mr-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fe9567] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fe9567]" />
        </span>
        Live Updates
      </div>

      {/* Scrolling container with edge fades */}
      <div className="flex-1 overflow-hidden relative h-full group bg-[#1b1c1b]">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-[#1b1c1b] to-transparent z-10 pointer-events-none" />
        
        {/* We duplicate the array to allow a seamless 50% translation loop */}
        <div className="flex items-center h-full whitespace-nowrap w-max news-marquee-track">
          {[...headlines, ...headlines, ...headlines, ...headlines].map((item, index) => (
            <React.Fragment key={index}>
              <span className="px-8 text-[12px] font-medium tracking-wide text-white/70 hover:text-white transition-colors cursor-pointer">
                {item}
              </span>
              <span className="text-[#fe9567]/60 text-[10px] opacity-50">✦</span>
            </React.Fragment>
          ))}
        </div>

        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-[#1b1c1b] to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  );
}
