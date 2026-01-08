import type { Province } from "../types";

/**
 * List of all provinces in Nepal
 */
export const PROVINCES: readonly Province[] = [
  "bagmati",
  "sudurpaschim",
  "lumbini",
  "koshi",
  "madhesh",
  "gandaki",
  "karnali",
] as const;

/**
 * Get all provinces in Nepal
 * @returns Array of all province names
 */
export function getProvinces(): Province[] {
  return [...PROVINCES];
}

/**
 * Check if a province name is valid
 * @param name - Province name to check
 * @returns True if the province exists
 */
export function isValidProvince(name: string): name is Province {
  return PROVINCES.includes(name.toLowerCase() as Province);
}
