"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/home/home.js";
  "./pages/forum/forum.js";
  "./pages/user/user.js";
  "./pages_user/about/about.js";
  "./pages_user/contact/contact.js";
  "./pages_user/edit/edit.js";
  "./pages_user/clean/clean.js";
  "./pages_user/timeline/timeline.js";
  "./pages_user/feedback/feedback.js";
  "./pages_user/checkin/checkin.js";
  "./pages_home/store/store.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Work/小程序开发工具/G/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
