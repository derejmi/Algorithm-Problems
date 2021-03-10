/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const lastTwo = [0, 1];
  counter = 1;

  while (counter < n) {
    const fib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = fib;
    counter++;
  }

  if (n === 0) {
    return lastTwo[0];
  }
  return lastTwo[1];
};
