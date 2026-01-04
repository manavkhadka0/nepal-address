/**
 * @manavkhadka0/nepal-address
 * 
 * A universal npm package for Nepal's administrative data (provinces, districts, municipalities)
 * with TypeScript support, search capabilities, and validation utilities.
 */

// Types
export type {
  Province,
  District,
  Municipality,
  Address,
  SearchOptions,
} from './types';

// Province functions
export {
  getProvinces,
  isValidProvince,
} from './data/provinces';

// District functions
export {
  getDistricts,
  getDistrictsByProvince,
  getProvinceByDistrict,
  isValidDistrict,
  normalizeDistrict,
} from './data/districts';

// Municipality functions
export {
  getMunicipalities,
  getMunicipalitiesByDistrict,
  getDistrictByMunicipality,
  isValidMunicipality,
} from './data/municipalities';

// Search functions
export {
  searchProvinces,
  searchDistricts,
  searchMunicipalities,
} from './utils/search';

// Validation functions
export {
  validateAddress,
  getAddressHierarchy,
  getAddressByMunicipality,
} from './utils/validation';

