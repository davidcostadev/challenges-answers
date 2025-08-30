export function findMaximumSum(nums: number[], k: number) {
  let winSum = 0;
  for (let i = 0; i < k; i++) {
    winSum += nums[i];
  }
  let maxSum = winSum;

  for (let i = k; i < nums.length; i++) {
    const las = nums[i];
    const one = nums[i - k];
    winSum = winSum - one + las;
    maxSum = Math.max(maxSum, winSum);
  }

  return maxSum;
}
