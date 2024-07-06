"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  _easycom_uni_card2();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  _easycom_uni_card();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const navList = common_vendor.ref([
      {
        title: "about",
        icon: "../../static/user/info.png",
        url: "/pages_user/about"
      },
      {
        title: "help",
        icon: "../../static/user/phone.png",
        url: "/pages_user/contact"
      }
    ]);
    const latitude = common_vendor.ref(23.434194);
    const longitude = common_vendor.ref(117.062956);
    const places = common_vendor.ref({
      title: "景点",
      thumb: "../../static/logo.png",
      extra: "打卡",
      desp: "这是景点的描述。这是景点的描述。这是景点的描述。这是景点的描述。这是景点的描述。这是景点的描述。这是景点的描述。这是景点的描述。这是景点的描述。这是景点的描述。"
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(navList.value, (item, k0, i0) => {
          return {
            a: item.icon,
            b: item.url,
            c: item.title
          };
        }),
        b: common_vendor.t(places.value.desp),
        c: common_vendor.p({
          title: places.value.title,
          thumbnail: places.value.thumb,
          extra: places.value.extra
        }),
        d: latitude.value,
        e: longitude.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-07e72d3c"]]);
wx.createPage(MiniProgramPage);
