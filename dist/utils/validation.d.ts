import type { Address } from "../types";
/**
 * Validate a complete address hierarchy
 * @param province - Province name
 * @param district - District name
 * @param municipality - Municipality name
 * @returns True if the complete address is valid
 */
export declare function validateAddress(province: string, district: string, municipality: string): boolean;
/**
 * Get the complete address hierarchy for validation
 * @param province - Province name
 * @param district - District name
 * @param municipality - Municipality name
 * @returns Address object if valid, null otherwise
 */
export declare function getAddressHierarchy(province: string, district: string, municipality: string): Address | null;
/**
 * Validate and get the complete address chain
 * @param municipality - Municipality name
 * @returns Address object with province, district, and municipality if valid, null otherwise
 */
export declare function getAddressByMunicipality(municipality: string): Address | null;
//# sourceMappingURL=validation.d.ts.map