"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_libs_lodash_debounce = require("./debounce.js");
const FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  let leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (common_vendor.isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return uni_modules_tuniaouiVue3_libs_lodash_debounce.debounce(func, wait, {
    leading,
    maxWait: wait,
    trailing
  });
}
exports.throttle = throttle;
