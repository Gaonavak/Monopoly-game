"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../utils/dom/unit.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../../libs/lodash/is-number.js");
const uni_modules_tuniaouiVue3_components_base_commonProps_tabs_index = require("../../base/common-props/tabs/index.js");
const uni_modules_tuniaouiVue3_components_tabs_src_composables_tabsCustom = require("./composables/tabs-custom.js");
require("../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_tabs_src_composables_useTabs = require("./composables/use-tabs.js");
const tabsProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  ...uni_modules_tuniaouiVue3_components_base_commonProps_tabs_index.tabsBaseProps,
  /**
   * @description tabs绑定的值，与tabsItem name属性对应值，如果tabsItem没有设置name，则默认为索引值
   */
  modelValue: {
    type: [String, Number],
    default: 0
  },
  /**
   * @description tabs高度
   */
  height: {
    type: String,
    default: "80rpx"
  },
  /**
   * @description 滑块的宽度
   */
  barWidth: {
    type: String,
    default: "40rpx"
  },
  /**
   * @description 背景颜色，以tn开头时使用图鸟内置的颜色
   */
  bgColor: String,
  /**
   * @description bar滑块颜色，以tn开头时使用图鸟内置的颜色
   */
  barColor: String,
  /**
   * @description 显示底部阴影
   */
  bottomShadow: {
    type: Boolean,
    default: true
  },
  /**
   * @description 是否可以滚动
   */
  scroll: {
    type: Boolean,
    default: true
  },
  /**
   * @description 是否显示滑块
   */
  bar: {
    type: Boolean,
    default: true
  },
  /**
   * @description 选中后的字体是否加粗
   */
  activeBold: {
    type: Boolean,
    default: true
  },
  /**
   * @description 距离顶部的距离，默认单位 px
   */
  offsetTop: {
    type: Number,
    default: 0
  },
  /**
   * @description 切换前回调
   */
  beforeSwitch: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Function)
  }
});
const tabsEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (val) => common_vendor.isString(val) || uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(val),
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (val) => common_vendor.isString(val) || uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(val)
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tabs",
  props: tabsProps,
  emits: tabsEmits,
  setup(__props) {
    const props = __props;
    const {
      tabItems,
      componentId,
      barComponentId,
      barOffsetLeft,
      scrollLeft,
      showBar
    } = uni_modules_tuniaouiVue3_components_tabs_src_composables_useTabs.useTabs(props);
    const { ns, tabsClass, tabsStyle, barClass, barStyle } = uni_modules_tuniaouiVue3_components_tabs_src_composables_tabsCustom.useTabsCustomStyle(props);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: _ctx.offsetTop
      }, _ctx.offsetTop ? {
        b: common_vendor.n(common_vendor.unref(ns).e("top-placeholder")),
        c: `${_ctx.offsetTop}px`
      } : {}, {
        d: _ctx.bar || _ctx.$slots.bar
      }, _ctx.bar || _ctx.$slots.bar ? {
        e: common_vendor.n(common_vendor.unref(barClass)),
        f: common_vendor.s(common_vendor.unref(barStyle)),
        g: common_vendor.unref(barComponentId),
        h: common_vendor.n(common_vendor.unref(ns).e("bar-container")),
        i: `${common_vendor.unref(barOffsetLeft)}px`,
        j: `${common_vendor.unref(barOffsetLeft) && common_vendor.unref(tabItems).length ? 1 : 0}`
      } : {}, {
        k: common_vendor.n(common_vendor.unref(ns).e("container")),
        l: common_vendor.n(common_vendor.unref(ns).is("scroll", _ctx.scroll)),
        m: common_vendor.n(common_vendor.unref(ns).is("no-bar", !common_vendor.unref(showBar))),
        n: common_vendor.n(common_vendor.unref(ns).e("scroll-view")),
        o: common_vendor.unref(uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue)(_ctx.height || "100%"),
        p: _ctx.scroll,
        q: common_vendor.unref(scrollLeft),
        r: common_vendor.unref(componentId),
        s: common_vendor.n(common_vendor.unref(tabsClass)),
        t: common_vendor.s(common_vendor.unref(tabsStyle))
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a893780c"]]);
wx.createComponent(Component);
