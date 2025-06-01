import { describe, it, expect } from "vitest";
import { largestPrimeFactor } from "./largestPrimeFactor";

describe("largestPrimeFactor", () => {
  it("should return 2 for 2", () => {
    expect(largestPrimeFactor(2)).toBe(2);
  });

  it("should return 5 for 10", () => {
    expect(largestPrimeFactor(10)).toBe(5);
  });

  it("should return 7 for 14", () => {
    expect(largestPrimeFactor(14)).toBe(7);
  });

  it("should return 13 for 91", () => {
    expect(largestPrimeFactor(91)).toBe(13);
  });

  it("should return 29 for 13195", () => {
    expect(largestPrimeFactor(13195)).toBe(29);
  });

  it("should return the correct value for 600851475143", () => {
    expect(largestPrimeFactor(600851475143)).toBe(6857);
  });
});
