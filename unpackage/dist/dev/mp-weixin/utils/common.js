"use strict";
const common_vendor = require("../common/vendor.js");
const naviTo = (path) => {
  if (!path) {
    return;
  }
  if (typeof path == "function") {
    path();
    return;
  }
  common_vendor.index.navigateTo({
    url: path,
    fail() {
      common_vendor.index.showToast({
        title: "页面不存在，或网络错误",
        icon: "closeempty"
      });
    }
  });
};
exports.naviTo = naviTo;
