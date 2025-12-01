"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center", className)}>
      <img
        src="/images/Logo.png.webp"
        alt="JOHANNNPICTURES Logo"
        width={60}
        height={60}
        className="object-contain h-14 md:h-16 w-auto"
        onError={(e) => {
          // Если Logo.png.webp не загрузился, пробуем logo.png
          const target = e.target as HTMLImageElement;
          if (target.src.includes("Logo.png.webp")) {
            target.src = "/images/logo.png";
          }
        }}
      />
    </Link>
  );
}

