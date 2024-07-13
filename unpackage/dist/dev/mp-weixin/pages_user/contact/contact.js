"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "contact",
  setup(__props) {
    const infos = common_vendor.ref([
      {
        "title": "联系人",
        "text": "张三"
      },
      {
        "title": "电话",
        "text": "18922226666"
      },
      {
        "title": "邮箱",
        "text": "zhangsan@example.com"
      }
    ]);
    const copyToClipboard = (text) => {
      if (common_vendor.index.setClipboardData) {
        common_vendor.index.setClipboardData({
          data: text,
          success: function() {
            common_vendor.index.showToast({
              title: "已复制",
              icon: "success"
            });
          }
        });
      } else {
        console.log("复制失败，剪贴板可能被禁止访问了~");
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(infos.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.text),
            c: common_vendor.o(($event) => copyToClipboard(item.text), item.text),
            d: item.text
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-161deec3"], ["__file", "D:/Work/小程序开发工具/G/pages_user/contact/contact.vue"]]);
wx.createPage(MiniProgramPage);
