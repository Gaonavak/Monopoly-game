"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_tokens_tabs = require("../../../../tokens/tabs.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const useTabsItemCustomStyle = (props, isActive) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("tabs-item");
  const tabsContext = common_vendor.inject(uni_modules_tuniaouiVue3_tokens_tabs.tabsContextKey);
  const normalColor = common_vendor.computed(
    () => props.color || (tabsContext == null ? void 0 : tabsContext.color)
  );
  const activeColor = common_vendor.computed(
    () => props.activeColor || (tabsContext == null ? void 0 : tabsContext.activeColor)
  );
  const activeBold = common_vendor.computed(
    () => uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(tabsContext == null ? void 0 : tabsContext.activeBold, true)
  );
  const activeFontSize = common_vendor.computed(
    () => props.activeFontSize || (tabsContext == null ? void 0 : tabsContext.activeFontSize)
  );
  const [textColorClass, textColorStyle] = uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(
    normalColor,
    "text"
  );
  const [activeTextColorClass, activeTextColorStyle] = uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(
    activeColor,
    "text"
  );
  const tabsItemClass = common_vendor.computed(() => {
    const cls = [ns.b()];
    if (isActive.value) {
      if (activeTextColorClass.value) {
        cls.push(activeTextColorClass.value);
      }
      if (activeBold.value) {
        cls.push(ns.m("bold"));
      }
    } else {
      if (textColorClass.value) {
        cls.push(textColorClass.value);
      }
    }
    if (tabsContext == null ? void 0 : tabsContext.scroll)
      cls.push(ns.m("scroll"));
    if (!(tabsContext == null ? void 0 : tabsContext.showBar))
      cls.push(ns.is("no-bar"));
    return cls.join(" ");
  });
  const tabsItemStyle = common_vendor.computed(() => {
    const style = {};
    if (props.fontSize || (tabsContext == null ? void 0 : tabsContext.fontSize)) {
      style.fontSize = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(
        props.fontSize || (tabsContext == null ? void 0 : tabsContext.fontSize) || ""
      );
    }
    if (isActive.value) {
      if (!activeTextColorClass.value) {
        style.color = activeTextColorStyle.value || "var(--tn-color-primary)";
      }
      if (activeFontSize.value) {
        style.fontSize = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(activeFontSize.value);
      }
    } else {
      if (!textColorClass.value) {
        style.color = textColorStyle.value || "var(--tn-text-color-primary)";
      }
    }
    return style;
  });
  return {
    ns,
    tabsItemClass,
    tabsItemStyle
  };
};
exports.useTabsItemCustomStyle = useTabsItemCustomStyle;
