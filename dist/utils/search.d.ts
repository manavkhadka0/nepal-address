import type { District, Municipality, Province, SearchOptions } from "../types";
/**
 * Search provinces by name
 * @param query - Search query
 * @param options - Search options
 * @returns Array of matching province names
 */
export declare function searchProvinces(query: string, options?: SearchOptions): Province[];
/**
 * Search districts by name
 * @param query - Search query
 * @param province - Optional province to filter results
 * @param options - Search options
 * @returns Array of matching district names
 */
export declare function searchDistricts(query: string, province?: string, options?: SearchOptions): District[];
/**
 * Search municipalities by name
 * @param query - Search query
 * @param district - Optional district to filter results
 * @param options - Search options
 * @returns Array of matching municipality names
 */
export declare function searchMunicipalities(query: string, district?: string, options?: SearchOptions): Municipality[];
//# sourceMappingURL=search.d.ts.map