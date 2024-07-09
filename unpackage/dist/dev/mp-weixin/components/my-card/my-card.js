"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "my-card",
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
        a: common_vendor.f(__props.arr, (item, index, i0) => {
          return {
            a: item.leftIcon,
            b: common_vendor.t(item.title),
            c: item.rightIcon,
            d: index,
            e: common_vendor.o(($event) => naviTo(item.path), index)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-98ac0ec3"]]);
wx.createComponent(Component);
