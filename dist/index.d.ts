/**
 * @manavkhadka0/nepal-address
 *
 * A universal npm package for Nepal's administrative data (provinces, districts, municipalities)
 * with TypeScript support, search capabilities, and validation utilities.
 */
export type { Province, District, Municipality, Address, SearchOptions, } from './types';
export { getProvinces, isValidProvince, } from './data/provinces';
export { getDistricts, getDistrictsByProvince, getProvinceByDistrict, isValidDistrict, normalizeDistrict, } from './data/districts';
export { getMunicipalities, getMunicipalitiesByDistrict, getDistrictByMunicipality, isValidMunicipality, } from './data/municipalities';
export { searchProvinces, searchDistricts, searchMunicipalities, } from './utils/search';
export { validateAddress, getAddressHierarchy, getAddressByMunicipality, } from './utils/validation';
//# sourceMappingURL=index.d.ts.map