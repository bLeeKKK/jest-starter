export const sum = (a: number, b: number) => a + b;
export const subtraction = (a: number, b: number) => a - b;

export const lengthOfLongestSubstring = (str: string): number => {
  let maxCount = 0;
  const maxArr: string[] = [];
  const arr = str.split("");
  arr.forEach((item) => {
    const index = maxArr.findIndex((res) => item === res);
    if (index === -1) {
      maxArr.push(item);
      if (maxCount < maxArr.length) maxCount = maxArr.length;
    } else {
      if (maxCount < maxArr.length) maxCount = maxArr.length;
      maxArr.splice(0, index + 1);
      maxArr.push(item);
    }
  });
  return maxCount;
};

export const checkPossibility = (nums: number[]): boolean => {
  const len = nums.length;
  if (len < 3 || isPossibSort(nums)) {
    return true;
  }
  for (let i = 0; i < len; i++) {
    if (i + 1 < len && nums[i] > nums[i + 1]) {
      nums[i] = nums[i + 1];
      return isPossibSort(nums);
    }
  }
  return false;
};

export const isPossibSort = (nums: number[]): boolean => {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (i + 1 < len) {
      if (nums[i] > nums[i + 1]) {
        return false;
      }
    }
  }
  return true;
};
