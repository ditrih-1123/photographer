"use client";

import { useState, useEffect } from "react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  content: string;
  publishedAt: string;
}

export function useBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch blog posts
    setIsLoading(false);
  }, []);

  return {
    posts,
    isLoading,
  };
}

export function useBlogPost(slug: string) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch blog post by slug
    setIsLoading(false);
  }, [slug]);

  return {
    post,
    isLoading,
  };
}



