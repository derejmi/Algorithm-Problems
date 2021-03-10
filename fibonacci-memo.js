/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n, memoize = { 0: 0, 1: 1 }) {
  if (n in memoize) {
    return memoize[n];
  } else {
    memoize[n] = fib(n - 1, memoize) + fib(n - 2, memoize);
    return memoize[n];
  }
};
