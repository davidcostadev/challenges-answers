import { describe, it, expect } from "vitest";
import {
  largestPalindromeProductv2,
  largestPalindromeProductV1,
} from "./largestPalindromeProduct";

describe("findLargestPalindromeProduct", () => {
  it("should return 906609 as the largest palindrome from the product of two 3-digit numbers", () => {
    const result = largestPalindromeProductv2();
    expect(result).toBe(906609);
  });

  it("should return 906609 as the largest palindrome from the product of two 3-digit numbers", () => {
    const result = largestPalindromeProductV1();
    expect(result).toBe(906609);
  });
});
