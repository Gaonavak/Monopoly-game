"use strict";
const common_vendor = require("../../common/vendor.js");
const data_pagesHome = require("../../data/pages-home.js");
if (!Array) {
  const _easycom_my_btn_box2 = common_vendor.resolveComponent("my-btn-box");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_my_rank_card2 = common_vendor.resolveComponent("my-rank-card");
  const _easycom_my_store_card2 = common_vendor.resolveComponent("my-store-card");
  (_easycom_my_btn_box2 + _easycom_uni_card2 + _easycom_my_rank_card2 + _easycom_my_store_card2)();
}
const _easycom_my_btn_box = () => "../../components/my-btn-box/my-btn-box.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_my_rank_card = () => "../../components/my-rank-card/my-rank-card.js";
const _easycom_my_store_card = () => "../../components/my-store-card/my-store-card.js";
if (!Math) {
  (_easycom_my_btn_box + _easycom_uni_card + _easycom_my_rank_card + TnSwitchTab + _easycom_my_store_card)();
}
const TnSwitchTab = () => "../../uni_modules/tuniaoui-vue3/components/switch-tab/src/switch-tab.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const longitude = common_vendor.ref(117.062956);
    const latitude = common_vendor.ref(23.434194);
    const userLatitude = common_vendor.ref(0);
    const userLongitude = common_vendor.ref(0);
    const currentMarkerId = common_vendor.ref(null);
    const markers = common_vendor.ref([]);
    const polyline = common_vendor.ref([{
      points: [
        {
          latitude: 23.4299,
          longitude: 116.9472
        },
        {
          latitude: 23.416,
          longitude: 116.9732
        },
        {
          latitude: 23.4178,
          longitude: 116.9947
        },
        {
          latitude: 23.4109,
          longitude: 117.0344
        }
      ],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }]);
    const addressInfoRecomd = common_vendor.ref("");
    common_vendor.onMounted(() => {
      isGetLocation();
    });
    const isGetLocation = (a = "scope.userLocation") => {
      common_vendor.index.getSetting({
        success(res) {
          console.log(res);
          if (!res.authSetting[a]) {
            getAuthorizeInfo(a);
          } else {
            getLocation();
          }
        }
      });
    };
    const getAuthorizeInfo = (a = "scope.userLocation") => {
      common_vendor.index.authorize({
        scope: a,
        success() {
          getLocation();
        }
      });
    };
    const getLocation = () => {
      console.log("现在在获取地址信息");
      common_vendor.index.getLocation({
        type: "gcj02",
        success: (res) => {
          console.log(res);
          latitude.value = res.latitude;
          longitude.value = res.longitude;
          userLatitude.value = res.latitude;
          userLongitude.value = res.longitude;
          updateMarkers();
          getLocationDetail();
          moveToUserLocation();
        }
      });
    };
    const moveToUserLocation = () => {
      const mapCtx = common_vendor.index.createMapContext("mapSelected");
      mapCtx.moveToLocation({
        latitude: userLatitude.value,
        longitude: userLongitude.value,
        success: (res) => {
          console.log(res);
          getLocationDetail();
        },
        fail: (err) => {
          console.error("移动地图失败：", err);
        }
      });
    };
    const getLocationDetail = () => {
      common_vendor.index.request({
        header: {
          "Content-Type": "application/text"
        },
        url: "https://apis.map.qq.com/ws/geocoder/v1/?location=" + latitude.value + "," + longitude.value + "&key=XOXBZ-MZWWD-CDX4H-PONXN-UA5PJ-D7FJN",
        success: (re) => {
          console.log("到这里了");
          console.log(re);
          if (re.statusCode == 200) {
            addressInfoRecomd.value = re.data.result.formatted_addresses.recommend;
          } else {
            common_vendor.index.showToast({
              title: "获取地理位置失败，请重试",
              icon: "none"
            });
          }
        }
      });
    };
    const regionchange = (e) => {
      console.log(e);
      if (e.type === "end" && (e.causedBy === "scale" || e.causedBy === "drag")) {
        const mapCtx = common_vendor.index.createMapContext("mapSelected");
        mapCtx.getCenterLocation({
          success: (res) => {
            console.log(res);
            latitude.value = res.latitude;
            longitude.value = res.longitude;
            getLocationDetail();
          }
        });
      }
    };
    const updateMarkers = () => {
      console.log("开始更新标记点");
      markers.value = [
        {
          id: 0,
          latitude: userLatitude.value,
          longitude: userLongitude.value,
          iconPath: "https://hellouniapp.dcloud.net.cn/static/location.png",
          width: 20,
          height: 20,
          callout: {
            content: "me",
            color: "#ff0000",
            fontSize: 12,
            borderRadius: 5,
            bgColor: "#ffffff",
            padding: 5,
            display: "ALWAYS"
          }
        },
        {
          id: 1,
          latitude: 23.4299,
          longitude: 116.9472,
          iconPath: "https://hellouniapp.dcloud.net.cn/static/location.png",
          width: 20,
          height: 20,
          callout: {
            content: "长山尾灯塔",
            color: "#00aaff",
            fontSize: 12,
            borderRadius: 5,
            bgColor: "#ffffff",
            padding: 5,
            display: "ALWAYS"
          }
        },
        {
          id: 2,
          latitude: 23.416,
          longitude: 116.9732,
          iconPath: "https://hellouniapp.dcloud.net.cn/static/location.png",
          width: 20,
          height: 20,
          callout: {
            content: "石潭寺",
            color: "#00aaff",
            fontSize: 12,
            borderRadius: 5,
            bgColor: "#ffffff",
            padding: 5,
            display: "ALWAYS"
          }
        },
        {
          id: 3,
          latitude: 23.4178,
          longitude: 116.9947,
          iconPath: "https://hellouniapp.dcloud.net.cn/static/location.png",
          width: 20,
          height: 20,
          callout: {
            content: "标记点3",
            color: "#00aaff",
            fontSize: 12,
            borderRadius: 5,
            bgColor: "#ffffff",
            padding: 5,
            display: "ALWAYS"
          }
        },
        {
          id: 4,
          latitude: 23.4109,
          longitude: 117.0344,
          iconPath: "https://hellouniapp.dcloud.net.cn/static/location.png",
          width: 20,
          height: 20,
          callout: {
            content: "标记点4",
            color: "#00aaff",
            fontSize: 12,
            borderRadius: 5,
            bgColor: "#ffffff",
            padding: 5,
            display: "ALWAYS"
          }
        }
      ];
    };
    const clickMap = (e) => {
      console.log("点击地图时:", e);
      const {
        latitude: latitude2,
        longitude: longitude2
      } = e.detail;
      if (currentMarkerId.value !== null) {
        markers.value = markers.value.filter((marker) => marker.id !== currentMarkerId.value);
      }
      const newMarker = {
        id: Date.now(),
        // 使用时间戳作为唯一标识
        latitude: latitude2,
        longitude: longitude2,
        iconPath: "https://hellouniapp.dcloud.net.cn/static/location.png",
        width: 20,
        height: 20,
        callout: {
          content: "新标记点",
          color: "#00aaff",
          fontSize: 12,
          borderRadius: 5,
          bgColor: "#ffffff",
          padding: 5,
          display: "ALWAYS"
        }
      };
      markers.value.push(newMarker);
      currentMarkerId.value = newMarker.id;
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
    const place = common_vendor.ref({
      title: "景点",
      thumb: "/static/logo.png",
      extra: "打卡",
      desp: "这是景点的描述。这是景点的描述。这是景点的描述。这是景点的描述。"
    });
    const openPoints = common_vendor.ref(0);
    const check_in = common_vendor.ref(0);
    common_vendor.onMounted(async () => {
      await fetchUserData();
    });
    const scanQRCode = async () => {
      try {
        const res = await common_vendor.index.scanCode();
        console.log("扫描二维码结果:", res);
        const data = JSON.parse(res.result);
        if (data.latitude && data.longitude) {
          const scannedLatitude = data.latitude;
          const scannedLongitude = data.longitude;
          const db = common_vendor.Vs.database();
          const collection = db.collection("address");
          const dbRes = await collection.get();
          const locations = dbRes.result.data;
          let matchFound = false;
          for (let location of locations) {
            if (location.latitude === scannedLatitude && location.longitude === scannedLongitude) {
              matchFound = true;
              break;
            }
          }
          if (matchFound) {
            console.log("打卡成功");
            await addPoints();
          } else {
            console.log("地址匹配失败");
            common_vendor.index.showToast({
              title: "打卡失败",
              icon: "none"
            });
          }
        } else {
          throw new Error("Invalid location data");
        }
      } catch (e) {
        console.error("解析地址失败", e);
        common_vendor.index.showToast({
          title: "解析地址失败",
          icon: "none"
        });
      }
    };
    const addPoints = async () => {
      const userId = "1";
      const pointsToAdd = 10;
      const checkinToAdd = 1;
      try {
        const res = await common_vendor.Vs.callFunction({
          name: "updatePoints",
          data: {
            userId,
            pointsToAdd,
            checkinToAdd
          }
        });
        if (res.result.success && res.result.updated === 1) {
          openPoints.value += pointsToAdd;
          check_in.value += checkinToAdd;
          common_vendor.index.showToast({
            title: `积分+${pointsToAdd}`,
            icon: "success"
          });
        } else {
          throw new Error(res.result.error || "更新积分失败");
        }
      } catch (e) {
        console.error("调用云函数更新积分失败", e);
        common_vendor.index.showToast({
          title: "更新积分失败",
          icon: "none"
        });
      }
    };
    const fetchUserData = async () => {
      try {
        const db = common_vendor.Vs.database();
        const collection = db.collection("user_information");
        const res = await collection.where({
          userId: "1"
        }).get();
        if (res.result.data && res.result.data.length > 0) {
          const userData = res.result.data[0];
          openPoints.value = userData.openPoints;
          check_in.value = userData.check_in;
        } else {
          console.error("用户数据获取失败");
        }
      } catch (error) {
        console.error("获取用户数据时出错：", error);
      }
    };
    const currentTabIndex = common_vendor.ref(0);
    const currentTabIndex_rank = common_vendor.ref(0);
    const tabs = common_vendor.ref(["榜单", "商店"]);
    const tabs_rank = common_vendor.ref(["日榜", "周榜", "月榜"]);
    const btns = common_vendor.ref([
      {
        title: "重新获取位置",
        icon: "/static/home/relocation.png",
        path: getLocation
        // 同样不要调用函数，只需指定函数名
      },
      {
        title: "扫描二维码",
        icon: "/static/home/scan.png",
        path: scanQRCode
        // 这里不应该调用函数，只需要指定函数名即可
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
        h: markers.value,
        i: polyline.value,
        j: common_vendor.o(regionchange),
        k: common_vendor.o(clickMap),
        l: currentTabIndex.value === 0
      }, currentTabIndex.value === 0 ? common_vendor.e({
        m: currentTabIndex_rank.value === 0
      }, currentTabIndex_rank.value === 0 ? {
        n: common_vendor.p({
          arr: common_vendor.unref(data_pagesHome.group1)
        })
      } : {}, {
        o: currentTabIndex_rank.value === 1
      }, currentTabIndex_rank.value === 1 ? {
        p: common_vendor.p({
          arr: common_vendor.unref(data_pagesHome.group2)
        })
      } : {}, {
        q: currentTabIndex_rank.value === 2
      }, currentTabIndex_rank.value === 2 ? {
        r: common_vendor.p({
          arr: common_vendor.unref(data_pagesHome.group3)
        })
      } : {}, {
        s: common_vendor.o(($event) => currentTabIndex_rank.value = $event),
        t: common_vendor.p({
          tabs: tabs_rank.value,
          ["active-bg-color"]: "#FFA726",
          ["inactive-bg-color"]: "#FFD392",
          modelValue: currentTabIndex_rank.value
        })
      }) : {}, {
        v: currentTabIndex.value === 1
      }, currentTabIndex.value === 1 ? {
        w: common_vendor.p({
          arr: common_vendor.unref(data_pagesHome.fruit)
        }),
        x: common_vendor.p({
          arr: common_vendor.unref(data_pagesHome.fruit)
        })
      } : {}, {
        y: common_vendor.o(($event) => currentTabIndex.value = $event),
        z: common_vendor.p({
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
