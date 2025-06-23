import { describe, expect, it } from "vitest";
import { jumpingOnClouds } from "./jumpingOnClouds";

describe("jumpingOnClouds", () => {
  it("handles the HackerRank sample case", () => {
    const clouds = [0, 0, 1, 0, 0, 1, 0];
    expect(jumpingOnClouds(clouds)).toBe(4);
  });

  it("handles a path with one thunderhead near the end", () => {
    const clouds = [0, 0, 0, 0, 1, 0];
    expect(jumpingOnClouds(clouds)).toBe(3);
  });

  it("handles a path with an early thunderhead", () => {
    const clouds = [0, 1, 0, 0, 0, 0];
    expect(jumpingOnClouds(clouds)).toBe(3);
  });

  it("handles the minimal input size", () => {
    const clouds = [0, 0];
    expect(jumpingOnClouds(clouds)).toBe(1);
  });

  it("handles an all-safe path of even length", () => {
    const clouds = [0, 0, 0, 0, 0, 0];
    expect(jumpingOnClouds(clouds)).toBe(3);
  });

  it("handles alternating safe and unsafe clouds", () => {
    const clouds = [0, 1, 0, 1, 0, 1, 0];
    expect(jumpingOnClouds(clouds)).toBe(3);
  });
});
