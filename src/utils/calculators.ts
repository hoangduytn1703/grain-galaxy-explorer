
export const thicknessToObservableUniverse = (thicknessInMm: number): number => {
  // Diameter of observable universe ≈ 93 billion light years
  // 1 light year ≈ 9.461 trillion km ≈ 9.461 x 10^15 mm
  const observableUniverseDiameterMm = 93e9 * 9.461 * Math.pow(10, 15);
  return thicknessInMm / observableUniverseDiameterMm;
};

