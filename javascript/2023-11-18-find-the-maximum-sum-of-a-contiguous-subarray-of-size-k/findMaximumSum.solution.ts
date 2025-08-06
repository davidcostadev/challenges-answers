export function findMaximumSum(arr, K) {
  let maximumSum = -Infinity;
  for (let i = 0; i <= arr.length - K; i++) {
    let currentSum = 0;
    for (let j = i; j < i + K; j++) {
      currentSum += arr[j];
    }

    maximumSum = Math.max(maximumSum, currentSum);
  }

  return maximumSum;
}
