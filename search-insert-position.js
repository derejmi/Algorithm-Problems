/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return lo;
};
