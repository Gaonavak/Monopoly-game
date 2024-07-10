"use strict";
const uni_modules_tuniaouiVue3_libs_lodash__baseSlice = require("./_baseSlice.js");
function castSlice(array, start, end) {
  const length = array.length;
  end = end === void 0 ? length : end;
  return !start && end >= length ? array : uni_modules_tuniaouiVue3_libs_lodash__baseSlice.baseSlice(array, start, end);
}
exports.castSlice = castSlice;
