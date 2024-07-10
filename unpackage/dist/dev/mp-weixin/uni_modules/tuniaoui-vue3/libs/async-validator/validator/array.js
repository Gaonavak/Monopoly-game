"use strict";
const uni_modules_tuniaouiVue3_libs_asyncValidator_rule_index = require("../rule/index.js");
const array = (rule, value, callback, source, options) => {
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((value === void 0 || value === null) && !rule.required) {
      return callback();
    }
    uni_modules_tuniaouiVue3_libs_asyncValidator_rule_index.rules.required(rule, value, source, errors, options, "array");
    if (value !== void 0 && value !== null) {
      uni_modules_tuniaouiVue3_libs_asyncValidator_rule_index.rules.type(rule, value, source, errors, options);
      uni_modules_tuniaouiVue3_libs_asyncValidator_rule_index.rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
exports.array = array;
