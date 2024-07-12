"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
require("../../../../hooks/use-z-index/index.js");
const useBubbleOptions = (props) => {
  const bubbleOptions = common_vendor.computed(() => {
    return props.options.map((item) => {
      const textColor = common_vendor.ref(
        uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyDoubleVariableInDefault(item.textColor, props.textColor)
      );
      const [textColorClass, textColorStyle] = uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(
        textColor,
        "text"
      );
      return {
        text: item.text || "",
        icon: (item == null ? void 0 : item.icon) || "",
        disabled: props.disabled || item.disabled || false,
        color: {
          class: textColorClass.value,
          style: textColorStyle.value
        }
      };
    });
  });
  return {
    bubbleOptions
  };
};
exports.useBubbleOptions = useBubbleOptions;
