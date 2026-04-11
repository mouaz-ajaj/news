import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1b1c1b] text-[#fbf9f7] pt-20 pb-10 border-t-4 border-[#73000c]">
      <div className="mx-auto w-full max-w-screen-2xl px-6 lg:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand & Newsletter Column */}
          <div className="md:col-span-5 lg:col-span-4">
            <h2 className="font-serif text-3xl italic tracking-tight text-white mb-6">
              The Grand Editorial
            </h2>
            <p className="text-[13px] leading-relaxed text-white/60 font-medium mb-8 max-w-md">
              A curated selection of the world’s most important stories, delivered with uncompromising journalistic integrity and sophisticated analysis.
            </p>
            
            {/* Newsletter Subscription */}
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#fe9567]">
                Subscribe to our Briefing
              </label>
              <div className="flex w-full items-center max-w-sm">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 outline-none text-sm text-white placeholder-white/30 focus:border-[#fe9567] focus:bg-white/10 transition-all rounded-l-sm"
                />
                <button className="bg-[#fe9567] hover:bg-[#73000c] text-[#1b1c1b] hover:text-white px-5 py-3 text-xs uppercase tracking-widest font-bold transition-colors rounded-r-sm h-[46px]">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Links Columns */}
          <div className="md:col-span-7 lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-2">
                Sections
              </h3>
              {['World', 'Politics', 'Business', 'Technology', 'Science', 'Arts'].map((link) => (
                <Link key={link} href={`/category/${link.toLowerCase()}`} className="text-[13px] text-white/60 hover:text-white hover:translate-x-1 transition-all">
                  {link}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-2">
                About Us
              </h3>
              {['Our Story', 'Masthead', 'Careers', 'Press Room'].map((link) => (
                <Link key={link} href="#" className="text-[13px] text-white/60 hover:text-white hover:translate-x-1 transition-all">
                  {link}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4 mt-8 sm:mt-0">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-2">
                Support
              </h3>
              {['Contact Us', 'Editorial Guidelines', 'Terms of Service', 'Privacy Policy'].map((link) => (
                <Link key={link} href="#" className="text-[13px] text-white/60 hover:text-white hover:translate-x-1 transition-all">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 pt-8">
          <p className="text-[11px] uppercase tracking-widest text-white/40">
            © {new Date().getFullYear()} The Grand Editorial. All rights reserved.
          </p>
          
          <div className="flex items-center gap-5">
            {['𝕏', 'in', 'f', 'ig'].map((social) => (
              <a key={social} href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/60 hover:bg-white hover:text-[#1b1c1b] hover:border-transparent transition-all font-bold text-sm">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
