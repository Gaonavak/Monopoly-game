"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "my-card-row",
  props: ["arr"],
  setup(__props) {
    const naviTo = (path) => {
      common_vendor.index.navigateTo({
        url: path
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.arr, (item, index, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.title),
            c: index,
            d: common_vendor.o(($event) => naviTo(item.path), index)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b31a7f34"], ["__file", "D:/Work/小程序开发工具/G/components/my-card-row/my-card-row.vue"]]);
wx.createComponent(Component);
