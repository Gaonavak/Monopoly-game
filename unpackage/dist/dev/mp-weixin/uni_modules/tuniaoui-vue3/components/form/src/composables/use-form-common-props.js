"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useProp_index = require("../../../../hooks/use-prop/index.js");
require("../../../../libs/lodash/_baseToString.js");
require("../../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_tokens_form = require("../../../../tokens/form.js");
const useFormSize = (fallback, ignore = {}) => {
  const emptyRef = common_vendor.ref(void 0);
  const size = ignore.prop ? emptyRef : uni_modules_tuniaouiVue3_hooks_useProp_index.useProp("size");
  const form = ignore.form ? { size: void 0 } : common_vendor.inject(uni_modules_tuniaouiVue3_tokens_form.formContextKey, void 0);
  const formItem = ignore.formItem ? { size: void 0 } : common_vendor.inject(uni_modules_tuniaouiVue3_tokens_form.formItemContextKey, void 0);
  return common_vendor.computed(
    () => size.value || common_vendor.unref(fallback) || (formItem == null ? void 0 : formItem.size) || (form == null ? void 0 : form.size) || ""
  );
};
const useFormDisabled = (fallback) => {
  const disabled = uni_modules_tuniaouiVue3_hooks_useProp_index.useProp("disabled");
  const form = common_vendor.inject(uni_modules_tuniaouiVue3_tokens_form.formContextKey, void 0);
  return common_vendor.computed(
    () => disabled.value || common_vendor.unref(fallback) || (form == null ? void 0 : form.disabled) || false
  );
};
exports.useFormDisabled = useFormDisabled;
exports.useFormSize = useFormSize;
