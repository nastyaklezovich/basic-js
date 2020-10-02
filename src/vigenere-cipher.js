const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  en = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  N = this.en.length;
  messagecode = 0;
  keycode = 0;
  cryptcode = 0;
  crypt = "";

  constructor(crypttype) {
    this.crypttype = crypttype;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }
    this.crypt = "";
    this.messagecode = 0;
    this.keycode = 0;
    message = message.toUpperCase();
    message = message.split("");
    key = key.toUpperCase();
    key = key.split("");
    for (let i = 0; i < message.length; i++) {
      let a = this.en.indexOf(message[i]);
      let b = this.en.indexOf(key[this.keycode]);
      if (a === -1) {
        this.crypt += message[i];
      } else {
        let c = (a + b) % this.N;
        this.crypt += this.en[c];
        this.keycode++;
        if (this.keycode === key.length) this.keycode = 0;
      }
    }
    if (this.crypttype === false) {
      return this.crypt.split("").reverse().join("");
    } else {
      return this.crypt;
    }
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }
    this.crypt = "";
    this.messagecode = 0;
    this.keycode = 0;
    message = message.toUpperCase();
    message = message.split("");
    key = key.toUpperCase();
    key = key.split("");
    for (let i = 0; i < message.length; i++) {
      let a = this.en.indexOf(message[i]);
      let b = this.en.indexOf(key[this.keycode]);
      if (a === -1) {
        this.crypt += message[i];
      } else {
        let p = (a + this.N - b) % this.N;
        this.crypt += this.en[p];
        this.keycode++;
        if (this.keycode === key.length) this.keycode = 0;
      }
    }
    if (this.crypttype === false) {
      return this.crypt.split("").reverse().join("");
    } else {
      return this.crypt;
    }
    // throw new CustomError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
