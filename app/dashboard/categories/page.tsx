"use client";

import React, { useState } from "react";

interface Category {
  id: string;
  name: string;
  slug: string;
  articles: number;
  created: string;
}

export default function CategoriesPage() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
  });

  const categories: Category[] = [
    {
      id: "1",
      name: "Technology",
      slug: "technology",
      articles: 342,
      created: "2023-01-15",
    },
    {
      id: "2",
      name: "Business",
      slug: "business",
      articles: 287,
      created: "2023-01-15",
    },
    {
      id: "3",
      name: "Politics",
      slug: "politics",
      articles: 254,
      created: "2023-01-15",
    },
    {
      id: "4",
      name: "Health",
      slug: "health",
      articles: 198,
      created: "2023-01-16",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Category added:", formData);
    setFormData({ name: "", slug: "" });
    setShowForm(false);
  };

  return (
    <div className="p-8 lg:p-12 max-w-[1600px] mx-auto w-full">
      {/* Header */}
      <div className="mb-12 border-b border-[#e0bfbc]/30 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#871916] font-bold mb-3">Issue No. 1 • Library</p>
          <h1 className="headline-font text-5xl lg:text-6xl font-normal text-[#1a0a0a] mb-4 tracking-tight">
            Editions & Categories
          </h1>
          <p className="text-[#59413f] font-serif italic text-lg max-w-2xl">
            Structuring the vast compendium of The Grand Editorial into logical, curatable sections.
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="group inline-flex items-center justify-center gap-3 bg-[#1a0a0a] hover:bg-[#871916] text-[#ebd9c8] px-6 py-4 rounded-full transition-all duration-500 shadow-xl shadow-[#1a0a0a]/10 whitespace-nowrap"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold">
            {showForm ? 'Close Editor' : 'New Edition'}
          </span>
          <div className="w-4 h-4 flex items-center justify-center relative">
            <span className={`absolute w-full h-[1.5px] bg-current transition-transform duration-500 ${showForm ? 'rotate-45' : ''}`} />
            <span className={`absolute w-full h-[1.5px] bg-current transition-transform duration-500 ${showForm ? '-rotate-45' : 'rotate-90'}`} />
          </div>
        </button>
      </div>

      <div className="space-y-8">
        {/* Add Category Form */}
        {showForm && (
          <div className="glass-panel magazine-card p-6 lg:p-8 rounded-xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-500">
            <form onSubmit={handleSubmit} className="relative z-10">
              <div className="mb-8 pb-4 border-b border-[#e0bfbc]/30">
                <h3 className="headline-font text-2xl text-[#1a0a0a] mb-1">Establish New Edition</h3>
                <p className="text-xs text-[#59413f] font-serif italic">Define a new category for manuscript grouping.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase font-bold text-[#1a0a0a] mb-3">
                    Edition Nomenclature
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Entertainment"
                    className="w-full px-4 py-3 border-b-2 border-[#e0bfbc]/50 bg-transparent text-xl font-serif text-[#1a0a0a] placeholder:text-[#59413f]/40 placeholder:italic focus:outline-none focus:border-[#871916] transition-colors rounded-none"
                    required
                  />
                  <p className="text-xs text-[#59413f] italic mt-2">The display name used across the platform.</p>
                </div>
                
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase font-bold text-[#1a0a0a] mb-3">
                    URL Identifier (Slug)
                  </label>
                  <div className="flex items-center">
                    <span className="text-[#59413f] mr-1 text-lg">/</span>
                    <input
                      type="text"
                      name="slug"
                      value={formData.slug}
                      onChange={handleChange}
                      placeholder="e.g. entertainment"
                      className="w-full px-4 py-3 border-b-2 border-[#e0bfbc]/50 bg-transparent text-xl font-mono text-[#871916] placeholder:text-[#59413f]/40 focus:outline-none focus:border-[#871916] transition-colors rounded-none lowercase"
                      required
                    />
                  </div>
                  <p className="text-xs text-[#59413f] italic mt-2">A URL-friendly, lowercase identifier.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-[#e0bfbc]/20">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#1a0a0a] hover:bg-[#871916] text-[#ebd9c8] text-xs font-bold uppercase tracking-widest rounded-full transition-colors"
                >
                  Create Edition
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-8 py-3 bg-transparent hover:bg-[#e0bfbc]/20 text-[#59413f] text-xs font-bold uppercase tracking-widest rounded-full transition-colors"
                >
                  Discard
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Categories Grid - Magazine Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group magazine-card p-6 rounded-xl hover:bg-[#1a0a0a] transition-all duration-700 relative overflow-hidden flex flex-col h-full min-h-[220px] cursor-pointer"
            >
              {/* Decorative background slug */}
              <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-5 text-6xl group-hover:scale-110 font-serif italic transition-all duration-700 whitespace-nowrap hidden sm:block pointer-events-none select-none text-[#1a0a0a] group-hover:text-[#ebd9c8]">
                {category.name}
              </div>

              <div className="flex items-start justify-between relative z-10 w-full mb-6">
                <div>
                  <h3 className="headline-font text-3xl text-[#1a0a0a] group-hover:text-[#ebd9c8] transition-colors duration-700 mb-1">
                    {category.name}
                  </h3>
                  <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-[#871916] group-hover:text-[#d4af37] transition-colors duration-700">
                    <span>/</span>
                    <span>{category.slug}</span>
                  </div>
                </div>
                
                {/* Actions Reveal on Hover */}
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#ebd9c8]/70 hover:bg-[#ebd9c8]/20 hover:text-[#ebd9c8] transition-colors" title="Edit Edition">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                  </button>
                  <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#ebd9c8]/70 hover:bg-red-500/20 hover:text-red-400 transition-colors" title="Remove Edition">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </div>
              </div>

              <div className="mt-auto relative z-10 w-full pt-6 border-t border-[#e0bfbc]/30 group-hover:border-[#ebd9c8]/10 transition-colors duration-700 flex items-end justify-between">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#59413f] group-hover:text-[#ebd9c8]/50 mb-1 transition-colors duration-700">
                    Volume
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-[#1a0a0a] group-hover:text-[#ebd9c8] transition-colors duration-700 leading-none">
                      {category.articles}
                    </span>
                    <span className="text-xs font-serif italic text-[#59413f] group-hover:text-[#ebd9c8]/60 transition-colors duration-700">
                      articles
                    </span>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#59413f] group-hover:text-[#ebd9c8]/50 mb-1 transition-colors duration-700">
                    Established
                  </p>
                  <p className="text-xs font-serif italic text-[#1a0a0a] group-hover:text-[#ebd9c8] transition-colors duration-700">
                     {new Date(category.created).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
