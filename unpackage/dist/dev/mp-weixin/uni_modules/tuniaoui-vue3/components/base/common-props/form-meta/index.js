"use strict";
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../../utils/vue/props/runtime.js");
require("../../../../libs/lodash/_baseToString.js");
require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_constants_size = require("../../../../constants/size.js");
const formMetaProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 设置表单下组件的尺寸
   */
  size: {
    type: String,
    values: uni_modules_tuniaouiVue3_constants_size.formComponentSizes
  },
  /**
   * @description 是否禁用表单内的所有组件，优先级比组件自身的禁用属性高
   */
  disabled: Boolean
});
exports.formMetaProps = formMetaProps;
