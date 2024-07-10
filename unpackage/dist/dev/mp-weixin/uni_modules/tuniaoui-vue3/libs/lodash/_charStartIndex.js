"use strict";
const uni_modules_tuniaouiVue3_libs_lodash__baseIndexOf = require("./_baseIndexOf.js");
function charsStartIndex(strSymbols, chrSymbols) {
  let index = -1;
  const length = strSymbols.length;
  while (++index < length && uni_modules_tuniaouiVue3_libs_lodash__baseIndexOf.baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
  }
  return index;
}
exports.charsStartIndex = charsStartIndex;
