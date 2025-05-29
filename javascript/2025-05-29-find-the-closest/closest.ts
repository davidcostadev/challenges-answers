export const closest = (str: string, queries: number[]): number[] => {
  const results: number[] = [];

  for (let i = 0; i < queries.length; i++) {
    const currentIndex = queries[i];
    const currentChar = str[currentIndex];

    let lessDistance = str.length;
    let lessDistanceIndex = -1;

    for (let k = 0; k < str.length; k++) {
      const interChat = str[k];

      if (currentIndex === k || currentChar !== interChat) {
        continue;
      }

      const distance = Math.abs(currentIndex - k);
      if (distance < lessDistance) {
        lessDistance = distance;
        lessDistanceIndex = k;
      }
    }

    results.push(lessDistanceIndex);
  }

  return results;
};
