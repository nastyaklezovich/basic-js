const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // if (typeof str !== 'string'){
  //   str.toString();
  // }
  // if (typeof options.addition !== 'string'){
  //   addition = options.addition;
  //   addition.toString();
  // }
  if (options.separator === undefined) {
    options.separator = "+";
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.addition !== undefined) {
    num1 = options.additionSeparator.length;
    additionarr = new Array(options.additionRepeatTimes + 1).join(
      options.addition + options.additionSeparator
    );
    additionarr = additionarr.slice(0, -num1);
    substr = str + additionarr;
    arr = new Array(options.repeatTimes + 1).join(substr + options.separator);
    arr = arr.slice(0, -options.separator.length);
    return arr;
  } else {
    array = new Array(options.repeatTimes + 1).join(str + options.separator);
    array = array.slice(0, -options.separator.length);
    return array;
  }

  // throw new CustomError("Not implemented");
  // remove line with error and write your code here
};
