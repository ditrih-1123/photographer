"use client";

import { useEffect } from "react";

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize analytics
    if (typeof window !== "undefined") {
      // Analytics initialization logic
    }
  }, []);

  return <>{children}</>;
}

