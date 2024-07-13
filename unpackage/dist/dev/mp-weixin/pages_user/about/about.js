"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Math) {
  TnFooter();
}
const TnFooter = () => "../../uni_modules/tuniaoui-vue3/components/footer/src/footer.js";
const _sfc_main = {
  __name: "about",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.p({
          content: "Copyright © 2024 汕头大学-三下乡-科技队",
          ["offset-bottom"]: "30rpx"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4334aad2"]]);
wx.createPage(MiniProgramPage);
