/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashtable = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const counterpart = target - currentNum;
    if (counterpart in hashtable) {
      const counterIndex = hashtable[counterpart];
      return [i, counterIndex];
    } else {
      hashtable[currentNum] = i;
    }
  }
};
