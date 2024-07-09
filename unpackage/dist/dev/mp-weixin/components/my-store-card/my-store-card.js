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
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.arr.list, (item, index, i0) => {
          return {
            a: item.thumb,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: "2b5f0ee8-1-" + i0 + ",2b5f0ee8-0",
            e: index
          };
        }),
        b: common_vendor.o(($event) => currentTabIndex.value = $event),
        c: common_vendor.p({
          tabs: __props.arr.title,
          modelValue: currentTabIndex.value
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2b5f0ee8"]]);
wx.createComponent(Component);
