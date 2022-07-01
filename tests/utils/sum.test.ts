import {
  sum,
  subtraction,
  lengthOfLongestSubstring,
  // checkPossibility,
  isPossibSort
} from 'utils/sum';

describe('sum', () => {
  it('做加法', () => {
    expect(sum(1, 1)).toEqual(2)
  })
})

describe("subtraction", () => {
  it("做减法", () => {
    expect(subtraction(2, 1)).toEqual(1)
  })
})

describe("lengthOfLongestSubstring", () => {
  it("最长子串", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3)
    expect(lengthOfLongestSubstring("bbbbb")).toEqual(1)
    expect(lengthOfLongestSubstring("pwwkew")).toEqual(3)
  })
})

describe("isPossibSort", () => {
  it(" 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列", () => {
    expect(isPossibSort([4, 2, 3])).toEqual(false);
    expect(isPossibSort([4, 2, 1])).toEqual(false);
    expect(isPossibSort([3, 4, 2, 3])).toEqual(false);
    expect(isPossibSort([5, 7, 1, 8])).toEqual(false);
    expect(isPossibSort([1, 2, 3, 4])).toEqual(true);
    expect(isPossibSort([1, 2, 2, 4])).toEqual(true);
  })
})

// describe("checkPossibility", () => {
//   it(" 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列", () => {
//     expect(checkPossibility([4, 2, 3])).toEqual(true);
//     expect(checkPossibility([4, 2, 1])).toEqual(false);
//     expect(checkPossibility([3, 4, 2, 3])).toEqual(false);
//     expect(checkPossibility([5, 7, 1, 8])).toEqual(true);
//   })
// })