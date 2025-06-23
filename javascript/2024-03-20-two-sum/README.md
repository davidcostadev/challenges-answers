# Two Sum

## Problem Description

Given an array of integers `nums` and an integer `target`, return indices of the two numbers in the array such that they add up to the `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Examples

### Example 1:

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Example 2:

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
Explanation: Because nums[1] + nums[2] == 6, we return [1, 2].
```

### Example 3:

```
Input: nums = [3,3], target = 6
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 6, we return [0, 1].
```

## Constraints

- 2 <= nums.length <= 104
- -109 <= nums[i] <= 109
- -109 <= target <= 109
- Only one valid answer exists

## Function Signature

```typescript
function twoSum(nums: number[], target: number): number[];
```

## Notes

- The solution should run in O(n) time complexity
- You can use additional space to achieve better time complexity
- The array might contain negative numbers, zeros, or positive numbers
- The array is not necessarily sorted
- The same number can appear multiple times in the array
