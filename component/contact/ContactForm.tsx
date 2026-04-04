"use client";

import React, { useState } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    // mailto fallback — works without a backend
    const mailtoLink = `mailto:contact@thegrandeditorial.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;

    // Simulate brief sending state then open mail client
    setTimeout(() => {
      window.location.href = mailtoLink;
      setStatus("success");
    }, 600);
  }

  const inputBase =
    "w-full bg-[#fbf9f7] border border-[#e0bfbc]/50 rounded-sm px-4 py-3.5 text-sm text-[#1b1c1b] placeholder:text-[#59413f]/40 outline-none focus:border-[#73000c] focus:ring-1 focus:ring-[#73000c]/20 transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#73000c] mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={inputBase}
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#73000c] mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputBase}
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#73000c] mb-2">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          placeholder="How can we help?"
          className={inputBase}
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#73000c] mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Write your message here…"
          className={`${inputBase} resize-none`}
        />
      </div>

      {/* Submit */}
      <div className="flex items-center justify-between gap-4 pt-2">
        <p className="text-[11px] text-[#59413f]/50 font-semibold uppercase tracking-wider">
          We reply within 24–48 hours.
        </p>
        <button
          type="submit"
          disabled={status === "sending" || status === "success"}
          className="flex items-center gap-2 px-8 py-3.5 bg-[#1b1c1b] hover:bg-[#73000c] text-white text-[11px] font-bold uppercase tracking-widest rounded-sm transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Sending…
            </>
          ) : status === "success" ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Message Sent
            </>
          ) : (
            <>
              Send Message
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
