"use strict";
const common_vendor = require("../../common/vendor.js");
const data_pagesHome = require("../../data/pages-home.js");
const pages_home_QR = require("./QR.js");
const pages_home_map = require("./map.js");
if (!Array) {
  const _easycom_my_btn_box2 = common_vendor.resolveComponent("my-btn-box");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_my_store_card2 = common_vendor.resolveComponent("my-store-card");
  const _easycom_my_rank_card2 = common_vendor.resolveComponent("my-rank-card");
  (_easycom_my_btn_box2 + _easycom_uni_icons2 + _easycom_uni_card2 + _easycom_my_store_card2 + _easycom_my_rank_card2)();
}
const _easycom_my_btn_box = () => "../../components/my-btn-box/my-btn-box.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_my_store_card = () => "../../components/my-store-card/my-store-card.js";
const _easycom_my_rank_card = () => "../../components/my-rank-card/my-rank-card.js";
if (!Math) {
  (_easycom_my_btn_box + _easycom_uni_icons + _easycom_uni_card + TnPopup + _easycom_my_store_card + _easycom_my_rank_card + TnSwitchTab)();
}
const TnSwitchTab = () => "../../uni_modules/tuniaoui-vue3/components/switch-tab/src/switch-tab.js";
const TnPopup = () => "../../uni_modules/tuniaoui-vue3/components/popup/src/popup.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    common_vendor.onMounted(async () => {
      pages_home_map.isGetLocation();
      await pages_home_QR.fetchUserData();
    });
    const btns = common_vendor.ref([
      {
        title: "扫描二维码",
        icon: "/static/home/scan.png",
        path: pages_home_QR.scanQRCode
        // 这里不应该调用函数，只需要指定函数名即可
      },
      {
        title: "重新获取位置",
        icon: "/static/home/relocation.png",
        path: pages_home_map.getLocation
        // 同样不要调用函数，只需指定函数名
      }
    ]);
    const currentTabIndex = common_vendor.ref(0);
    const currentTabIndex_rank = common_vendor.ref(0);
    const tabs = common_vendor.ref(["商店", "周榜"]);
    const tabs_rank = common_vendor.ref(["日榜", "周榜", "月榜"]);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          arr: btns.value
        }),
        b: common_vendor.unref(pages_home_map.latitude),
        c: common_vendor.unref(pages_home_map.longitude),
        d: common_vendor.unref(pages_home_map.markers),
        e: common_vendor.unref(data_pagesHome.polyline),
        f: common_vendor.o((...args) => common_vendor.unref(pages_home_map.regionchange) && common_vendor.unref(pages_home_map.regionchange)(...args)),
        g: common_vendor.o((...args) => common_vendor.unref(pages_home_map.clickMap) && common_vendor.unref(pages_home_map.clickMap)(...args)),
        h: common_vendor.o((...args) => common_vendor.unref(pages_home_map.onMarkerTap) && common_vendor.unref(pages_home_map.onMarkerTap)(...args)),
        i: common_vendor.unref(pages_home_map.showCard)
      }, common_vendor.unref(pages_home_map.showCard) ? {
        j: common_vendor.t(common_vendor.unref(pages_home_map.cardData).desp),
        k: common_vendor.o(common_vendor.unref(pages_home_map.closeCard)),
        l: common_vendor.p({
          type: "close"
        }),
        m: common_vendor.p({
          title: common_vendor.unref(pages_home_map.cardData).title,
          thumbnail: common_vendor.unref(pages_home_map.cardData).thumb,
          extra: common_vendor.unref(pages_home_map.cardData).extra
        })
      } : {}, {
        n: common_vendor.unref(pages_home_map.cardData).title,
        o: common_vendor.unref(pages_home_map.cardData).thumb,
        p: common_vendor.unref(pages_home_map.cardData).extra,
        q: common_vendor.o(($event) => common_vendor.isRef(pages_home_map.showPopup) ? pages_home_map.showPopup.value = $event : null),
        r: common_vendor.p({
          ["overlay-closeable"]: true,
          radius: "16",
          ["open-direction"]: "bottom",
          height: "800",
          modelValue: common_vendor.unref(pages_home_map.showPopup)
        }),
        s: currentTabIndex.value === 0
      }, currentTabIndex.value === 0 ? {
        t: common_vendor.p({
          arr: common_vendor.unref(data_pagesHome.fruit)
        }),
        v: common_vendor.p({
          arr: common_vendor.unref(data_pagesHome.fruit)
        })
      } : {}, {
        w: currentTabIndex.value === 1
      }, currentTabIndex.value === 1 ? common_vendor.e({
        x: currentTabIndex_rank.value === 0
      }, currentTabIndex_rank.value === 0 ? {
        y: common_vendor.p({
          arr: common_vendor.unref(data_pagesHome.group1)
        })
      } : {}, {
        z: currentTabIndex_rank.value === 1
      }, currentTabIndex_rank.value === 1 ? {
        A: common_vendor.p({
          arr: common_vendor.unref(data_pagesHome.group2)
        })
      } : {}, {
        B: currentTabIndex_rank.value === 2
      }, currentTabIndex_rank.value === 2 ? {
        C: common_vendor.p({
          arr: common_vendor.unref(data_pagesHome.group3)
        })
      } : {}, {
        D: common_vendor.o(($event) => currentTabIndex_rank.value = $event),
        E: common_vendor.p({
          tabs: tabs_rank.value,
          ["active-bg-color"]: "#FFA726",
          ["inactive-bg-color"]: "#E1E9F0",
          modelValue: currentTabIndex_rank.value
        })
      }) : {}, {
        F: common_vendor.o(($event) => currentTabIndex.value = $event),
        G: common_vendor.p({
          tabs: tabs.value,
          ["active-bg-color"]: "#8CAED1",
          ["inactive-bg-color"]: "#E1E9F0",
          modelValue: currentTabIndex.value
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-07e72d3c"], ["__file", "D:/Work/小程序开发工具/G/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
