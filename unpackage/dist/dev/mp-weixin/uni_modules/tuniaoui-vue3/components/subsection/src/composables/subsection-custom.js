"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentSize_index = require("../../../../hooks/use-component-size/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const useSubsectionCustomStyle = (props, activeColor, sliderRectInfo) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("subsection");
  const [activeBgColorClass, activeBgColorStyle, updateActiveBgColor] = uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(activeColor, "bg");
  const [activeBorderColorClass, activeBorderColorStyle] = uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(
    common_vendor.toRef(props, "activeColor"),
    "border"
  );
  common_vendor.watch(
    () => activeColor.value,
    (val) => {
      updateActiveBgColor(val);
    }
  );
  const { sizeType } = uni_modules_tuniaouiVue3_hooks_useComponentSize_index.useComponentSize(props.size);
  const subsectionClass = common_vendor.computed(() => {
    const cls = [ns.b(), ns.m(props.mode)];
    if (props.size && sizeType.value === "inner")
      cls.push(ns.m(props.size));
    if (props.mode === "default") {
      if (activeBorderColorClass.value)
        cls.push(activeBorderColorClass.value);
    }
    return cls.join(" ");
  });
  const subsectionStyle = common_vendor.computed(() => {
    const style = {};
    if (props.mode === "button") {
      style.backgroundColor = "var(--tn-color-gray-light)";
    }
    if (props.mode === "default") {
      if (!activeBorderColorClass.value)
        style.borderColor = activeBorderColorStyle.value || "var(--tn-color-primary)";
    }
    if (props.size && sizeType.value === "custom")
      style.fontSize = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.size);
    if (props.radius) {
      style.borderRadius = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.radius);
    }
    return style;
  });
  const subsectionSliderClass = common_vendor.computed(() => {
    const cls = [ns.e("slider"), props.mode];
    if (props.mode === "default") {
      if (activeBgColorClass.value)
        cls.push(activeBgColorClass.value);
    }
    return cls.join(" ");
  });
  const subsectionSliderStyle = common_vendor.computed(() => {
    const style = {};
    if (props.mode === "default") {
      if (!activeBgColorClass.value)
        style.backgroundColor = activeBgColorStyle.value || "var(--tn-color-primary)";
    } else {
      style.backgroundColor = "var(--tn-color-white)";
    }
    if (sliderRectInfo.value) {
      style.left = `${sliderRectInfo.value.left}px`;
      style.width = `${sliderRectInfo.value.width}px`;
    }
    return style;
  });
  return {
    ns,
    subsectionClass,
    subsectionStyle,
    subsectionSliderClass,
    subsectionSliderStyle
  };
};
exports.useSubsectionCustomStyle = useSubsectionCustomStyle;
