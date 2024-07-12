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
  "./pages_user/shopping/shopping.js";
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
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
