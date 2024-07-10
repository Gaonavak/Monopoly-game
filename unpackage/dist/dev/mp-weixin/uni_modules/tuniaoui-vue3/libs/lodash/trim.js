"use strict";
const uni_modules_tuniaouiVue3_libs_lodash__toString = require("./_toString.js");
const uni_modules_tuniaouiVue3_libs_lodash__baseTrim = require("./_baseTrim.js");
const uni_modules_tuniaouiVue3_libs_lodash__baseToString = require("./_baseToString.js");
const uni_modules_tuniaouiVue3_libs_lodash__stringToArray = require("./_stringToArray.js");
const uni_modules_tuniaouiVue3_libs_lodash__charStartIndex = require("./_charStartIndex.js");
const uni_modules_tuniaouiVue3_libs_lodash__charsEndIndex = require("./_charsEndIndex.js");
const uni_modules_tuniaouiVue3_libs_lodash__castSlice = require("./_castSlice.js");
function trim(string, chars) {
  string = uni_modules_tuniaouiVue3_libs_lodash__toString.toString(string);
  if (string && chars === void 0) {
    return uni_modules_tuniaouiVue3_libs_lodash__baseTrim.baseTrim(string);
  }
  if (!string || !(chars = uni_modules_tuniaouiVue3_libs_lodash__baseToString.baseToString(chars))) {
    return string;
  }
  const strSymbols = uni_modules_tuniaouiVue3_libs_lodash__stringToArray.stringToArray(string), chrSymbols = uni_modules_tuniaouiVue3_libs_lodash__stringToArray.stringToArray(chars), start = uni_modules_tuniaouiVue3_libs_lodash__charStartIndex.charsStartIndex(strSymbols, chrSymbols), end = uni_modules_tuniaouiVue3_libs_lodash__charsEndIndex.charsEndIndex(strSymbols, chrSymbols) + 1;
  return uni_modules_tuniaouiVue3_libs_lodash__castSlice.castSlice(strSymbols, start, end).join("");
}
exports.trim = trim;
