import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#f8f4ee] px-4 pb-20 pt-44 text-[#1b1c1b] selection:bg-[#fe9567] selection:text-[#752d04] sm:px-6 sm:pt-48 md:px-10 md:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#73000c]/10 blur-3xl" />
        <div className="absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-[#d6a05f]/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.65),transparent_58%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(27,28,27,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(27,28,27,0.04)_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="relative rounded-3xl border border-[#d6a05f]/35 bg-white/80 p-8 shadow-[0_30px_85px_-50px_rgba(27,28,27,0.5)] backdrop-blur-sm md:p-12">
          <div className="pointer-events-none absolute inset-3 rounded-[20px] border border-[#73000c]/10" />
          <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-gradient-to-r from-[#73000c] via-[#d6a05f] to-[#fe9567]" />
          <div className="text-center">
            <span className="mb-4 inline-flex rounded-full border border-[#d6a05f]/50 bg-[#fff8ee] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-[#8a5a1a]">
              404 Error
            </span>
            <h1 className="bg-gradient-to-b from-[#2a2a2a] via-[#73000c] to-[#2a2a2a] bg-clip-text font-serif text-[clamp(4rem,15vw,11rem)] font-black leading-[0.85] text-transparent drop-shadow-[0_8px_20px_rgba(115,0,12,0.18)]">
              404
            </h1>
            <h2 className="mt-5 font-serif text-2xl font-bold text-[#1b1c1b] md:text-3xl">
              Page Not Found
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-8 text-[#59413f] md:text-base">
              The link you followed is incorrect or the page has been removed. You can return to the homepage and follow the latest news.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="group inline-flex min-w-56 items-center justify-center gap-2 rounded-sm bg-gradient-to-r from-[#1b1c1b] to-[#73000c] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#fbf9f7] shadow-[0_10px_25px_-12px_rgba(115,0,12,0.7)] transition-all duration-300 hover:from-[#73000c] hover:to-[#9a2b1a]"
            >
              Back To Home
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-w-56 items-center justify-center rounded-sm border border-[#d6a05f]/50 bg-white px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#59413f] transition-colors duration-300 hover:border-[#73000c] hover:text-[#73000c]"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-4 text-[#73000c]/45">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#d6a05f]/45" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
              The Grand Editorial
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#d6a05f]/45" />
          </div>
        </div>
      </div>
    </section>
  );
}
