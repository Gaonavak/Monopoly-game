"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_libs_lodash_trim = require("../../../../libs/lodash/trim.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../../constants/event.js");
const uni_modules_tuniaouiVue3_utils_isEmpty = require("../../../../utils/is-empty.js");
const uni_modules_tuniaouiVue3_utils_vue_icon = require("../../../../utils/vue/icon.js");
const uni_modules_tuniaouiVue3_utils_error = require("../../../../utils/error.js");
const uni_modules_tuniaouiVue3_hooks_useToggle_index = require("../../../../hooks/use-toggle/index.js");
require("../../../../hooks/use-z-index/index.js");
require("../../../form/index.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_useFormItem = require("../../../form/src/composables/use-form-item.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_useFormCommonProps = require("../../../form/src/composables/use-form-common-props.js");
const useInput = (props, emits) => {
  const { form, formItem } = uni_modules_tuniaouiVue3_components_form_src_composables_useFormItem.useFormItem();
  const inputText = common_vendor.ref(String(props.modelValue ?? ""));
  common_vendor.watch(
    () => props.modelValue,
    (val) => {
      var _a;
      inputText.value = String(val ?? "");
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "change").catch((err) => {
          uni_modules_tuniaouiVue3_utils_error.debugWarn(err);
        });
      }
    }
  );
  const [passwordVisible, togglePasswordVisible] = uni_modules_tuniaouiVue3_hooks_useToggle_index.useToggle(false);
  const needStatusIcon = common_vendor.computed(
    () => uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(form == null ? void 0 : form.statusIcon, false)
  );
  const validateState = common_vendor.computed(
    () => uni_modules_tuniaouiVue3_utils_isEmpty.isEmptyVariableInDefault(
      formItem == null ? void 0 : formItem.validateState,
      ""
    )
  );
  const validateIcon = common_vendor.computed(
    () => validateState.value && uni_modules_tuniaouiVue3_utils_vue_icon.FormValidateIconsMap[validateState.value]
  );
  const passwordIcon = common_vendor.computed(
    () => passwordVisible.value ? "eye-hide" : "eye"
  );
  const showIcon = common_vendor.computed(() => {
    let status = false;
    if (validateState.value && needStatusIcon.value && validateIcon.value)
      status = true;
    if (props.showPassword)
      status = true;
    if (props.rightIcon)
      status = true;
    if (props.clearable)
      status = true;
    return status;
  });
  const disabled = uni_modules_tuniaouiVue3_components_form_src_composables_useFormCommonProps.useFormDisabled(props.disabled);
  const showWordLimit = common_vendor.computed(
    () => props.type === "textarea" && !!(props == null ? void 0 : props.maxlength) && !!(props == null ? void 0 : props.showWordLimit)
  );
  const currentWordCount = common_vendor.computed(() => {
    var _a;
    if (props.showWordLimit && props.type === "textarea") {
      return ((_a = inputText.value) == null ? void 0 : _a.length) || 0;
    }
    return 0;
  });
  const inputInputEvent = (event) => {
    const { value } = event.detail;
    _updateInputText(value);
  };
  const inputFocusEvent = (event) => {
    emits("focus", event);
  };
  const inputBlurEvent = (event) => {
    var _a;
    emits("blur", event);
    if (props.validateEvent) {
      (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "blur").catch((err) => {
        uni_modules_tuniaouiVue3_utils_error.debugWarn(err);
      });
    }
  };
  const confirmEvent = (event) => {
    const { value } = event.detail;
    emits("confirm", _formatInputText(value));
  };
  const clearClickEvent = () => {
    if (disabled.value)
      return;
    _updateInputText("");
    emits("clear");
  };
  const _updateInputText = (value) => {
    value = props.trim ? uni_modules_tuniaouiVue3_libs_lodash_trim.trim(value) : value;
    emits(uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT, _formatInputText(value));
    common_vendor.nextTick$1(() => {
      emits(uni_modules_tuniaouiVue3_constants_event.INPUT_EVENT, _formatInputText(value));
      emits(uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT, _formatInputText(value));
    });
  };
  const inputClickEvent = () => {
    if (props.type === "select") {
      emits("click");
    }
  };
  const _formatInputText = (value) => {
    if (value === "")
      return "";
    if (props.type === "number" || props.type === "digit")
      return Number.parseFloat(value);
    return value;
  };
  return {
    inputText,
    needStatusIcon,
    validateState,
    validateIcon,
    passwordVisible,
    passwordIcon,
    showIcon,
    disabled,
    showWordLimit,
    currentWordCount,
    togglePasswordVisible,
    inputInputEvent,
    inputFocusEvent,
    inputBlurEvent,
    clearClickEvent,
    confirmEvent,
    inputClickEvent
  };
};
exports.useInput = useInput;
