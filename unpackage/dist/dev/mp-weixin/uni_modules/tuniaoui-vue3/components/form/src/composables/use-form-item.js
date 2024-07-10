"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_tokens_form = require("../../../../tokens/form.js");
const useFormItem = () => {
  const form = common_vendor.inject(uni_modules_tuniaouiVue3_tokens_form.formContextKey, void 0);
  const formItem = common_vendor.inject(uni_modules_tuniaouiVue3_tokens_form.formItemContextKey, void 0);
  return {
    form,
    formItem
  };
};
exports.useFormItem = useFormItem;
