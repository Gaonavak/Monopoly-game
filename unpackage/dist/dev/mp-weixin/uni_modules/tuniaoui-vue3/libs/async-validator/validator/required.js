"use strict";
const uni_modules_tuniaouiVue3_libs_asyncValidator_rule_index = require("../rule/index.js");
const required = (rule, value, callback, source, options) => {
  const errors = [];
  const type = Array.isArray(value) ? "array" : typeof value;
  uni_modules_tuniaouiVue3_libs_asyncValidator_rule_index.rules.required(rule, value, source, errors, options, type);
  callback(errors);
};
exports.required = required;
