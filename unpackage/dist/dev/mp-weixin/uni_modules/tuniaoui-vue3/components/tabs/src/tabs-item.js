"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_base_commonProps_tabs_index = require("../../base/common-props/tabs/index.js");
require("../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_components_tabs_src_composables_tabsItemCustom = require("./composables/tabs-item-custom.js");
const uni_modules_tuniaouiVue3_components_tabs_src_composables_useTabsItem = require("./composables/use-tabs-item.js");
const tabsItemProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  ...uni_modules_tuniaouiVue3_components_base_commonProps_tabs_index.tabsBaseProps,
  /**
   * @description 唯一标识
   */
  name: {
    type: [String, Number]
  },
  /**
   * @description 标题
   */
  title: {
    type: String,
    required: true
  },
  /**
   * @description 角标配置
   */
  badgeConfig: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Object),
    default: () => ({})
  },
  /**
   * @description 是否禁用
   */
  disabled: Boolean
});
const tabsItemEmits = {
  /**
   * @description 点击事件
   */
  click: () => true
};
if (!Math) {
  TnBadge();
}
const TnBadge = () => "../../badge/src/badge.js";
const __default__ = {
  options: {
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...__default__,
  __name: "tabs-item",
  props: tabsItemProps,
  emits: tabsItemEmits,
  setup(__props) {
    const props = __props;
    const { componentId, isActive, hasBadge, itemClickEvent } = uni_modules_tuniaouiVue3_components_tabs_src_composables_useTabsItem.useTabsItem(props);
    const { ns, tabsItemClass, tabsItemStyle } = uni_modules_tuniaouiVue3_components_tabs_src_composables_tabsItemCustom.useTabsItemCustomStyle(
      props,
      isActive
    );
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(hasBadge)
      }, common_vendor.unref(hasBadge) ? {
        b: common_vendor.o(common_vendor.unref(itemClickEvent)),
        c: common_vendor.p({
          value: _ctx.badgeConfig.value,
          dot: _ctx.badgeConfig.dot,
          size: _ctx.badgeConfig.dot ? "16" : "",
          type: "danger"
        })
      } : {}, {
        d: common_vendor.t(_ctx.title),
        e: common_vendor.n(common_vendor.unref(ns).e("content__value")),
        f: common_vendor.n(common_vendor.unref(ns).e("content")),
        g: common_vendor.unref(componentId),
        h: common_vendor.n(common_vendor.unref(tabsItemClass)),
        i: common_vendor.s(common_vendor.unref(tabsItemStyle)),
        j: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(itemClickEvent) && common_vendor.unref(itemClickEvent)(...args)
        )
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2b0541ae"], ["__file", "D:/Work/小程序开发工具/G/uni_modules/tuniaoui-vue3/components/tabs/src/tabs-item.vue"]]);
wx.createComponent(Component);
