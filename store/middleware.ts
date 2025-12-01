import type { StateCreator } from "zustand";

export const logger =
  <T,>(config: StateCreator<T>) =>
  (set: any, get: any, api: any) =>
    config(
      (...args: any[]) => {
        console.log("  applying", args);
        set(...args);
        console.log("  new state", get());
      },
      get,
      api
    );



