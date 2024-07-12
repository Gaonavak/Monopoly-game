"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const useBubbleBox = (props, emits) => {
  const showBubble = common_vendor.ref(false);
  const openBubbleOptions = () => {
    emits("open");
    showBubble.value = true;
  };
  const closeBubbleOptions = () => {
    emits("close");
    showBubble.value = false;
  };
  const bubbleOptionClickEvent = (item, index) => {
    if (props.disabled || item.disabled)
      return;
    emits("click", index);
    if (props.autoClose)
      closeBubbleOptions();
  };
  return {
    showBubble,
    openBubbleOptions,
    closeBubbleOptions,
    bubbleOptionClickEvent
  };
};
exports.useBubbleBox = useBubbleBox;
