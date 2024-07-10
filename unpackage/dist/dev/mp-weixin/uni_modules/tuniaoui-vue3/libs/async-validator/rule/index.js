"use strict";
const uni_modules_tuniaouiVue3_libs_asyncValidator_rule_required = require("./required.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_rule_whitespace = require("./whitespace.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_rule_type = require("./type.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_rule_range = require("./range.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_rule_enum = require("./enum.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_rule_pattern = require("./pattern.js");
const rules = {
  required: uni_modules_tuniaouiVue3_libs_asyncValidator_rule_required.required,
  whitespace: uni_modules_tuniaouiVue3_libs_asyncValidator_rule_whitespace.whitespace,
  type: uni_modules_tuniaouiVue3_libs_asyncValidator_rule_type.type,
  range: uni_modules_tuniaouiVue3_libs_asyncValidator_rule_range.range,
  enum: uni_modules_tuniaouiVue3_libs_asyncValidator_rule_enum.enumerable,
  pattern: uni_modules_tuniaouiVue3_libs_asyncValidator_rule_pattern.pattern
};
exports.rules = rules;
