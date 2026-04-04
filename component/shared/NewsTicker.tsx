import React from "react";
import { headlines } from "@/lib/data";

export default function NewsTicker() {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap bg-[#73000c] px-6 py-2 text-white z-[60]">
      <div className="marquee-track flex items-center gap-12">
        <span className="label-font flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#fe9567]" />
          Breaking News
        </span>

        {[...headlines, ...headlines].map((item, index) => (
          <span
            key={index}
            className="label-font text-xs tracking-wider text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
