const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  } else if (isNaN(date.valueOf()) && date instanceof Date) {
    throw new Error("Error");
  } else {
    const month = date.getMonth();
    if (month === 11 || month === 0 || month === 1) {
      return "winter";
    } else if (month === 2 || month === 3 || month === 4) {
      return "spring";
    } else if (month === 5 || month === 6 || month === 7) {
      return "summer";
    } else if (month === 8 || month === 9 || month === 10) {
      return "autumn";
    }
  }

  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
