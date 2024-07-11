"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common = require("../../utils/common.js");
const _sfc_main = {
  __name: "my-btn-box",
  props: ["arr"],
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.arr, (item, index, i0) => {
          return {
            a: index,
            b: item.icon,
            c: common_vendor.o(($event) => common_vendor.unref(utils_common.naviTo)(item.path), index)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ceebadbf"]]);
wx.createComponent(Component);
