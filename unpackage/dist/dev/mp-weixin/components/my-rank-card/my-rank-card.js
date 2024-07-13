"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common = require("../../utils/common.js");
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
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.arr, (role, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: role.avatar,
            c: common_vendor.t(role.name),
            d: common_vendor.t(role.grade),
            e: index,
            f: common_vendor.o(($event) => common_vendor.unref(utils_common.naviTo)(role.path), index)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b7bdbf13"]]);
wx.createComponent(Component);
