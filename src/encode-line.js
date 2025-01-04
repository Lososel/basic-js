const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  return (str.match(/(.)\1*/g) || [])
    .map((group) => (group.length > 1 ? group.length : '') + group[0])
    .join('');
}

module.exports = {
  encodeLine
};
