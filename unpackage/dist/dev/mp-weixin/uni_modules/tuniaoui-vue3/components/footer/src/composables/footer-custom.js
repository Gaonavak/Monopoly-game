"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentSize_index = require("../../../../hooks/use-component-size/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const useFooterCustomStyle = (props) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("footer");
  const [textColorClass, textColorStyle] = uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(
    common_vendor.toRef(props, "textColor"),
    "text"
  );
  const { sizeType } = uni_modules_tuniaouiVue3_hooks_useComponentSize_index.useComponentSize(props.size);
  const footerClass = common_vendor.computed(() => {
    const cls = [ns.b()];
    if (props.size && sizeType.value === "inner")
      cls.push(ns.m(props.size));
    if (props.fixed) {
      cls.push(ns.e("fixed"), ns.em("fixed", props.fixedMode));
      if (props.safeAreaInsetBottom) {
        cls.push("tn-u-safe-area");
      }
    }
    return cls.join(" ");
  });
  const footerStyle = common_vendor.computed(() => {
    const style = {};
    if (props.offsetBottom)
      style.bottom = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.offsetBottom);
    if (props.size && sizeType.value === "custom") {
      style.fontSize = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.size);
    }
    return style;
  });
  const contentClass = common_vendor.computed(() => {
    const cls = [ns.e("content")];
    if (textColorClass.value)
      cls.push(textColorClass.value);
    return cls.join(" ");
  });
  const contentStyle = common_vendor.computed(() => {
    const style = {};
    if (!textColorClass.value)
      style.color = textColorStyle.value || "var(--tn-text-color-secondary)";
    return style;
  });
  const navigatorClass = common_vendor.computed(() => {
    return (item) => {
      const cls = [ns.e("navigator")];
      if (item.color.class)
        cls.push(item.color.class);
      return cls.join(" ");
    };
  });
  const navigatorStyle = common_vendor.computed(() => {
    return (item) => {
      const style = {};
      if (!item.color.class)
        style.color = item.color.style || "var(--tn-color-primary)";
      return style;
    };
  });
  return {
    ns,
    footerClass,
    footerStyle,
    contentClass,
    contentStyle,
    navigatorClass,
    navigatorStyle
  };
};
exports.useFooterCustomStyle = useFooterCustomStyle;
