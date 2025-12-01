export const API_ENDPOINTS = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
    me: "/auth/me",
  },
  portfolio: {
    list: "/portfolio",
    detail: (id: string) => `/portfolio/${id}`,
  },
  blog: {
    list: "/blog",
    detail: (slug: string) => `/blog/${slug}`,
  },
  newsletter: {
    subscribe: "/newsletter",
  },
  analytics: {
    track: "/analytics",
  },
} as const;



