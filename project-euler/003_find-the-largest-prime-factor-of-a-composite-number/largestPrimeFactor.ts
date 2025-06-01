export function largestPrimeFactor(n: number): number {
  let factor = 2;
  let lastFactor = 1;

  while (n > 1) {
    if (n % factor === 0) {
      lastFactor = factor;
      n = n / factor;

      while (n % factor === 0) {
        n = n / factor;
      }
    }

    factor++;
  }

  return lastFactor;
}
