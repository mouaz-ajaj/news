"use client";

import React from "react";

interface Activity {
  id: string;
  type: "article" | "comment" | "user";
  action: string;
  description: string;
  timestamp: string;
  icon: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

export default function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <div className="bg-white rounded-xl border border-[#e0bfbc]/30 overflow-hidden shadow-sm">
      <div className="px-6 py-4 border-b border-[#e0bfbc]/30">
        <h3 className="text-lg font-semibold text-[#1b1c1b]">Recent Activity</h3>
      </div>
      <div className="divide-y divide-[#e0bfbc]/30">
        {activities.map((activity) => (
          <div key={activity.id} className="px-6 py-4 hover:bg-[#fdfcfb] transition-colors duration-200">
            <div className="flex items-start gap-4">
              <div className="text-2xl mt-1">{activity.icon}</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#1b1c1b]">
                  {activity.action}
                </p>
                <p className="text-xs text-[#59413f] mt-1 truncate">
                  {activity.description}
                </p>
                <p className="text-xs text-[#bfbfbf] mt-2">{activity.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
