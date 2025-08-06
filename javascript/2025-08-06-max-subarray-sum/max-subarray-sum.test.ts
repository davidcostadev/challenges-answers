import { describe, it, expect } from "vitest";
import { maxSubarraySum } from "./max-subarray-sum";

describe("maxSubarraySum", () => {
  it("should return the max sum of a subarray of size k", () => {
    const result = maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
    expect(result).toBe(39);
  });

  it("should return the correct result when the array is small", () => {
    const result = maxSubarraySum([2, 1, 5, 1, 3, 2], 3);
    expect(result).toBe(9); // 5+1+3
  });

  it("should return the sum of all elements when k equals array length", () => {
    const result = maxSubarraySum([2, 1, 5], 3);
    expect(result).toBe(8);
  });

  it("should return 0 when the array has all zeros", () => {
    const result = maxSubarraySum([0, 0, 0, 0], 2);
    expect(result).toBe(0);
  });
});
