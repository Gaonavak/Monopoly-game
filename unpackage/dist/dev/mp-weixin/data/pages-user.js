"use strict";
const common_vendor = require("../common/vendor.js");
const firstSowCardData = common_vendor.ref([
  {
    title: "打卡点",
    icon: "/static/user/flag.png",
    path: "/pages_user/checkin/checkin"
  },
  {
    title: "足迹",
    icon: "/static/user/map.png",
    path: "/pages_user/timeline/timeline"
  },
  {
    title: "收藏",
    icon: "/static/user/star.png",
    path: "/pages_user/favorite/favorite"
  }
]);
const secondRowCardData = common_vendor.ref([
  {
    title: "我的积分",
    icon: "/static/user/reward.png",
    path: "/pages_user/about/about"
  },
  {
    title: "在途中",
    icon: "/static/user/on-road.png",
    path: "/pages_user/shopping/shopping"
  },
  {
    title: "已完成",
    icon: "/static/user/check.png",
    path: "/pages_user/shopping/shopping"
  },
  {
    title: "售后",
    icon: "/static/user/after-sale.png",
    path: "/pages_user/about/about"
  }
]);
const colCardData = common_vendor.ref([
  {
    title: "用户反馈",
    leftIcon: "/static/user/phone.png",
    rightIcon: "/static/user/arrowright.png",
    path: "/pages_user/feedback/feedback"
  },
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
const clean = () => {
  common_vendor.index.showToast({
    title: "清理完成",
    icon: "none"
  });
};
const cleanCacheCard = common_vendor.ref([{
  title: "清理缓存",
  leftIcon: "/static/user/trash.png",
  rightIcon: "/static/user/arrowright.png",
  path: clean
}]);
exports.cleanCacheCard = cleanCacheCard;
exports.colCardData = colCardData;
exports.firstSowCardData = firstSowCardData;
exports.secondRowCardData = secondRowCardData;
