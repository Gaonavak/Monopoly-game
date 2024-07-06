"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const _sfc_main = {
  __name: "edit",
  setup(__props) {
    const func_avatar = common_vendor.ref({
      "title": "头像",
      "imagePath": "/static/logo.png"
    });
    const userNameCard = common_vendor.ref({
      "title": "名字",
      "user": "",
      "editable": false
    });
    common_vendor.onLoad((options) => {
      userNameCard.value.user = options.user;
    });
    common_vendor.onUnload(() => {
      common_vendor.index.$emit("userName", userNameCard.value.user);
    });
    function editName(item) {
      if (item) {
        item.editable = true;
      }
    }
    function confirmEdit(item) {
      if (item) {
        item.editable = false;
        console.log("名字已更改为：", item.user);
      }
    }
    function onblur(item) {
      if (item) {
        item.editable = false;
      }
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(func_avatar.value.title),
        b: func_avatar.value.imagePath,
        c: common_assets._imports_0$1,
        d: common_vendor.t(userNameCard.value.title),
        e: userNameCard.value.editable
      }, userNameCard.value.editable ? {
        f: common_vendor.o(($event) => confirmEdit(_ctx.item)),
        g: common_vendor.o(($event) => onblur(userNameCard.value)),
        h: userNameCard.value.user,
        i: common_vendor.o(($event) => userNameCard.value.user = $event.detail.value)
      } : {
        j: common_vendor.t(userNameCard.value.user),
        k: common_vendor.o(($event) => editName(userNameCard.value))
      }, {
        l: common_assets._imports_0$1
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-deea46ec"]]);
wx.createPage(MiniProgramPage);
