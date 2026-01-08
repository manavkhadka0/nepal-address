# @manavkhadka0/nepal-address

A universal npm package for Nepal's administrative data (provinces, districts, municipalities) with TypeScript support, search capabilities, and validation utilities. Works seamlessly in both Node.js (backend) and browser (frontend) environments.

## Installation

```bash
npm install @manavkhadka0/nepal-address
```

or

```bash
yarn add @manavkhadka0/nepal-address
```

or

```bash
pnpm add @manavkhadka0/nepal-address
```

## Features

- ✅ Complete data for all 7 provinces, 77 districts, and 753+ municipalities
- ✅ TypeScript support with full type definitions
- ✅ Search and filter capabilities
- ✅ Address validation utilities
- ✅ Universal compatibility (Node.js and browser)
- ✅ Tree-shakeable (ESM support)
- ✅ Zero dependencies

## Usage

### Basic Data Access

```typescript
import {
  getProvinces,
  getDistricts,
  getMunicipalities,
} from "@manavkhadka0/nepal-address";

// Get all provinces
const provinces = getProvinces();
// ['bagmati', 'sudurpaschim', 'lumbini', 'koshi', 'madhesh', 'gandaki', 'karnali']

// Get all districts
const allDistricts = getDistricts();

// Get districts in a specific province
const bagmatiDistricts = getDistricts("bagmati");
// ['sindhuli', 'ramechhap', 'dolakha', 'bhaktapur', 'dhading', 'kathmandu', ...]

// Get all municipalities
const allMunicipalities = getMunicipalities();

// Get municipalities in a specific district
const kathmanduMunicipalities = getMunicipalities("kathmandu");
// ['kirtipur municipality', 'shankharapur municipality', 'nagarjun municipality', ...]
```

### Search Functionality

```typescript
import {
  searchProvinces,
  searchDistricts,
  searchMunicipalities,
} from "@manavkhadka0/nepal-address";

// Search provinces
const results = searchProvinces("bagmati");
// ['bagmati']

// Search districts (case-insensitive by default)
const districtResults = searchDistricts("kath");
// ['kathmandu', 'kavrepalanchok']

// Search districts within a specific province
const bagmatiDistricts = searchDistricts("kath", "bagmati");
// ['kathmandu', 'kavrepalanchok']

// Search municipalities
const municipalityResults = searchMunicipalities("kathmandu");
// ['kathmandu metropolitian city', ...]

// Search with options
const exactMatch = searchDistricts("kathmandu", undefined, {
  exactMatch: true,
});
// ['kathmandu']

const caseSensitive = searchProvinces("BAGMATI", { caseSensitive: true });
// []
```

### Validation

```typescript
import {
  isValidProvince,
  isValidDistrict,
  isValidMunicipality,
  validateAddress,
  getAddressHierarchy,
} from "@manavkhadka0/nepal-address";

// Validate province
if (isValidProvince("bagmati")) {
  console.log("Valid province");
}

// Validate district
if (isValidDistrict("kathmandu")) {
  console.log("Valid district");
}

// Validate district belongs to a specific province
if (isValidDistrict("kathmandu", "bagmati")) {
  console.log("Kathmandu is in Bagmati province");
}

// Validate municipality
if (isValidMunicipality("kathmandu metropolitian city")) {
  console.log("Valid municipality");
}

// Validate municipality belongs to a specific district
if (isValidMunicipality("kathmandu metropolitian city", "kathmandu")) {
  console.log("Valid municipality in Kathmandu district");
}

// Validate complete address
if (validateAddress("bagmati", "kathmandu", "kathmandu metropolitian city")) {
  console.log("Complete address is valid");
}

// Get address hierarchy
const address = getAddressHierarchy(
  "bagmati",
  "kathmandu",
  "kathmandu metropolitian city"
);
// { province: 'bagmati', district: 'kathmandu', municipality: 'kathmandu metropolitian city' }
```

### Get Related Data

