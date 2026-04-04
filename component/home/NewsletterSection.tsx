import React from "react";

export default function NewsletterSection() {
  return (
    <section className="mx-auto max-w-screen-2xl px-6 lg:px-10 py-12">
      <div className="relative overflow-hidden rounded-2xl bg-[#1b1c1b] px-8 py-14 md:px-16 md:py-20 shadow-2xl">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#73000c]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#73000c]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-linear-to-r from-transparent via-[#e0bfbc]/10 to-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <div className="h-px bg-[#73000c] w-8" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#fe9567]">
                The Editorial
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Stay Ahead of the Story.
            </h2>
            <p className="text-[#e0bfbc]/70 text-sm leading-relaxed">
              Get curated intelligence, breaking analysis, and exclusive long-reads
              delivered to your inbox — every morning, deeply human.
            </p>
          </div>

          <div className="w-full md:w-auto flex flex-col gap-3 min-w-[320px]">
            <div className="flex overflow-hidden rounded-sm border border-[#e0bfbc]/20 bg-white/5 backdrop-blur-sm focus-within:border-[#73000c]/50 transition-colors">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent px-5 py-4 text-sm text-white placeholder:text-[#e0bfbc]/40 outline-none"
              />
              <button className="shrink-0 bg-[#73000c] hover:bg-[#8a000e] text-white px-6 text-[11px] font-bold uppercase tracking-widest transition-colors duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-[#e0bfbc]/30 text-[10px] text-center md:text-left font-semibold uppercase tracking-wider">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
