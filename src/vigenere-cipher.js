const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let keyIndex = 0;
    let encryptedMessage = message.split('').map((char) => {
      if (/[A-Z]/.test(char)) {
        const messageCharCode = char.charCodeAt(0);
        const keyCharCode = key[keyIndex % key.length].charCodeAt(0);
        keyIndex++;

        const encryptedCharCode = (messageCharCode + keyCharCode - 2 * 65) % 26 + 65;
        return String.fromCharCode(encryptedCharCode);
      }
      return char;
    }).join('');

    return this.direct ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let keyIndex = 0;
    let decryptedMessage = message.split('').map((char) => {
      if (/[A-Z]/.test(char)) {
        const messageCharCode = char.charCodeAt(0);
        const keyCharCode = key[keyIndex % key.length].charCodeAt(0);
        keyIndex++;

        const decryptedCharCode = (messageCharCode - keyCharCode + 26) % 26 + 65;
        return String.fromCharCode(decryptedCharCode);
      }
      return char;
    }).join('');

    return this.direct ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
