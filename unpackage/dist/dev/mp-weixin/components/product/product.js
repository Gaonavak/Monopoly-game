"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "product",
  props: {
    src: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.src
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-927ba98a"]]);
wx.createComponent(Component);
