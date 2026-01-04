import type { District, Municipality, Province, SearchOptions } from "../types";
import { getProvinces } from "../data/provinces";
import { getDistricts } from "../data/districts";
import { getMunicipalities } from "../data/municipalities";

/**
 * Search provinces by name
 * @param query - Search query
 * @param options - Search options
 * @returns Array of matching province names
 */
export function searchProvinces(
  query: string,
  options: SearchOptions = {}
): Province[] {
  const { caseSensitive = false, exactMatch = false } = options;
  const provinces = getProvinces();
  const searchQuery = caseSensitive ? query : query.toLowerCase();

  return provinces.filter((province) => {
    const provinceName = caseSensitive ? province : province.toLowerCase();

    if (exactMatch) {
      return provinceName === searchQuery;
    }

    return provinceName.includes(searchQuery);
  });
}

/**
 * Search districts by name
 * @param query - Search query
 * @param province - Optional province to filter results
 * @param options - Search options
 * @returns Array of matching district names
 */
export function searchDistricts(
  query: string,
  province?: string,
  options: SearchOptions = {}
): District[] {
  const { caseSensitive = false, exactMatch = false } = options;
  const districts = getDistricts(province);
  const searchQuery = caseSensitive ? query : query.toLowerCase();

  return districts.filter((district) => {
    const districtName = caseSensitive ? district : district.toLowerCase();

    if (exactMatch) {
      return districtName === searchQuery;
    }

    return districtName.includes(searchQuery);
  });
}

/**
 * Search municipalities by name
 * @param query - Search query
 * @param district - Optional district to filter results
 * @param options - Search options
 * @returns Array of matching municipality names
 */
export function searchMunicipalities(
  query: string,
  district?: string,
  options: SearchOptions = {}
): Municipality[] {
  const { caseSensitive = false, exactMatch = false } = options;
  const municipalities = getMunicipalities(district);
  const searchQuery = caseSensitive ? query : query.toLowerCase();

  return municipalities.filter((municipality) => {
    const municipalityName = caseSensitive
      ? municipality
      : municipality.toLowerCase();

    if (exactMatch) {
      return municipalityName === searchQuery;
    }

    return municipalityName.includes(searchQuery);
  });
}
