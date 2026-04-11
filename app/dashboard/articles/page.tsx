"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Article {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  status: "published" | "draft" | "scheduled";
  views: number;
  comments: number;
}

export default function ArticlesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const articles: Article[] = [
    {
      id: "1",
      title: "Global Economic Summit Concludes with Landmark Agreements",
      category: "Business",
      author: "John Doe",
      date: "2024-01-15",
      status: "published",
      views: 4521,
      comments: 342,
    },
    {
      id: "2",
      title: "Technology Revolution Transforms Industries",
      category: "Technology",
      author: "Jane Smith",
      date: "2024-01-14",
      status: "published",
      views: 8234,
      comments: 567,
    },
    {
      id: "3",
      title: "New Healthcare Initiative Announced",
      category: "Health",
      author: "Dr. Ahmed Hassan",
      date: "2024-01-13",
      status: "draft",
      views: 0,
      comments: 0,
    },
    {
      id: "4",
      title: "Climate Action Plan Gains International Support",
      category: "Politics",
      author: "Sarah Johnson",
      date: "2024-01-12",
      status: "published",
      views: 6789,
      comments: 421,
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || article.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-[#22c55e]/10 text-[#22c55e] border-[#22c55e]/30";
      case "draft":
        return "bg-[#bfbfbf]/10 text-[#59413f] border-[#bfbfbf]/30";
      case "scheduled":
        return "bg-[#0066cc]/10 text-[#0066cc] border-[#0066cc]/30";
      default:
        return "";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "published":
        return "Published";
      case "draft":
        return "Draft";
      case "scheduled":
        return "Scheduled";
      default:
        return status;
    }
  };

  return (
    <div className="p-8 lg:p-12 max-w-[1600px] mx-auto w-full">
      {/* Header */}
      <div className="mb-12 border-b border-[#e0bfbc]/30 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#871916] font-bold mb-3">Issue No. 1 • The Archives</p>
          <h1 className="headline-font text-5xl lg:text-6xl font-normal text-[#1a0a0a] mb-4 tracking-tight">
            Publications
          </h1>
          <p className="text-[#59413f] font-serif italic text-lg max-w-2xl">
            Manage, review, and curate the entirety of The Grand Editorial&lsquo;s written content.
          </p>
        </div>
        <Link 
          href="/dashboard/articles/new"
          className="group inline-flex items-center justify-center gap-3 bg-[#1a0a0a] hover:bg-[#871916] text-[#ebd9c8] px-6 py-4 rounded-full transition-all duration-500 shadow-xl shadow-[#1a0a0a]/10"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold">Draft Article</span>
          <svg className="w-4 h-4 group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </svg>
        </Link>
      </div>

      <div className="space-y-8">
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
          <div className="flex gap-2 border-b border-[#e0bfbc]/30 pb-4 md:border-0 md:pb-0 overflow-x-auto hidden-scrollbar">
            {['all', 'published', 'draft', 'scheduled'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-5 py-1.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 whitespace-nowrap ${
                  filterStatus === status
                    ? 'bg-[#1a0a0a] text-[#ebd9c8] shadow-md border border-[#1a0a0a]'
                    : 'bg-transparent border border-[#e0bfbc]/50 text-[#59413f] hover:bg-[#871916] hover:text-[#ebd9c8] hover:border-[#871916]'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          <div className="relative max-w-sm w-full shrink-0">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#59413f]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search the archives..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-[#e0bfbc]/50 bg-white/50 rounded-full text-sm focus:outline-none focus:border-[#871916] focus:ring-1 focus:ring-[#871916] transition-all font-serif italic placeholder:not-italic placeholder:text-xs placeholder:uppercase placeholder:tracking-widest"
            />
          </div>
        </div>

        {/* Articles Table as Magazine List */}
        <div className="glass-panel magazine-card rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b-2 border-[#1a0a0a]">
                  <th className="p-6 text-[10px] tracking-[0.2em] uppercase text-[#1a0a0a] font-bold">Title & Author</th>
                  <th className="p-6 text-[10px] tracking-[0.2em] uppercase text-[#1a0a0a] font-bold">Edition</th>
                  <th className="p-6 text-[10px] tracking-[0.2em] uppercase text-[#1a0a0a] font-bold">Date</th>
                  <th className="p-6 text-[10px] tracking-[0.2em] uppercase text-[#1a0a0a] font-bold">Status</th>
                  <th className="p-6 text-[10px] tracking-[0.2em] uppercase text-[#1a0a0a] font-bold text-right">Metrics</th>
                  <th className="p-6 text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e0bfbc]/30">
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((article) => (
                    <tr key={article.id} className="group hover:bg-[#1a0a0a]/5 transition-colors duration-300">
                      <td className="p-6">
                        <div className="flex flex-col gap-1 max-w-[300px]">
                          <Link href={`/dashboard/articles/${article.id}`} className="text-base font-semibold text-[#1a0a0a] group-hover:text-[#871916] transition-colors truncate">
                            {article.title}
                          </Link>
                          <span className="text-xs text-[#59413f] font-serif italic flex items-center gap-2">
                             By {article.author}
                          </span>
                        </div>
                      </td>
                      <td className="p-6">
                        <span className="text-xs font-bold tracking-widest uppercase text-[#59413f]">
                          {article.category}
                        </span>
                      </td>
                      <td className="p-6">
                        <span className="text-sm font-serif italic text-[#1a0a0a]">
                          {new Date(article.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                      </td>
                      <td className="p-6">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest ${
                          article.status === 'published' ? 'bg-[#d4af37]/20 text-[#1a0a0a]' :
                          article.status === 'draft' ? 'bg-[#e0bfbc]/30 text-[#59413f]' :
                          'bg-[#1a0a0a]/10 text-[#1a0a0a]'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            article.status === 'published' ? 'bg-[#871916]' :
                            article.status === 'draft' ? 'bg-[#59413f]' :
                            'bg-[#1a0a0a]'
                          }`} />
                          {getStatusLabel(article.status)}
                        </span>
                      </td>
                      <td className="p-6 text-right">
                         <div className="flex items-center justify-end gap-5 text-xs font-serif italic text-[#59413f]">
                          <span title="Views" className="flex items-center gap-1">
                            {article.views.toLocaleString()} 
                            <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                          </span>
                          <span title="Comments" className="flex items-center gap-1">
                            {article.comments.toLocaleString()} 
                            <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                          </span>
                        </div>
                      </td>
                      <td className="p-6 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#59413f] hover:bg-[#871916] hover:text-[#f4f1ea] transition-colors" title="Edit">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                          </button>
                          <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#59413f] hover:bg-[#871916] hover:text-[#f4f1ea] transition-colors" title="Delete">
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="p-12 text-center">
                      <div className="flex flex-col items-center justify-center gap-3">
                        <span className="text-4xl grayscale opacity-50">📰</span>
                        <p className="text-lg font-serif italic text-[#59413f]">No publications match your criteria.</p>
                        <button 
                          onClick={() => {setSearchTerm(''); setFilterStatus('all');}}
                          className="text-xs font-bold uppercase tracking-[0.2em] text-[#871916] hover:text-[#d4af37] transition-colors mt-2"
                        >
                          Clear Filters
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
