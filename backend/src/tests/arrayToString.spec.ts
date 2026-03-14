import { describe, it, expect } from "vitest";
import arrayToString from "../lib/arrayToString.js";

describe("arrayToString", () => {
  it("should join sting arrays with two elements with comma", () => {
    const result = arrayToString(["cats", "dogs"]);
    expect(result).toBe("cats, dogs");
  });
});
