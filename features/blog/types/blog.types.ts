export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  tags?: string[];
  category?: string;
}



