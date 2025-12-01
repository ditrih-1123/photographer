"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="text-white hover:text-gray-300 hover:bg-white/10"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      {open && (
        <div className="absolute top-16 md:top-20 left-0 right-0 border-b bg-black/95 backdrop-blur-md p-4 shadow-lg">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              if ("hasDropdown" in item && item.hasDropdown) {
                return (
                  <div key={item.label} className="flex flex-col">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center justify-between text-sm font-medium py-2 text-white"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          servicesOpen && "rotate-180"
                        )}
                      />
                    </button>
                    {servicesOpen && (
                      <div className="pl-4 flex flex-col gap-2 mt-1">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => {
                              setOpen(false);
                              setServicesOpen(false);
                            }}
                            className="text-sm text-gray-400 hover:text-white py-1"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium py-2 text-white hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}

