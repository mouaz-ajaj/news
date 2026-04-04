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
    <nav className="glass-nav fixed top-0 z-50 w-full border-b border-[#e0bfbc]/20 shadow-sm shadow-[#1b1c1b]/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-8 py-6">
        <div className="flex items-center gap-8">
          <Link href="/public" className="headline-font text-3xl italic tracking-tighter text-[#1b1c1b] hover:opacity-80 transition-opacity">
            The Grand Editorial
          </Link>

          <div className="hidden items-center gap-6 lg:flex mt-1">
            <Link
              href="/"
              className="text-xs font-semibold uppercase tracking-[0.15em] text-[#59413f] transition-colors duration-300 hover:text-[#73000c]"
            >
              Home
            </Link>

            {/* Categories Dropdown */}
            <div className="relative group py-2">
              <button
                className="flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#59413f] transition-colors duration-300 group-hover:text-[#73000c]"
              >
                Categories
                <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              <div className="absolute left-0 top-full mt-2 w-56 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out bg-[#fdfcfb] border border-[#e0bfbc]/40 shadow-xl shadow-[#1b1c1b]/5 rounded-sm z-50">
                <div className="py-2 flex flex-col">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      href={`/category/${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                      className="px-5 py-3 text-sm font-medium text-[#59413f] hover:bg-[#f5f3f0] hover:text-[#73000c] transition-colors flex justify-between items-center group/item"
                    >
                      {category}
                      <span className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-[#73000c] text-xs">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="text-xs font-semibold uppercase tracking-[0.15em] text-[#59413f] transition-colors duration-300 hover:text-[#73000c]"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-5">
          {/* Search Bar - Expandable */}
          <div className="hidden relative group/search items-center lg:flex">
            <svg className="w-4 h-4 text-[#59413f] absolute left-2 pointer-events-none transition-colors group-focus-within/search:text-[#73000c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              className="w-8 focus:w-64 cursor-pointer focus:cursor-text pl-8 pr-3 py-1 border-b-2 border-transparent focus:border-[#73000c] bg-transparent text-sm outline-none text-[#1b1c1b] placeholder-transparent focus:placeholder-[#59413f]/40 transition-[width,border-color,padding] duration-500 ease-in-out"
            />
          </div>

          <div className="w-px h-5 bg-[#e0bfbc]/50 hidden lg:block"></div>

          <div className="flex items-center gap-4">
            {/* Publish Button */}
            <Link
              href="/"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#1b1c1b] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#73000c] transition-colors duration-300 rounded-sm"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
              Publish
            </Link>

            {/* Profile Button */}
            <Link
              href="/"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-[#eae8e6]/50 hover:bg-[#1b1c1b] text-[#59413f] hover:text-white transition-all duration-300 group"
              aria-label="Profile"
            >
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <NewsTicker />
    </nav>
  );
}
