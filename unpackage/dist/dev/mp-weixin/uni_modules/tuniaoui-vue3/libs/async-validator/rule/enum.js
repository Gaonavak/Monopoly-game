"use strict";
const uni_modules_tuniaouiVue3_libs_asyncValidator_util = require("../util.js");
const ENUM = "enum";
const enumerable = (rule, value, source, errors, options) => {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(
      uni_modules_tuniaouiVue3_libs_asyncValidator_util.format(options.messages[ENUM], rule.fullField, rule[ENUM].join(", "))
    );
  }
};
exports.enumerable = enumerable;
