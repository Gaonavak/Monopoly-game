"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const useBubbleBoxCustomStyle = (props, showBubble) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("bubble-box");
  const [bgColorClass, bgColorStyle] = uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(
    common_vendor.toRef(props, "bgColor"),
    "bg"
  );
  const [borderColorClass, borderColorStyle] = uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(
    common_vendor.toRef(props, "bgColor"),
    "border"
  );
  const optionsClass = common_vendor.computed(() => {
    const cls = [
      ns.e("options"),
      ns.em("options", props.position),
      ns.is("show", showBubble.value)
    ];
    if (bgColorClass.value)
      cls.push(bgColorClass.value);
    return cls.join(" ");
  });
  const optionsStyle = common_vendor.computed(() => {
    const style = {};
    if (!bgColorClass.value)
      style.backgroundColor = bgColorStyle.value || "var(--tn-color-white)";
    if (props.zIndex)
      style.zIndex = props.zIndex;
    if (props.width)
      style.width = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.width);
    if (props.height)
      style.height = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.height);
    return style;
  });
  const optionsAuxiliaryElementClass = common_vendor.computed(() => {
    const cls = ["auxiliary-element"];
    if (borderColorClass.value)
      cls.push(borderColorClass.value);
    return cls.join(" ");
  });
  const optionsAuxiliaryElementStyle = common_vendor.computed(() => {
    const style = {};
    if (!borderColorClass.value)
      style.borderColor = borderColorStyle.value || "var(--tn-color-white)";
    if (props.position === "top") {
      style.borderRightColor = "transparent";
      style.borderBottomColor = "transparent";
      style.borderLeftColor = "transparent";
    }
    if (props.position === "right") {
      style.borderTopColor = "transparent";
      style.borderBottomColor = "transparent";
      style.borderLeftColor = "transparent";
    }
    if (props.position === "bottom") {
      style.borderTopColor = "transparent";
      style.borderRightColor = "transparent";
      style.borderLeftColor = "transparent";
    }
    if (props.position === "left") {
      style.borderTopColor = "transparent";
      style.borderRightColor = "transparent";
      style.borderBottomColor = "transparent";
    }
    return style;
  });
  const optionItemClass = common_vendor.computed(() => {
    return (item) => {
      const cls = [
        ns.e("option-item"),
        ns.is("disabled", item.disabled)
      ];
      if (item.color.class)
        cls.push(item.color.class);
      return cls.join(" ");
    };
  });
  const optionItemStyle = common_vendor.computed(() => {
    return (item) => {
      const style = {};
      if (!item.color.class)
        style.color = item.color.style || "var(--tn-text-color-primary)";
      if (props.optionItemPadding)
        style.padding = props.optionItemPadding;
      return style;
    };
  });
  return {
    ns,
    optionsClass,
    optionsStyle,
    optionsAuxiliaryElementClass,
    optionsAuxiliaryElementStyle,
    optionItemClass,
    optionItemStyle
  };
};
exports.useBubbleBoxCustomStyle = useBubbleBoxCustomStyle;
