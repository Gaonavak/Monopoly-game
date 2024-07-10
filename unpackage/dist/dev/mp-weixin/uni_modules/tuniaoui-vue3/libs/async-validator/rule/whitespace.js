"use strict";
const uni_modules_tuniaouiVue3_libs_asyncValidator_util = require("../util.js");
const whitespace = (rule, value, source, errors, options) => {
  if (/^\s+$/.test(value) || value === "") {
    errors.push(uni_modules_tuniaouiVue3_libs_asyncValidator_util.format(options.messages.whitespace, rule.fullField));
  }
};
exports.whitespace = whitespace;
