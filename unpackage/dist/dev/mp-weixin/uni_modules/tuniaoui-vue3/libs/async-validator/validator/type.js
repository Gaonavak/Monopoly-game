"use strict";
const uni_modules_tuniaouiVue3_libs_asyncValidator_rule_index = require("../rule/index.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_util = require("../util.js");
const type = (rule, value, callback, source, options) => {
  const ruleType = rule.type;
  const errors = [];
  const validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (uni_modules_tuniaouiVue3_libs_asyncValidator_util.isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    uni_modules_tuniaouiVue3_libs_asyncValidator_rule_index.rules.required(rule, value, source, errors, options, ruleType);
    if (!uni_modules_tuniaouiVue3_libs_asyncValidator_util.isEmptyValue(value, ruleType)) {
      uni_modules_tuniaouiVue3_libs_asyncValidator_rule_index.rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
exports.type = type;
