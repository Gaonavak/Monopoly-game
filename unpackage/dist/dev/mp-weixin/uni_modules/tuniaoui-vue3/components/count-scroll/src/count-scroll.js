"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_countScroll_src_composables_countScrollCustom = require("./composables/count-scroll-custom.js");
const uni_modules_tuniaouiVue3_components_countScroll_src_composables_useCountScroll = require("./composables/use-count-scroll.js");
const countScrollProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 显示的值
   */
  value: {
    type: [String, Number],
    default: ""
  },
  /**
   * @description 文字颜色，以tn开头则使用图鸟内置的颜色
   */
  textColor: String,
  /**
   * @description 字体大小，默认单位 rpx
   */
  fontSize: String,
  /**
   * @description 小数点的分隔符
   */
  decimalSeparator: {
    type: String,
    default: "."
  },
  /**
   * @description 千分位的分隔符，如果不填写则为没有千分位
   */
  thousandsSeparator: {
    type: String,
    default: ","
  },
  /**
   * @description 动画执行时间，单位毫秒
   */
  duration: {
    type: Number,
    default: 1500
  }
});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "count-scroll",
  props: countScrollProps,
  setup(__props) {
    const props = __props;
    const { ns, countScrollClass, countScrollStyle, countScrollColumnStyle } = uni_modules_tuniaouiVue3_components_countScroll_src_composables_countScrollCustom.useCountScrollCustomStyle(props);
    const { columns, activeIndex } = uni_modules_tuniaouiVue3_components_countScroll_src_composables_useCountScroll.useCountScroll(props);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(columns), (item, index, i0) => {
          return {
            a: common_vendor.f(item, (listItem, listIndex, i1) => {
              return {
                a: common_vendor.t(listItem),
                b: listIndex
              };
            }),
            b: index,
            c: common_vendor.s(common_vendor.unref(countScrollColumnStyle)(common_vendor.unref(activeIndex)[index]))
          };
        }),
        b: common_vendor.n(common_vendor.unref(ns).em("column", "item")),
        c: common_vendor.n(common_vendor.unref(ns).e("column")),
        d: common_vendor.n(common_vendor.unref(ns).e("wrapper")),
        e: common_vendor.n(common_vendor.unref(countScrollClass)),
        f: common_vendor.s(common_vendor.unref(countScrollStyle))
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-781ff58d"]]);
wx.createComponent(Component);
