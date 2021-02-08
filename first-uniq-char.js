/**
 * @param {string} s
 * @return {number}
 */

const firstUniqChar = (str) => {
  const hashtable = {};

  for (let i = 0; i <= str.length; i++) {
    let currentLetter = str[i];
    if (hashtable[currentLetter]) hashtable[currentLetter]++;
    else hashtable[currentLetter] = 1;
  }
  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i];
    if (hashtable[currentLetter] === 1) return i;
  }

  return -1;
};
