"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "my-rank-card",
  props: {
    arr: {
      type: Array,
      required: true
    },
    seperator: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const naviTo = (path) => {
      if (!path) {
        return;
      }
      if (typeof path == "function") {
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
        a: common_vendor.f(__props.arr, (role, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: role.avatar,
            c: common_vendor.t(role.name),
            d: common_vendor.t(role.grade),
            e: index,
            f: common_vendor.o(($event) => naviTo(role.path), index)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b7bdbf13"], ["__file", "D:/Work/小程序开发工具/G/components/my-rank-card/my-rank-card.vue"]]);
wx.createComponent(Component);
