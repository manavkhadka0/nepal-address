import type { District, Province } from "../types";
/**
 * Normalize district name (lowercase, trim spaces, handle special cases)
 */
export declare function normalizeDistrict(name: string): string;
/**
 * Get all districts
 * @param province - Optional province to filter districts
 * @returns Array of district names
 */
export declare function getDistricts(province?: string): District[];
/**
 * Get districts for a specific province
 * @param province - Province name
 * @returns Array of district names in the province
 */
export declare function getDistrictsByProvince(province: string): District[];
/**
 * Get the province for a given district
 * @param district - District name
 * @returns Province name or undefined if district not found
 */
export declare function getProvinceByDistrict(district: string): Province | undefined;
/**
 * Check if a district name is valid
 * @param name - District name to check
 * @param province - Optional province to validate against
 * @returns True if the district exists (and belongs to province if provided)
 */
export declare function isValidDistrict(name: string, province?: string): boolean;
//# sourceMappingURL=districts.d.ts.map