"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROVINCES = void 0;
exports.getProvinces = getProvinces;
exports.isValidProvince = isValidProvince;
/**
 * List of all provinces in Nepal
 */
exports.PROVINCES = [
    "bagmati",
    "sudurpaschim",
    "lumbini",
    "pradesh-1",
    "madhesh",
    "gandaki",
    "karnali",
];
/**
 * Get all provinces in Nepal
 * @returns Array of all province names
 */
function getProvinces() {
    return [...exports.PROVINCES];
}
/**
 * Check if a province name is valid
 * @param name - Province name to check
 * @returns True if the province exists
 */
function isValidProvince(name) {
    return exports.PROVINCES.includes(name.toLowerCase());
}
//# sourceMappingURL=provinces.js.map