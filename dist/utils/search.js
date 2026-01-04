"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProvinces = searchProvinces;
exports.searchDistricts = searchDistricts;
exports.searchMunicipalities = searchMunicipalities;
const provinces_1 = require("../data/provinces");
const districts_1 = require("../data/districts");
const municipalities_1 = require("../data/municipalities");
/**
 * Search provinces by name
 * @param query - Search query
 * @param options - Search options
 * @returns Array of matching province names
 */
function searchProvinces(query, options = {}) {
    const { caseSensitive = false, exactMatch = false } = options;
    const provinces = (0, provinces_1.getProvinces)();
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
function searchDistricts(query, province, options = {}) {
    const { caseSensitive = false, exactMatch = false } = options;
    const districts = (0, districts_1.getDistricts)(province);
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
function searchMunicipalities(query, district, options = {}) {
    const { caseSensitive = false, exactMatch = false } = options;
    const municipalities = (0, municipalities_1.getMunicipalities)(district);
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
//# sourceMappingURL=search.js.map