"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_my_btn_box2 = common_vendor.resolveComponent("my-btn-box");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_my_store_card2 = common_vendor.resolveComponent("my-store-card");
  const _easycom_my_card2 = common_vendor.resolveComponent("my-card");
  (_easycom_my_btn_box2 + _easycom_uni_card2 + _easycom_my_store_card2 + _easycom_my_card2)();
}
const _easycom_my_btn_box = () => "../../components/my-btn-box/my-btn-box.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_my_store_card = () => "../../components/my-store-card/my-store-card.js";
const _easycom_my_card = () => "../../components/my-card/my-card.js";
if (!Math) {
  (_easycom_my_btn_box + _easycom_uni_card + _easycom_my_store_card + _easycom_my_card + TnSwitchTab)();
}
const TnSwitchTab = () => "../../uni_modules/tuniaoui-vue3/components/switch-tab/src/switch-tab.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
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
    const navList = common_vendor.ref([
      {
        title: "关于",
        icon: "/static/user/info.png",
        path: "/pages_user/about/about"
      },
      {
        title: "帮助",
        icon: "/static/user/phone.png",
        path: "/pages_user/contact/contact"
      },
      {
        title: "开发者",
        icon: "/static/dev.png",
        path: "/pages_home/location/location"
      }
    ]);
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
    const longitude = common_vendor.ref(117.062956);
    const latitude = common_vendor.ref(23.434194);
    const place = common_vendor.ref({
      title: "景点",
      thumb: "/static/logo.png",
      extra: "打卡",
      desp: "这是景点的描述。这是景点的描述。这是景点的描述。这是景点的描述。"
    });
    const currentTabIndex = common_vendor.ref(0);
    const tabs = common_vendor.ref(["商店", "周榜"]);
    const data1 = common_vendor.ref([
      {
        leftIcon: "/static/logo.png",
        title: "data1-表单1",
        desc: "",
        rightIcon: "/static/logo.png"
      },
      {
        leftIcon: "/static/logo.png",
        title: "data1-表单2",
        desc: "",
        rightIcon: "/static/logo.png"
      },
      {
        leftIcon: "/static/logo.png",
        title: "data1-表单3",
        desc: "",
        rightIcon: "/static/logo.png"
      },
      {
        leftIcon: "/static/logo.png",
        title: "data1-表单1",
        desc: "",
        rightIcon: "/static/logo.png"
      },
      {
        leftIcon: "/static/logo.png",
        title: "data1-表单2",
        desc: "",
        rightIcon: "/static/logo.png"
      },
      {
        leftIcon: "/static/logo.png",
        title: "data1-表单3",
        desc: "",
        rightIcon: "/static/logo.png"
      }
    ]);
    const fruit = common_vendor.ref({
      title: ["水果"],
      list: [
        {
          name: "西瓜",
          thumb: "/static/logo.png",
          price: 999
        },
        {
          name: "西瓜",
          thumb: "/static/logo.png",
          price: 999
        },
        {
          name: "西瓜",
          thumb: "/static/logo.png",
          price: 999
        },
        {
          name: "西瓜",
          thumb: "/static/logo.png",
          price: 999
        },
        {
          name: "西瓜",
          thumb: "/static/logo.png",
          price: 999
        },
        {
          name: "西瓜",
          thumb: "/static/logo.png",
          price: 999
        },
        {
          name: "西瓜",
          thumb: "/static/logo.png",
          price: 999
        },
        {
          name: "西瓜",
          thumb: "/static/logo.png",
          price: 999
        }
      ]
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          arr: navList.value
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
          arr: fruit.value
        })
      } : {}, {
        j: currentTabIndex.value === 1
      }, currentTabIndex.value === 1 ? {
        k: common_vendor.p({
          arr: data1.value
        })
      } : {}, {
        l: common_vendor.o(($event) => currentTabIndex.value = $event),
        m: common_vendor.p({
          tabs: tabs.value,
          modelValue: currentTabIndex.value
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-07e72d3c"]]);
wx.createPage(MiniProgramPage);
