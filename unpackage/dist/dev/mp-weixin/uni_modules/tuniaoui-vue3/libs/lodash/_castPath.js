"use strict";
const uni_modules_tuniaouiVue3_libs_lodash__stringToPath = require("./_stringToPath.js");
function castPath(value) {
  return Array.isArray(value) ? value : uni_modules_tuniaouiVue3_libs_lodash__stringToPath.stringToPath(value);
}
exports.castPath = castPath;
