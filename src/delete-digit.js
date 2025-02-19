const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = String(n).split('');
  const numbers = digits.map((v, i) => {
    const tempArray = digits.slice();
    tempArray.splice(i, 1);
    return Number(tempArray.join(''));
  });
  return Math.max(...numbers);
}

module.exports = {
  deleteDigit
};
