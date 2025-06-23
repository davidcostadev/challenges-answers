// first solution
export function jumpingOnClouds(c: number[]): number {
  let countSalt = 0;

  let currentSalt = 0;
  while (currentSalt < c.length - 1) {
    if (c[currentSalt + 2] === 1) {
      currentSalt += 1;
      countSalt++;
    } else if (c[currentSalt + 1] === 1) {
      currentSalt += 2;
      countSalt++;
    } else {
      currentSalt += 2;
      countSalt++;
    }
  }

  return countSalt;
}
