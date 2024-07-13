"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const data_pagesUser = require("../../data/pages-user.js");
const utils_common = require("../../utils/common.js");
if (!Array) {
  const _easycom_my_card_row2 = common_vendor.resolveComponent("my-card-row");
  const _easycom_my_card2 = common_vendor.resolveComponent("my-card");
  (_easycom_my_card_row2 + _easycom_my_card2)();
}
const _easycom_my_card_row = () => "../../components/my-card-row/my-card-row.js";
const _easycom_my_card = () => "../../components/my-card/my-card.js";
if (!Math) {
  (_easycom_my_card_row + _easycom_my_card)();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const userName = common_vendor.ref("张三");
    const avatarUrl = common_vendor.ref("/static/avatar.jpg");
    return (_ctx, _cache) => {
      return {
        a: avatarUrl.value,
        b: common_vendor.t(userName.value),
        c: common_assets._imports_0,
        d: common_vendor.o(($event) => common_vendor.unref(utils_common.naviTo)("/pages_user/edit/edit")),
        e: common_vendor.p({
          arr: common_vendor.unref(data_pagesUser.firstSowCardData)
        }),
        f: common_vendor.p({
          arr: common_vendor.unref(data_pagesUser.secondRowCardData)
        }),
        g: common_vendor.p({
          arr: common_vendor.unref(data_pagesUser.colCardData)
        }),
        h: common_vendor.p({
          arr: common_vendor.unref(data_pagesUser.cleanCacheCard)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"], ["__file", "D:/Work/小程序开发工具/G/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
