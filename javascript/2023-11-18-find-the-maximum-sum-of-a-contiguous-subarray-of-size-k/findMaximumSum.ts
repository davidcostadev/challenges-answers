export function findMaximumSum(arr: number[], K: number) {
  let windowSum = 0;

  for (let i = 0; i < K; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  for (let i = K; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - K];
    maxSum = Math.max(windowSum, maxSum);
  }

  return maxSum;
}
