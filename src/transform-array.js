const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newarr = [];
  if (!Array.isArray(arr)) {
    throw new Error("Не является массивом!");
  } else if (arr.length === 0) {
    return newarr;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "--discard-next") {
        if (arr[i + 2] === "--discard-prev" || arr[i + 2] === "--double-prev") {
          i += 2;
        } else {
          i += 1;
        }
      } else if (arr[i] === "--discard-prev") {
          newarr.pop();
      } else if (arr[i] === "--double-next") {
        if (arr[i + 1] !== undefined) {
          newarr.push(arr[i + 1]);
        }
      } else if (arr[i] === "--double-prev") {
        if (arr[i - 1] !== undefined) {
          newarr.push(arr[i - 1]);
        }
      } else {
        newarr.push(arr[i]);
      }
    }
    return newarr;
  }

  // throw new CustomError("Not implemented");
  // remove line with error and write your code here
};
