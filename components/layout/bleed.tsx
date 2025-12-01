import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BleedProps {
  children: ReactNode;
  className?: string;
}

export function Bleed({ children, className }: BleedProps) {
  return (
    <div className={cn("-mx-4 sm:-mx-6 lg:-mx-8", className)}>{children}</div>
  );
}



