"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_base_commonProps_progress_index = require("../../base/common-props/progress/index.js");
const uni_modules_tuniaouiVue3_components_circleProgress_src_composables_useCircleProgress = require("./composables/use-circle-progress.js");
const circleProgressProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  ...uni_modules_tuniaouiVue3_components_base_commonProps_progress_index.propgressBaseProps,
  /**
   * @description 圆环的半径，单位 px，只支持传递固定的值
   */
  radius: {
    type: Number,
    default: 50
  },
  /**
   * @description 圆环的宽度，单位 px，只支持传递固定的值
   */
  ringWidth: {
    type: Number,
    default: 7
  }
});
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "circle-progress",
  props: circleProgressProps,
  setup(__props) {
    const props = __props;
    const { ns, canvasId, radius, activeCircleColor } = uni_modules_tuniaouiVue3_components_circleProgress_src_composables_useCircleProgress.useCircleProgress(props);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(canvasId),
        b: common_vendor.n(common_vendor.unref(ns).e("canvas")),
        c: common_vendor.unref(canvasId),
        d: _ctx.showPercent || _ctx.$slots.default
      }, _ctx.showPercent || _ctx.$slots.default ? {
        e: common_vendor.t(_ctx.percent),
        f: common_vendor.n(common_vendor.unref(ns).e("precent-value"))
      } : {}, {
        g: common_vendor.n(common_vendor.unref(ns).b()),
        h: `${common_vendor.unref(radius) * 2}px`,
        i: `${common_vendor.unref(radius) * 2}px`,
        j: common_vendor.unref(activeCircleColor)
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d97cdf0a"]]);
wx.createComponent(Component);
