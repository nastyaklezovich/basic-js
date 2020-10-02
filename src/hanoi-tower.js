const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {};
  minturns = Math.pow(2, disksNumber)-1;
  minsecconds = Math.floor(minturns * 3600 / turnsSpeed);
  obj.turns = minturns;
  obj.seconds = minsecconds;
  return obj;
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
