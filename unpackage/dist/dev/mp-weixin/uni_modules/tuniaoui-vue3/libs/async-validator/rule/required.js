"use strict";
const uni_modules_tuniaouiVue3_libs_asyncValidator_util = require("../util.js");
const required = (rule, value, source, errors, options, type) => {
  if (rule.required && (!source.hasOwnProperty(rule.field) || uni_modules_tuniaouiVue3_libs_asyncValidator_util.isEmptyValue(value, type || rule.type))) {
    errors.push(uni_modules_tuniaouiVue3_libs_asyncValidator_util.format(options.messages.required, rule.fullField));
  }
};
exports.required = required;
