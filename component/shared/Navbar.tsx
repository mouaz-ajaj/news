import React from "react";
import Link from "next/link";
import NewsTicker from "@/component/shared/NewsTicker";

export default function Navbar() {
  const categories = [
    'World', 'Politics', 'Business',
    'Technology', 'Science', 'Health',
    'Sports', 'Arts & Culture'
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-2xl border-b border-[#e0bfbc]/30 shadow-[0_4px_30px_rgba(27,28,27,0.03)]">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 lg:px-10 py-5">

        {/* Left Section: Brand & Main Links */}
        <div className="flex items-center gap-10">
          <Link href="/" className="font-serif text-3xl italic tracking-tighter text-[#1b1c1b] hover:text-[#73000c] transition-colors duration-500">
            The Grand Editorial
          </Link>

          <div className="hidden lg:flex items-center gap-8 mt-1">
            <Link href="/" className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#59413f] hover:text-[#73000c] transition-colors duration-300">
              Home
            </Link>

            {/* Premium Categories Dropdown */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#59413f] group-hover:text-[#73000c] transition-colors duration-300">
                Sections
                <svg className="w-3.5 h-3.5 transition-transform duration-500 group-hover:-rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="absolute left-0 top-full mt-1 w-64 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out bg-[#fdfcfb] border border-[#e0bfbc]/30 shadow-2xl rounded-sm z-50 overflow-hidden">
                <div className="py-3 flex flex-col">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      href={`/category/${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                      className="px-6 py-3 text-[13px] font-medium text-[#1b1c1b] hover:bg-[#1b1c1b] hover:text-[#fbf9f7] transition-all flex justify-between items-center group/item"
                    >
                      {category}
                      <span className="opacity-0 -translate-x-3 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-[#fe9567]">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/contact" className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#59413f] hover:text-[#73000c] transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-6">
          {/* Elegant Search Bar */}
          <div className="hidden lg:flex relative group/search items-center">
            <svg className="w-4 h-4 text-[#59413f] absolute left-3 pointer-events-none transition-colors group-focus-within/search:text-[#73000c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search archives..."
              className="w-10 focus:w-64 cursor-pointer focus:cursor-text pl-10 pr-4 py-2 border border-transparent focus:border-[#e0bfbc] rounded-full bg-[#f5f3f1] focus:bg-[#fdfcfb] text-[13px] outline-none text-[#1b1c1b] placeholder-transparent focus:placeholder-[#59413f]/50 transition-[width,border-color,background-color] duration-500 ease-out"
            />
          </div>

          <div className="hidden lg:block w-px h-5 bg-[#e0bfbc]/50" />

          <div className="flex items-center gap-5">
            <Link
              href="/login"
              className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-[#1b1c1b] hover:bg-[#73000c] text-white text-[10px] uppercase tracking-widest font-bold transition-all duration-500 rounded-sm shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Sign In / Up
            </Link>

            {/* Profile Icon */}
            <Link
              href="/profile"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-[#e0bfbc]/30 hover:border-[#73000c] bg-white hover:bg-[#73000c] text-[#1b1c1b] hover:text-white transition-all duration-500 group"
              aria-label="Profile"
            >
              <svg className="w-4 h-4 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Ticker attaches seamlessly below */}
      <NewsTicker />
    </nav>
  );
}
