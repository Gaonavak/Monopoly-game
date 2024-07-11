"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_tokens_collapse = require("../../../../tokens/collapse.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../libs/lodash/_baseToString.js");
require("../../../../hooks/use-z-index/index.js");
const useCollapseItemCustomStyle = () => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("collapse-item");
  const collapse = common_vendor.inject(uni_modules_tuniaouiVue3_tokens_collapse.collapseContextKey);
  const [arrowColorClass, arrowColorStyle] = uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(
    common_vendor.toRef(collapse, "arrowColor"),
    "text"
  );
  const arrowClass = common_vendor.computed(() => {
    const cls = [];
    if (arrowColorClass.value)
      cls.push(arrowColorClass.value);
    return cls.join(" ");
  });
  const arrowStyle = common_vendor.computed(() => {
    const style = {};
    if (!arrowColorClass.value)
      style.color = arrowColorStyle.value || "var(--tn-color-gray)";
    return style;
  });
  return {
    ns,
    arrowClass,
    arrowStyle
  };
};
exports.useCollapseItemCustomStyle = useCollapseItemCustomStyle;
