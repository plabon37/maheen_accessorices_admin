"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Image,
  FolderTree,
  Package,
  Info,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import { useDashboard } from "./DashboardContext";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Hero",
    href: "/dashboard/hero",
    icon: Image,
  },
   {
    name: "Service",
    href: "/dashboard/service",
    icon: Image,
  },
  {
    name: "Album",
    href: "/dashboard/album",
    icon: Image,
  },
  {
    name: "Category",
    href: "/dashboard/category",
    icon: FolderTree,
  },
  {
    name: "Product",
    href: "/dashboard/product",
    icon: Package,
  },
  {
    name: "About",
    href: "/dashboard/about",
    icon: Info,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const { sidebarOpen, setSidebarOpen } = useDashboard();

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });

      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 z-50 h-screen w-64 bg-slate-900 text-white transform transition-transform duration-300
        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-slate-700 px-5">
          <h1 className="text-xl font-bold text-cyan-400">
            Admin Panel
          </h1>

          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden"
          >
            <X />
          </button>
        </div>

        {/* Menu */}
        <nav className="space-y-2 p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                  active
                    ? "bg-cyan-500"
                    : "hover:bg-slate-800"
                }`}
              >
                <Icon size={20} />

                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 w-full border-t border-slate-700 p-4">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 hover:bg-red-600"
          >
            <LogOut size={20} />

            Logout
          </button>
        </div>
      </aside>
    </>
  );
}