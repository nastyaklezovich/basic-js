const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = [];
  if (!Array.isArray(members)) return false;
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      arr.push(members[i].trim().toUpperCase());
    }
  }
  arr.sort();
  let code = "";
  for (let j = 0; j < arr.length; j++) {
    code += arr[j].substring(0, 1);
  }
  return code;
};
