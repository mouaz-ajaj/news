import React from "react";
import ContactForm from "@/component/contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — The Grand Editorial",
  description:
    "Reach out to The Grand Editorial team for press inquiries, editorial feedback, advertising partnerships, or general correspondence.",
};

const INFO_ITEMS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Editorial",
    value: "editorial@thegrandeditorial.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    label: "Press & Media",
    value: "press@thegrandeditorial.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    label: "Advertising",
    value: "ads@thegrandeditorial.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Response Time",
    value: "24 – 48 business hours",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fbf9f7] text-[#1b1c1b] selection:bg-[#fe9567] selection:text-[#752d04]">
      <style>{`
        .editorial-gradient { background: linear-gradient(135deg, #73000c 0%, #98461e 100%); }
        .glass-nav { background: rgba(251,249,247,0.85); backdrop-filter: blur(20px); }
        .masthead-rule { height: 4px; width: 40px; background: linear-gradient(to right, #73000c, #fe9567); }
        .headline-font { font-family: "Georgia","Times New Roman",serif; }
        .body-font { font-family: Arial,Helvetica,sans-serif; }
      `}</style>

      <main className="pt-32 pb-24">
        {/* Page Hero */}
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-10 mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-[#73000c] w-10" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#73000c]">
              Get In Touch
            </span>
            <div className="flex-1 h-px bg-[#e0bfbc]/40" />
          </div>

          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#1b1c1b] leading-tight mb-4">
              Contact <span className="italic text-[#73000c]">The Editorial</span>
            </h1>
            <p className="text-[#59413f]/70 text-lg leading-relaxed max-w-xl">
              Whether you have a correction, a story tip, a media inquiry, or simply want to share your thoughts — we read every message.
            </p>
          </div>
        </div>

        {/* Thin rule */}
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-10 mb-16">
          <div className="h-px bg-linear-to-r from-[#73000c]/30 via-[#e0bfbc]/50 to-transparent" />
        </div>

        {/* Main content grid */}
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* LEFT — Info sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Tagline card */}
              <div className="relative overflow-hidden rounded-2xl bg-[#1b1c1b] px-8 py-10 shadow-xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#73000c]/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="relative z-10">
                  <div className="masthead-rule mb-6" />
                  <p className="font-serif text-2xl font-bold text-white leading-snug mb-3 italic">
                    &quot;Every great story begins with a conversation.&quot;
                  </p>
                  <p className="text-[#e0bfbc]/50 text-[11px] font-semibold uppercase tracking-[0.2em]">
                    — The Grand Editorial
                  </p>
                </div>
              </div>

              {/* Contact info cards */}
              <div className="rounded-2xl border border-[#e0bfbc]/35 bg-white/60 p-6 space-y-6 shadow-sm">
                <div>
                  <div className="h-px bg-[#73000c] w-8 mb-4" />
                  <h3 className="font-serif text-xl font-bold text-[#1b1c1b] mb-1">
                    Direct Lines
                  </h3>
                  <p className="text-[12px] text-[#59413f]/60 leading-relaxed">
                    Reach the right desk directly for faster correspondence.
                  </p>
                </div>

                <div className="space-y-5">
                  {INFO_ITEMS.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="shrink-0 w-9 h-9 rounded-full border border-[#e0bfbc]/50 bg-[#fbf9f7] flex items-center justify-center text-[#73000c]">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#73000c] mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-[13px] text-[#1b1c1b] font-medium break-words">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="rounded-2xl border border-[#e0bfbc]/35 bg-white/60 p-6 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#73000c] mb-4">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {["𝕏", "in", "f", "📷"].map((icon) => (
                    <a
                      key={icon}
                      href="#"
                      className="w-10 h-10 rounded-full border border-[#e0bfbc]/50 bg-[#fbf9f7] flex items-center justify-center text-[#59413f] text-sm font-bold hover:border-[#73000c] hover:text-[#73000c] hover:bg-white transition-all duration-200"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            {/* RIGHT — Contact form */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl border border-[#e0bfbc]/35 bg-white/70 p-8 md:p-10 shadow-sm backdrop-blur-sm">
                {/* Form header */}
                <div className="mb-8 pb-8 border-b border-[#e0bfbc]/30">
                  <div className="h-px bg-[#73000c] w-8 mb-4" />
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1b1c1b] leading-snug mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-[13px] text-[#59413f]/65 leading-relaxed">
                    Fill out the form below and your message will be sent directly to our team via your email client.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
