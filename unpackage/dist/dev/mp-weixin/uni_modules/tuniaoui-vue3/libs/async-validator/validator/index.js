"use strict";
const uni_modules_tuniaouiVue3_libs_asyncValidator_validator_string = require("./string.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_validator_method = require("./method.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_validator_number = require("./number.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_validator_boolean = require("./boolean.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_validator_regexp = require("./regexp.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_validator_integer = require("./integer.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_validator_float = require("./float.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_validator_array = require("./array.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_validator_object = require("./object.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_validator_enum = require("./enum.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_validator_pattern = require("./pattern.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_validator_date = require("./date.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_validator_required = require("./required.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_validator_type = require("./type.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_validator_any = require("./any.js");
const validators = {
  string: uni_modules_tuniaouiVue3_libs_asyncValidator_validator_string.string,
  method: uni_modules_tuniaouiVue3_libs_asyncValidator_validator_method.method,
  number: uni_modules_tuniaouiVue3_libs_asyncValidator_validator_number.number,
  boolean: uni_modules_tuniaouiVue3_libs_asyncValidator_validator_boolean.boolean,
  regexp: uni_modules_tuniaouiVue3_libs_asyncValidator_validator_regexp.regexp,
  integer: uni_modules_tuniaouiVue3_libs_asyncValidator_validator_integer.integer,
  float: uni_modules_tuniaouiVue3_libs_asyncValidator_validator_float.floatFn,
  array: uni_modules_tuniaouiVue3_libs_asyncValidator_validator_array.array,
  object: uni_modules_tuniaouiVue3_libs_asyncValidator_validator_object.object,
  enum: uni_modules_tuniaouiVue3_libs_asyncValidator_validator_enum.enumerable,
  pattern: uni_modules_tuniaouiVue3_libs_asyncValidator_validator_pattern.pattern,
  date: uni_modules_tuniaouiVue3_libs_asyncValidator_validator_date.date,
  url: uni_modules_tuniaouiVue3_libs_asyncValidator_validator_type.type,
  hex: uni_modules_tuniaouiVue3_libs_asyncValidator_validator_type.type,
  email: uni_modules_tuniaouiVue3_libs_asyncValidator_validator_type.type,
  required: uni_modules_tuniaouiVue3_libs_asyncValidator_validator_required.required,
  any: uni_modules_tuniaouiVue3_libs_asyncValidator_validator_any.any
};
exports.validators = validators;
