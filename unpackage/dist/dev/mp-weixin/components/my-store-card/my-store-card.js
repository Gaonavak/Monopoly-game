"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (TnButton + TnSwitchTab)();
}
const TnButton = () => "../../uni_modules/tuniaoui-vue3/components/button/src/button.js";
const TnSwitchTab = () => "../../uni_modules/tuniaoui-vue3/components/switch-tab/src/switch-tab.js";
const _sfc_main = {
  __name: "my-store-card",
  props: ["arr"],
  setup(__props) {
    const currentTabIndex = common_vendor.ref(0);
    const buy = () => {
      common_vendor.index.showToast({
        title: "你点击了购买按钮"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.arr.list, (item, index, i0) => {
          return {
            a: item.thumb,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: common_vendor.o(buy, index),
            e: "2b5f0ee8-1-" + i0 + ",2b5f0ee8-0",
            f: index
          };
        }),
        b: common_vendor.o(($event) => currentTabIndex.value = $event),
        c: common_vendor.p({
          tabs: __props.arr.title,
          ["active-bg-color"]: "#B3ECFF",
          disabled: true,
          ["inactive-bg-color"]: "#FFFFFF",
          modelValue: currentTabIndex.value
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2b5f0ee8"], ["__file", "D:/Work/小程序开发工具/G/components/my-store-card/my-store-card.vue"]]);
wx.createComponent(Component);
