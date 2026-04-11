"use client";

import React, { useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  country: string;
  joinDate: string;
  status: "active" | "inactive";
  articles: number;
}

export default function UsersPage() {
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const users: User[] = [
    {
      id: "1",
      name: "Ahmed Hassan",
      email: "ahmed@example.com",
      country: "Egypt",
      joinDate: "2023-05-12",
      status: "active",
      articles: 24,
    },
    {
      id: "2",
      name: "Fatima Al-Zahra",
      email: "fatima@example.com",
      country: "Saudi Arabia",
      joinDate: "2023-06-20",
      status: "active",
      articles: 18,
    },
    {
      id: "3",
      name: "Mohammed Ali",
      email: "mohammed@example.com",
      country: "UAE",
      joinDate: "2023-08-15",
      status: "inactive",
      articles: 5,
    },
    {
      id: "4",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      country: "USA",
      joinDate: "2023-09-10",
      status: "active",
      articles: 32,
    },
  ];

  const filteredUsers = users.filter((user) => {
    if (filterStatus === "all") return true;
    return user.status === filterStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-[#22c55e]/10 text-[#22c55e] border-[#22c55e]/30";
      case "inactive":
        return "bg-[#bfbfbf]/10 text-[#59413f] border-[#bfbfbf]/30";
      default:
        return "";
    }
  };

  return (
    <div className="p-8 lg:p-12 max-w-[1600px] mx-auto w-full">
      {/* Header */}
      <div className="mb-12 border-b border-[#e0bfbc]/30 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#871916] font-bold mb-3">Issue No. 1 • The Roster</p>
          <h1 className="headline-font text-5xl lg:text-6xl font-normal text-[#1a0a0a] mb-4 tracking-tight">
            Contributors
          </h1>
          <p className="text-[#59413f] font-serif italic text-lg max-w-2xl">
            Manage your network of journalists, editors, and guests.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2.5 bg-[#1a0a0a] text-[#ebd9c8] text-xs font-bold uppercase tracking-widest hover:bg-[#871916] transition-colors rounded-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            Invite Member
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-8 border-b border-[#e0bfbc]/30 pb-4">
          <div className="flex gap-2 overflow-x-auto hidden-scrollbar">
            {['all', 'active', 'inactive'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-5 py-1.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 whitespace-nowrap ${
                  filterStatus === status
                    ? 'bg-[#1a0a0a] text-[#ebd9c8] shadow-md border border-[#1a0a0a]'
                    : 'bg-transparent border border-[#e0bfbc]/50 text-[#59413f] hover:bg-[#871916] hover:text-[#ebd9c8] hover:border-[#871916]'
                }`}
              >
                {status === 'all' ? 'Entire Roster' : status}
              </button>
            ))}
          </div>
        </div>

        {/* Users Table - Magazine Layout */}
        <div className="bg-transparent border-t border-[#1a0a0a]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-[#1a0a0a]">
                <th className="py-4 px-4 font-serif italic text-sm text-[#59413f] font-normal w-1/4">Name / ID</th>
                <th className="py-4 px-4 font-serif italic text-sm text-[#59413f] font-normal w-1/4">Location</th>
                <th className="py-4 px-4 font-serif italic text-sm text-[#59413f] font-normal hidden md:table-cell">Contributions</th>
                <th className="py-4 px-4 font-serif italic text-sm text-[#59413f] font-normal">Status</th>
                <th className="py-4 px-4 font-serif italic text-sm text-[#1a0a0a] font-normal text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e0bfbc]/50">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr 
                    key={user.id} 
                    className="group hover:bg-[#1a0a0a]/5 transition-colors duration-300"
                  >
                    <td className="py-6 px-4">
                      <div>
                        <h3 className="headline-font text-2xl text-[#1a0a0a]">{user.name}</h3>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-[#871916] mt-1">{user.email}</p>
                      </div>
                    </td>
                    <td className="py-6 px-4">
                      <p className="text-sm font-bold text-[#1a0a0a]">{user.country}</p>
                      <p className="text-xs font-serif italic text-[#59413f]">Since {new Date(user.joinDate).getFullYear()}</p>
                    </td>
                    <td className="py-6 px-4 hidden md:table-cell">
                      <div className="flex items-center gap-2 text-[#59413f]">
                         <span className="text-2xl font-serif text-[#1a0a0a]">{user.articles}</span>
                         <span className="text-xs uppercase tracking-widest font-bold">Pieces</span>
                      </div>
                    </td>
                    <td className="py-6 px-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest ${
                        user.status === 'active' ? 'bg-[#1a0a0a]/10 text-[#1a0a0a]' : 'bg-[#e0bfbc]/30 text-[#59413f]'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          user.status === 'active' ? 'bg-[#1a0a0a]' : 'bg-[#59413f]'
                        }`} />
                        {user.status}
                      </span>
                    </td>
                    <td className="py-6 px-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#59413f] hover:bg-[#1a0a0a] hover:text-[#ebd9c8] transition-colors" title="View Dossier">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        </button>
                        <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#59413f] hover:bg-[#871916] hover:text-[#ebd9c8] transition-colors" title="Dispatch Missive">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </button>
                        <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#59413f] hover:bg-black/5 transition-colors" title="Revoke Access">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-12 text-center">
                    <p className="text-lg font-serif italic text-[#59413f]">No contributors found in the directory.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
