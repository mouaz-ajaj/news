"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    {
      href: "/dashboard",
      icon: "I",
      label: "The Overview",
      end: true,
    },
    {
      href: "/dashboard/articles",
      icon: "II",
      label: "Publications",
    },
    {
      href: "/dashboard/categories",
      icon: "III",
      label: "Categories",
    },
    {
      href: "/dashboard/comments",
      icon: "IV",
      label: "Discourse",
    },,
    {
      href: "/dashboard/users",
      icon: "V",
      label: "Subscribers",
    },
  ];

  const isActive = (href: string, end: boolean = false) => {
    if (end) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <aside
      className={`${isOpen ? "w-80" : "w-24"
        } bg-[#1a0a0a] text-[#ebd9c8] transition-all duration-500 flex flex-col sticky top-0 h-screen border-r border-[#ebd9c8]/10 shadow-[4px_0_24px_rgba(0,0,0,0.1)] shrink-0 z-50`}
    >
      <div className="absolute inset-0 noise-bg opacity-30 mix-blend-overlay pointer-events-none"></div>

      {/* Header */}
      <div className="relative z-10 p-10 flex flex-col items-center justify-center border-b border-[#ebd9c8]/10 min-h-[140px]">
        {isOpen ? (
          <div className="text-center w-full relative">
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-60 mb-2">Issue No. 1</p>
            <h1 className="headline-font text-4xl italic text-[#d4af37] leading-none mb-1">
              Grand
            </h1>
            <h2 className="text-[11px] uppercase tracking-[0.2em] font-sans text-[#ebd9c8]/80">
              Editorial Board
            </h2>
          </div>
        ) : (
          <h1 className="headline-font text-3xl italic text-[#d4af37]">G</h1>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#3a1a1a] border border-[#ebd9c8]/20 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a0a0a] transition-all duration-300 shadow-xl z-20"
          title={isOpen ? "Collapse" : "Expand"}
        >
          <svg
            className={`w-4 h-4 transition-transform duration-500 ${isOpen ? "" : "rotate-180"
              }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex-1 px-6 py-10 space-y-2 overflow-y-auto hidden-scrollbar">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-6 px-4 py-4 transition-all duration-500 group relative ${isActive(item.href, item.end)
              ? "bg-gradient-to-r from-[#d4af37]/10 to-transparent text-[#d4af37]"
              : "text-[#ebd9c8]/60 hover:text-[#ebd9c8] hover:bg-white/5"
              }`}
            title={!isOpen ? item.label : ""}
          >
            {isActive(item.href, item.end) && (
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#d4af37]"></div>
            )}
            <span className={`headline-font text-sm font-semibold transition-colors duration-500 min-w-8 text-center ${isActive(item.href, item.end) ? "text-[#d4af37]" : "text-[#ebd9c8]/30 group-hover:text-[#ebd9c8]/70"
              }`}>
              {item.icon}
            </span>
            {isOpen && (
              <span className={`font-serif text-lg italic tracking-wide transition-all duration-500 ${isActive(item.href, item.end) ? "translate-x-2" : "group-hover:translate-x-1"
                }`}>
                {item.label}
              </span>
            )}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="relative z-10 p-6 border-t border-[#ebd9c8]/10 text-center">
        <button className="w-full flex items-center justify-center gap-4 px-4 py-3 text-[#ebd9c8]/50 hover:text-[#d4af37] transition-all duration-500 group outline-none">
          {isOpen && <span className="font-serif text-sm tracking-[0.1em] uppercase">Depart</span>}
          <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
