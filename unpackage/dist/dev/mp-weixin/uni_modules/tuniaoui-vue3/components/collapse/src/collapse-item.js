"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_collapse_src_composables_collapseItemCustom = require("./composables/collapse-item-custom.js");
require("../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_collapse_src_composables_useCollapseItem = require("./composables/use-collapse-item.js");
const collapseItemProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description CollapseItem标题
   */
  title: String,
  /**
   * @description CollapseItem是否禁用
   */
  disabled: Boolean
});
if (!Math) {
  TnIcon();
}
const TnIcon = () => "../../icon/src/icon.js";
const __default__ = {
  options: {
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...__default__,
  __name: "collapse-item",
  props: collapseItemProps,
  setup(__props) {
    const props = __props;
    const {
      componentContentId,
      showArrow,
      isActive,
      componentHeight,
      collapseItemClick
    } = uni_modules_tuniaouiVue3_components_collapse_src_composables_useCollapseItem.useCollapseItem(props);
    const { ns, arrowClass, arrowStyle } = uni_modules_tuniaouiVue3_components_collapse_src_composables_collapseItemCustom.useCollapseItemCustomStyle();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(_ctx.title),
        b: common_vendor.unref(showArrow)
      }, common_vendor.unref(showArrow) ? {
        c: common_vendor.p({
          name: "right"
        }),
        d: common_vendor.n(common_vendor.unref(arrowClass)),
        e: common_vendor.s(common_vendor.unref(arrowStyle))
      } : {}, {
        f: common_vendor.n(common_vendor.unref(ns).e("title")),
        g: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(collapseItemClick) && common_vendor.unref(collapseItemClick)(...args)
        ),
        h: common_vendor.unref(componentContentId),
        i: common_vendor.n(common_vendor.unref(ns).e("content")),
        j: common_vendor.n(common_vendor.unref(ns).b()),
        k: common_vendor.n(common_vendor.unref(ns).is("active", common_vendor.unref(isActive))),
        l: common_vendor.n(common_vendor.unref(ns).is("disabled", _ctx.disabled)),
        m: common_vendor.unref(componentHeight)
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d162cb3c"], ["__file", "D:/Work/小程序开发工具/G/uni_modules/tuniaoui-vue3/components/collapse/src/collapse-item.vue"]]);
wx.createComponent(Component);
