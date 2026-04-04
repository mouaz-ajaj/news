import React from "react";

export default function LoginForm() {
  return (
    <div className="relative z-10 w-full max-w-lg">
      <div className="glass-panel flex flex-col items-center rounded-xl p-8 shadow-[0_20px_60px_-15px_rgba(27,28,27,0.06)] sm:p-12">
        {/* Branding */}
        <div className="mb-10 text-center">
          <h1 className="headline-font mb-2 text-4xl italic tracking-tight text-[#73000c]">
            The Grand Editorial
          </h1>

          <div className="editorial-gradient mx-auto mb-8 h-[3px] w-10" />

          <h2 className="headline-font mb-2 text-3xl font-bold tracking-tight text-[#1b1c1b]">
            Welcome Back
          </h2>

          <p className="label-font text-sm tracking-wide text-[#59413f]">
            Sign in to access exclusive editorial news
          </p>
        </div>

        {/* Form */}
        <form className="w-full space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="label-font ml-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#59413f]"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@exclusive.com"
              className="w-full rounded-lg border-none bg-[#eae8e6] px-5 py-4 text-[#1b1c1b] outline-none transition-all duration-300 focus:bg-white focus:ring-1 focus:ring-[#73000c]/20"
            />
          </div>

          <div className="space-y-2">
            <div className="ml-1 flex items-center justify-between">
              <label
                htmlFor="password"
                className="label-font text-[10px] font-bold uppercase tracking-[0.15em] text-[#59413f]"
              >
                Password
              </label>

              <a
                href="#"
                className="label-font text-[10px] uppercase tracking-[0.15em] text-[#73000c] transition-colors hover:text-[#98461e]"
              >
                Forgot password?
              </a>
            </div>

            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border-none bg-[#eae8e6] px-5 py-4 text-[#1b1c1b] outline-none transition-all duration-300 focus:bg-white focus:ring-1 focus:ring-[#73000c]/20"
            />
          </div>

          <button
            type="submit"
            className="editorial-gradient label-font w-full rounded-lg py-4 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-lg shadow-[#73000c]/20 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="my-10 flex w-full items-center gap-4">
          <div className="h-[1px] flex-grow bg-[#e0bfbc]/30" />
          <span className="label-font text-[10px] uppercase tracking-[0.2em] text-[#59413f]">
            Or continue with
          </span>
          <div className="h-[1px] flex-grow bg-[#e0bfbc]/30" />
        </div>

        {/* Social Buttons */}
        <div className="flex w-full gap-4">
          <button
            type="button"
            className="group flex flex-1 items-center justify-center gap-3 rounded-lg border border-[#e0bfbc]/30 py-3 transition-colors hover:bg-[#f5f3f1]"
          >
            <span className="text-xl transition-transform group-hover:scale-110">
              
            </span>
            <span className="label-font text-[10px] font-bold uppercase tracking-widest">
              Apple
            </span>
          </button>

          <button
            type="button"
            className="group flex flex-1 items-center justify-center gap-3 rounded-lg border border-[#e0bfbc]/30 py-3 transition-colors hover:bg-[#f5f3f1]"
          >
            <span className="text-xl transition-transform group-hover:scale-110">
              G
            </span>
            <span className="label-font text-[10px] font-bold uppercase tracking-widest">
              Google
            </span>
          </button>
        </div>

        {/* Footer Link */}
        <p className="label-font mt-12 text-xs text-[#59413f]">
          New to the editorial?
          <a
            href="#"
            className="ml-1 font-bold text-[#73000c] underline-offset-4 hover:underline"
          >
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}
