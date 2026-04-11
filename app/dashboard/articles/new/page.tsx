"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function NewArticlePage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Technology",
    status: "draft",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Article submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfcfb] to-[#f5f3f1]">
      {/* Header */}
      <div className="border-b border-[#e0bfbc]/30 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-8">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard/articles"
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-[#e0bfbc]/30 hover:bg-[#fdfcfb] transition-colors"
            >
              ←
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-[#1b1c1b]">
                Create New Article
              </h1>
              <p className="text-sm text-[#59413f] mt-1">
                Write and publish your next news story
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div className="bg-white rounded-xl border border-[#e0bfbc]/30 p-6">
            <label className="block text-sm font-semibold text-[#1b1c1b] mb-2">
              Article Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter article title..."
              className="w-full px-4 py-3 border border-[#e0bfbc]/30 rounded-lg bg-[#fdfcfb] text-[#1b1c1b] placeholder-[#bfbfbf] outline-none focus:border-[#73000c] focus:bg-white transition-all"
            />
          </div>

          {/* Description */}
          <div className="bg-white rounded-xl border border-[#e0bfbc]/30 p-6">
            <label className="block text-sm font-semibold text-[#1b1c1b] mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter article description..."
              rows={3}
              className="w-full px-4 py-3 border border-[#e0bfbc]/30 rounded-lg bg-[#fdfcfb] text-[#1b1c1b] placeholder-[#bfbfbf] outline-none focus:border-[#73000c] focus:bg-white transition-all"
            />
          </div>

          {/* Category & Status */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-[#e0bfbc]/30 p-6">
              <label className="block text-sm font-semibold text-[#1b1c1b] mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#e0bfbc]/30 rounded-lg bg-[#fdfcfb] text-[#1b1c1b] outline-none focus:border-[#73000c] focus:bg-white transition-all"
              >
                <option value="Technology">Technology</option>
                <option value="Business">Business</option>
                <option value="Politics">Politics</option>
                <option value="Health">Health</option>
                <option value="Science">Science</option>
                <option value="Sports">Sports</option>
              </select>
            </div>

            <div className="bg-white rounded-xl border border-[#e0bfbc]/30 p-6">
              <label className="block text-sm font-semibold text-[#1b1c1b] mb-2">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#e0bfbc]/30 rounded-lg bg-[#fdfcfb] text-[#1b1c1b] outline-none focus:border-[#73000c] focus:bg-white transition-all"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="scheduled">Scheduled</option>
              </select>
            </div>
          </div>

          {/* Content Editor */}
          <div className="bg-white rounded-xl border border-[#e0bfbc]/30 p-6">
            <label className="block text-sm font-semibold text-[#1b1c1b] mb-2">
              Article Content
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Write your article content here..."
              rows={12}
              className="w-full px-4 py-3 border border-[#e0bfbc]/30 rounded-lg bg-[#fdfcfb] text-[#1b1c1b] placeholder-[#bfbfbf] outline-none focus:border-[#73000c] focus:bg-white transition-all font-mono text-sm"
            />
            <p className="text-xs text-[#59413f] mt-2">
              💡 HTML and Markdown formatting supported
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 justify-end">
            <Link
              href="/dashboard/articles"
              className="px-6 py-3 border border-[#e0bfbc]/30 rounded-lg text-[#1b1c1b] font-medium hover:bg-[#fdfcfb] transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-8 py-3 bg-[#73000c] hover:bg-[#5a000a] text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Publish Article
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
