"use client";

import { PortfolioItem } from "./portfolio-item";

interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  category: string;
}

interface PortfolioGridProps {
  items: PortfolioItem[];
}

export function PortfolioGrid({ items }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <PortfolioItem key={item.id} item={item} />
      ))}
    </div>
  );
}



