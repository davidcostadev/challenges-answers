import { describe, it, expect } from "vitest";
import { minSubArrayLen } from "./min-subarray-len";

describe("minSubArrayLen", () => {
  it.only("should return the minimal subarray length with sum >= target", () => {
    const result = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
    expect(result).toBe(2);
  });

  it("should return 0 when no valid subarray exists", () => {
    const result = minSubArrayLen(15, [1, 2, 3, 4, 5]);
    expect(result).toBe(5);
  });

  it("should return 0 when sum never reaches target", () => {
    const result = minSubArrayLen(100, [1, 1, 1, 1, 1]);
    expect(result).toBe(0);
  });

  it("should handle single element meeting target", () => {
    const result = minSubArrayLen(4, [1, 4, 4]);
    expect(result).toBe(1);
  });
});
