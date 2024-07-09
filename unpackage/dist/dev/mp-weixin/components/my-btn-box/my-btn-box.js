"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "my-btn-box",
  props: ["arr"],
  setup(__props) {
    const onclick = (path) => {
      if (!path) {
        return;
      }
      if (typeof path === "function") {
        path();
        return;
      }
      common_vendor.index.navigateTo({
        url: path,
        fail() {
          common_vendor.index.showToast({
            title: "页面不存在，或网络错误",
            icon: "closeempty"
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.arr, (item, index, i0) => {
          return {
            a: index,
            b: item.icon,
            c: common_vendor.o(($event) => onclick(item.path), index)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ceebadbf"]]);
wx.createComponent(Component);
