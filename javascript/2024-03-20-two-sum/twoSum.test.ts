import { describe, expect, it } from "vitest";
import { twoSum } from "./twoSum";

describe("twoSum", () => {
  it("finds two numbers that add up to the target", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  it("handles numbers in non-sequential order", () => {
    const nums = [3, 2, 4];
    const target = 6;
    expect(twoSum(nums, target)).toEqual([1, 2]);
  });

  it("handles duplicate numbers", () => {
    const nums = [3, 3];
    const target = 6;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  it("handles negative numbers", () => {
    const nums = [-1, -2, -3, -4, -5];
    const target = -8;
    expect(twoSum(nums, target)).toEqual([2, 4]);
  });

  it("handles zero and positive numbers", () => {
    const nums = [0, 4, 3, 0];
    const target = 0;
    expect(twoSum(nums, target)).toEqual([0, 3]);
  });

  it("handles larger numbers", () => {
    const nums = [1000, 2000, 3000, 4000];
    const target = 5000;
    expect(twoSum(nums, target)).toEqual([1, 2]);
  });
});
