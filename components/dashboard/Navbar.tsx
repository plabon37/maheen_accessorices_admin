"use client";

import { Bell, Menu, UserCircle } from "lucide-react";
import { useDashboard } from "./DashboardContext";

export default function Navbar() {
  const { setSidebarOpen } = useDashboard();

  return (
    <header className="sticky text-black top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 shadow-sm">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="rounded-lg p-2 hover:bg-slate-100 md:hidden"
        >
          <Menu size={22} />
        </button>

        <div>
          <h1 className="text-xl font-bold text-slate-800">
            Dashboard
          </h1>

          <p className="text-sm text-slate-500">
            Welcome back 👋
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <button className="relative rounded-full p-2 hover:bg-slate-100">
          <Bell size={22} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2">
          <UserCircle
            size={34}
            className="text-slate-600"
          />

          <div className="hidden sm:block">
            <h4 className="text-sm font-semibold">
              Administrator
            </h4>

            <p className="text-xs text-slate-500">
              ahmedplabon4@gmail.com
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}