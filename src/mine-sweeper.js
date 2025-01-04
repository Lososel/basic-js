const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];

  const rows = matrix.length;
  const cols = matrix[0].length;

  function getNeighbors(i, j) {
    return directions.map(([dx, dy]) => {
      const ni = i + dx;
      const nj = j + dy;
      if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
        return matrix[ni][nj] ? 1 : 0;
      }
      return 0;
    }).reduce((acc, curr) => acc + curr, 0);
  }

  function updateRow(rowIndex) {
    if (rowIndex >= rows) return [];

    const row = matrix[rowIndex].map((_, colIndex) => getNeighbors(rowIndex, colIndex));
    return [row].concat(updateRow(rowIndex + 1));
  }

  return updateRow(0);
}

module.exports = {
  minesweeper
};
