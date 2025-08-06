export function maxSubarraySum(arr: number[], k: number): number {
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    const first = arr[i - k];
    const cur = arr[i];
    windowSum = windowSum - first + cur;
    maxSum = Math.max(windowSum, maxSum);
  }

  return maxSum;
}
