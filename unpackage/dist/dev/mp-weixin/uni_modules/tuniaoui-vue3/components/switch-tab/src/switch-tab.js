"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../../libs/lodash/is-number.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_switchTab_src_composables_switchTabCustom = require("./composables/switch-tab-custom.js");
const uni_modules_tuniaouiVue3_components_switchTab_src_composables_useSwitchTab = require("./composables/use-switch-tab.js");
const switchTabProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 当前激活的标签索引
   */
  modelValue: {
    type: Number,
    default: 0
  },
  /**
   * @description 标签列表
   */
  tabs: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Array),
    default: () => []
  },
  /**
   * @description 是否禁用
   */
  disabled: Boolean,
  /**
   * @description 未选中时标签的背景颜色，以tn开头使用图鸟内置的颜色
   */
  inactiveBgColor: String,
  /**
   * @description 选中时标签的背景颜色，以tn开头使用图鸟内置的颜色
   */
  activeBgColor: String,
  /**
   * @description 未选中时标签的字体颜色，以tn开头使用图鸟内置的颜色
   */
  inactiveTextColor: String,
  /**
   * @description 选中时标签的字体颜色，以tn开头使用图鸟内置的颜色
   */
  activeTextColor: String
});
const switchTabEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (value) => uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value),
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (value) => uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(value)
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "switch-tab",
  props: switchTabProps,
  emits: switchTabEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { tabClickEvent } = uni_modules_tuniaouiVue3_components_switchTab_src_composables_useSwitchTab.useSwitchTab(props, emits);
    const { ns, tabClass, tabStyle, switchTabClass, switchTabStyle } = uni_modules_tuniaouiVue3_components_switchTab_src_composables_switchTabCustom.useSwitchTabCustomStyle(props);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(_ctx.tabs, (tabItem, tabIndex, i0) => {
          return {
            a: common_vendor.t(tabItem),
            b: tabIndex,
            c: common_vendor.n(common_vendor.unref(tabClass)(tabIndex)),
            d: common_vendor.s(common_vendor.unref(tabStyle)(tabIndex)),
            e: common_vendor.o(($event) => common_vendor.unref(tabClickEvent)(tabIndex), tabIndex)
          };
        }),
        b: common_vendor.n(common_vendor.unref(ns).e("tabs")),
        c: common_vendor.n(common_vendor.unref(ns).e("content")),
        d: common_vendor.n(common_vendor.unref(switchTabClass)),
        e: common_vendor.s(common_vendor.unref(switchTabStyle))
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d709ea0c"]]);
wx.createComponent(Component);
