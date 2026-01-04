import type { Province } from "../types";
/**
 * List of all provinces in Nepal
 */
export declare const PROVINCES: readonly Province[];
/**
 * Get all provinces in Nepal
 * @returns Array of all province names
 */
export declare function getProvinces(): Province[];
/**
 * Check if a province name is valid
 * @param name - Province name to check
 * @returns True if the province exists
 */
export declare function isValidProvince(name: string): name is Province;
//# sourceMappingURL=provinces.d.ts.map