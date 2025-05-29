import { describe, it, expect } from "vitest";
import { closest } from "./closest";

describe("closest", () => {
  it("simple repeat", () => {
    expect(closest("babab", [2, 1])).toEqual([0, 3]);
  });

  it("single occurrence returns -1", () => {
    expect(closest("sam", [1])).toEqual([-1]);
  });

  it("all same character", () => {
    expect(closest("aaaa", [0, 1, 2, 3])).toEqual([1, 0, 1, 2]);
  });

  it("no repeats at ends", () => {
    expect(closest("abcde", [0, 4])).toEqual([-1, -1]);
  });

  it("single occurrences only", () => {
    expect(closest("abca", [1, 2])).toEqual([-1, -1]);
  });

  it("multiple queries mixed", () => {
    expect(closest("abacadae", [0, 2, 4, 7])).toEqual([2, 0, 2, -1]);
  });

  it("longer string with repeats", () => {
    expect(closest("zzxyzzxyz", [0, 3, 5, 8])).toEqual([1, 7, 4, 5]);
  });

  it("consecutive repeats", () => {
    expect(closest("aabbcc", [0, 1, 2, 3, 4, 5])).toEqual([1, 0, 3, 2, 5, 4]);
  });

  it("single character string", () => {
    expect(closest("x", [0])).toEqual([-1]);
  });

  it("random positions", () => {
    expect(closest("qwertyqwerty", [0, 5, 6, 11])).toEqual([6, 11, 0, 5]);
  });
});
