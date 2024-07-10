"use strict";
const uni_modules_tuniaouiVue3_libs_lodash__trimmedEndIndex = require("./_trimmedEndIndex.js");
const reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, uni_modules_tuniaouiVue3_libs_lodash__trimmedEndIndex.trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
exports.baseTrim = baseTrim;
