"use client";

import { useState, useEffect } from "react";

interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  category: string;
}

export function usePortfolio() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    // TODO: Fetch portfolio items
    setIsLoading(false);
  }, []);

  const filteredItems =
    filter === "all"
      ? items
      : items.filter((item) => item.category === filter);

  return {
    items: filteredItems,
    isLoading,
    filter,
    setFilter,
  };
}



