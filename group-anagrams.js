/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const hashtable = {};
  const resultArr = [];

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const sortStr = str.split("").sort().join("");
    if (hashtable[sortStr]) {
      hashtable[sortStr].push(str);
    } else {
      hashtable[sortStr] = [str];
    }
  }

  for (const key in hashtable) {
    resultArr.push(hashtable[key]);
  }

  return resultArr;
};
