"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
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
    const naviTo = (path) => {
      if (!path) {
        return;
      }
      common_vendor.index.navigateTo({
        url: path,
        fail() {
          common_vendor.index.showToast({
            title: "跳转失败，请检查网络..."
          });
        }
      });
    };
    const clean = () => {
      common_vendor.index.showToast({
        title: "清理完成",
        icon: "none"
      });
    };
    const rowCardData = common_vendor.ref([
      {
        title: "打卡点",
        icon: "/static/user/flag.png",
        path: "/pages_user/about/about"
      },
      {
        title: "足迹",
        icon: "/static/user/map.png",
        path: "/pages_user/about/about"
      },
      {
        title: "收藏",
        icon: "/static/user/star.png",
        path: "/pages_user/about/about"
      }
    ]);
    const colCardData = common_vendor.ref([
      {
        title: "联系我们",
        leftIcon: "/static/user/personadd.png",
        rightIcon: "/static/user/arrowright.png",
        path: "/pages_user/contact/contact"
      },
      {
        title: "关于我们",
        leftIcon: "/static/user/info.png",
        rightIcon: "/static/user/arrowright.png",
        path: "/pages_user/about/about"
      }
    ]);
    const cleanCache = common_vendor.ref([{
      title: "清理缓存",
      leftIcon: "/static/user/trash.png",
      rightIcon: "/static/user/arrowright.png"
    }]);
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.t(userName.value),
        c: common_assets._imports_1,
        d: common_vendor.o(($event) => naviTo("/pages_user/edit/edit")),
        e: common_vendor.p({
          arr: rowCardData.value
        }),
        f: common_vendor.p({
          arr: colCardData.value
        }),
        g: common_vendor.o(clean),
        h: common_vendor.p({
          arr: cleanCache.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
