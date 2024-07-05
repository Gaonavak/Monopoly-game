"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const _sfc_main = {
  __name: "edit",
  setup(__props) {
    const func_avatar = common_vendor.ref({
      "title": "头像",
      "imagePath": "/static/logo.png"
    });
    const funcList = common_vendor.ref([{
      "title": "名字",
      "text": "张三"
    }]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(func_avatar.value.title),
        b: func_avatar.value.imagePath,
        c: common_assets._imports_0$1,
        d: common_vendor.f(funcList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: item.title
          };
        }),
        e: common_assets._imports_0$1
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-deea46ec"]]);
wx.createPage(MiniProgramPage);
