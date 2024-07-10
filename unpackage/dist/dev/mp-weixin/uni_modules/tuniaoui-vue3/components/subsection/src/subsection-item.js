"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_base_commonProps_subsection_index = require("../../base/common-props/subsection/index.js");
require("../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_subsection_src_composables_subsectionItemCustom = require("./composables/subsection-item-custom.js");
const uni_modules_tuniaouiVue3_components_subsection_src_composables_useSubsectionItem = require("./composables/use-subsection-item.js");
const subsectionItemProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  ...uni_modules_tuniaouiVue3_components_base_commonProps_subsection_index.subsectionBaseProps,
  /**
   * @description 标题
   */
  title: String
});
const subsectionItemEmits = {
  /**
   * @description 点击事件
   */
  click: (title) => common_vendor.isString(title)
};
const __default__ = {
  options: {
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...__default__,
  __name: "subsection-item",
  props: subsectionItemProps,
  emits: subsectionItemEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { componentId, active, itemClickEvent } = uni_modules_tuniaouiVue3_components_subsection_src_composables_useSubsectionItem.useSubsectionItem(props, emits);
    const { subsectionItemClass, subsectionItemStyle } = uni_modules_tuniaouiVue3_components_subsection_src_composables_subsectionItemCustom.useSubsectionItemCustomStyle(props, active);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(_ctx.title),
        b: common_vendor.unref(componentId),
        c: common_vendor.n(common_vendor.unref(subsectionItemClass)),
        d: common_vendor.s(common_vendor.unref(subsectionItemStyle)),
        e: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(itemClickEvent) && common_vendor.unref(itemClickEvent)(...args)
        )
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f682932"]]);
wx.createComponent(Component);
