import { describe, it, expect } from "vitest";

import { findMaximumSum } from "./findMaximumSum";

describe("findMaximumSum", () => {
  it("should return the maximum sum of a subarray with length k", () => {
    expect(findMaximumSum([2, 3, 4, 1, 5], 2)).toBe(7); // Test 1
    expect(findMaximumSum([2, 1, 5, 1, 3, 2], 3)).toBe(9); // Test 2
    expect(findMaximumSum([4], 1)).toBe(4); // Test 3
    expect(findMaximumSum([1, 2, 3, 4, 5], 5)).toBe(15); // Test 4
    expect(findMaximumSum([-1, -2, 3, 4, -5], 2)).toBe(7); // Test 5
  });
});
