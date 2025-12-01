import { create } from "zustand";

interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  category: string;
}

interface PortfolioState {
  items: PortfolioItem[];
  filter: string;
  setItems: (items: PortfolioItem[]) => void;
  setFilter: (filter: string) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  items: [],
  filter: "all",
  setItems: (items) => set({ items }),
  setFilter: (filter) => set({ filter }),
}));



