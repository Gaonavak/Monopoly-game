"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const userName = common_vendor.ref("张三");
    common_vendor.onShow(() => {
      common_vendor.index.$on("userName", (res) => {
        userName.value = res;
      });
    });
    const centerList = common_vendor.ref([
      {
        title: "用户反馈",
        type: "../../static/user/phone.png",
        page: "/pages_user/feedback"
      },
      {
        title: "关于我们",
        type: "../../static/user/info.png",
        page: "/pages_user/about"
      },
      {
        title: "联系我们",
        type: "../../static/user/personadd.png",
        page: "/pages_user/contact"
      },
      {
        title: "清除缓存",
        type: "../../static/user/trash.png",
        page: "/pages_user/clean"
      }
    ]);
    const tripList = common_vendor.ref([
      {
        title: "打卡点",
        type: "../../static/user/flag.png"
      },
      {
        title: "足迹",
        type: "../../static/user/map.png"
      },
      {
        title: "收藏",
        type: "../../static/user/star.png"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.t(userName.value),
        c: common_assets._imports_0$1,
        d: "/pages_user/edit?user=" + userName.value,
        e: common_vendor.f(tripList.value, (item, k0, i0) => {
          return {
            a: item.type,
            b: common_vendor.t(item.title),
            c: item.title
          };
        }),
        f: common_vendor.f(centerList.value, (item, k0, i0) => {
          return {
            a: item.type,
            b: common_vendor.t(item.title),
            c: item.page,
            d: item.title
          };
        }),
        g: common_assets._imports_0$1
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
