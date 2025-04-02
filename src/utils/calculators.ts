
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
  // Vietnam produces approximately 27.1 million tons of rice per year
  const vietnamAnnualProduction = 27_100_000;
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
