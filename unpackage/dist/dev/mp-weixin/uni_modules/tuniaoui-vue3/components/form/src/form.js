"use strict";
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isBoolean = require("../../../libs/lodash/is-boolean.js");
const common_vendor = require("../../../../../common/vendor.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_base_commonProps_formMeta_index = require("../../base/common-props/form-meta/index.js");
const formProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  ...uni_modules_tuniaouiVue3_components_base_commonProps_formMeta_index.formMetaProps,
  /**
   * @description 表单数据对象
   */
  model: Object,
  /**
   * @description 表单校验规则
   */
  rules: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType([Object, Array])
  },
  /**
   * @description label标签位置
   */
  labelPosition: {
    type: String,
    values: ["left", "right", "top"],
    default: "right"
  },
  /**
   * @description 必填星号显示位置
   */
  requireAsteriskPosition: {
    type: String,
    values: ["left", "right"],
    default: "left"
  },
  /**
   * @description label的宽度，默认单位为rpx，支持传入数字、带单位的数值和auto
   */
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  /**
   * @description 表单域标签的后缀
   */
  labelSuffix: {
    type: String,
    default: ""
  },
  /**
   * @description 是否在输入框中显示校验结果反馈图标
   */
  statusIcon: Boolean,
  /**
   * @description 是否显示校验结果
   */
  showMessage: {
    type: Boolean,
    default: true
  },
  /**
   * @description 是否在校验规则修改后立马触发一次校验
   */
  validateOnRuleChange: {
    type: Boolean,
    default: true
  },
  /**
   * @description 是否隐藏必填星号
   */
  hideRequiredAsterisk: Boolean
});
const formEmits = {
  validate: (prop, isValid, message) => (common_vendor.isArray(prop) || common_vendor.isString(prop)) && uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(isValid) && common_vendor.isString(message)
};
exports.formEmits = formEmits;
exports.formProps = formProps;
