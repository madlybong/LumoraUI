import type { Component } from "vue";

export type IconResolver = (name: string, size?: number) => Component | null;

export interface LumoraUIConfig {
  target?: "mobile" | "desktop" | "embedded";
  locale?: string;
  a11y?: boolean;
  icons?: IconResolver;
}
