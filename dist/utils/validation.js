"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAddress = validateAddress;
exports.getAddressHierarchy = getAddressHierarchy;
exports.getAddressByMunicipality = getAddressByMunicipality;
const provinces_1 = require("../data/provinces");
const districts_1 = require("../data/districts");
const municipalities_1 = require("../data/municipalities");
/**
 * Validate a complete address hierarchy
 * @param province - Province name
 * @param district - District name
 * @param municipality - Municipality name
 * @returns True if the complete address is valid
 */
function validateAddress(province, district, municipality) {
    // Validate province
    if (!(0, provinces_1.isValidProvince)(province)) {
        return false;
    }
    // Validate district belongs to province
    if (!(0, districts_1.isValidDistrict)(district, province)) {
        return false;
    }
    // Validate municipality belongs to district
    if (!(0, municipalities_1.isValidMunicipality)(municipality, district)) {
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
function getAddressHierarchy(province, district, municipality) {
    if (!validateAddress(province, district, municipality)) {
        return null;
    }
    return {
        province: province.toLowerCase().trim(),
        district: district.toLowerCase().trim(),
        municipality: municipality.toLowerCase().trim(),
    };
}
/**
 * Validate and get the complete address chain
 * @param municipality - Municipality name
 * @returns Address object with province, district, and municipality if valid, null otherwise
 */
function getAddressByMunicipality(municipality) {
    const district = (0, municipalities_1.getDistrictByMunicipality)(municipality);
    if (!district) {
        return null;
    }
    const province = (0, districts_1.getProvinceByDistrict)(district);
    if (!province) {
        return null;
    }
    return {
        province,
        district,
        municipality: municipality.toLowerCase().trim(),
    };
}
//# sourceMappingURL=validation.js.map