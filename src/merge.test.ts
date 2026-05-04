import { describe, it, expect } from "vitest";
import { merge } from "./page/sortpage/merge";

describe("merge", () => {
  it("Happy Case", () => {
    expect(merge([1, 4, 7], [9, 5, 2], [3, 6, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("Empty Case", () => {
    expect(merge([], [], [])).toEqual([]);
  });

  it("c1 is not sorted ascending", () => {
    // c1 ส่งมาเป็น desc แทน asc → ผลลัพธ์ไม่ถูกต้อง
    const result = merge([7, 4, 1], [9, 5, 2], [3, 6, 8]);
    expect(result).not.toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
