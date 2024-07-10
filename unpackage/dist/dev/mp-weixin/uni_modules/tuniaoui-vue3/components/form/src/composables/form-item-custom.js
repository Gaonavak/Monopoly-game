"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_tokens_form = require("../../../../tokens/form.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
const uni_modules_tuniaouiVue3_utils_rand = require("../../../../utils/rand.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index = require("../../../../hooks/use-selector-query/index.js");
require("../../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_form_src_composables_useFormCommonProps = require("./use-form-common-props.js");
const useFormItemCustomStyle = (props, hasLabel, isRequired) => {
  const form = common_vendor.inject(uni_modules_tuniaouiVue3_tokens_form.formContextKey, void 0);
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("form-item");
  const size = uni_modules_tuniaouiVue3_components_form_src_composables_useFormCommonProps.useFormSize(void 0, { formItem: false });
  const { getSelectorNodeInfo } = uni_modules_tuniaouiVue3_hooks_useSelectorQuery_index.useSelectorQuery();
  const labelWidth = common_vendor.computed(
    () => uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.labelWidth || (form == null ? void 0 : form.labelWidth) || "")
  );
  const labelPosition = common_vendor.computed(
    () => props.labelPosition || (form == null ? void 0 : form.labelPosition) || "right"
  );
  const hideRequiredAsterisk = common_vendor.computed(
    () => (form == null ? void 0 : form.hideRequiredAsterisk) || false
  );
  const requireAsteriskPosition = common_vendor.computed(
    () => (form == null ? void 0 : form.requireAsteriskPosition) || "left"
  );
  const labelContainerWidth = common_vendor.ref(0);
  const labelId = `label-${uni_modules_tuniaouiVue3_utils_rand.generateId()}`;
  const initLabelContainerWidth = () => {
    if (!hasLabel.value)
      return;
    getSelectorNodeInfo(`#${labelId}`).then((res) => {
      labelContainerWidth.value = (res == null ? void 0 : res.width) || 0;
    });
  };
  const formItemClass = common_vendor.computed(() => {
    const cls = [ns.b()];
    if (size.value)
      cls.push(ns.m(size.value));
    if (labelPosition.value)
      cls.push(ns.m(`label-${labelPosition.value}`));
    return cls.join(" ");
  });
  const formItemLabelClass = common_vendor.computed(() => {
    const cls = [ns.e("label")];
    if (!hideRequiredAsterisk.value && isRequired.value) {
      cls.push(
        ns.em("label", "required"),
        ns.em("label", `asterisk-${requireAsteriskPosition.value}`)
      );
    }
    return cls.join(" ");
  });
  const formItemLabelStyle = common_vendor.computed(() => {
    const style = {};
    if (labelPosition.value !== "top" && labelWidth.value)
      style.width = labelWidth.value;
    return style;
  });
  const formItemErrorMessageStyle = common_vendor.computed(() => {
    const style = {};
    if (labelPosition.value !== "top" && hasLabel.value) {
      style.paddingLeft = `${labelContainerWidth.value}px`;
    }
    return style;
  });
  return {
    ns,
    labelId,
    formItemClass,
    formItemLabelClass,
    formItemLabelStyle,
    formItemErrorMessageStyle,
    initLabelContainerWidth
  };
};
exports.useFormItemCustomStyle = useFormItemCustomStyle;
