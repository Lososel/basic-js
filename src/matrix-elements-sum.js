const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const helper = (rowIndex, previousRowBlocked) => {
    if (rowIndex === matrix.length) return 0;

    const currentRowSum = matrix[rowIndex].reduce((sum, value, colIndex) => {
      if (previousRowBlocked[colIndex]) return sum;
      return sum + value;
    }, 0);

    const nextRowBlocked = matrix[rowIndex].map((value, colIndex) => value === 0 || previousRowBlocked[colIndex]);

    return currentRowSum + helper(rowIndex + 1, nextRowBlocked);
  };

  return helper(0, Array(matrix[0].length).fill(false));
}

module.exports = {
  getMatrixElementsSum
};
