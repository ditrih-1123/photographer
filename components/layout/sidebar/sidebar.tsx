"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Settings, 
  BarChart3, 
  PanelTop as HeaderIcon,
  Home
} from "lucide-react";

const sidebarItems = [
  { href: "/dashboard", label: "Главная", icon: LayoutDashboard },
  { href: "/dashboard/header", label: "Хедер", icon: HeaderIcon },
  { href: "/dashboard/hero", label: "Hero секция", icon: Home },
  { href: "/dashboard/analytics", label: "Аналитика", icon: BarChart3 },
  { href: "/dashboard/settings", label: "Настройки", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#23282d] text-white min-h-screen flex flex-col">
      <div className="p-4 border-b border-[#32373c]">
        <h1 className="text-xl font-bold text-white">Админ-панель</h1>
      </div>
      <nav className="flex-1 p-2 space-y-1">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || 
            (item.href !== "/dashboard" && pathname.startsWith(item.href));
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-colors rounded",
                isActive
                  ? "bg-[#0073aa] text-white"
                  : "text-[#b4b9be] hover:bg-[#32373c] hover:text-white"
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-[#32373c]">
        <Link
          href="/"
          className="text-sm text-[#b4b9be] hover:text-white transition-colors"
        >
          ← Вернуться на сайт
        </Link>
      </div>
    </aside>
  );
}

