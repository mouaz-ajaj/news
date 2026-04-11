

import React from "react";

export default function AnalyticsPage() {
  const analyticsData = [
    {
      id: "1",
      title: "Page Views",
      value: "245.8K",
      change: "+18%",
      icon: "📊",
      description: "Total page views this month",
    },
    {
      id: "2",
      title: "Unique Visitors",
      value: "42.3K",
      change: "+12%",
      icon: "👥",
      description: "New and returning visitors",
    },
    {
      id: "3",
      title: "Avg Session Duration",
      value: "4m 23s",
      change: "+5%",
      icon: "⏱️",
      description: "Average time on site",
    },
    {
      id: "4",
      title: "Bounce Rate",
      value: "32%",
      change: "-8%",
      icon: "⚡",
      description: "Lower is better",
    },
  ];

  return (
    <div className="p-8 lg:p-12 max-w-[1600px] mx-auto w-full">
      {/* Header */}
      <div className="mb-12 border-b border-[#e0bfbc]/30 pb-6">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#871916] font-bold mb-3">Issue No. 1 • Analytics</p>
        <h1 className="headline-font text-5xl lg:text-6xl font-normal text-[#1a0a0a] mb-4 tracking-tight">
          Dashboard
        </h1>
        <p className="text-[#59413f] font-serif italic text-lg max-w-2xl">
          Track and analyze the performance, engagement, and reach of your editorial content across the network.
        </p>
      </div>

      <div className="space-y-12">
        {/* Time Period Selector */}
        <div className="flex gap-2 border-b border-[#e0bfbc]/30 pb-6">
          {['7 Days', '30 Days', '3 Months', '1 Year'].map((period) => (
            <button
              key={period}
              className={`px-5 py-1.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                period === '30 Days'
                  ? 'bg-[#1a0a0a] text-[#ebd9c8] shadow-md border border-[#1a0a0a]'
                  : 'bg-transparent border border-[#e0bfbc]/50 text-[#59413f] hover:bg-[#871916] hover:text-[#ebd9c8] hover:border-[#871916]'
              }`}
            >
              {period}
            </button>
          ))}
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {analyticsData.map((item) => (
            <div
              key={item.id}
              className="group magazine-card p-6 lg:p-8 hover:bg-[#1a0a0a] transition-all duration-700 relative overflow-hidden h-full flex flex-col justify-between"
            >
              <div className="absolute -right-4 -bottom-8 opacity-[0.03] text-9xl group-hover:opacity-10 group-hover:scale-110 transition-all duration-700 grayscale hidden sm:block">
                {item.icon}
              </div>
              <div className="flex items-start justify-between relative z-10 w-full mb-8">
                <p className="text-[10px] font-bold text-[#1b1c1b] group-hover:text-[#ebd9c8] uppercase tracking-[0.2em] transition-colors duration-700">
                  {item.title}
                </p>
                <div className="w-1.5 h-1.5 rounded-full bg-[#1b1c1b] group-hover:bg-[#d4af37] transition-colors duration-700" />
              </div>
              <div className="relative z-10 w-full">
                <p className="text-5xl font-bold text-[#1b1c1b] group-hover:text-[#ebd9c8] group-hover:scale-105 origin-left headline-font tracking-tighter transition-all duration-700 mb-4">
                  {item.value}
                </p>
                <div className="flex flex-col gap-1">
                  <span
                    className={`text-xs font-bold w-fit px-2 py-0.5 border ${
                      item.change.startsWith('+')
                        ? 'border-green-600/30 text-green-700 group-hover:border-green-400 group-hover:text-green-400'
                        : 'border-red-600/30 text-red-700 group-hover:border-red-400 group-hover:text-red-400'
                    }`}
                  >
                    {item.change.startsWith('+') ? '▲' : '▼'} {item.change.replace(/[+-]/g, '')}
                  </span>
                  <p className="text-[10px] uppercase font-bold tracking-[0.1em] text-[#59413f] group-hover:text-[#ebd9c8]/50 transition-colors duration-700 mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts & Top Articles Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Views Chart Placeholder */}
           <div className="glass-panel magazine-card p-6 lg:p-8 rounded-xl relative overflow-hidden flex flex-col">
             <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#e0bfbc]/30">
                <h3 className="headline-font text-2xl text-[#1a0a0a]">Audience Impact</h3>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#1a0a0a] bg-[#d4af37]/20 px-2 py-1 rounded">Live</span>
             </div>
             <div className="flex-1 min-h-[250px] flex items-center justify-center bg-[#f4f1ea]/30 border border-dashed border-[#e0bfbc]/40 rounded-lg group hover:bg-[#f4f1ea]/80 transition-colors">
                <div className="text-center flex flex-col items-center justify-center">
                  <span className="text-4xl mb-3 opacity-60 group-hover:scale-110 transition-transform duration-500">📈</span>
                  <p className="text-sm text-[#1a0a0a] font-medium tracking-widest uppercase mb-1">Chart Integration</p>
                  <p className="text-xs text-[#59413f] font-serif italic">Visualization area for views metric</p>
                </div>
             </div>
          </div>

          {/* Top Articles */}
          <div className="glass-panel magazine-card p-6 lg:p-8 rounded-xl">
            <div className="mb-6 pb-4 border-b border-[#e0bfbc]/30">
              <h3 className="headline-font text-2xl text-[#1a0a0a] mb-1">Featured Headlines</h3>
              <p className="text-xs text-[#59413f] font-serif italic">Highest performing pieces</p>
            </div>
            <div className="flex flex-col gap-2">
              {[
                { title: 'Global Economic Summit Concludes', views: 12450 },
                { title: 'Tech Revolution Continues', views: 9823 },
                { title: 'Climate Action Plan', views: 7654 },
                { title: 'Healthcare Initiative', views: 5432 },
              ].map((article, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 py-3 border-b border-[#e0bfbc]/20 last:border-0 group cursor-pointer hover:bg-[#1a0a0a]/5 px-2 -mx-2 rounded transition-colors"
                >
                  <span className={`text-xl headline-font italic w-6 text-center mt-0.5 ${index < 2 ? 'text-[#871916]' : 'text-[#e0bfbc]'}`}>
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">
                    <h4 className="text-sm font-semibold text-[#1a0a0a] group-hover:text-[#871916] transition-colors truncate">
                      {article.title}
                    </h4>
                    <span className="text-xs font-serif italic text-[#59413f] min-w-fit">
                      {article.views.toLocaleString()} reads
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Performance */}
        <div className="glass-panel magazine-card p-6 lg:p-8 rounded-xl">
           <div className="mb-8 pb-4 border-b border-[#e0bfbc]/30">
             <h3 className="headline-font text-2xl text-[#1a0a0a] mb-1">Engagement by Edition</h3>
             <p className="text-xs text-[#59413f] font-serif italic">Content distribution over views</p>
           </div>
           
           <div className="space-y-6 max-w-4xl">
             {[
               { category: 'Technology', views: 45230, percentage: 78, color: 'bg-[#1a0a0a]' },
               { category: 'Business', views: 32500, percentage: 62, color: 'bg-[#4a040b]' },
               { category: 'Politics', views: 28900, percentage: 54, color: 'bg-[#871916]' },
               { category: 'Health', views: 19800, percentage: 38, color: 'bg-[#d4af37]' },
             ].map((cat, index) => (
               <div key={index} className="group">
                 <div className="flex items-center justify-between mb-2">
                   <p className="text-xs tracking-widest uppercase font-bold text-[#1a0a0a] group-hover:text-[#871916] transition-colors">
                     {cat.category}
                   </p>
                   <span className="text-xs font-serif italic text-[#59413f]">
                     {cat.views.toLocaleString()} views
                   </span>
                 </div>
                 <div className="w-full h-1.5 bg-[#e0bfbc]/30 rounded-full overflow-hidden">
                   <div
                     className={`h-full ${cat.color} rounded-full transition-all duration-1000 group-hover:opacity-80`}
                     style={{ width: `${cat.percentage}%` }}
                   />
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}
