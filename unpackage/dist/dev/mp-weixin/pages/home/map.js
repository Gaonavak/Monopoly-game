"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../data/pages-home.js");
const longitude = common_vendor.ref(117.062956);
const latitude = common_vendor.ref(23.434194);
const userLatitude = common_vendor.ref(0);
const userLongitude = common_vendor.ref(0);
const addressInfoRecomd = common_vendor.ref("");
const currentMarkerId = common_vendor.ref(null);
const markers = common_vendor.ref([
  {
    id: 1,
    latitude: 23.4299,
    longitude: 116.9472,
    thumb: "https://hellouniapp.dcloud.net.cn/static/location.png",
    description: "aaa",
    extra: "不知道",
    title: "长山尾灯塔"
  },
  {
    id: 2,
    latitude: 23.416,
    longitude: 116.9732,
    thumb: "https://hellouniapp.dcloud.net.cn/static/location.png",
    description: "不知道",
    extra: "不知道",
    title: "田宅地质公园"
  }
]);
const showPopup = common_vendor.ref(false);
const showCard = common_vendor.ref(false);
const cardData = common_vendor.ref({});
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
  markers.value = [{
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
  }];
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
    latitude: latitude2,
    longitude: longitude2,
    iconPath: "https://hellouniapp.dcloud.net.cn/static/location.png",
    width: 20,
    height: 20
  };
  markers.value.push(newMarker);
  currentMarkerId.value = newMarker.id;
};
const onMarkerTap = (event) => {
  const {
    markerId
  } = event.detail;
  const marker = markers.value.find((m) => m.id === markerId);
  if (marker) {
    showCard.value = true;
    cardData.value = {
      title: marker.title,
      thumb: marker.thumb,
      extra: marker.extra,
      desp: marker.description
    };
  }
};
const closeCard = () => {
  showCard.value = false;
};
exports.cardData = cardData;
exports.clickMap = clickMap;
exports.closeCard = closeCard;
exports.getLocation = getLocation;
exports.isGetLocation = isGetLocation;
exports.latitude = latitude;
exports.longitude = longitude;
exports.markers = markers;
exports.onMarkerTap = onMarkerTap;
exports.regionchange = regionchange;
exports.showCard = showCard;
exports.showPopup = showPopup;
