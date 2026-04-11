import React from "react";

interface StatCardProps {
  icon: string;
  label: string;
  value: string | number;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: "red" | "blue" | "green" | "orange";
}

export default function StatCard({
  icon,
  label,
  value,
  trend,
  color = "blue",
}: StatCardProps) {

  return (
    <div className={`group magazine-card p-6 lg:p-8 hover:bg-[#1a0a0a] transition-all duration-700 relative overflow-hidden h-full flex flex-col justify-between`}>
      {/* Decorative large background icon */}
      <div className={`absolute -right-4 -bottom-8 opacity-[0.03] text-9xl group-hover:opacity-10 group-hover:scale-110 transition-all duration-700 grayscale hidden sm:block`}>
        {icon}
      </div>

      <div className="flex items-start justify-between relative z-10 w-full mb-8">
        <p className="text-[10px] font-bold text-[#1b1c1b]  uppercase tracking-[0.2em] transition-colors duration-700">
          {label}
        </p>
        <div className="w-1.5 h-1.5 rounded-full bg-[#1b1c1b] group-hover:bg-[#d4af37] transition-colors duration-700" />
      </div>

      <div className="relative z-10 w-full">
        <p className="text-5xl lg:text-6xl font-bold text-[#1b1c1b] group-hover:scale-110 headline-font tracking-tighter transition-scale transition-colors duration-700 mb-2">
          {value}
        </p>

        {trend && (
          <div className="flex items-center gap-3">
            <span
              className={`text-xs font-bold px-2 py-0.5 border ${trend.isPositive ? "border-green-600/30 text-green-700 group-hover:border-green-400 group-hover:text-green-400" : "border-red-600/30 text-red-700 group-hover:border-red-400 group-hover:text-red-400"
                }`}
            >
              {trend.isPositive ? "▲" : "▼"} {Math.abs(trend.value)}%
            </span>
            <span className="text-[10px] text-[#59413f] group-hover:text-[#ebd9c8]/50 uppercase tracking-[0.1em] transition-colors duration-700">Past Week</span>
          </div>
        )}
      </div>
    </div>
  );
}
