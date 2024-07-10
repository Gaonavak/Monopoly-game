"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../../libs/lodash/is-number.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_base_commonProps_subsection_index = require("../../base/common-props/subsection/index.js");
const uni_modules_tuniaouiVue3_components_subsection_src_composables_subsectionCustom = require("./composables/subsection-custom.js");
require("../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_subsection_src_composables_useSubsection = require("./composables/use-subsection.js");
const subsectionMode = ["default", "button"];
const subsectionProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  ...uni_modules_tuniaouiVue3_components_base_commonProps_subsection_index.subsectionBaseProps,
  /**
   * @description 当前选中item索引的绑定值
   */
  modelValue: {
    type: Number,
    default: 0
  },
  /**
   * @description 模式，`default`为默认模式，`button`为按钮模式
   */
  mode: {
    type: String,
    values: subsectionMode,
    default: "default"
  },
  /**
   * @description 尺寸，默认可以设置 `sm`、`lg`、`xl`，也可以传入指定的尺寸设置字体的尺寸大小
   */
  size: String,
  /**
   * @description 圆角的值，只作用在最外层的两个选择器上，默认单位 `rpx`
   */
  radius: {
    type: String,
    default: "8"
  }
});
const subsectionEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (index) => uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(index),
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (index) => uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(index)
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "subsection",
  props: subsectionProps,
  emits: subsectionEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { componentId, activeColor, sliderRectInfo } = uni_modules_tuniaouiVue3_components_subsection_src_composables_useSubsection.useSubsection(props, emits);
    const {
      ns,
      subsectionClass,
      subsectionStyle,
      subsectionSliderClass,
      subsectionSliderStyle
    } = uni_modules_tuniaouiVue3_components_subsection_src_composables_subsectionCustom.useSubsectionCustomStyle(props, activeColor, sliderRectInfo);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.n(common_vendor.unref(subsectionSliderClass)),
        b: common_vendor.s(common_vendor.unref(subsectionSliderStyle)),
        c: common_vendor.n(common_vendor.unref(ns).e("content")),
        d: common_vendor.unref(componentId),
        e: common_vendor.n(common_vendor.unref(subsectionClass)),
        f: common_vendor.s(common_vendor.unref(subsectionStyle))
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4288fe58"]]);
wx.createComponent(Component);
