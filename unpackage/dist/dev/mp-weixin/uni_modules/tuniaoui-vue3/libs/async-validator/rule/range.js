"use strict";
const uni_modules_tuniaouiVue3_libs_asyncValidator_util = require("../util.js");
const range = (rule, value, source, errors, options) => {
  const len = typeof rule.len === "number";
  const min = typeof rule.min === "number";
  const max = typeof rule.max === "number";
  const spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  let val = value;
  let key = null;
  const num = typeof value === "number";
  const str = typeof value === "string";
  const arr = Array.isArray(value);
  if (num) {
    key = "number";
  } else if (str) {
    key = "string";
  } else if (arr) {
    key = "array";
  }
  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    val = value.replace(spRegexp, "_").length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(uni_modules_tuniaouiVue3_libs_asyncValidator_util.format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(uni_modules_tuniaouiVue3_libs_asyncValidator_util.format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(uni_modules_tuniaouiVue3_libs_asyncValidator_util.format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(
      uni_modules_tuniaouiVue3_libs_asyncValidator_util.format(options.messages[key].range, rule.fullField, rule.min, rule.max)
    );
  }
};
exports.range = range;
