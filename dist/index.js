"use strict";
/**
 * @manavkhadka0/nepal-address
 *
 * A universal npm package for Nepal's administrative data (provinces, districts, municipalities)
 * with TypeScript support, search capabilities, and validation utilities.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAddressByMunicipality = exports.getAddressHierarchy = exports.validateAddress = exports.searchMunicipalities = exports.searchDistricts = exports.searchProvinces = exports.isValidMunicipality = exports.getDistrictByMunicipality = exports.getMunicipalitiesByDistrict = exports.getMunicipalities = exports.normalizeDistrict = exports.isValidDistrict = exports.getProvinceByDistrict = exports.getDistrictsByProvince = exports.getDistricts = exports.isValidProvince = exports.getProvinces = void 0;
// Province functions
var provinces_1 = require("./data/provinces");
Object.defineProperty(exports, "getProvinces", { enumerable: true, get: function () { return provinces_1.getProvinces; } });
Object.defineProperty(exports, "isValidProvince", { enumerable: true, get: function () { return provinces_1.isValidProvince; } });
// District functions
var districts_1 = require("./data/districts");
Object.defineProperty(exports, "getDistricts", { enumerable: true, get: function () { return districts_1.getDistricts; } });
Object.defineProperty(exports, "getDistrictsByProvince", { enumerable: true, get: function () { return districts_1.getDistrictsByProvince; } });
Object.defineProperty(exports, "getProvinceByDistrict", { enumerable: true, get: function () { return districts_1.getProvinceByDistrict; } });
Object.defineProperty(exports, "isValidDistrict", { enumerable: true, get: function () { return districts_1.isValidDistrict; } });
Object.defineProperty(exports, "normalizeDistrict", { enumerable: true, get: function () { return districts_1.normalizeDistrict; } });
// Municipality functions
var municipalities_1 = require("./data/municipalities");
Object.defineProperty(exports, "getMunicipalities", { enumerable: true, get: function () { return municipalities_1.getMunicipalities; } });
Object.defineProperty(exports, "getMunicipalitiesByDistrict", { enumerable: true, get: function () { return municipalities_1.getMunicipalitiesByDistrict; } });
Object.defineProperty(exports, "getDistrictByMunicipality", { enumerable: true, get: function () { return municipalities_1.getDistrictByMunicipality; } });
Object.defineProperty(exports, "isValidMunicipality", { enumerable: true, get: function () { return municipalities_1.isValidMunicipality; } });
// Search functions
var search_1 = require("./utils/search");
Object.defineProperty(exports, "searchProvinces", { enumerable: true, get: function () { return search_1.searchProvinces; } });
Object.defineProperty(exports, "searchDistricts", { enumerable: true, get: function () { return search_1.searchDistricts; } });
Object.defineProperty(exports, "searchMunicipalities", { enumerable: true, get: function () { return search_1.searchMunicipalities; } });
// Validation functions
var validation_1 = require("./utils/validation");
Object.defineProperty(exports, "validateAddress", { enumerable: true, get: function () { return validation_1.validateAddress; } });
Object.defineProperty(exports, "getAddressHierarchy", { enumerable: true, get: function () { return validation_1.getAddressHierarchy; } });
Object.defineProperty(exports, "getAddressByMunicipality", { enumerable: true, get: function () { return validation_1.getAddressByMunicipality; } });
//# sourceMappingURL=index.js.map