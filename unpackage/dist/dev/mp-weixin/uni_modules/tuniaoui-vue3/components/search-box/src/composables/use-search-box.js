"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_libs_lodash_debounce = require("../../../../libs/lodash/debounce.js");
const uni_modules_tuniaouiVue3_libs_lodash_throttle = require("../../../../libs/lodash/throttle.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../../constants/event.js");
const useSearchBox = (props, emits) => {
  const showPlaceholder = common_vendor.ref(!props.modelValue);
  const inputValue = common_vendor.ref(props.modelValue);
  common_vendor.watch(
    () => props.modelValue,
    (val) => {
      if (props.modelValue === inputValue.value)
        return;
      inputValue.value = val;
      showPlaceholder.value = !val;
    }
  );
  const inputFocus = common_vendor.ref(false);
  if (props.focus) {
    showPlaceholder.value = false;
    common_vendor.nextTick$1(() => {
      inputFocus.value = true;
    });
  }
  const searchBoxClickEvent = () => {
    emits("click");
    if (props.disabled)
      return;
    showPlaceholder.value = false;
    inputFocus.value = true;
  };
  const inputFocusEvent = () => {
    emits("focus");
  };
  const inputBlurEvent = () => {
    showPlaceholder.value = !inputValue.value;
    inputFocus.value = false;
    emits("blur");
  };
  const inputHandle = () => {
    emits(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, inputValue.value);
    common_vendor.nextTick$1(() => {
      emits(uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT, inputValue.value);
      emits("input", inputValue.value);
    });
  };
  const inputValueEvent = props.throllte ? uni_modules_tuniaouiVue3_libs_lodash_throttle.throttle(inputHandle, props.throllteTime) : inputHandle;
  const clearClickEvent = () => {
    inputValue.value = "";
    emits(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, "");
    common_vendor.nextTick$1(() => {
      inputFocus.value = true;
      emits(uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT, "");
      emits("clear");
    });
  };
  const searchBtnClickEvent = uni_modules_tuniaouiVue3_libs_lodash_debounce.debounce(() => {
    if (props.disabled)
      return;
    emits("search", inputValue.value);
  }, 250);
  return {
    showPlaceholder,
    inputValue,
    inputFocus,
    searchBoxClickEvent,
    inputFocusEvent,
    inputBlurEvent,
    inputValueEvent,
    clearClickEvent,
    searchBtnClickEvent
  };
};
exports.useSearchBox = useSearchBox;
