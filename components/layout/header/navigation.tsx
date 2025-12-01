"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Über uns" },
  {
    label: "Services",
    hasDropdown: true,
    items: [
      { href: "/services/photography", label: "Fotografie" },
      { href: "/services/videography", label: "Videografie" },
      { href: "/services/editing", label: "Bildbearbeitung" },
    ],
  },
  { href: "/contact", label: "Kontakt" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-6">
      {navItems.map((item) => {
        if ("hasDropdown" in item && item.hasDropdown) {
          return (
            <DropdownMenu
              key={item.label}
              trigger={
                <button
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-white",
                    "text-gray-300"
                  )}
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
              }
            >
              {item.items?.map((subItem) => (
                <DropdownMenuItem
                  key={subItem.href}
                  className={cn(
                    pathname === subItem.href && "bg-accent text-accent-foreground"
                  )}
                >
                  <Link href={subItem.href} className="w-full">
                    {subItem.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenu>
          );
        }

        if (!("href" in item) || !item.href) {
          return null;
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-white",
              pathname === item.href
                ? "text-white"
                : "text-gray-300"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

