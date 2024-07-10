"use strict";
const uni_modules_tuniaouiVue3_libs_asyncValidator_util = require("../util.js");
const pattern = (rule, value, source, errors, options) => {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(
          uni_modules_tuniaouiVue3_libs_asyncValidator_util.format(
            options.messages.pattern.mismatch,
            rule.fullField,
            value,
            rule.pattern
          )
        );
      }
    } else if (typeof rule.pattern === "string") {
      const _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(
          uni_modules_tuniaouiVue3_libs_asyncValidator_util.format(
            options.messages.pattern.mismatch,
            rule.fullField,
            value,
            rule.pattern
          )
        );
      }
    }
  }
};
exports.pattern = pattern;
