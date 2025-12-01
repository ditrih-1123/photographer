export interface PortfolioItem {
  id: string;
  title: string;
  description?: string;
  image: string;
  images?: string[];
  category: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface PortfolioCategory {
  id: string;
  name: string;
  slug: string;
}



