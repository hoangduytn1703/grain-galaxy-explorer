
// Rice Calculator functions
export const calculateRiceGrains = (squares: number): number => {
  if (squares <= 0 || squares > 64) return 0;
  
  // Start with 1 grain on the first square
  let total = 0;
  let currentGrains = 1;
  
  for (let i = 1; i <= squares; i++) {
    total += currentGrains;
    currentGrains *= 2;
  }
  
  return total;
};

export const grainsToTons = (grains: number): number => {
  // Approx 50,000 grains of rice per kg
  // 1 ton = 1000 kg
  return grains / (50000 * 1000);
};

export const vietnamRicePercentage = (tons: number): number => {
  // Vietnam produces approximately 42.4 million tons of rice per year (updated 2024)
  const vietnamAnnualProduction = 42_400_000;
  return (tons / vietnamAnnualProduction) * 100;
};

// Compound Interest Calculator functions
export const calculateCompoundInterest = (
  initialAmount: number,
  days: number,
  dailyInterestRate: number = 0.05 // 5% daily growth
): number => {
  return initialAmount * Math.pow(1 + dailyInterestRate, days);
};

// Time conversion functions for compound interest calculator
export const convertTimeUnit = (
  value: number,
  timeUnit: string
): number => {
  switch (timeUnit) {
    case "day":
      return value;
    case "week":
      return value * 7;
    case "month":
      return value * 30; // approximation
    case "year":
      return value * 365; // approximation
    default:
      return value;
  }
};

// Light Distance Calculator functions
export const lightDistanceInKm = (timeInSeconds: number): number => {
  // Speed of light in km/s = 299,792.458 km/s
  const speedOfLightKmPerSecond = 299792.458;
  return timeInSeconds * speedOfLightKmPerSecond;
};

export const kmToLightYears = (km: number): number => {
  // 1 light year = 9.461 trillion km
  const kmPerLightYear = 9.461e12;
  return km / kmPerLightYear;
};

export const kmToEarthToMoonTrips = (km: number): number => {
  // Average distance from Earth to Moon = 384,400 km
  const earthToMoonDistance = 384400;
  return km / earthToMoonDistance;
};

export const kmToEarthToSunTrips = (km: number): number => {
  // Average distance from Earth to Sun = 149.6 million km
  const earthToSunDistance = 149600000;
  return km / earthToSunDistance;
};

export const kmToMilkyWayEdgeTrips = (km: number): number => {
  // Distance from Earth to the edge of Milky Way ≈ 25,000 light years
  // 1 light year = 9.461 trillion km
  const edgeOfMilkyWayDistance = 25000 * 9.461e12;
  return km / edgeOfMilkyWayDistance;
};

export const kmToEarthCircumferenceTrips = (km: number): number => {
  // Earth's equatorial circumference ≈ 40,075 km
  const earthCircumference = 40075;
  return km / earthCircumference;
};

export const compareToUniverseAge = (lightYears: number): number => {
  // Universe age = 13.8 billion years
  const universeAgeYears = 13.8e9;
  return (lightYears / universeAgeYears) * 100;
};

// Time conversion functions for light calculator
export const convertTimeToSeconds = (
  timeValue: number,
  timeUnit: string
): number => {
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
      return timeValue * 30 * 24 * 60 * 60; // approximation
    case "year":
      return timeValue * 365 * 24 * 60 * 60; // approximation
    default:
      return timeValue;
  }
};

// Paper Folding Calculator functions
export const calculateFoldedThickness = (initialThickness: number, folds: number): number => {
  // Each fold doubles the thickness
  // thickness = initial_thickness * 2^folds
  return initialThickness * Math.pow(2, folds);
};

export const thicknessToKilometers = (thicknessInMm: number): number => {
  return thicknessInMm / 1000000; // Convert from mm to km
};

export const thicknessToLightTime = (thicknessInKm: number): number => {
  // Speed of light in km/s = 299,792.458 km/s
  const speedOfLightKmPerSecond = 299792.458;
  return thicknessInKm / speedOfLightKmPerSecond; // Time in seconds
};

export const thicknessToLightDays = (thicknessInSeconds: number): number => {
  return thicknessInSeconds / (24 * 60 * 60); // Convert seconds to days
};

export const thicknessToEverestHeight = (thicknessInMm: number): number => {
  // Mount Everest height = 8,848 meters = 8,848,000 mm
  const everestHeightMm = 8848000;
  return thicknessInMm / everestHeightMm;
};

export const thicknessToEarthToMoonDistance = (thicknessInMm: number): number => {
  // Average Earth to Moon distance = 384,400 km = 384,400,000,000 mm
  const earthToMoonDistanceMm = 384400000000;
  return thicknessInMm / earthToMoonDistanceMm;
};

export const thicknessToSolarSystemDistance = (thicknessInMm: number): number => {
  // Approximate diameter of our solar system = 9 billion km = 9 * 10^15 mm
  const solarSystemDiameterMm = 9 * Math.pow(10, 15);
  return thicknessInMm / solarSystemDiameterMm;
};

export const thicknessToMilkyWayDiameter = (thicknessInMm: number): number => {
  // Diameter of Milky Way galaxy ≈ 100,000 light years
  // 1 light year ≈ 9.461 trillion km ≈ 9.461 x 10^15 mm
  const milkyWayDiameterMm = 100000 * 9.461 * Math.pow(10, 15);
  return thicknessInMm / milkyWayDiameterMm;
};

export const thicknessToObservableUniverse = (thicknessInMm: number): number => {
  // Diameter of observable universe ≈ 93 billion light years
  // 1 light year ≈ 9.461 trillion km ≈ 9.461 x 10^15 mm
  const observableUniverseDiameterMm = 93000000000 * 9.461 * Math.pow(10, 15);
  return thicknessInMm / observableUniverseDiameterMm;
};
