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
    const scanQRCode = () => {
      common_vendor.index.showToast({
        title: "二维码"
      });
    };
    const getLocation = () => {
      common_vendor.index.showToast({
        title: "重新获取位置"
      });
    };
    const checkIn = () => {
      common_vendor.index.showToast({
        title: "签到",
        icon: "none"
      });
    };
    const getPlaceInfo = () => {
      common_vendor.index.showToast({
        title: "更多",
        icon: "none"
      });
    };
    const clickCard = (type) => {
      switch (type) {
        case "title":
          getPlaceInfo();
        case "extra":
          checkIn();
      }
    };
    const navList = common_vendor.ref([
      {
        title: "关于",
        icon: "/static/user/info.png",
        url: "/pages_user/about"
      },
      {
        title: "帮助",
        icon: "/static/user/phone.png",
        url: "/pages_user/contact"
      },
      {
        title: "开发者",
        icon: "/static/dev.png",
        url: "/pages_home/location"
      }
    ]);
    const btns = common_vendor.ref([
      {
        title: "扫描二维码",
        icon: "/static/home/scan.png",
        func: scanQRCode
      },
      {
        title: "重新获取位置",
        icon: "/static/home/relocation.png",
        func: getLocation
      }
    ]);
    const latitude = common_vendor.ref(23.434194);
    const longitude = common_vendor.ref(117.062956);
    const place = common_vendor.ref({
      title: "景点",
      thumb: "/static/logo.png",
      extra: "打卡",
      desp: "这是景点的描述。这是景点的描述。这是景点的描述。这是景点的描述。"
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(navList.value, (item, k0, i0) => {
          return {
            a: item.icon,
            b: item.title,
            c: item.url
          };
        }),
        b: common_vendor.f(btns.value, (btn, k0, i0) => {
          return {
            a: btn.title,
            b: btn.icon,
            c: common_vendor.o(btn.func, btn.title)
          };
        }),
        c: common_vendor.t(place.value.desp),
        d: common_vendor.o(clickCard),
        e: common_vendor.p({
          title: place.value.title,
          thumbnail: place.value.thumb,
          extra: place.value.extra
        }),
        f: latitude.value,
        g: longitude.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-07e72d3c"]]);
wx.createPage(MiniProgramPage);
