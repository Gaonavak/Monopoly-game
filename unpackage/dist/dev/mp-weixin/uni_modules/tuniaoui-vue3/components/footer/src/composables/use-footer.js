"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
require("../../../../libs/lodash/_baseToString.js");
require("../../../../hooks/use-z-index/index.js");
const useFooter = (props, emits) => {
  const navigatorData = common_vendor.computed(() => {
    return props.navigator.map((nav) => {
      const textColor = common_vendor.ref(
        uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyDoubleVariableInDefault(nav.textColor, props.navigatorTextColor)
      );
      const [textColorClass, textColorStyle] = uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(
        textColor,
        "text"
      );
      return {
        title: nav.title || "",
        url: (nav == null ? void 0 : nav.url) || "",
        color: {
          class: textColorClass.value,
          style: textColorStyle.value
        }
      };
    });
  });
  const footerClickEvent = () => {
    emits("click");
  };
  const navigatorClickEvent = (item) => {
    emits("navigatorClick", item);
  };
  return {
    navigatorData,
    footerClickEvent,
    navigatorClickEvent
  };
};
exports.useFooter = useFooter;
