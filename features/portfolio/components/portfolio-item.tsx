"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  category: string;
}

interface PortfolioItemProps {
  item: PortfolioItem;
}

export function PortfolioItem({ item }: PortfolioItemProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-sm text-muted-foreground">{item.category}</p>
      </div>
    </Card>
  );
}



