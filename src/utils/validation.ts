import type { Address, District, Municipality, Province } from "../types";
import { isValidProvince } from "../data/provinces";
import { isValidDistrict, getProvinceByDistrict } from "../data/districts";
import {
  isValidMunicipality,
  getDistrictByMunicipality,
} from "../data/municipalities";

/**
 * Validate a complete address hierarchy
 * @param province - Province name
 * @param district - District name
 * @param municipality - Municipality name
 * @returns True if the complete address is valid
 */
export function validateAddress(
  province: string,
  district: string,
  municipality: string
): boolean {
  // Validate province
  if (!isValidProvince(province)) {
    return false;
  }

  // Validate district belongs to province
  if (!isValidDistrict(district, province)) {
    return false;
  }

  // Validate municipality belongs to district
  if (!isValidMunicipality(municipality, district)) {
    return false;
  }

  return true;
}

/**
 * Get the complete address hierarchy for validation
 * @param province - Province name
 * @param district - District name
 * @param municipality - Municipality name
 * @returns Address object if valid, null otherwise
 */
export function getAddressHierarchy(
  province: string,
  district: string,
  municipality: string
): Address | null {
  if (!validateAddress(province, district, municipality)) {
    return null;
  }

  return {
    province: province.toLowerCase().trim() as Province,
    district: district.toLowerCase().trim(),
    municipality: municipality.toLowerCase().trim(),
  };
}

/**
 * Validate and get the complete address chain
 * @param municipality - Municipality name
 * @returns Address object with province, district, and municipality if valid, null otherwise
 */
export function getAddressByMunicipality(municipality: string): Address | null {
  const district = getDistrictByMunicipality(municipality);
  if (!district) {
    return null;
  }

  const province = getProvinceByDistrict(district);
  if (!province) {
    return null;
  }

  return {
    province,
    district,
    municipality: municipality.toLowerCase().trim(),
  };
}
