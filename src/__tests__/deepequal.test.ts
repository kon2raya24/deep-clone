import { describe, it, expect } from "vitest";
import { deepEqual } from "../deepequal";

describe("deepEqual", () => {
  it("should be a function", () => {
    expect(typeof deepEqual).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => deepEqual(null as any)).toThrow();
  });
});
