"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../libs/lodash/_baseToString.js");
require("../../../../hooks/use-z-index/index.js");
const useSearchBoxCustomStyle = (props) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("search-box");
  const [textColorClass, textColorStyle] = uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(
    common_vendor.toRef(props, "textColor"),
    "text"
  );
  const [borderColorClass, borderColorStyle] = uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(
    common_vendor.toRef(props, "borderColor"),
    "border"
  );
  const [placeholderColorClass, placeholderColorStyle] = uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(
    common_vendor.toRef(props, "placeholderColor"),
    "text"
  );
  const [searchButtonTextColorClass, searchButtonTextColorStyle] = uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "searchButtonTextColor"), "text");
  const [searchButtonBgColorClass, searchButtonBgColorStyle] = uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(common_vendor.toRef(props, "searchButtonBgColor"), "bg");
  const searchBoxClass = common_vendor.computed(() => {
    const cls = [
      ns.b(),
      ns.m(props.shape),
      ns.is("no-search-btn", !props.searchButton),
      ns.is("disabled", props.disabled)
    ];
    if (props.border) {
      cls.push(ns.m("border"));
      if (borderColorClass.value)
        cls.push(borderColorClass.value);
    }
    if (props.size)
      cls.push(ns.m(props.size));
    if (textColorClass.value)
      cls.push(textColorClass.value);
    return cls.join(" ");
  });
  const searchBoxStyle = common_vendor.computed(() => {
    const style = {};
    if (!textColorClass.value)
      style.color = textColorStyle.value || "var(--tn-text-color-primary)";
    if (props.border) {
      if (!borderColorClass.value) {
        style.borderColor = borderColorStyle.value || "var(--tn-color-gray)";
      }
    }
    return style;
  });
  const placeholderClass = common_vendor.computed(() => {
    const cls = [
      ns.e("placeholder"),
      ns.em("placeholder", props.textAlign)
    ];
    if (placeholderColorClass.value)
      cls.push(placeholderColorClass.value);
    return cls.join(" ");
  });
  const placeholderStyle = common_vendor.computed(() => {
    const style = {};
    if (!placeholderColorClass.value)
      style.color = placeholderColorStyle.value || "var(--tn-text-color-secondary)";
    return style;
  });
  const searchButtonClass = common_vendor.computed(() => {
    const cls = [ns.e("search-button")];
    if (searchButtonBgColorClass.value)
      cls.push(searchButtonBgColorClass.value);
    if (searchButtonTextColorClass.value)
      cls.push(searchButtonTextColorClass.value);
    return cls.join(" ");
  });
  const searchButtonStyle = common_vendor.computed(() => {
    const style = {};
    if (!searchButtonBgColorClass.value)
      style.backgroundColor = searchButtonBgColorStyle.value || "var(--tn-color-primary)";
    if (searchButtonTextColorStyle.value) {
      style.color = searchButtonTextColorStyle.value;
    } else if (!searchButtonBgColorClass.value && !searchButtonTextColorClass.value) {
      style.color = "var(--tn-color-white)";
    }
    return style;
  });
  return {
    ns,
    searchBoxClass,
    searchBoxStyle,
    placeholderClass,
    placeholderStyle,
    searchButtonClass,
    searchButtonStyle
  };
};
exports.useSearchBoxCustomStyle = useSearchBoxCustomStyle;
