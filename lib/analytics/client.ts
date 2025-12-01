"use client";

export function trackEvent(eventName: string, properties?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    // TODO: Implement analytics tracking
    console.log("Track event:", eventName, properties);
  }
}

export function trackPageView(path: string) {
  trackEvent("page_view", { path });
}



