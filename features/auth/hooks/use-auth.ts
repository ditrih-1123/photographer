"use client";

import { useState, useEffect } from "react";

interface User {
  id: string;
  email: string;
  name: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Implement auth check
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // TODO: Implement login
  };

  const logout = async () => {
    // TODO: Implement logout
    setUser(null);
  };

  return {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated: !!user,
  };
}



