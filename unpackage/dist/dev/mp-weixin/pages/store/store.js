"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
const _sfc_main = {
  __name: "store",
  setup(__props) {
    const iptValue = common_vendor.ref("");
    const isActive = common_vendor.ref(false);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(_ctx.search),
        b: common_vendor.o(($event) => isActive.value = true),
        c: common_vendor.o(($event) => isActive.value = false),
        d: common_vendor.p({
          focus: true,
          bgColor: "#fff",
          value: iptValue.value
        }),
        e: common_assets._imports_0$2,
        f: common_vendor.n(isActive.value ? "active" : ""),
        g: common_assets._imports_0,
        h: common_assets._imports_2,
        i: common_assets._imports_0,
        j: common_assets._imports_3
      };
    };
  }
};
wx.createPage(_sfc_main);
