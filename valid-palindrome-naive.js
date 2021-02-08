/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const sanitised = s.replace(/[\W_]+/g, "").toLowerCase();

  return sanitised.split("").reverse().join("") === sanitised;
};
