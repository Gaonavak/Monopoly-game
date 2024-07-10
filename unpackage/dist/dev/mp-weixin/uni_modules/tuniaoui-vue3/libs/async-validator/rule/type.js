"use strict";
const uni_modules_tuniaouiVue3_libs_asyncValidator_util = require("../util.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_rule_required = require("./required.js");
const uni_modules_tuniaouiVue3_libs_asyncValidator_rule_url = require("./url.js");
const pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
const types = {
  integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  float(value) {
    return types.number(value) && !types.integer(value);
  },
  array(value) {
    return Array.isArray(value);
  },
  regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date(value) {
    return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
  },
  number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === "number";
  },
  object(value) {
    return typeof value === "object" && !types.array(value);
  },
  method(value) {
    return typeof value === "function";
  },
  email(value) {
    return typeof value === "string" && value.length <= 320 && !!value.match(pattern.email);
  },
  url(value) {
    return typeof value === "string" && value.length <= 2048 && !!value.match(uni_modules_tuniaouiVue3_libs_asyncValidator_rule_url.getUrlRegex());
  },
  hex(value) {
    return typeof value === "string" && !!value.match(pattern.hex);
  }
};
const type = (rule, value, source, errors, options) => {
  if (rule.required && value === void 0) {
    uni_modules_tuniaouiVue3_libs_asyncValidator_rule_required.required(rule, value, source, errors, options);
    return;
  }
  const custom = [
    "integer",
    "float",
    "array",
    "regexp",
    "object",
    "method",
    "email",
    "number",
    "date",
    "url",
    "hex"
  ];
  const ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(
        uni_modules_tuniaouiVue3_libs_asyncValidator_util.format(options.messages.types[ruleType], rule.fullField, rule.type)
      );
    }
  } else if (ruleType && typeof value !== rule.type) {
    errors.push(
      uni_modules_tuniaouiVue3_libs_asyncValidator_util.format(options.messages.types[ruleType], rule.fullField, rule.type)
    );
  }
};
exports.type = type;
