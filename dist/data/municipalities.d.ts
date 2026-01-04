import type { District, Municipality } from "../types";
/**
 * Get all municipalities
 * @param district - Optional district to filter municipalities
 * @returns Array of municipality names
 */
export declare function getMunicipalities(district?: string): Municipality[];
/**
 * Get municipalities for a specific district
 * @param district - District name
 * @returns Array of municipality names in the district
 */
export declare function getMunicipalitiesByDistrict(district: string): Municipality[];
/**
 * Get the district for a given municipality
 * @param municipality - Municipality name
 * @returns District name or undefined if municipality not found
 */
export declare function getDistrictByMunicipality(municipality: string): District | undefined;
/**
 * Check if a municipality name is valid
 * @param name - Municipality name to check
 * @param district - Optional district to validate against
 * @returns True if the municipality exists (and belongs to district if provided)
 */
export declare function isValidMunicipality(name: string, district?: string): boolean;
//# sourceMappingURL=municipalities.d.ts.map