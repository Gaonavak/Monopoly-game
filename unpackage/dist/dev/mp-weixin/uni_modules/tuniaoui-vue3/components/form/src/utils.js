"use strict";
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_libs_lodash_castArray = require("../../../libs/lodash/cast-array.js");
const filterFields = (fields, props) => {
  const normalized = uni_modules_tuniaouiVue3_libs_lodash_castArray.castArray(props);
  return normalized.length > 0 ? fields.filter((field) => field.prop && normalized.includes(field.prop)) : fields;
};
exports.filterFields = filterFields;
