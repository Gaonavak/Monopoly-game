"use strict";
const uni_modules_tuniaouiVue3_libs_asyncValidator_rule_index = require("../rule/index.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_util = require("../util.js");
const floatFn = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (uni_modules_tuniaouiVue3_libs_asyncValidator_util.isEmptyValue(value) && !rule.required) {
      return callback();
    }
    uni_modules_tuniaouiVue3_libs_asyncValidator_rule_index.rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      uni_modules_tuniaouiVue3_libs_asyncValidator_rule_index.rules.type(rule, value, source, errors, options);
      uni_modules_tuniaouiVue3_libs_asyncValidator_rule_index.rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
exports.floatFn = floatFn;
