"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeDistrict = normalizeDistrict;
exports.getDistricts = getDistricts;
exports.getDistrictsByProvince = getDistrictsByProvince;
exports.getProvinceByDistrict = getProvinceByDistrict;
exports.isValidDistrict = isValidDistrict;
const provinces_1 = require("./provinces");
/**
 * Normalize district name (lowercase, trim spaces, handle special cases)
 */
function normalizeDistrict(name) {
    return name.toLowerCase().trim().replace(/\s+/g, "-");
}
/**
 * Mapping of districts to their provinces
 */
const DISTRICT_TO_PROVINCE = {
    // Bagmati
    sindhuli: "bagmati",
    ramechhap: "bagmati",
    dolakha: "bagmati",
    bhaktapur: "bagmati",
    dhading: "bagmati",
    kathmandu: "bagmati",
    kavrepalanchok: "bagmati",
    lalitpur: "bagmati",
    nuwakot: "bagmati",
    rasuwa: "bagmati",
    sindhupalchok: "bagmati",
    chitwan: "bagmati",
    makwanpur: "bagmati",
    // Gandaki
    baglung: "gandaki",
    gorkha: "gandaki",
    kaski: "gandaki",
    lamjung: "gandaki",
    manang: "gandaki",
    mustang: "gandaki",
    myagdi: "gandaki",
    nawalpur: "gandaki",
    parbat: "gandaki",
    syangja: "gandaki",
    tanahun: "gandaki",
    // Karnali
    "western-rukum": "karnali",
    salyan: "karnali",
    dolpa: "karnali",
    humla: "karnali",
    jumla: "karnali",
    kalikot: "karnali",
    mugu: "karnali",
    surkhet: "karnali",
    dailekh: "karnali",
    jajarkot: "karnali",
    // Lumbini
    kapilvastu: "lumbini",
    rupandehi: "lumbini",
    arghakhanchi: "lumbini",
    gulmi: "lumbini",
    palpa: "lumbini",
    dang: "lumbini",
    pyuthan: "lumbini",
    rolpa: "lumbini",
    "eastern-rukum": "lumbini",
    banke: "lumbini",
    bardiya: "lumbini",
    // Madhesh
    sarlahi: "madhesh",
    dhanusha: "madhesh",
    bara: "madhesh",
    rautahat: "madhesh",
    saptari: "madhesh",
    siraha: "madhesh",
    mahottari: "madhesh",
    parsa: "madhesh",
    parasi: "madhesh",
    // Pradesh-1
    bhojpur: "pradesh-1",
    dhankuta: "pradesh-1",
    illam: "pradesh-1",
    ilam: "pradesh-1", // alias
    jhapa: "pradesh-1",
    khotang: "pradesh-1",
    morang: "pradesh-1",
    okhaldhunga: "pradesh-1",
    panchthar: "pradesh-1",
    sankhuwasabha: "pradesh-1",
    solukhumbu: "pradesh-1",
    sunsari: "pradesh-1",
    taplejung: "pradesh-1",
    tehrathum: "pradesh-1",
    terhathum: "pradesh-1", // alias
    udayapur: "pradesh-1",
    // Sudurpaschim
    achham: "sudurpaschim",
    baitadi: "sudurpaschim",
    bajhang: "sudurpaschim",
    bajura: "sudurpaschim",
    dadeldhura: "sudurpaschim",
    darchula: "sudurpaschim",
    doti: "sudurpaschim",
    kailali: "sudurpaschim",
    kanchanpur: "sudurpaschim",
};
/**
 * Districts by province mapping
 */
const DISTRICTS_BY_PROVINCE = {
    bagmati: [
        "sindhuli",
        "ramechhap",
        "dolakha",
        "bhaktapur",
        "dhading",
        "kathmandu",
        "kavrepalanchok",
        "lalitpur",
        "nuwakot",
        "rasuwa",
        "sindhupalchok",
        "chitwan",
        "makwanpur",
    ],
    gandaki: [
        "baglung",
        "gorkha",
        "kaski",
        "lamjung",
        "manang",
        "mustang",
        "myagdi",
        "nawalpur",
        "parbat",
        "syangja",
        "tanahun",
    ],
    karnali: [
        "western-rukum",
        "salyan",
        "dolpa",
        "humla",
        "jumla",
        "kalikot",
        "mugu",
        "surkhet",
        "dailekh",
        "jajarkot",
    ],
    lumbini: [
        "kapilvastu",
        "rupandehi",
        "arghakhanchi",
        "gulmi",
        "palpa",
        "dang",
        "pyuthan",
        "rolpa",
        "eastern-rukum",
        "banke",
        "bardiya",
    ],
    madhesh: [
        "sarlahi",
        "dhanusha",
        "bara",
        "rautahat",
        "saptari",
        "siraha",
        "mahottari",
        "parsa",
        "parasi",
    ],
    "pradesh-1": [
        "bhojpur",
        "dhankuta",
        "illam",
        "jhapa",
        "khotang",
        "morang",
        "okhaldhunga",
        "panchthar",
        "sankhuwasabha",
        "solukhumbu",
        "sunsari",
        "taplejung",
        "tehrathum",
        "udayapur",
    ],
    sudurpaschim: [
        "achham",
        "baitadi",
        "bajhang",
        "bajura",
        "dadeldhura",
        "darchula",
        "doti",
        "kailali",
        "kanchanpur",
    ],
};
/**
 * Get all districts
 * @param province - Optional province to filter districts
 * @returns Array of district names
 */
function getDistricts(province) {
    if (province) {
        const normalizedProvince = province.toLowerCase().trim();
        if ((0, provinces_1.isValidProvince)(normalizedProvince)) {
            return [...DISTRICTS_BY_PROVINCE[normalizedProvince]];
        }
        return [];
    }
    // Return all districts
    const allDistricts = [];
    for (const districts of Object.values(DISTRICTS_BY_PROVINCE)) {
        allDistricts.push(...districts);
    }
    return [...new Set(allDistricts)]; // Remove duplicates (illam/ilam, etc.)
}
/**
 * Get districts for a specific province
 * @param province - Province name
 * @returns Array of district names in the province
 */
function getDistrictsByProvince(province) {
    return getDistricts(province);
}
/**
 * Get the province for a given district
 * @param district - District name
 * @returns Province name or undefined if district not found
 */
function getProvinceByDistrict(district) {
    const normalized = normalizeDistrict(district);
    return DISTRICT_TO_PROVINCE[normalized];
}
/**
 * Check if a district name is valid
 * @param name - District name to check
 * @param province - Optional province to validate against
 * @returns True if the district exists (and belongs to province if provided)
 */
function isValidDistrict(name, province) {
    const normalized = normalizeDistrict(name);
    const districtProvince = DISTRICT_TO_PROVINCE[normalized];
    if (!districtProvince) {
        return false;
    }
    if (province) {
        const normalizedProvince = province.toLowerCase().trim();
        return ((0, provinces_1.isValidProvince)(normalizedProvince) &&
            districtProvince === normalizedProvince);
    }
    return true;
}
//# sourceMappingURL=districts.js.map