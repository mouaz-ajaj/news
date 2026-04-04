import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#dbdad8]">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-between gap-8 px-12 py-16 md:flex-row">
        <div className="text-center md:text-left">
          <span className="headline-font mb-2 block text-xl italic text-[#1b1c1b]">
            The Grand Editorial
          </span>
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#59413f]">
            © 2024 The Grand Editorial. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="#"
            className="text-xs uppercase tracking-[0.15em] text-[#59413f] transition-colors hover:text-[#73000c]"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-xs uppercase tracking-[0.15em] text-[#59413f] transition-colors hover:text-[#73000c]"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-xs uppercase tracking-[0.15em] text-[#59413f] transition-colors hover:text-[#73000c]"
          >
            Editorial Guidelines
          </a>
          <a
            href="#"
            className="text-xs uppercase tracking-[0.15em] text-[#59413f] transition-colors hover:text-[#73000c]"
          >
            Contact
          </a>
        </div>

        <div className="flex gap-4">
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e0bfbc]/30 text-[#59413f] transition-all hover:border-[#73000c] hover:text-[#73000c]"
          >
            🌐
          </a>
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e0bfbc]/30 text-[#59413f] transition-all hover:border-[#73000c] hover:text-[#73000c]"
          >
            @
          </a>
        </div>
      </div>
    </footer>
  );
}
