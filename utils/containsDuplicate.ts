export function containsDuplicate(nums: number[]): boolean {
  const uniqueNums = new Set(nums);
  return uniqueNums.size !== nums.length;
}

const nums = [1, 2, 3, 3];
console.log(containsDuplicate(nums));