/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const hashtable = { "(": ")", "{": "}", "[": "]" };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (currentChar in hashtable) {
      stack.push(currentChar);
    } else {
      const lastOpen = stack.pop();
      if (currentChar !== hashtable[lastOpen]) {
        return false;
      }
    }
  }

  if (stack.length) {
    return false;
  }

  return true;
};