```typescript
import {
  getDistrictsByProvince,
  getMunicipalitiesByDistrict,
  getProvinceByDistrict,
  getDistrictByMunicipality,
  getAddressByMunicipality,
} from "@manavkhadka0/nepal-address";

// Get districts by province
const districts = getDistrictsByProvince("bagmati");

// Get municipalities by district
const municipalities = getMunicipalitiesByDistrict("kathmandu");

// Get province for a district
const province = getProvinceByDistrict("kathmandu");
// 'bagmati'

// Get district for a municipality
const district = getDistrictByMunicipality("kathmandu metropolitian city");
// 'kathmandu'

// Get complete address from municipality name
const address = getAddressByMunicipality("kathmandu metropolitian city");
// { province: 'bagmati', district: 'kathmandu', municipality: 'kathmandu metropolitian city' }
```

## API Reference

### Data Access Functions

#### `getProvinces(): Province[]`

Returns an array of all provinces in Nepal.

#### `getDistricts(province?: string): District[]`

Returns an array of districts. If `province` is provided, returns only districts in that province.

#### `getMunicipalities(district?: string): Municipality[]`

Returns an array of municipalities. If `district` is provided, returns only municipalities in that district.

#### `getDistrictsByProvince(province: string): District[]`

Returns all districts in the specified province.

#### `getMunicipalitiesByDistrict(district: string): Municipality[]`

Returns all municipalities in the specified district.

#### `getProvinceByDistrict(district: string): Province | undefined`

Returns the province that contains the specified district, or `undefined` if not found.

#### `getDistrictByMunicipality(municipality: string): District | undefined`

Returns the district that contains the specified municipality, or `undefined` if not found.

### Search Functions

#### `searchProvinces(query: string, options?: SearchOptions): Province[]`

Searches for provinces matching the query string.

#### `searchDistricts(query: string, province?: string, options?: SearchOptions): District[]`

Searches for districts matching the query string. Optionally filters by province.

#### `searchMunicipalities(query: string, district?: string, options?: SearchOptions): Municipality[]`

Searches for municipalities matching the query string. Optionally filters by district.

**SearchOptions:**

- `caseSensitive?: boolean` - Default: `false`
- `exactMatch?: boolean` - Default: `false`

### Validation Functions

#### `isValidProvince(name: string): name is Province`

Checks if a string is a valid province name.

#### `isValidDistrict(name: string, province?: string): boolean`

Checks if a string is a valid district name. If `province` is provided, also validates that the district belongs to that province.

#### `isValidMunicipality(name: string, district?: string): boolean`

Checks if a string is a valid municipality name. If `district` is provided, also validates that the municipality belongs to that district.

#### `validateAddress(province: string, district: string, municipality: string): boolean`

Validates that a complete address (province, district, municipality) is valid and the relationships are correct.

#### `getAddressHierarchy(province: string, district: string, municipality: string): Address | null`

Returns an `Address` object if the address is valid, or `null` otherwise.

#### `getAddressByMunicipality(municipality: string): Address | null`

Returns a complete `Address` object from just a municipality name, or `null` if not found.

## Types

```typescript
type Province =
  | "bagmati"
  | "sudurpaschim"
  | "lumbini"
  | "koshi"
  | "madhesh"
  | "gandaki"
  | "karnali";

type District = string;
type Municipality = string;

interface Address {
  province: Province;
  district: District;
  municipality: Municipality;
}

interface SearchOptions {
  caseSensitive?: boolean;
  exactMatch?: boolean;
}
```

## Examples

### Address Form Autocomplete

```typescript
import {
  getProvinces,
  getDistricts,
  getMunicipalities,
  searchDistricts,
  searchMunicipalities,
} from "@manavkhadka0/nepal-address";

// Province dropdown
const provinces = getProvinces();

// District dropdown (filtered by selected province)
const districts = getDistricts(selectedProvince);

// Municipality dropdown (filtered by selected district)
const municipalities = getMunicipalities(selectedDistrict);

// Search functionality
const districtSuggestions = searchDistricts(userInput, selectedProvince);
const municipalitySuggestions = searchMunicipalities(
  userInput,
  selectedDistrict
);
```

### Address Validation

```typescript
import { validateAddress } from "@manavkhadka0/nepal-address";

function handleFormSubmit(formData: {
  province: string;
  district: string;
  municipality: string;
}) {
  if (
    validateAddress(formData.province, formData.district, formData.municipality)
  ) {
    // Address is valid, proceed with submission
    submitForm(formData);
  } else {
    // Show error message
    showError("Invalid address. Please check your selections.");
  }
}
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues, questions, or suggestions, please open an issue on the [GitHub repository](https://github.com/manavkhadka0/nepal-address).
