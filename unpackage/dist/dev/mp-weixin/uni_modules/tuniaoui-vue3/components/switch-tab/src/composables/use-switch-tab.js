"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const useSwitchTab = (props, emits) => {
  const tabClickEvent = (index) => {
    if (props.disabled)
      return;
    emits("update:modelValue", index);
    common_vendor.nextTick$1(() => {
      emits("change", index);
    });
  };
  return {
    tabClickEvent
  };
};
exports.useSwitchTab = useSwitchTab;
