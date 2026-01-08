/**
 * Type definitions for Nepal Address Data
 */

/**
 * Province name type
 */
export type Province =
  | "bagmati"
  | "sudurpaschim"
  | "lumbini"
  | "koshi"
  | "madhesh"
  | "gandaki"
  | "karnali";

/**
 * District name type (normalized - lowercase, no trailing spaces)
 */
export type District = string;

/**
 * Municipality name type
 */
export type Municipality = string;

/**
 * Complete address structure
 */
export interface Address {
  province: Province;
  district: District;
  municipality: Municipality;
}

/**
 * Search options for filtering results
 */
export interface SearchOptions {
  caseSensitive?: boolean;
  exactMatch?: boolean;
}
