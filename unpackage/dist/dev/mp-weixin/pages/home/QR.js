"use strict";
const common_vendor = require("../../common/vendor.js");
const openPoints = common_vendor.ref(0);
const check_in = common_vendor.ref(0);
const fetchUserData = async () => {
  try {
    const db = common_vendor.Ws.database();
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
const scanQRCode = async () => {
  try {
    const res = await common_vendor.index.scanCode();
    console.log("扫描二维码结果:", res);
    const data = JSON.parse(res.result);
    if (data.latitude && data.longitude) {
      const scannedLatitude = data.latitude;
      const scannedLongitude = data.longitude;
      const db = common_vendor.Ws.database();
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
    const res = await common_vendor.Ws.callFunction({
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
exports.fetchUserData = fetchUserData;
exports.scanQRCode = scanQRCode;
