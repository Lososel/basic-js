const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this; // Allow chaining
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position <= 0 || position > this.chain.length) {
      this.chain = []; // Reset chain on error
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1); // Remove link at position (1-based index)
    return this; // Allow chaining
  },
  reverseChain() {
    this.chain.reverse();
    return this; // Allow chaining
  },
  finishChain() {
    const finalChain = this.chain.join('~~'); // Join all links with '~~'
    this.chain = []; // Reset the chain
    return finalChain;
  },
};

module.exports = {
  chainMaker
};
