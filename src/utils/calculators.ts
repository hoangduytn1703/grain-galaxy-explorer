
// Rice calculator functions
export const calculateRiceGrains = (squares: number): number => {
  // 2^(n-1) where n is the square number
  return Math.pow(2, squares - 1);
};

export const grainsToTons = (grains: number): number => {
  // Average rice grain weight is about 0.02 grams
  // 1 ton = 1,000,000 grams
  return (grains * 0.02) / 1000000;
};

export const vietnamRicePercentage = (tons: number): number => {
  // Vietnam produces approximately 28 million tons of rice per year
  const vietnamAnnualRiceProduction = 28000000;
  return (tons / vietnamAnnualRiceProduction) * 100;
};

// Light distance calculator functions
export const lightDistanceInKm = (seconds: number): number => {
  // Speed of light in vacuum is 299,792.458 km/s
  const lightSpeed = 299792.458; // km/s
  return lightSpeed * seconds;
};

export const kmToLightYears = (km: number): number => {
  // 1 light year = 9.461 trillion kilometers
  const kmPerLightYear = 9.461e12;
  return km / kmPerLightYear;
};

export const kmToEarthToMoonTrips = (km: number): number => {
  // Average distance Earth to Moon is approximately 384,400 km
  const earthToMoonDistance = 384400;
  return km / earthToMoonDistance;
};

export const kmToEarthToSunTrips = (km: number): number => {
  // Average distance Earth to Sun is approximately 149.6 million km
  const earthToSunDistance = 149600000;
  return km / earthToSunDistance;
};

export const kmToMilkyWayEdgeTrips = (km: number): number => {
  // The Milky Way galaxy is approximately 100,000 light years in diameter
  // 1 light year = 9.461 trillion kilometers
  const milkyWayDiameterKm = 100000 * 9.461e12;
  return km / milkyWayDiameterKm;
};

export const kmToEarthCircumferenceTrips = (km: number): number => {
  // Earth circumference at the equator is approximately 40,075 km
  const earthCircumferenceKm = 40075;
  return km / earthCircumferenceKm;
};

export const convertTimeToSeconds = (timeValue: number, timeUnit: string): number => {
  switch (timeUnit) {
    case "second":
      return timeValue;
    case "minute":
      return timeValue * 60;
    case "hour":
      return timeValue * 60 * 60;
    case "day":
      return timeValue * 24 * 60 * 60;
    case "week":
      return timeValue * 7 * 24 * 60 * 60;
    case "month":
      return timeValue * 30 * 24 * 60 * 60; // Approximation
    case "year":
      return timeValue * 365 * 24 * 60 * 60; // Approximation
    default:
      return timeValue;
  }
};

export const compareToUniverseAge = (lightYears: number): number => {
  // Age of the universe is approximately 13.8 billion years
  const universeAgeYears = 13.8e9;
  return (lightYears / universeAgeYears) * 100;
};

// Paper folding calculator functions
export const calculateFoldedThickness = (paperThickness: number, folds: number): number => {
  // Each fold doubles the thickness
  return paperThickness * Math.pow(2, folds);
};

export const thicknessToKilometers = (thicknessInMm: number): number => {
  // 1 km = 1,000,000 mm
  return thicknessInMm / 1000000;
};

export const thicknessToLightTime = (kmDistance: number): number => {
  // Speed of light is 299,792.458 km/s
  const lightSpeed = 299792.458; // km/s
  return kmDistance / lightSpeed;
};

export const thicknessToLightDays = (lightTimeSeconds: number): number => {
  // 1 day = 86,400 seconds
  const secondsPerDay = 86400;
  return lightTimeSeconds / secondsPerDay;
};

export const thicknessToEverestHeight = (thicknessInMm: number): number => {
  // Mount Everest is approximately 8,848 meters = 8,848,000 mm
  const everestHeightMm = 8848000;
  return thicknessInMm / everestHeightMm;
};

export const thicknessToEarthToMoonDistance = (thicknessInMm: number): number => {
  // Earth to Moon distance is approximately 384,400 km = 384,400,000,000 mm
  const earthToMoonDistanceMm = 384400000000;
  return thicknessInMm / earthToMoonDistanceMm;
};

export const thicknessToSolarSystemDistance = (thicknessInMm: number): number => {
  // Solar system diameter is approximately 9 billion km = 9 * 10^15 mm
  const solarSystemDiameterMm = 9e15;
  return thicknessInMm / solarSystemDiameterMm;
};

export const thicknessToMilkyWayDiameter = (thicknessInMm: number): number => {
  // Milky Way diameter is approximately 100,000 light years
  // 1 light year = 9.461 trillion km = 9.461 * 10^15 mm
  const milkyWayDiameterMm = 100000 * 9.461e15;
  return thicknessInMm / milkyWayDiameterMm;
};

export const thicknessToObservableUniverse = (thicknessInMm: number): number => {
  // Diameter of observable universe ≈ 93 billion light years
  // 1 light year ≈ 9.461 trillion km ≈ 9.461 x 10^15 mm
  
  // Convert correctly: 93 billion light years to mm
  // 93 * 10^9 light years * 9.461 * 10^15 mm/light year = 8.8 * 10^26 mm
  const observableUniverseDiameterMm = 93e9 * 9.461e15;
  
  // Calculate what fraction of the observable universe the paper thickness represents
  // For a standard paper (0.1mm) folded 100 times: 0.1 * 2^100 mm / (8.8 * 10^26 mm) ≈ 0.144
  const fraction = thicknessInMm / observableUniverseDiameterMm;
  
  // Return the fraction (if result is 0.144, it means 14.4% of the diameter)
  return fraction;
};

// Compound interest calculator functions
export const convertTimeUnit = (value: number, unit: string): number => {
  switch (unit) {
    case "day":
      return value; // Already in days
    case "week":
      return value * 7; // Convert weeks to days
    case "month":
      return value * 30; // Approximate a month as 30 days
    case "year":
      return value * 365; // Approximate a year as 365 days
    default:
      return value;
  }
};
