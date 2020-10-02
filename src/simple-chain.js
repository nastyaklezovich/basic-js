const CustomError = require("../extensions/custom-error");

const chainMaker = {
  currentInput: [],
  getLength() {
    return this.currentInput.length;
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    if (value === undefined) {
      this.currentInput.push("(  )");
    } else {
      this.currentInput.push(`( ${value} )`);
    }
    return this;
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position < 0 ||
      position >= this.currentInput.length ||
      !Number.isInteger(position)
    ) {
      this.currentInput = [];
      throw new Error();
    } else {
      this.currentInput = this.currentInput
        .slice(0, position - 1)
        .concat(this.currentInput.slice(position));
      return this;
    }
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.currentInput.reverse();
    return this;
    // throw new CustomError("Not implemented");
    // remove line with error and write your code here
  },
  finishChain() {
    let result = this.currentInput.join("~~");
    this.currentInput = [];
    return result;
    // throw new CustomError("Not implemented");
    // remove line with error and write your code here
  },
};

module.exports = chainMaker;
