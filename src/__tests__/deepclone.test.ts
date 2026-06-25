import { describe, it, expect } from "vitest";
import { deepClone } from "../deepclone";

describe("deepClone", () => {
  it("should be a function", () => {
    expect(typeof deepClone).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => deepClone(null as any)).toThrow();
  });
});
