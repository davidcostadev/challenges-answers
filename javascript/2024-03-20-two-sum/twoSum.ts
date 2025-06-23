export const twoSum = (nums: number[], target: number): number[] => {
  const dict: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complement in dict) {
      return [dict[complement], i];
    }

    dict[nums[i]] = i;
  }

  return [];
};
