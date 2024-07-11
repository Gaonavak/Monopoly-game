"use strict";
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../../utils/vue/props/runtime.js");
require("../../../../libs/lodash/_baseToString.js");
require("../../../../../../common/vendor.js");
const propgressBaseProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 当前进度百分比
   */
  percent: {
    type: Number,
    default: 0
  },
  /**
   * @description 激活时的颜色，以tn开头则使用图鸟内置的颜色，在为圆环进度条是无法使用内置的颜色
   */
  activeColor: String,
  /**
   * @description 未激活时的颜色，以tn开头则使用图鸟内置的颜色，在为圆环进度条是无法使用内置的颜色
   */
  inactiveColor: String,
  /**
   * @description 显示当前进度
   */
  showPercent: Boolean,
  /**
   * @description 动画执行时间，单位ms
   */
  duration: {
    type: Number,
    default: 1500
  }
});
exports.propgressBaseProps = propgressBaseProps;
