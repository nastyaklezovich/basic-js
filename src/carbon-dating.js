const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    sampleActivity === undefined ||
    arguments.length === 0 ||
    typeof(sampleActivity) !== "string" ||
    isNaN(Number (sampleActivity)) ||
    Number(sampleActivity) >= MODERN_ACTIVITY ||
    Number(sampleActivity) <= 0
  ) {
    return false;
  }
  let activity = Number(sampleActivity);
  result = Math.log(MODERN_ACTIVITY / activity) / (0.693 / HALF_LIFE_PERIOD);
  return Math.ceil(result);
  // throw new CustomError("Not implemented");
  // remove line with error and write your code here
};
