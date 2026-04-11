"use client";

import React, { useState } from "react";

interface Comment {
  id: string;
  author: string;
  article: string;
  text: string;
  date: string;
  status: "approved" | "pending" | "spam";
}

export default function CommentsPage() {
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const comments: Comment[] = [
    {
      id: "1",
      author: "Ahmed Hassan",
      article: "Global Economic Summit Concludes with Landmark Agreements",
      text: "Great analysis of the economic implications. Looking forward to more detailed coverage.",
      date: "2024-01-15",
      status: "approved",
    },
    {
      id: "2",
      author: "Fatima Al-Zahra",
      article: "Technology Revolution Transforms Industries",
      text: "This is spam content!!!",
      date: "2024-01-14",
      status: "spam",
    },
    {
      id: "3",
      author: "Mohammed Ali",
      article: "New Healthcare Initiative Announced",
      text: "When will this be implemented? Very important for our community.",
      date: "2024-01-13",
      status: "pending",
    },
    {
      id: "4",
      author: "Sarah Johnson",
      article: "Climate Action Plan Gains International Support",
      text: "Finally some concrete action on climate change!",
      date: "2024-01-12",
      status: "approved",
    },
  ];

  const filteredComments = comments.filter((comment) => {
    if (filterStatus === "all") return true;
    return comment.status === filterStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-[#22c55e]/10 text-[#22c55e] border-[#22c55e]/30";
      case "pending":
        return "bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30";
      case "spam":
        return "bg-[#ef4444]/10 text-[#ef4444] border-[#ef4444]/30";
      default:
        return "";
    }
  };

  return (
    <div className="p-8 lg:p-12 max-w-[1600px] mx-auto w-full">
      {/* Header */}
      <div className="mb-12 border-b border-[#e0bfbc]/30 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#871916] font-bold mb-3">Issue No. 1 • The Public Forum</p>
          <h1 className="headline-font text-5xl lg:text-6xl font-normal text-[#1a0a0a] mb-4 tracking-tight">
            Discourse
          </h1>
          <p className="text-[#59413f] font-serif italic text-lg max-w-2xl">
            Review, moderate, and engage with the community&lsquo;s responses to your publications.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-8 border-b border-[#e0bfbc]/30 pb-4">
          <div className="flex gap-2 overflow-x-auto hidden-scrollbar">
            {['all', 'pending', 'approved', 'spam'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-5 py-1.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 whitespace-nowrap ${
                  filterStatus === status
                    ? 'bg-[#1a0a0a] text-[#ebd9c8] shadow-md border border-[#1a0a0a]'
                    : 'bg-transparent border border-[#e0bfbc]/50 text-[#59413f] hover:bg-[#871916] hover:text-[#ebd9c8] hover:border-[#871916]'
                }`}
              >
                {status === 'all' ? 'All Discourse' : status}
              </button>
            ))}
          </div>
        </div>

        {/* Comments List - Magazine Style */}
        <div className="grid grid-cols-1 gap-6">
          {filteredComments.length > 0 ? (
            filteredComments.map((comment) => (
              <div
                key={comment.id}
                className="group magazine-card p-6 lg:p-8 rounded-xl hover:bg-[#f4f1ea]/50 transition-colors duration-500 relative flex flex-col md:flex-row gap-6 md:gap-12"
              >
                {/* Meta Side */}
                <div className="w-full md:w-64 shrink-0 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#e0bfbc]/30 pb-4 md:pb-0 md:pr-8">
                  <div>
                     <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest mb-4 ${
                        comment.status === 'approved' ? 'bg-[#d4af37]/20 text-[#1a0a0a]' :
                        comment.status === 'pending' ? 'bg-[#871916]/10 text-[#871916]' :
                        'bg-[#1a0a0a]/10 text-[#1a0a0a]'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          comment.status === 'approved' ? 'bg-[#1a0a0a]' :
                          comment.status === 'pending' ? 'bg-[#871916]' :
                          'bg-[#59413f]'
                        }`} />
                        {comment.status}
                      </span>
                      <h3 className="headline-font text-2xl text-[#1a0a0a] leading-tight mb-2">
                        {comment.author}
                      </h3>
                      <p className="text-xs font-serif italic text-[#59413f]">
                         {new Date(comment.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </p>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="mb-6">
                    <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#871916] mb-2">
                       Commenting on:
                    </p>
                    <p className="text-sm font-bold text-[#1a0a0a] mb-4">
                       {comment.article}
                    </p>
                    <div className="text-xl text-[#1a0a0a] font-serif leading-relaxed relative">
                       <span className="absolute -left-6 -top-2 text-4xl text-[#e0bfbc]/40 font-serif leading-none select-none">&quot;</span>
                       {comment.text}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#e0bfbc]/20 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                    {comment.status === "pending" && (
                      <>
                        <button className="px-5 py-2 text-[10px] uppercase tracking-widest font-bold bg-[#1a0a0a] text-[#ebd9c8] hover:bg-[#871916] rounded-full transition-colors flex items-center gap-2">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          Approve
                        </button>
                        <button className="px-5 py-2 text-[10px] uppercase tracking-widest font-bold bg-transparent border border-[#e0bfbc]/50 text-[#59413f] hover:bg-black/5 hover:text-[#1a0a0a] rounded-full transition-colors flex items-center gap-2">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                          Reject
                        </button>
                      </>
                    )}
                    {(comment.status === "approved" || comment.status === "spam") && (
                       <button className="px-5 py-2 text-[10px] uppercase tracking-widest font-bold bg-transparent border border-[#e0bfbc]/50 text-[#59413f] hover:bg-[#871916] hover:text-[#ebd9c8] rounded-full transition-colors flex items-center gap-2">
                          Revoke & Mark Spam
                       </button>
                    )}
                    <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#59413f] hover:bg-red-500/10 hover:text-red-600 transition-colors ml-auto" title="Delete record">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
             <div className="p-12 text-center glass-panel magazine-card rounded-xl">
               <div className="flex flex-col items-center justify-center gap-3">
                 <span className="text-4xl grayscale opacity-50">🖋️</span>
                 <p className="text-lg font-serif italic text-[#59413f]">The discourse is currently quiet.</p>
                 <button 
                   onClick={() => setFilterStatus('all')}
                   className="text-xs font-bold uppercase tracking-[0.2em] text-[#871916] hover:text-[#d4af37] transition-colors mt-2"
                 >
                   View All Feedback
                 </button>
               </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
