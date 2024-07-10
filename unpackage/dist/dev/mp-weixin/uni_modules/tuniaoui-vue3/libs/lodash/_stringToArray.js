"use strict";
const uni_modules_tuniaouiVue3_libs_lodash__asciiToArray = require("./_asciiToArray.js");
const uni_modules_tuniaouiVue3_libs_lodash__hasUnicode = require("./_hasUnicode.js");
const uni_modules_tuniaouiVue3_libs_lodash__unicodeToArray = require("./_unicodeToArray.js");
function stringToArray(string) {
  return uni_modules_tuniaouiVue3_libs_lodash__hasUnicode.hasUnicode(string) ? uni_modules_tuniaouiVue3_libs_lodash__unicodeToArray.unicodeToArray(string) : uni_modules_tuniaouiVue3_libs_lodash__asciiToArray.asciiToArray(string);
}
exports.stringToArray = stringToArray;
