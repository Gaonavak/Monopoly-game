"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../libs/lodash/_baseToString.js");
require("../../../../hooks/use-z-index/index.js");
const useSwitchTabCustomStyle = (props) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("switch-tab");
  const [inactiveBgColorClass, inactiveBgColorStyle] = uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(
    common_vendor.toRef(props, "inactiveBgColor"),
    "bg"
  );
  const [activeBgColorClass, activeBgColorStyle] = uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(
    common_vendor.toRef(props, "activeBgColor"),
    "bg"
  );
  const [inactiveTextColorClass, inactiveTextColorStyle] = uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(
    common_vendor.toRef(props, "inactiveTextColor"),
    "text"
  );
  const [activeTextColorClass, activeTextColorStyle] = uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(
    common_vendor.toRef(props, "activeTextColor"),
    "text"
  );
  const switchTabClass = common_vendor.computed(() => {
    const cls = [ns.b()];
    if (activeBgColorClass.value)
      cls.push(activeBgColorClass.value);
    return cls.join(" ");
  });
  const switchTabStyle = common_vendor.computed(() => {
    const style = {};
    if (!activeBgColorClass.value) {
      style.backgroundColor = activeBgColorStyle.value || "var(--tn-color-white)";
    }
    return style;
  });
  const tabClass = common_vendor.computed(() => {
    return (index) => {
      const cls = [
        ns.e("tab"),
        ns.is("active", index === props.modelValue)
      ];
      if (index === props.modelValue) {
        if (activeBgColorClass.value)
          cls.push(activeBgColorClass.value);
        if (activeTextColorClass.value)
          cls.push(activeTextColorClass.value);
      } else {
        if (inactiveBgColorClass.value)
          cls.push(inactiveBgColorClass.value);
        if (inactiveTextColorClass.value)
          cls.push(inactiveTextColorClass.value);
      }
      return cls.join(" ");
    };
  });
  const tabStyle = common_vendor.computed(() => {
    return (index) => {
      const style = {};
      if (index === props.modelValue) {
        if (!activeBgColorClass.value) {
          style.backgroundColor = activeBgColorStyle.value || "var(--tn-color-white)";
        }
        if (activeTextColorStyle.value) {
          style.color = activeTextColorStyle.value;
        } else if (!activeTextColorClass.value && !activeBgColorClass.value) {
          style.color = "var(--tn-text-color-primary)";
        }
      } else {
        if (!inactiveBgColorClass.value) {
          style.backgroundColor = inactiveBgColorStyle.value || "var(--tn-color-primary-light-7)";
        }
        if (inactiveTextColorStyle.value) {
          style.color = inactiveTextColorStyle.value;
        } else if (!inactiveTextColorClass.value && !inactiveBgColorClass.value) {
          style.color = "var(--tn-text-color-primary)";
        }
        if (index === props.modelValue - 1) {
          style.borderBottomRightRadius = "30rpx";
        }
        if (index === props.modelValue + 1) {
          style.borderBottomLeftRadius = "30rpx";
        }
      }
      return style;
    };
  });
  return {
    ns,
    tabClass,
    tabStyle,
    switchTabClass,
    switchTabStyle
  };
};
exports.useSwitchTabCustomStyle = useSwitchTabCustomStyle;
