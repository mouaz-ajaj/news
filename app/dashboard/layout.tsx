import type { Metadata } from "next";
import Sidebar from "@/component/dashboard/Sidebar";
import "../globals.css";

export const metadata: Metadata = {
  title: "Dashboard - The Grand Editorial",
  description: "News management dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-[#f4f1ea] text-[#1b1c1b] selection:bg-[#73000c] selection:text-[#f4f1ea]">
        <style>{`
          .editorial-gradient {
            background: linear-gradient(135deg, #4a040b 0%, #871916 100%);
          }
          .glass-panel {
            background: rgba(255, 255, 255, 0.65);
            backdrop-filter: blur(16px);
          }
          .magazine-card {
            background: #ffffff;
            box-shadow: 0 10px 40px -10px rgba(0,0,0,0.08);
            border: 1px solid rgba(115,0,12,0.1);
          }
          .headline-font {
            font-family: "Georgia", "Times New Roman", serif;
          }
          .noise-bg {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
          }
        `}</style>
        <div className="fixed w-full h-screen noise-bg inset-0 pointer-events-none z-0"></div>
        <div className="relative z-10 flex min-h-screen">
          <Sidebar />
          <main className="flex-1 bg-[#f4f1ea]/80 backdrop-blur-3xl shadow-[-20px_0_40px_rgba(0,0,0,0.03)] border-l border-[#e0bfbc]/30 rounded-l-4xl my-4 mr-4">
            <div className="min-h-full">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
