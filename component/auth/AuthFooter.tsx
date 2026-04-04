import React from "react";

export default function AuthFooter() {
  return (
    <footer className="z-10 flex w-full flex-col items-center justify-between bg-stone-200 px-10 py-8 md:flex-row">
      <div className="headline-font mb-4 text-lg text-stone-900 md:mb-0">
        The Grand Editorial
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="#"
          className="text-xs uppercase tracking-widest text-stone-500 opacity-80 transition-all hover:text-stone-900 hover:opacity-100"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="text-xs uppercase tracking-widest text-stone-500 opacity-80 transition-all hover:text-stone-900 hover:opacity-100"
        >
          Terms of Service
        </a>
        <a
          href="#"
          className="text-xs uppercase tracking-widest text-stone-500 opacity-80 transition-all hover:text-stone-900 hover:opacity-100"
        >
          Editorial Support
        </a>
      </div>

      <div className="mt-4 text-[10px] uppercase tracking-widest text-stone-400 md:mt-0">
        © 2024 The Grand Editorial. All rights reserved.
      </div>
    </footer>
  );
}
