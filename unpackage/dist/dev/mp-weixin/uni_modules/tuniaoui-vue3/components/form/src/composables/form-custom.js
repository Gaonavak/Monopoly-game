"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
require("../../../../libs/lodash/_baseToString.js");
require("../../../../hooks/use-z-index/index.js");
const useFormCustomStyle = () => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("form");
  const formClass = common_vendor.computed(() => {
    const cls = [ns.b()];
    return cls.join(" ");
  });
  return {
    formClass
  };
};
exports.useFormCustomStyle = useFormCustomStyle;
