"use strict";
const uni_modules_tuniaouiVue3_libs_lodash__baseFindIndex = require("./_baseFindIndex.js");
const uni_modules_tuniaouiVue3_libs_lodash__baseIsNan = require("./_baseIsNan.js");
const uni_modules_tuniaouiVue3_libs_lodash__strictIndexOf = require("./_strictIndexOf.js");
function baseIndexOf(array, value, fromIndex) {
  return value === value ? uni_modules_tuniaouiVue3_libs_lodash__strictIndexOf.strictIndexOf(array, value, fromIndex) : uni_modules_tuniaouiVue3_libs_lodash__baseFindIndex.baseFindIndex(array, uni_modules_tuniaouiVue3_libs_lodash__baseIsNan.baseIsNaN, fromIndex);
}
exports.baseIndexOf = baseIndexOf;
