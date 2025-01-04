const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // split using @ as separator
  // return the element with 2 index
  const array = email.split('@');
  return array[array.length - 1];
}

module.exports = {
  getEmailDomain
};
