"use strict";
const common_vendor = require("../../common/vendor.js");
const data_pagesHome = require("../../data/pages-home.js");
if (!Array) {
  const _easycom_my_btn_box2 = common_vendor.resolveComponent("my-btn-box");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_my_store_card2 = common_vendor.resolveComponent("my-store-card");
  const _easycom_my_rank_card2 = common_vendor.resolveComponent("my-rank-card");
  (_easycom_my_btn_box2 + _easycom_uni_card2 + _easycom_my_store_card2 + _easycom_my_rank_card2)();
}
const _easycom_my_btn_box = () => "../../components/my-btn-box/my-btn-box.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_my_store_card = () => "../../components/my-store-card/my-store-card.js";
const _easycom_my_rank_card = () => "../../components/my-rank-card/my-rank-card.js";
if (!Math) {
  (_easycom_my_btn_box + _easycom_uni_card + _easycom_my_store_card + _easycom_my_rank_card + TnSwitchTab)();
}
const TnSwitchTab = () => "../../uni_modules/tuniaoui-vue3/components/switch-tab/src/switch-tab.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const getLocation = () => {
      common_vendor.index.getLocation({
        type: "gcj02",
        success(res) {
          longitude.value = res.longitude;
          latitude.value = res.latitude;
          common_vendor.index.showToast({
            title: "经纬度" + res.longitude + "，" + res.latitude
          });
        },
        fail() {
          common_vendor.index.showToast({
            title: "请打开定位，或稍后重试",
            icon: "none"
          });
        }
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
        title: "景点的信息",
        icon: "none"
      });
    };
    const clickCard = (type) => {
      switch (type) {
        case "thumb":
          getPlaceInfo();
          break;
        case "extra":
          checkIn();
          break;
      }
    };
    const longitude = common_vendor.ref(117.062956);
    const latitude = common_vendor.ref(23.434194);
    const place = common_vendor.ref({
      title: "景点",
      thumb: "/static/logo.png",
      extra: "打卡",
      desp: "这是景点的描述。这是景点的描述。这是景点的描述。这是景点的描述。"
    });
    const scanQRCode = () => {
      common_vendor.index.scanCode({
        success(res) {
          common_vendor.index.showToast({
            title: res.scanType,
            icon: "none"
          });
        }
      });
    };
    const currentTabIndex = common_vendor.ref(0);
    const currentTabIndex_rank = common_vendor.ref(0);
    const tabs = common_vendor.ref(["商店", "周榜"]);
    const tabs_rank = common_vendor.ref(["日榜", "周榜", "月榜"]);
    const btns = common_vendor.ref([
      {
        title: "扫描二维码",
        icon: "/static/home/scan.png",
        path: scanQRCode
      },
      {
        title: "重新获取位置",
        icon: "/static/home/relocation.png",
        path: getLocation
      }
    ]);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          arr: common_vendor.unref(data_pagesHome.navList)
        }),
        b: common_vendor.p({
          arr: btns.value
        }),
        c: common_vendor.t(place.value.desp),
        d: common_vendor.o(clickCard),
        e: common_vendor.p({
          title: place.value.title,
          thumbnail: place.value.thumb,
          extra: place.value.extra
        }),
        f: latitude.value,
        g: longitude.value,
        h: currentTabIndex.value === 0
      }, currentTabIndex.value === 0 ? {
        i: common_vendor.p({
          arr: common_vendor.unref(data_pagesHome.fruit)
        }),
        j: common_vendor.p({
          arr: common_vendor.unref(data_pagesHome.fruit)
        })
      } : {}, {
        k: currentTabIndex.value === 1
      }, currentTabIndex.value === 1 ? common_vendor.e({
        l: currentTabIndex_rank.value === 0
      }, currentTabIndex_rank.value === 0 ? {
        m: common_vendor.p({
          arr: common_vendor.unref(data_pagesHome.group1)
        })
      } : {}, {
        n: currentTabIndex_rank.value === 1
      }, currentTabIndex_rank.value === 1 ? {
        o: common_vendor.p({
          arr: common_vendor.unref(data_pagesHome.group2)
        })
      } : {}, {
        p: currentTabIndex_rank.value === 2
      }, currentTabIndex_rank.value === 2 ? {
        q: common_vendor.p({
          arr: common_vendor.unref(data_pagesHome.group3)
        })
      } : {}, {
        r: common_vendor.o(($event) => currentTabIndex_rank.value = $event),
        s: common_vendor.p({
          tabs: tabs_rank.value,
          ["active-bg-color"]: "#FFA726",
          ["inactive-bg-color"]: "#E1E9F0",
          modelValue: currentTabIndex_rank.value
        })
      }) : {}, {
        t: common_vendor.o(($event) => currentTabIndex.value = $event),
        v: common_vendor.p({
          tabs: tabs.value,
          ["active-bg-color"]: "#8CAED1",
          ["inactive-bg-color"]: "#E1E9F0",
          modelValue: currentTabIndex.value
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-07e72d3c"]]);
wx.createPage(MiniProgramPage);
