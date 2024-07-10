"use strict";
const uni_modules_tuniaouiVue3_libs_lodash__baseIndexOf = require("./_baseIndexOf.js");
function charsEndIndex(strSymbols, chrSymbols) {
  let index = strSymbols.length;
  while (index-- && uni_modules_tuniaouiVue3_libs_lodash__baseIndexOf.baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
  }
  return index;
}
exports.charsEndIndex = charsEndIndex;
